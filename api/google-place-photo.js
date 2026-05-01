const ALLOWED_ORIGINS = new Set([
  "https://wani3000.github.io",
  "https://honeymoon-delta.vercel.app",
  "http://localhost",
  "http://127.0.0.1",
  "null"
]);

function setCors(req, res) {
  const origin = req.headers.origin || "";
  const allowedOrigin = Array.from(ALLOWED_ORIGINS).find((item) => origin.startsWith(item));
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin || "https://wani3000.github.io");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");
}

function normalizePhotoName(value) {
  return String(value || "").trim().replace(/^\/+/, "");
}

module.exports = async function handler(req, res) {
  setCors(req, res);
  res.setHeader("Cache-Control", "private, no-store, max-age=0");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const photoName = normalizePhotoName(req.query.name);
  const maxWidthPx = Math.min(Math.max(Number(req.query.maxWidthPx || 720), 200), 1200);

  if (!apiKey) {
    res.status(500).json({ error: "Missing GOOGLE_PLACES_API_KEY" });
    return;
  }

  if (!photoName || !/^places\/[^/]+\/photos\/[^/]+$/.test(photoName)) {
    res.status(400).json({ error: "Invalid photo name" });
    return;
  }

  try {
    const params = new URLSearchParams({
      maxWidthPx: String(maxWidthPx),
      skipHttpRedirect: "true"
    });
    const response = await fetch(`https://places.googleapis.com/v1/${photoName}/media?${params.toString()}`, {
      headers: {
        "X-Goog-Api-Key": apiKey
      }
    });
    const body = await response.json();

    if (!response.ok || !body.photoUri) {
      res.status(response.status || 502).json({
        error: "Google Place Photo request failed",
        status: response.status,
        details: body
      });
      return;
    }

    res.writeHead(302, { Location: body.photoUri });
    res.end();
  } catch (error) {
    res.status(502).json({
      error: "Google Place Photo request unavailable",
      message: error.message
    });
  }
};
