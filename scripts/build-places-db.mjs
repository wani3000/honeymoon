import fs from "node:fs/promises";
import path from "node:path";

const cwd = process.cwd();
const inputPath = path.resolve(cwd, process.argv[2] || "data/places.seed.json");
const outputPath = path.resolve(cwd, process.argv[3] || "data/places.resolved.json");
const apiBase = process.env.TRIP_PLACES_API_BASE || "";
const apiKey = process.env.GOOGLE_PLACES_API_KEY || "";

const SEARCH_FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.googleMapsUri"
].join(",");

const DETAILS_FIELD_MASK = [
  "id",
  "displayName",
  "formattedAddress",
  "googleMapsUri",
  "rating",
  "userRatingCount"
].join(",");

function normalizePlaceId(value) {
  return String(value || "").trim().replace(/^places\//, "");
}

function assertConfig() {
  if (!apiBase && !apiKey) {
    throw new Error(
      "Missing configuration. Set TRIP_PLACES_API_BASE or GOOGLE_PLACES_API_KEY before running this script."
    );
  }
}

async function loadSeed() {
  const raw = await fs.readFile(inputPath, "utf8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed.places)) {
    throw new Error(`Invalid seed file: ${inputPath}`);
  }

  return parsed;
}

async function searchViaProxy(query) {
  const url = new URL("/api/google-place-search", apiBase);
  url.searchParams.set("query", query);

  const response = await fetch(url);
  const body = await response.json();

  if (!response.ok) {
    throw new Error(`Search failed for "${query}": ${body.error || response.status}`);
  }

  return body.places || [];
}

async function searchViaGoogle(query) {
  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": SEARCH_FIELD_MASK
    },
    body: JSON.stringify({
      textQuery: query,
      maxResultCount: 5,
      languageCode: "en"
    })
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(`Search failed for "${query}": ${body.error?.message || response.status}`);
  }

  return (body.places || []).map((place) => ({
    id: normalizePlaceId(place.id),
    name: place.displayName?.text || "",
    address: place.formattedAddress || "",
    googleMapsUri: place.googleMapsUri || ""
  }));
}

async function fetchDetailsViaProxy(placeId) {
  const url = new URL("/api/google-place-details", apiBase);
  url.searchParams.set("placeId", placeId);

  const response = await fetch(url);
  const body = await response.json();

  if (!response.ok) {
    throw new Error(`Details failed for "${placeId}": ${body.error || response.status}`);
  }

  return body;
}

async function fetchDetailsViaGoogle(placeId) {
  const normalized = normalizePlaceId(placeId);
  const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(normalized)}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": DETAILS_FIELD_MASK
    }
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(`Details failed for "${placeId}": ${body.error?.message || response.status}`);
  }

  return {
    id: normalizePlaceId(body.id || normalized),
    name: body.displayName?.text || "",
    address: body.formattedAddress || "",
    googleMapsUri: body.googleMapsUri || "",
    rating: body.rating || null,
    userRatingCount: body.userRatingCount || null
  };
}

async function searchPlaces(query) {
  if (apiBase) {
    return searchViaProxy(query);
  }
  return searchViaGoogle(query);
}

async function fetchPlaceDetails(placeId) {
  if (apiBase) {
    return fetchDetailsViaProxy(placeId);
  }
  return fetchDetailsViaGoogle(placeId);
}

function chooseBestCandidate(seedPlace, candidates) {
  if (!candidates.length) {
    return null;
  }

  const normalizedName = seedPlace.name.toLowerCase();
  const strictMatch = candidates.find((candidate) => candidate.name.toLowerCase() === normalizedName);
  if (strictMatch) {
    return strictMatch;
  }

  const looseMatch = candidates.find((candidate) => candidate.name.toLowerCase().includes(normalizedName));
  return looseMatch || candidates[0];
}

async function resolvePlace(seedPlace) {
  const working = { ...seedPlace };

  if (!working.placeId) {
    const candidates = await searchPlaces(working.query || working.name);
    const best = chooseBestCandidate(working, candidates);

    if (!best) {
      return {
        ...working,
        resolutionStatus: "missing",
        resolutionError: "No Google Places candidate found"
      };
    }

    working.placeId = normalizePlaceId(best.id);
    working.googleMapsUri = best.googleMapsUri || working.googleMapsUri || "";
    working.formattedAddress = best.address || working.formattedAddress || "";
    working.googleName = best.name || working.googleName || "";
  }

  const details = await fetchPlaceDetails(working.placeId);

  return {
    ...working,
    placeId: normalizePlaceId(details.id || working.placeId),
    googleName: details.name || working.googleName || working.name,
    formattedAddress: details.address || working.formattedAddress || "",
    googleMapsUri: details.googleMapsUri || working.googleMapsUri || "",
    rating: details.rating ?? null,
    userRatingCount: details.userRatingCount ?? null,
    resolutionStatus: "resolved",
    resolvedAt: new Date().toISOString()
  };
}

async function main() {
  assertConfig();

  const seed = await loadSeed();
  const resolvedPlaces = [];

  for (const place of seed.places) {
    try {
      const resolved = await resolvePlace(place);
      resolvedPlaces.push(resolved);
      console.log(`resolved: ${resolved.slug} -> ${resolved.placeId || "missing"}`);
    } catch (error) {
      resolvedPlaces.push({
        ...place,
        resolutionStatus: "error",
        resolutionError: error.message
      });
      console.error(`failed: ${place.slug} -> ${error.message}`);
    }
  }

  const output = {
    version: seed.version || 1,
    updatedAt: new Date().toISOString(),
    source: apiBase ? "proxy" : "google-places-api",
    places: resolvedPlaces
  };

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");

  console.log(`wrote ${resolvedPlaces.length} places -> ${outputPath}`);
}

await main();
