
/**
 * This file serves as documentation for the Supabase database schema.
 * You'll need to create these tables in your Supabase dashboard.
 * 
 * Table structure for analytics data:
 * 
 * 1. content_items
 *    - id: uuid (primary key)
 *    - user_id: uuid (references auth.users.id)
 *    - title: text
 *    - type: text (video, article, post, etc.)
 *    - created_at: timestamp with time zone
 *    - updated_at: timestamp with time zone
 * 
 * 2. content_metrics
 *    - id: uuid (primary key)
 *    - content_id: uuid (references content_items.id)
 *    - date: date
 *    - views: integer
 *    - likes: integer
 *    - shares: integer
 *    - comments: integer
 *    - average_view_duration: float (for videos)
 *    - created_at: timestamp with time zone
 * 
 * 3. user_analytics_summary
 *    - id: uuid (primary key)
 *    - user_id: uuid (references auth.users.id)
 *    - date: date
 *    - total_views: integer
 *    - total_revenue: float
 *    - total_followers: integer
 *    - engagement_rate: float
 *    - created_at: timestamp with time zone
 *    - updated_at: timestamp with time zone
 */

// Schema types for type safety in our application

export type ContentItem = {
  id: string;
  user_id: string;
  title: string;
  type: string;
  created_at: string;
  updated_at: string;
};

export type ContentMetric = {
  id: string;
  content_id: string;
  date: string;
  views: number;
  likes: number;
  shares: number;
  comments: number;
  average_view_duration?: number;
  created_at: string;
};

export type UserAnalyticsSummary = {
  id: string;
  user_id: string;
  date: string;
  total_views: number;
  total_revenue: number;
  total_followers: number;
  engagement_rate: number;
  created_at: string;
  updated_at: string;
};

// Helper functions for working with the analytics data

/**
 * Calculate engagement rate from interactions and views
 */
export const calculateEngagementRate = (
  likes: number,
  comments: number,
  shares: number,
  views: number
): number => {
  if (views === 0) return 0;
  return ((likes + comments + shares) / views) * 100;
};

