/**
 * Google Business Profile OAuth - Connect Route
 * 
 * SETUP INSTRUCTIONS:
 * ===================
 * 1. Go to Google Cloud Console → APIs & Services → Credentials
 * 2. Create OAuth 2.0 Client ID (Web application)
 * 3. Add authorized redirect URI: http://localhost:3000/api/gbp/callback
 * 4. Enable these APIs in your project:
 *    - My Business Account Management API
 *    - My Business Business Information API
 *    - My Business Q&A API (for reviews via mybusiness.googleapis.com)
 * 5. Add to .env:
 *    GOOGLE_CLIENT_ID=your_client_id
 *    GOOGLE_CLIENT_SECRET=your_client_secret
 *    GOOGLE_REDIRECT_URI=http://localhost:3000/api/gbp/callback
 * 
 * USAGE:
 * ======
 * 1. Visit http://localhost:3000/api/gbp/connect
 * 2. Complete OAuth consent
 * 3. Copy the refresh_token from the response
 * 4. Add to .env: GOOGLE_REFRESH_TOKEN=your_refresh_token
 * 5. Restart dev server
 * 6. Hit /api/gbp/sync to fetch reviews
 * 7. Reviews will be cached to /data/gbp-reviews.json
 */

import { OAuth2Client } from 'google-auth-library';
import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.json(
      { 
        error: 'Missing OAuth credentials',
        message: 'Please set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REDIRECT_URI in .env'
      },
      { status: 500 }
    );
  }

  const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/business.manage'],
  });

  return NextResponse.redirect(authUrl);
}

