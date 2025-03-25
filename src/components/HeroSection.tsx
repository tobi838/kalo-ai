
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ButtonWrapper from './ButtonWrapper';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  const handleLearnMore = () => {
    navigate('/features');
  };

  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-b from-background to-primary/5">
      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-purple-500/5 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Transform Your Data Strategy
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="block">Intelligent analytics for</span>
            <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              data-driven decisions
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-foreground/80 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Harness the power of AI to uncover actionable insights from your data.
            Make smarter business decisions with our powerful analytics platform.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <ButtonWrapper 
              size="lg" 
              icon={<ArrowRight size={18} />} 
              iconPosition="right" 
              onClick={handleGetStarted}
            >
              Get started free
            </ButtonWrapper>
            
            <ButtonWrapper 
              variant="outline" 
              size="lg" 
              onClick={handleLearnMore}
            >
              Learn more
            </ButtonWrapper>
          </div>
          
          <div className="mt-8 flex justify-center space-x-6 text-sm animate-fade-up" style={{ animationDelay: '0.8s' }}>
            {['No credit card required', 'Free 14-day trial', '24/7 support'].map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dashboard Preview Image */}
        <div className="mt-16 relative max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '1s' }}>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/40">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
            <img 
              src="/dashboard-preview.jpg" 
              alt="KaloAI Dashboard" 
              className="w-full"
              style={{ maxHeight: '600px', objectFit: 'cover' }}
            />
          </div>
          
          {/* Floating stat cards */}
          <div className="absolute -top-6 -right-6 md:top-12 md:right-0 bg-card border border-border shadow-lg rounded-lg p-4 max-w-[200px] hidden sm:block animate-float" style={{ animationDelay: "0.6s" }}>
            <div className="text-lg font-bold text-green-500">+27%</div>
            <div className="text-sm text-foreground/70">Increase in conversion</div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 md:bottom-16 md:left-0 bg-card border border-border shadow-lg rounded-lg p-4 max-w-[200px] hidden sm:block animate-float" style={{ animationDelay: "0.3s" }}>
            <div className="text-lg font-bold text-purple-500">14.8M</div>
            <div className="text-sm text-foreground/70">Data points analyzed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
