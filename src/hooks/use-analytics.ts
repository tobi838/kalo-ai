
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';

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
  const { user } = useAuth();

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (!user) return;

      try {
        setLoading(true);
        
        // In a real application, you would fetch this data from Supabase
        // For example:
        // const { data, error } = await supabase
        //   .from('analytics')
        //   .select('*')
        //   .eq('user_id', user.id);
        
        // if (error) throw error;
        
        // For now, we'll use mock data
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
      } catch (err) {
        console.error('Error fetching analytics:', err);
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [user]);

  return { data, loading, error };
};
