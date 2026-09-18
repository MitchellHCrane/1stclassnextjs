import { getStore } from "@netlify/blobs";

export async function POST(request) {
  const data = await request.json().catch(() => null);

  if (!data) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, phone, email, consent, "bot-field": botField } = data;

  // Honeypot: real users never fill this in.
  if (botField) {
    return Response.json({ success: true });
  }

  if (!name || !phone || !consent) {
    return Response.json(
      { error: "Name, phone, and consent are required." },
      { status: 400 }
    );
  }

  const submittedAt = new Date().toISOString();
  const store = getStore("sms-consent");
  const key = `${submittedAt}-${crypto.randomUUID()}`;

  await store.setJSON(key, {
    name,
    phone,
    email: email || null,
    consent: true,
    submittedAt,
  });

  return Response.json({ success: true });
}
