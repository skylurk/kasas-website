const LOGO_URL =
  "https://www.kasaskenya.com/images/logos/kasas-limited-air-charters-original-logo.png"

function row(label: string, value: string, last = false) {
  return `
    <tr>
      <td style="padding: 12px 0; ${last ? "" : "border-bottom: 1px solid #f0f0f0;"}
                 width: 170px; vertical-align: top;
                 font-size: 13px; color: #888; font-weight: 500;">
        ${label}
      </td>
      <td style="padding: 12px 0; ${last ? "" : "border-bottom: 1px solid #f0f0f0;"}
                 vertical-align: top;
                 font-size: 14px; color: #1a1a1a; white-space: pre-wrap; line-height: 1.5;">
        ${value}
      </td>
    </tr>`
}

export function buildConfirmationEmail({
  name,
  badge,
  headline,
  body,
  summaryRows,
  logo = true,
}: {
  name: string
  badge: string
  headline: string
  body: string
  summaryRows: [string, string][]
  logo?: boolean
}) {
  const tableRows = summaryRows
    .map(([label, value], i) => row(label, value, i === summaryRows.length - 1))
    .join("")

  const headerPadding  = logo ? "32px" : "20px"
  const headerContent  = logo
    ? `<img src="${LOGO_URL}" alt="Kasas Limited Air Charters" width="150" style="display:block;margin:0 auto;max-width:150px;" />`
    : `<span style="color:#fff;font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;">Kasas Limited Air Charters</span>`

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f2f2f3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f2f3;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background:#1a1a1a;padding:${headerPadding} 40px;border-radius:12px 12px 0 0;text-align:center;">
              ${headerContent}
            </td>
          </tr>

          <!-- Badge bar -->
          <tr>
            <td style="background:#595B5C;padding:13px 40px;">
              <span style="color:#fff;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">
                ${badge}
              </span>
            </td>
          </tr>

          <!-- Card body -->
          <tr>
            <td style="background:#fff;padding:40px;border-radius:0 0 12px 12px;">

              <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#1a1a1a;line-height:1.3;">
                ${headline}
              </h2>
              <p style="margin:0 0 32px;font-size:14px;color:#555;line-height:1.7;">
                ${body}
              </p>

              <!-- Summary -->
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#aaa;
                        letter-spacing:0.08em;text-transform:uppercase;">
                Your request
              </p>
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="border-top:1px solid #f0f0f0;">
                ${tableRows}
              </table>

              <!-- Urgent contact -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td style="padding:20px;background:#f7f7f8;border-radius:10px;">
                    <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:#1a1a1a;">
                      Need a faster response?
                    </p>
                    <p style="margin:0;font-size:13px;color:#666;line-height:1.6;">
                      Call our sales team directly on
                      <a href="tel:+254741729926" style="color:#1a1a1a;font-weight:600;text-decoration:none;">
                        +254 741 729 926
                      </a>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:28px 0 8px;text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;color:#aaa;font-weight:600;
                        letter-spacing:0.05em;text-transform:uppercase;">
                Kasas Limited Air Charters
              </p>
              <p style="margin:0;font-size:12px;color:#ccc;">
                <a href="https://www.kasaskenya.com"
                   style="color:#bbb;text-decoration:underline;">kasaskenya.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function buildEmail({
  badge,
  headline,
  intro,
  rows,
  replyEmail,
  replyName,
}: {
  badge: string
  headline: string
  intro: string
  rows: [string, string][]
  replyEmail: string
  replyName: string
}) {
  const tableRows = rows
    .map(([label, value], i) => row(label, value, i === rows.length - 1))
    .join("")

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f2f2f3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f2f3;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Logo header -->
          <tr>
            <td style="background:#1a1a1a;padding:32px 40px;border-radius:12px 12px 0 0;text-align:center;">
              <img src="${LOGO_URL}" alt="Kasas Limited Air Charters" width="150"
                   style="display:block;margin:0 auto;max-width:150px;" />
            </td>
          </tr>

          <!-- Badge bar -->
          <tr>
            <td style="background:#595B5C;padding:13px 40px;">
              <span style="color:#fff;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">
                ${badge}
              </span>
            </td>
          </tr>

          <!-- Card body -->
          <tr>
            <td style="background:#fff;padding:40px;border-radius:0 0 12px 12px;">

              <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#1a1a1a;line-height:1.3;">
                ${headline}
              </h2>
              <p style="margin:0 0 32px;font-size:14px;color:#666;line-height:1.6;">
                ${intro}
              </p>

              <table width="100%" cellpadding="0" cellspacing="0"
                     style="border-top:1px solid #f0f0f0;">
                ${tableRows}
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td style="padding-top:28px;border-top:2px solid #f0f0f0;">
                    <a href="mailto:${replyEmail}"
                       style="display:inline-block;padding:13px 28px;
                              background:#1a1a1a;color:#fff;
                              text-decoration:none;border-radius:999px;
                              font-size:13px;font-weight:600;letter-spacing:0.01em;">
                      Reply to ${replyName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:28px 0 8px;text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;color:#aaa;font-weight:600;
                        letter-spacing:0.05em;text-transform:uppercase;">
                Kasas Limited Air Charters
              </p>
              <p style="margin:0;font-size:12px;color:#ccc;">
                Submitted via
                <a href="https://www.kasaskenya.com"
                   style="color:#bbb;text-decoration:underline;">kasaskenya.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
