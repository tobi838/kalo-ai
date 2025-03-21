
import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyles = "relative font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center button-hover-effect";
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline"
  };
  
  const sizeStyles = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-11 px-6 text-lg"
  };
  
  const widthStyle = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyle,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={cn("mr-2 transition-transform duration-300", 
          isHovered ? "transform -translate-x-1" : ""
        )}>
          {icon}
        </span>
      )}
      <span className="z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={cn("ml-2 transition-transform duration-300", 
          isHovered ? "transform translate-x-1" : ""
        )}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
