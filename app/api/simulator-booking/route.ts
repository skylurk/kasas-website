import { Resend } from "resend"
import { NextResponse } from "next/server"
import { buildEmail, buildConfirmationEmail } from "../_email"

const resend = new Resend(process.env.RESEND_API_KEY)

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, licenceRating, trainingType, sessionHours, preferredDate, notes } =
      body as Record<string, string>

    if (!name || !email || !preferredDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const html = buildEmail({
      badge: "Simulator Booking",
      headline: `Booking request from ${esc(name)}`,
      intro: `A Dornier 228 simulator booking request has been submitted via the website. Reply directly to confirm the slot.`,
      rows: [
        ["Full Name",        esc(name)],
        ["Email",            esc(email)],
        ["Phone",            esc(phone || "—")],
        ["Licence / Rating", esc(licenceRating || "—")],
        ["Training Type",    esc(trainingType || "—")],
        ["Simulator Hours",  esc(sessionHours || "—")],
        ["Preferred Date",   esc(preferredDate)],
        ["Notes",            esc(notes || "—")],
      ],
      replyEmail: email,
      replyName:  esc(name),
    })

    const confirmationHtml = buildConfirmationEmail({
      name: esc(name),
      logo: false,
      badge: "Booking Request Received",
      headline: `Thanks, ${esc(name.split(" ")[0])}.`,
      body: `We&rsquo;ve received your Dornier 228 simulator booking request. Our training team will confirm your slot within 24 hours.`,
      summaryRows: [
        ["Training Type",    esc(trainingType || "—")],
        ["Simulator Hours",  esc(sessionHours || "—")],
        ["Preferred Date",   esc(preferredDate)],
        ["Licence / Rating", esc(licenceRating || "—")],
        ["Notes",            esc(notes || "—")],
      ],
    })

    await Promise.all([
      resend.emails.send({
        from:    process.env.RESEND_FROM_EMAIL ?? "Kasas Limited <noreply@kasaskenya.com>",
        to:      ["simulators@think.co.ke", "david@acuvera.com", "jenrick.kibet@kasaskenya.com"],
        replyTo: email,
        subject: `Simulator Booking — ${esc(name)}`,
        html,
      }),
      resend.emails.send({
        from:    process.env.RESEND_FROM_EMAIL ?? "Kasas Limited <noreply@kasaskenya.com>",
        to:      email,
        subject: `Simulator booking request received — Kasas Limited`,
        html:    confirmationHtml,
      }),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[simulator-booking] send error:", err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
