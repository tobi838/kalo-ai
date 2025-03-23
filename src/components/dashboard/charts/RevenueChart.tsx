
import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface RevenueChartProps {
  data: any[];
  chartConfig: any;
}

const RevenueChart = ({ data, chartConfig }: RevenueChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <BarChart data={data || []}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
        <XAxis dataKey="date" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="revenue" fill="#10B981" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
};

export default RevenueChart;
