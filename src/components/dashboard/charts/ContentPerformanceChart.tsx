
import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Button } from '@/components/ui/button';
import { Eye, ArrowRight } from 'lucide-react';

interface ContentPerformanceChartProps {
  data: any[];
  chartConfig: any;
}

const ContentPerformanceChart = ({ data, chartConfig }: ContentPerformanceChartProps) => {
  return (
    <>
      <div className="grid gap-6 mb-6">
        {data?.map((item) => (
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
        <BarChart data={data || []}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
          <XAxis dataKey="title" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="views" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </>
  );
};

export default ContentPerformanceChart;
