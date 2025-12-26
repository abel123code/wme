/**
 * Google Business Profile - Sync Reviews Route
 * 
 * Requires environment variables:
 * - GOOGLE_CLIENT_ID
 * - GOOGLE_CLIENT_SECRET
 * - GOOGLE_REFRESH_TOKEN
 * - GBP_ACCOUNT_NAME (e.g., accounts/123456789)
 * - GBP_LOCATION_NAME (e.g., locations/987654321)
 */

import { OAuth2Client } from 'google-auth-library';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface GBPReview {
  name: string;
  reviewer?: {
    displayName?: string;
    profilePhotoUrl?: string;
  };
  starRating: string;
  comment?: string;
  createTime?: string;
  updateTime?: string;
  reviewReply?: {
    comment: string;
    updateTime: string;
  };
}

interface CachedReview {
  reviewId: string;
  reviewer: {
    displayName: string;
    profilePhotoUrl: string | null;
  };
  starRating: string;
  comment: string;
  createTime?: string;
  updateTime?: string;
  reviewReply: {
    comment: string;
    updateTime: string;
  } | null;
}

async function fetchWithAuth(url: string, accessToken: string) {
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`API request failed: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
  }
  
  return response.json();
}

async function getAllReviews(accessToken: string, accountName: string, locationName: string): Promise<GBPReview[]> {
  const allReviews: GBPReview[] = [];
  let nextPageToken: string | null = null;
  
  do {
    const url = new URL(`https://mybusiness.googleapis.com/v4/${accountName}/${locationName}/reviews`);
    url.searchParams.set('pageSize', '50');
    if (nextPageToken) {
      url.searchParams.set('pageToken', nextPageToken);
    }
    
    const data = await fetchWithAuth(url.toString(), accessToken);
    
    if (data.reviews && data.reviews.length > 0) {
      allReviews.push(...data.reviews);
    }
    
    nextPageToken = data.nextPageToken || null;
  } while (nextPageToken);
  
  return allReviews;
}

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const accountName = process.env.GBP_ACCOUNT_NAME;
  const locationName = process.env.GBP_LOCATION_NAME;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { 
        error: 'Missing OAuth credentials',
        message: 'Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env'
      },
      { status: 500 }
    );
  }

  if (!refreshToken) {
    return NextResponse.json(
      { 
        error: 'Missing refresh token',
        message: 'Please complete OAuth flow first by visiting /api/gbp/connect, then add GOOGLE_REFRESH_TOKEN to .env'
      },
      { status: 500 }
    );
  }

  if (!accountName) {
    return NextResponse.json(
      { 
        error: 'Missing GBP_ACCOUNT_NAME',
        message: 'Please set GBP_ACCOUNT_NAME in .env (e.g., accounts/123456789)'
      },
      { status: 500 }
    );
  }

  if (!locationName) {
    return NextResponse.json(
      { 
        error: 'Missing GBP_LOCATION_NAME',
        message: 'Please set GBP_LOCATION_NAME in .env (e.g., locations/987654321)'
      },
      { status: 500 }
    );
  }

  try {
    const oauth2Client = new OAuth2Client(clientId, clientSecret);
    oauth2Client.setCredentials({ refresh_token: refreshToken });
    
    const { credentials } = await oauth2Client.refreshAccessToken();
    const accessToken = credentials.access_token;

    if (!accessToken) {
      throw new Error('Failed to get access token');
    }

    console.log('Fetching reviews...');
    const reviews = await getAllReviews(accessToken, accountName, locationName);
    console.log(`Fetched ${reviews.length} reviews`);

    reviews.sort((a, b) => {
      const dateA = new Date(a.createTime || a.updateTime || 0);
      const dateB = new Date(b.createTime || b.updateTime || 0);
      return dateB.getTime() - dateA.getTime();
    });

    const cachedReviews: CachedReview[] = reviews.map(review => ({
      reviewId: review.name,
      reviewer: {
        displayName: review.reviewer?.displayName || 'Anonymous',
        profilePhotoUrl: review.reviewer?.profilePhotoUrl || null,
      },
      starRating: review.starRating,
      comment: review.comment || '',
      createTime: review.createTime,
      updateTime: review.updateTime,
      reviewReply: review.reviewReply ? {
        comment: review.reviewReply.comment,
        updateTime: review.reviewReply.updateTime,
      } : null,
    }));

    const cacheData = {
      syncedAt: new Date().toISOString(),
      account: accountName,
      location: locationName,
      totalReviews: reviews.length,
      reviews: cachedReviews,
    };

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const cachePath = path.join(dataDir, 'gbp-reviews.json');
    fs.writeFileSync(cachePath, JSON.stringify(cacheData, null, 2));
    console.log('Reviews cached to:', cachePath);

    return NextResponse.json({
      success: true,
      message: `Successfully synced ${reviews.length} reviews`,
      syncedAt: cacheData.syncedAt,
      account: accountName,
      location: locationName,
      totalReviews: reviews.length,
      cachePath: '/data/gbp-reviews.json',
    });

  } catch (err) {
    console.error('Sync error:', err);
    return NextResponse.json(
      { 
        error: 'Sync failed',
        message: err instanceof Error ? err.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

