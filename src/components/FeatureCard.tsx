
import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
  hoverEffect = true,
  style,
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative group rounded-xl p-6 transition-all duration-300",
        hoverEffect && "hover:shadow-lg hover:-translate-y-1",
        isHovered ? "bg-card shadow-lg" : "bg-card/50",
        className
      )}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300",
        isHovered ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
      )}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <p className="text-foreground/70">{description}</p>
      
      {hoverEffect && (
        <div className={cn(
          "absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none border",
          isHovered ? "opacity-100 border-primary/20" : "opacity-0 border-transparent"
        )}></div>
      )}
    </div>
  );
};

export default FeatureCard;
