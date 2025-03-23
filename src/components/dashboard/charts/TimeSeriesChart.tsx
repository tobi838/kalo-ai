
import React from 'react';
import { AreaChart, CartesianGrid, XAxis, YAxis, Area } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface TimeSeriesChartProps {
  data: any[];
  chartConfig: any;
}

const TimeSeriesChart = ({ data, chartConfig }: TimeSeriesChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="h-[350px]">
      <AreaChart data={data || []}>
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
  );
};

export default TimeSeriesChart;
