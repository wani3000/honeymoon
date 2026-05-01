const DEFAULT_FIELD_MASK = [
  "id",
  "displayName",
  "formattedAddress",
  "googleMapsUri",
  "rating",
  "userRatingCount",
  "regularOpeningHours"
].join(",");

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

function normalizePlaceId(value) {
  return String(value || "").trim().replace(/^places\//, "");
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
  const placeId = normalizePlaceId(req.query.placeId);

  if (!apiKey) {
    res.status(500).json({ error: "Missing GOOGLE_PLACES_API_KEY" });
    return;
  }

  if (!placeId) {
    res.status(400).json({ error: "Missing placeId" });
    return;
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": DEFAULT_FIELD_MASK
      }
    });

    const body = await response.json();

    if (!response.ok) {
      res.status(response.status).json({
        error: "Google Places request failed",
        status: response.status,
        details: body
      });
      return;
    }

    res.status(200).json({
      id: body.id || placeId,
      name: body.displayName?.text || "",
      address: body.formattedAddress || "",
      googleMapsUri: body.googleMapsUri || "",
      rating: body.rating || null,
      userRatingCount: body.userRatingCount || null,
      regularOpeningHours: body.regularOpeningHours || null
    });
  } catch (error) {
    res.status(502).json({
      error: "Google Places request unavailable",
      message: error.message
    });
  }
};
