const DEFAULT_FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.googleMapsUri"
].join(",");

const ALLOWED_ORIGINS = new Set([
  "https://wani3000.github.io",
  "http://localhost",
  "http://127.0.0.1"
]);

function setCors(req, res) {
  const origin = req.headers.origin || "";
  const allowedOrigin = Array.from(ALLOWED_ORIGINS).find((item) => origin.startsWith(item));
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin || "https://wani3000.github.io");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");
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
  const query = String(req.query.query || "").trim();

  if (!apiKey) {
    res.status(500).json({ error: "Missing GOOGLE_PLACES_API_KEY" });
    return;
  }

  if (!query) {
    res.status(400).json({ error: "Missing query" });
    return;
  }

  try {
    const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": DEFAULT_FIELD_MASK
      },
      body: JSON.stringify({
        textQuery: query,
        maxResultCount: 5,
        languageCode: "en"
      })
    });

    const body = await response.json();

    if (!response.ok) {
      res.status(response.status).json({
        error: "Google Places search failed",
        status: response.status,
        details: body
      });
      return;
    }

    res.status(200).json({
      places: (body.places || []).map((place) => ({
        id: place.id || "",
        name: place.displayName?.text || "",
        address: place.formattedAddress || "",
        googleMapsUri: place.googleMapsUri || ""
      }))
    });
  } catch (error) {
    res.status(502).json({
      error: "Google Places search unavailable",
      message: error.message
    });
  }
};
