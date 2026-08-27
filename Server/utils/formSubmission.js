import { escapeHtml } from "./htmlEscape.js";
import { validateFields } from "./validation.js";
import { verifyTurnstileToken } from "../services/turnstileService.js";
import { sendEnquiryEmail } from "../services/emailService.js";

function fail(res, message, status = 400) {
  return res.status(status).json({ success: false, message });
}

export async function handleFormSubmission({ req, res, config }) {
  const data = req.body || {};

  if (!config || !Array.isArray(config.fields)) {
    return fail(res, "Invalid form configuration.", 500);
  }

  const errors = validateFields(config.fields, data);
  if (errors.length > 0) {
    return fail(res, errors.join(" "));
  }

  const token = typeof data.turnstileToken === "string" ? data.turnstileToken : "";
  if (!token) {
    return fail(res, "Security verification is missing. Please complete the challenge.");
  }

  let turnstileValid = false;
  try {
    turnstileValid = await verifyTurnstileToken(token);
  } catch {
    return fail(res, "Security verification could not be completed. Please try again.");
  }

  if (!turnstileValid) {
    return fail(res, "Security verification failed. Please try again.");
  }

  const values = {};
  for (const field of config.fields) {
    const raw = typeof data[field.name] === "string" ? data[field.name] : "";
    values[field.name] = raw.trim();
  }

  const sendTo = process.env.ENQUIRY_TO_EMAIL || config.toEmail;
  if (!sendTo) {
    return fail(res, "Enquiry delivery is not configured.", 500);
  }

  const from = process.env.FROM_EMAIL || config.fromEmail;
  const subject = typeof config.subject === "function" ? config.subject(values) : config.subject;
  const html = config.renderHtml(values, escapeHtml);

  try {
    await sendEnquiryEmail({
      from,
      to: sendTo,
      subject,
      html,
      text: config.renderText(values),
    });
  } catch {
    return fail(res, "Your enquiry could not be sent right now. Please try again later.", 500);
  }

  return res.status(200).json({ success: true });
}
