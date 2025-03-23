
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import TimeSeriesChart from './charts/TimeSeriesChart';
import ContentPerformanceChart from './charts/ContentPerformanceChart';
import RevenueChart from './charts/RevenueChart';
import TabControls from './TabControls';

interface DashboardTabsProps {
  analyticsData: any;
}

const DashboardTabs = ({ analyticsData }: DashboardTabsProps) => {
  const [timeframe, setTimeframe] = useState('weekly');

  const chartConfig = {
    views: { label: 'Views', theme: { light: '#8B5CF6', dark: '#9B87F5' } },
    revenue: { label: 'Revenue', theme: { light: '#10B981', dark: '#34D399' } },
    followers: { label: 'Followers', theme: { light: '#F59E0B', dark: '#FBBF24' } },
  };

  return (
    <Tabs defaultValue="overview" className="space-y-6">
      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-1 inline-flex">
        <TabsList className="bg-transparent">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="overview" className="space-y-6">
        <Card className="border-border/40 shadow-md overflow-hidden">
          <CardHeader className="pb-2 border-b border-border/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription className="mt-1">Track your key metrics over time</CardDescription>
              </div>
              <TabControls timeframe={timeframe} setTimeframe={setTimeframe} />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-6">
              <TimeSeriesChart data={analyticsData?.timeSeriesData} chartConfig={chartConfig} />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="content" className="space-y-6">
        <Card className="border-border/40 shadow-md overflow-hidden">
          <CardHeader className="pb-2 border-b border-border/30">
            <CardTitle>Content Performance</CardTitle>
            <CardDescription className="mt-1">Top performing content by views</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ContentPerformanceChart data={analyticsData?.contentPerformance} chartConfig={chartConfig} />
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="revenue" className="space-y-6">
        <Card className="border-border/40 shadow-md overflow-hidden">
          <CardHeader className="pb-2 border-b border-border/30">
            <CardTitle>Revenue Breakdown</CardTitle>
            <CardDescription className="mt-1">Monthly revenue analysis</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <RevenueChart data={analyticsData?.timeSeriesData} chartConfig={chartConfig} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
