import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight, Users, DollarSign, TrendingUp, BarChart3, Eye, Clock, ArrowRight } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
import DataSummary from '@/components/dashboard/DataSummary';
import UserProfile from '@/components/dashboard/UserProfile';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [timeframe, setTimeframe] = useState('weekly');
  const { data: analyticsData, loading: analyticsLoading } = useAnalytics();

  const chartConfig = {
    views: { label: 'Views', theme: { light: '#8B5CF6', dark: '#9B87F5' } },
    revenue: { label: 'Revenue', theme: { light: '#10B981', dark: '#34D399' } },
    followers: { label: 'Followers', theme: { light: '#F59E0B', dark: '#FBBF24' } },
  };

  if (analyticsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Analytics Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, {user?.email}</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => signOut()}>Sign out</Button>
          </div>
        </div>

        <div className="mb-8">
          <UserProfile />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="overflow-hidden border-border/40 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-950/10 dark:to-transparent">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold">{analyticsData?.views.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <span className="text-green-500 flex items-center mr-1 font-medium">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" /> +12.3%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-border/40 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/10 dark:to-transparent">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold">${analyticsData?.revenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <span className="text-green-500 flex items-center mr-1 font-medium">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" /> +8.2%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-border/40 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-amber-50 to-transparent dark:from-amber-950/10 dark:to-transparent">
              <CardTitle className="text-sm font-medium">Followers</CardTitle>
              <Users className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold">{analyticsData?.followers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <span className="text-green-500 flex items-center mr-1 font-medium">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" /> +19.5%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-border/40 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/10 dark:to-transparent">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold">{analyticsData?.engagementRate}%</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <span className="text-green-500 flex items-center mr-1 font-medium">
                  <ArrowUpRight className="h-3 w-3 mr-0.5" /> +2.1%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <DataSummary analyticsData={analyticsData} />
        </div>

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
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" 
                      className={timeframe === 'weekly' ? 'bg-secondary text-secondary-foreground' : ''}
                      onClick={() => setTimeframe('weekly')}>
                      Weekly
                    </Button>
                    <Button variant="outline" size="sm"
                      className={timeframe === 'monthly' ? 'bg-secondary text-secondary-foreground' : ''}
                      onClick={() => setTimeframe('monthly')}>
                      Monthly
                    </Button>
                    <Button variant="outline" size="sm"
                      className={timeframe === 'yearly' ? 'bg-secondary text-secondary-foreground' : ''}
                      onClick={() => setTimeframe('yearly')}>
                      Yearly
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-6">
                  <ChartContainer config={chartConfig} className="h-[350px]">
                    <AreaChart data={analyticsData?.timeSeriesData || []}>
                      <defs>
                        <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="views" stroke="#8B5CF6" strokeWidth={2} fillOpacity={1} fill="url(#viewsGradient)" />
                      <Area type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#revenueGradient)" />
                    </AreaChart>
                  </ChartContainer>
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
                <div className="grid gap-6 mb-6">
                  {analyticsData?.contentPerformance.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border/30 hover:border-border transition-colors">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium truncate">{item.title}</h3>
                        <div className="flex items-center mt-1 text-xs text-muted-foreground">
                          <Eye className="h-3 w-3 mr-1" />
                          <span>{item.views.toLocaleString()} views</span>
                          <span className="mx-2">•</span>
                          <span>{item.engagementRate}% engagement</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <BarChart data={analyticsData?.contentPerformance || []}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="views" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
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
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <BarChart data={analyticsData?.timeSeriesData || []}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="revenue" fill="#10B981" radius={[4, 4, 0, 0]}>
                      <defs>
                        <linearGradient id="revenueColorGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity={1} />
                          <stop offset="100%" stopColor="#10B981" stopOpacity={0.6} />
                        </linearGradient>
                      </defs>
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
