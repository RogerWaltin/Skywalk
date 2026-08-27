export async function verifyTurnstileToken(token) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error("TURNSTILE_SECRET_KEY is not configured.");
  }

  const form = new URLSearchParams();
  form.append("secret", secret);
  form.append("response", token);

  let res;
  try {
    res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });
  } catch {
    throw new Error("Unable to reach Cloudflare Turnstile.");
  }

  if (!res.ok) {
    throw new Error("Cloudflare Turnstile verification failed.");
  }

  const result = await res.json();
  return result.success === true;
}
