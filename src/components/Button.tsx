
import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../lib/utils';
import { Button as ShadcnButton } from './ui/button';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'primary' | 'gradient';
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  animation?: 'none' | 'pulse' | 'bounce' | 'scale';
  loading?: boolean;
  [x: string]: any; // Allow for additional props like as, to, etc.
};

const Button = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  onClick,
  disabled = false,
  type = 'button',
  animation = 'none',
  loading = false,
  ...props
}: ButtonProps) => {
  // Map custom variants to ShadcnButton compatibility
  let mappedVariant: any = variant;
  if (variant === 'primary') mappedVariant = 'default';
  if (variant === 'gradient') mappedVariant = 'default';

  // Build animation classes
  const animationClasses = {
    none: '',
    pulse: 'animate-pulse-soft',
    bounce: 'animate-bounce',
    scale: 'transition-transform hover:scale-105'
  };

  // Build classes
  const classes = cn(
    fullWidth && 'w-full',
    variant === 'gradient' && 'bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 text-white border-0',
    animation !== 'none' && animationClasses[animation],
    className
  );

  // Create loading spinner
  const loadingSpinner = (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  // Create element with icon based on iconPosition
  const content = (
    <>
      {loading && loadingSpinner}
      {icon && iconPosition === 'left' && !loading && <span className="mr-1">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-1">{icon}</span>}
    </>
  );

  return (
    <ShadcnButton
      variant={mappedVariant}
      size={size}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {content}
    </ShadcnButton>
  );
};

export default Button;
