import { Resend } from "resend";

let client = null;

function getClient() {
  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}

export async function sendEnquiryEmail({ from, to, subject, html, text }) {
  const resend = getClient();
  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
  });

  if (error) {
    throw error;
  }

  return data;
}
