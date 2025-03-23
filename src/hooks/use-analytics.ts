
import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';
import { ContentItem, UserAnalyticsSummary, ContentMetric } from '@/lib/supabase-schema';

export type AnalyticsData = {
  views: number;
  revenue: number;
  followers: number;
  engagementRate: number;
  timeSeriesData: Array<{
    date: string;
    views: number;
    revenue: number;
    followers: number;
  }>;
  contentPerformance: Array<{
    id: string;
    title: string;
    views: number;
    engagementRate: number;
  }>;
};

export const useAnalytics = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { user, isConfigured } = useAuth();

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (!user || !isConfigured) {
        // If user is not logged in or Supabase is not configured, use mock data
        setMockData();
        return;
      }

      try {
        setLoading(true);
        
        // Fetch user analytics summary for the past 7 days
        const currentDate = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(currentDate.getDate() - 7);
        
        const { data: summaries, error: summariesError } = await supabase
          .from('user_analytics_summary')
          .select('*')
          .eq('user_id', user.id)
          .gte('date', sevenDaysAgo.toISOString().split('T')[0])
          .order('date', { ascending: true });
          
        if (summariesError) throw summariesError;
        
        // Fetch latest summary for current stats
        const { data: latestSummary, error: latestError } = await supabase
          .from('user_analytics_summary')
          .select('*')
          .eq('user_id', user.id)
          .order('date', { ascending: false })
          .limit(1);
          
        if (latestError) throw latestError;
        
        // Fetch top performing content
        const { data: topContent, error: contentError } = await supabase
          .from('content_items')
          .select(`
            id,
            title,
            content_metrics (
              views,
              likes,
              comments,
              shares
            )
          `)
          .eq('user_id', user.id)
          .limit(4);
          
        if (contentError) throw contentError;
        
        // Process the data
        const timeSeriesData = summaries ? summaries.map((summary: UserAnalyticsSummary) => ({
          date: new Date(summary.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          views: summary.total_views,
          revenue: summary.total_revenue,
          followers: summary.total_followers
        })) : [];
        
        // Process content performance data
        const contentPerformance = topContent ? topContent.map((item: any) => {
          // Get the most recent metrics for this content
          const metrics = item.content_metrics[0] || { views: 0, likes: 0, comments: 0, shares: 0 };
          const engagementRate = metrics.views > 0 
            ? ((metrics.likes + metrics.comments + metrics.shares) / metrics.views) * 100 
            : 0;
            
          return {
            id: item.id,
            title: item.title,
            views: metrics.views,
            engagementRate: parseFloat(engagementRate.toFixed(1))
          };
        }) : [];
        
        // Set the analytics data
        const latest = latestSummary && latestSummary.length > 0 ? latestSummary[0] : null;
        
        setData({
          views: latest ? latest.total_views : 0,
          revenue: latest ? latest.total_revenue : 0,
          followers: latest ? latest.total_followers : 0,
          engagementRate: latest ? latest.engagement_rate : 0,
          timeSeriesData,
          contentPerformance,
        });
      } catch (err) {
        console.error('Error fetching analytics:', err);
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        // Fallback to mock data
        setMockData();
      } finally {
        setLoading(false);
      }
    };

    const setMockData = () => {
      // Use mock data when real data cannot be fetched
      const mockData: AnalyticsData = {
        views: 145382,
        revenue: 12234,
        followers: 3482,
        engagementRate: 4.5,
        timeSeriesData: [
          { date: 'Jan', views: 4000, revenue: 2400, followers: 400 },
          { date: 'Feb', views: 3000, revenue: 1398, followers: 300 },
          { date: 'Mar', views: 2000, revenue: 9800, followers: 200 },
          { date: 'Apr', views: 2780, revenue: 3908, followers: 278 },
          { date: 'May', views: 1890, revenue: 4800, followers: 189 },
          { date: 'Jun', views: 2390, revenue: 3800, followers: 239 },
          { date: 'Jul', views: 3490, revenue: 4300, followers: 349 },
        ],
        contentPerformance: [
          { id: '1', title: 'Product Review Video', views: 12500, engagementRate: 5.2 },
          { id: '2', title: 'Tutorial: Using Product X', views: 8900, engagementRate: 4.8 },
          { id: '3', title: 'Unboxing New Collection', views: 15300, engagementRate: 6.1 },
          { id: '4', title: 'Behind the Scenes', views: 7600, engagementRate: 3.9 },
        ],
      };
      
      setData(mockData);
    };

    fetchAnalytics();
  }, [user, isConfigured]);

  return { data, loading, error };
};
