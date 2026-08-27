const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

async function parseJson(res) {
  return res.json();
}

export async function submitEnquiry(payload) {
  const res = await fetch(`${API_URL}/api/enquiry`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const body = await parseJson(res).catch(() => ({}));

  if (!res.ok) {
    throw new Error(body.message || "Your enquiry could not be sent. Please try again later.");
  }

  if (body.success !== true) {
    throw new Error(body.message || "Your enquiry could not be sent. Please try again later.");
  }

  return body;
}
