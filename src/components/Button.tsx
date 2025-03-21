
import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../lib/utils';
import { Button as ShadcnButton } from './ui/button';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'primary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
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
  ...props
}: ButtonProps) => {
  // Map 'primary' to 'default' for ShadcnButton compatibility
  const mappedVariant = variant === 'primary' ? 'default' : variant;

  const classes = cn(
    fullWidth && 'w-full',
    className
  );

  // Create element with icon based on iconPosition
  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  return (
    <ShadcnButton
      variant={mappedVariant}
      size={size}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {content}
    </ShadcnButton>
  );
};

export default Button;
