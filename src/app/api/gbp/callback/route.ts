/**
 * Google Business Profile OAuth - Callback Route
 */

import { OAuth2Client } from 'google-auth-library';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.json(
      { 
        error: 'OAuth error',
        message: error,
        description: searchParams.get('error_description')
      },
      { status: 400 }
    );
  }

  if (!code) {
    return NextResponse.json(
      { 
        error: 'Missing authorization code',
        message: 'No code parameter received from Google'
      },
      { status: 400 }
    );
  }

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

  try {
    const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);
    const { tokens } = await oauth2Client.getToken(code);

    return NextResponse.json({
      success: true,
      message: 'OAuth successful! Copy the refresh_token below and add it to your .env file.',
      instructions: [
        '1. Copy the refresh_token value below',
        '2. Add to .env: GOOGLE_REFRESH_TOKEN=<paste_here>',
        '3. Restart your Next.js dev server',
        '4. Visit /api/gbp/sync to fetch your reviews'
      ],
      tokens: {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token || '(not returned - you may already have one stored)',
        expiry_date: tokens.expiry_date,
        token_type: tokens.token_type,
        scope: tokens.scope
      },
      warning: tokens.refresh_token 
        ? 'SAVE THE REFRESH_TOKEN NOW! It is only shown once on first consent.'
        : 'No refresh_token returned. You may need to revoke access and try again with prompt=consent.'
    });
  } catch (err) {
    console.error('Token exchange error:', err);
    return NextResponse.json(
      { 
        error: 'Token exchange failed',
        message: err instanceof Error ? err.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

