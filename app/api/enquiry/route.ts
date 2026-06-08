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
    const { name, email, departure, destination, adults, children, message } =
      body as Record<string, string>

    if (!name || !email || !departure || !destination) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const html = buildEmail({
      badge: "Charter Enquiry",
      headline: `New enquiry from ${esc(name)}`,
      intro: `A charter flight enquiry has been submitted via the website. Reply directly to get back to the client.`,
      rows: [
        ["Full Name",    esc(name)],
        ["Email",        esc(email)],
        ["Departure",    esc(departure)],
        ["Destination",  esc(destination)],
        ["Adults",       esc(adults || "—")],
        ["Children",     esc(children || "—")],
        ["Message",      esc(message || "—")],
      ],
      replyEmail: email,
      replyName:  esc(name),
    })

    const confirmationHtml = buildConfirmationEmail({
      name: esc(name),
      badge: "Enquiry Received",
      headline: `Thanks, ${esc(name.split(" ")[0])}.`,
      body: `We&rsquo;ve received your charter enquiry and our team will be in touch within 24 hours.`,
      summaryRows: [
        ["Departure",   esc(departure)],
        ["Destination", esc(destination)],
        ["Adults",      esc(adults || "—")],
        ["Children",    esc(children || "—")],
        ["Message",     esc(message || "—")],
      ],
    })

    await Promise.all([
      resend.emails.send({
        from:    process.env.RESEND_FROM_EMAIL ?? "Kasas Limited <noreply@kasaskenya.com>",
        to:      ["david.oginga@kasaskenya.com", "natasha.frost@kasaskenya.com"],
        replyTo: email,
        subject: `Charter Enquiry — ${esc(name)}`,
        html,
      }),
      resend.emails.send({
        from:    process.env.RESEND_FROM_EMAIL ?? "Kasas Limited <noreply@kasaskenya.com>",
        to:      email,
        subject: `We've received your enquiry — Kasas Limited`,
        html:    confirmationHtml,
      }),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[enquiry] send error:", err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
