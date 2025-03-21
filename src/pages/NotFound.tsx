
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background py-20">
      <div className="text-center max-w-md px-4 sm:px-6 lg:px-8 animate-fade-up">
        <div className="h-40 w-40 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <span className="text-6xl font-bold text-primary">404</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        
        <p className="text-lg text-foreground/70 mb-8">
          We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline"
            icon={<ArrowLeft />}
            iconPosition="left"
          >
            Go back
          </Button>
          
          <Button 
            as={Link} 
            to="/"
            icon={<Home />}
            iconPosition="left"
          >
            Return home
          </Button>
        </div>
        
        <div className="mt-12 text-foreground/50 text-sm">
          Lost? Check out our <Link to="/contact" className="text-primary hover:underline">help center</Link> or <Link to="/contact" className="text-primary hover:underline">contact support</Link>.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
