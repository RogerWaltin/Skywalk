import { handleFormSubmission } from "../utils/formSubmission.js";

const FIELD_CONFIG = [
  { name: "name", label: "Name", required: true, max: 100 },
  { name: "phone", label: "Phone", required: true, max: 30 },
  { name: "email", label: "Email address", required: true, max: 254, type: "email" },
  { name: "service", label: "Service", required: true, max: 100 },
  { name: "message", label: "Message", required: false, max: 5000 },
];

function renderText(values) {
  return [
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Service: ${values.service}`,
    `Message:`,
    values.message,
  ].join("\n\n");
}

function renderHtml(values, escapeHtml) {
  const rows = [
    ["Full Name", values.name],
    ["Phone", values.phone],
    ["Email", values.email],
    ["Service Required", values.service],
  ]
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:10px 16px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#8b8b9e;vertical-align:top;white-space:nowrap;">${label}</td>
          <td style="padding:10px 16px;font-size:14px;color:#1f2333;vertical-align:top;word-break:break-word;">${escapeHtml(
            value,
          )}</td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Skywalk Enquiry</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f5f9;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f9;padding:24px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #eaebf2;">
            <tr>
              <td style="background-color:#102f56;padding:24px 28px;">
                <h1 style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">New Enquiry</h1>
                <p style="margin:6px 0 0;font-size:14px;color:#bcd0e8;">Skywalk Tours &amp; Travels</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0 4px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  ${rows}
                  <tr>
                    <td style="padding:14px 16px 6px;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#8b8b9e;vertical-align:top;white-space:nowrap;">Message</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding:4px 16px 20px;font-size:14px;line-height:1.6;color:#1f2333;white-space:pre-wrap;">${escapeHtml(
                      values.message,
                    )}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="border-top:1px solid #eaebf2;padding:16px 28px;font-size:12px;color:#8b8b9e;">
                Sent from the Skywalk Tours &amp; Travels website enquiry form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function enquiryController(req, res) {
  return handleFormSubmission({
    req,
    res,
    config: {
      fields: FIELD_CONFIG,
      toEmail: "harriswaltinjoy@gmail.com",
      fromEmail: "Skywalk Enquiries <onboarding@resend.dev>",
      subject: (values) => `New Enquiry from ${values.name}`,
      renderText,
      renderHtml,
    },
  });
}
