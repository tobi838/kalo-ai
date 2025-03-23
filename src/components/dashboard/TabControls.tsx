
import React from 'react';
import { Button } from '@/components/ui/button';

interface TabControlsProps {
  timeframe: string;
  setTimeframe: (timeframe: string) => void;
}

const TabControls = ({ timeframe, setTimeframe }: TabControlsProps) => {
  return (
    <div className="flex gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        className={timeframe === 'weekly' ? 'bg-secondary text-secondary-foreground' : ''}
        onClick={() => setTimeframe('weekly')}>
        Weekly
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        className={timeframe === 'monthly' ? 'bg-secondary text-secondary-foreground' : ''}
        onClick={() => setTimeframe('monthly')}>
        Monthly
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        className={timeframe === 'yearly' ? 'bg-secondary text-secondary-foreground' : ''}
        onClick={() => setTimeframe('yearly')}>
        Yearly
      </Button>
    </div>
  );
};

export default TabControls;
