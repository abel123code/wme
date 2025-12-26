/**
 * Reviews API Route
 * Returns cached Google Business Profile reviews
 */

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

interface CacheData {
  syncedAt: string;
  location?: {
    title: string;
  };
  reviews: CachedReview[];
}

export async function GET() {
  try {
    const cachePath = path.join(process.cwd(), 'data', 'gbp-reviews.json');
    
    if (!fs.existsSync(cachePath)) {
      return NextResponse.json(
        { 
          error: 'No cached reviews',
          message: 'Reviews have not been synced yet. Please run /api/gbp/sync first.',
          reviews: []
        },
        { status: 404 }
      );
    }

    const cacheData: CacheData = JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
    
    const reviews = (cacheData.reviews || []).sort((a, b) => {
      const dateA = new Date(a.createTime || a.updateTime || 0);
      const dateB = new Date(b.createTime || b.updateTime || 0);
      return dateB.getTime() - dateA.getTime();
    });

    return NextResponse.json({
      success: true,
      syncedAt: cacheData.syncedAt,
      location: cacheData.location?.title || 'Unknown',
      totalReviews: reviews.length,
      reviews,
    });

  } catch (err) {
    console.error('Error reading reviews cache:', err);
    return NextResponse.json(
      { 
        error: 'Failed to read reviews',
        message: err instanceof Error ? err.message : 'Unknown error',
        reviews: []
      },
      { status: 500 }
    );
  }
}

