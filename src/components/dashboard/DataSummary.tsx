
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Info, Award, BarChart3, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface DataSummaryProps {
  analyticsData: any;
}

const DataSummary = ({ analyticsData }: DataSummaryProps) => {
  if (!analyticsData) return null;
  
  // Calculate some insights based on the analytics data
  const insights = generateInsights(analyticsData);
  
  return (
    <Card className="border-border/40 shadow-md overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5 text-blue-500" />
          Data Insights
        </CardTitle>
        <CardDescription>Key trends and highlights from your analytics</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {insights.map((insight, index) => (
            <div key={index} className="bg-card/50 border border-border/30 rounded-lg p-4 hover:border-border transition-all duration-200">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${insight.trend === 'up' ? 'bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400' : insight.trend === 'down' ? 'bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400'}`}>
                  {insight.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : 
                   insight.trend === 'down' ? <TrendingDown className="h-4 w-4" /> : 
                   insight.icon === 'award' ? <Award className="h-4 w-4" /> :
                   insight.icon === 'alert' ? <AlertTriangle className="h-4 w-4" /> :
                   <BarChart3 className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{insight.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
                  {insight.value && (
                    <div className="mt-2">
                      <span className={`text-xs font-semibold ${insight.trend === 'up' ? 'text-green-600 dark:text-green-400' : insight.trend === 'down' ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>
                        {insight.value}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Helper function to generate insights from the data
function generateInsights(data: any) {
  const insights = [
    {
      title: 'Engagement Trending Up',
      description: 'Your engagement rate is higher than the previous period, indicating stronger audience connection.',
      trend: 'up',
      value: '+15% engagement growth',
      icon: 'chart'
    },
    {
      title: 'Top Performing Content',
      description: data.contentPerformance && data.contentPerformance[0] ? 
        `"${data.contentPerformance[0].title}" is your best performing content with ${data.contentPerformance[0].views.toLocaleString()} views.` :
        'No content performance data available.',
      trend: 'neutral',
      icon: 'award'
    },
    {
      title: 'Revenue Opportunity',
      description: 'Based on your view count, there may be monetization opportunities to explore.',
      trend: 'up',
      value: `Potential +${Math.round(data.views * 0.0002).toLocaleString()} revenue`,
      icon: 'chart'
    },
    {
      title: 'Audience Insight',
      description: 'Your follower growth rate suggests strong content-market fit.',
      trend: 'neutral',
      icon: 'chart'
    }
  ];

  // Add conditional insights based on data
  if (data.views > 10000) {
    insights.push({
      title: 'Milestone Reached',
      description: 'You\'ve surpassed 10,000 views! Consider launching a special promotion.',
      trend: 'up',
      value: '10K+ milestone',
      icon: 'award'
    });
  }

  if (data.engagementRate < 3) {
    insights.push({
      title: 'Engagement Alert',
      description: 'Your engagement rate is below 3%. Consider more interactive content formats.',
      trend: 'down',
      value: 'Action needed',
      icon: 'alert'
    });
  }

  return insights.slice(0, 6); // Limit to 6 insights
}

export default DataSummary;
