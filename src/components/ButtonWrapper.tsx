
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

type ButtonWrapperProps = React.ComponentProps<typeof Button> & {
  href?: string;
  onClick?: () => void;
};

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ 
  href, 
  onClick, 
  children, 
  ...props 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      navigate(href);
    }
  };

  return (
    <Button 
      {...props} 
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;
