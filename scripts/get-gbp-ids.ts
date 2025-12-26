// scripts/get-gbp-ids.ts
// Run: npx tsx scripts/get-gbp-ids.ts
//
// Requires in .env.local (or your shell):
// GOOGLE_CLIENT_ID
// GOOGLE_CLIENT_SECRET
// GOOGLE_REDIRECT_URI
// GOOGLE_REFRESH_TOKEN
//
// Outputs:
// GBP_ACCOUNT_NAME=accounts/...
// GBP_LOCATION_NAME=locations/...

import "dotenv/config";
import { OAuth2Client } from "google-auth-library";

type AccountsResponse = {
  accounts?: Array<{ name: string; accountName?: string }>;
};

type LocationsResponse = {
  locations?: Array<{
    name: string;
    title?: string;
    storefrontAddress?: {
      addressLines?: string[];
      locality?: string;
      postalCode?: string;
      regionCode?: string;
    };
  }>;
};

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchJsonWithRetry<T>(
  url: string,
  accessToken: string,
  attempt = 0
): Promise<T> {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const text = await res.text();

  if ([429, 500, 503].includes(res.status)) {
    if (attempt >= 6) {
      throw new Error(`${res.status} ${res.statusText}: ${text}`);
    }
    const backoff = 800 * Math.pow(2, attempt) + Math.floor(Math.random() * 250);
    console.log(`⚠️ ${res.status} from Google. Retrying in ${backoff}ms...`);
    await sleep(backoff);
    return fetchJsonWithRetry<T>(url, accessToken, attempt + 1);
  }

  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${text}`);
  return JSON.parse(text) as T;
}

function extractLocationName(full: string, accountName: string) {
  // Some APIs return "accounts/123/locations/456"
  // But the reviews v4 endpoint expects "locations/456"
  const prefix = accountName + "/";
  return full.startsWith(prefix) ? full.slice(prefix.length) : full;
}

async function main() {
  const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI,
    GOOGLE_REFRESH_TOKEN,
  } = process.env;

  if (
    !GOOGLE_CLIENT_ID ||
    !GOOGLE_CLIENT_SECRET ||
    !GOOGLE_REDIRECT_URI ||
    !GOOGLE_REFRESH_TOKEN
  ) {
    throw new Error(
      "Missing env vars. Need GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI, GOOGLE_REFRESH_TOKEN"
    );
  }

  const oauth2Client = new OAuth2Client(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI
  );

  oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

  const { credentials } = await oauth2Client.refreshAccessToken();
  const accessToken = credentials.access_token;
  if (!accessToken) throw new Error("Failed to obtain access token.");

  console.log("✅ Access token OK.");

  // 1) Fetch ONLY first account
  const accounts = await fetchJsonWithRetry<AccountsResponse>(
    "https://mybusinessaccountmanagement.googleapis.com/v1/accounts?pageSize=1",
    accessToken
  );

  const account = accounts.accounts?.[0];
  if (!account?.name) {
    throw new Error("No GBP accounts found. Are you logged into the correct Google account?");
  }

  console.log(`📋 Account: ${account.name}${account.accountName ? ` (${account.accountName})` : ""}`);

  // 2) Fetch ONLY first location
  const locations = await fetchJsonWithRetry<LocationsResponse>(
    `https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations?readMask=name,title,storefrontAddress&pageSize=1`,
    accessToken
  );

  const loc = locations.locations?.[0];
  if (!loc?.name) throw new Error("No GBP locations found under this account.");

  const locationName = extractLocationName(loc.name, account.name);

  const addr = loc.storefrontAddress
    ? [
        loc.storefrontAddress.addressLines?.join(", "),
        loc.storefrontAddress.locality,
        loc.storefrontAddress.postalCode,
        loc.storefrontAddress.regionCode,
      ]
        .filter(Boolean)
        .join(" ")
    : "";

  console.log(`📍 Location: ${loc.title || ""}`.trim());
  if (addr) console.log(`   Address: ${addr}`);
  console.log(`   Full path: ${loc.name}`);
  console.log("");

  console.log("📝 Copy these into your .env.local:");
  console.log(`GBP_ACCOUNT_NAME=${account.name}`);
  console.log(`GBP_LOCATION_NAME=${locationName}`);
  console.log("\n✅ Done!");
}

main().catch((err: any) => {
  console.error("\n❌ Error:", err?.message || String(err));
  process.exit(1);
});
