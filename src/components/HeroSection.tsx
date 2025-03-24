
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const elements = containerRef.current.querySelectorAll('.parallax-element');
      
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0');
        const rotateX = y * speed * -1;
        const rotateY = x * speed;
        
        (el as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 sm:py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 pointer-events-none z-0" />
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(126,134,158,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(126,134,158,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-40 animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-400/5 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '-1s' }} />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block animate-fade-in">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
            Introducing KaloAI Platform
          </span>
        </div>
        
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span>Transform your data into </span>
          <span className="text-gradient">actionable insights</span>
        </h1>
        
        <p className="mt-6 text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
          An intelligent data platform that helps you analyze, visualize, and make decisions with AI-powered insights, all in one seamless experience.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" icon={<ArrowRight />} iconPosition="right" href="/features">
            Start for free
          </Button>
          <Button variant="outline" size="lg" href="/solutions">
            See how it works
          </Button>
        </div>
        
        {/* Interactive Dashboard Preview Card */}
        <div className="mt-16 relative max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="parallax-element rounded-2xl shadow-2xl overflow-hidden border border-border/50 glass" data-speed="5">
            {/* Window Controls */}
            <div className="bg-gradient-to-b from-gray-900/80 to-gray-800/80 pt-2">
              <div className="flex items-center px-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto bg-gray-700/50 rounded-md py-1 px-4 text-xs text-gray-300">
                  KaloAI Dashboard
                </div>
              </div>
              
              {/* Animated Interface Elements */}
              <div className="p-4 pb-6 relative">
                <div className="grid grid-cols-12 gap-4">
                  {/* Left sidebar with pulse effect */}
                  <div className="col-span-3 space-y-4">
                    <div className="h-8 rounded bg-gray-700/50 w-2/3 animate-pulse-soft"></div>
                    <div className="space-y-2">
                      <div className="h-6 rounded bg-gray-700/30 w-full"></div>
                      <div className="h-6 rounded bg-primary/40 w-full"></div>
                      <div className="h-6 rounded bg-gray-700/30 w-full"></div>
                      <div className="h-6 rounded bg-gray-700/30 w-full"></div>
                    </div>
                    <div className="pt-4">
                      <div className="h-40 rounded bg-gray-700/20 w-full"></div>
                    </div>
                  </div>
                  
                  {/* Main content area with animated typing effect */}
                  <div className="col-span-9 space-y-4">
                    <div className="flex justify-between">
                      <div className="h-8 rounded bg-gray-700/50 w-1/3 animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
                      <div className="flex space-x-2">
                        <div className="h-8 w-20 rounded bg-primary/40"></div>
                        <div className="h-8 w-20 rounded bg-gray-700/30"></div>
                      </div>
                    </div>
                    
                    {/* Animated metric cards */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 rounded bg-gray-700/30 w-full animate-pulse-soft" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-24 rounded bg-gray-700/30 w-full animate-pulse-soft" style={{ animationDelay: '0.4s' }}></div>
                      <div className="h-24 rounded bg-gray-700/30 w-full animate-pulse-soft" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                    
                    {/* Animated chart with data visualization */}
                    <div className="h-64 rounded bg-gray-700/20 w-full">
                      <div className="h-full flex items-end p-4">
                        <div className="flex items-end space-x-4 w-full">
                          <div className="h-20 w-full bg-blue-500/30 rounded-t animate-chart" style={{ animationDelay: '0.1s' }}></div>
                          <div className="h-32 w-full bg-purple-500/30 rounded-t animate-chart" style={{ animationDelay: '0.2s' }}></div>
                          <div className="h-16 w-full bg-green-500/30 rounded-t animate-chart" style={{ animationDelay: '0.3s' }}></div>
                          <div className="h-40 w-full bg-primary/30 rounded-t animate-chart" style={{ animationDelay: '0.4s' }}></div>
                          <div className="h-24 w-full bg-yellow-500/30 rounded-t animate-chart" style={{ animationDelay: '0.5s' }}></div>
                          <div className="h-36 w-full bg-red-500/30 rounded-t animate-chart" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Data Processing Animation */}
                    <div className="h-6 w-full bg-gray-700/30 rounded overflow-hidden">
                      <div className="h-full bg-primary/40 rounded animate-progress" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
                
                {/* Simulated cursor for interactive feel */}
                <div className="absolute h-3 w-3 rounded-full bg-white/70 shadow-lg animate-cursor hidden md:block"></div>
              </div>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-50 -z-10 animate-pulse-soft"></div>
        </div>
        
        {/* Clients section */}
        <div className="mt-20 animate-fade-up" style={{ animationDelay: '1s' }}>
          <p className="text-sm font-medium text-foreground/60 mb-6">
            TRUSTED BY INNOVATIVE COMPANIES
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60">
            <div className="h-6 w-24 bg-foreground/20 rounded"></div>
            <div className="h-6 w-20 bg-foreground/20 rounded"></div>
            <div className="h-6 w-28 bg-foreground/20 rounded"></div>
            <div className="h-6 w-24 bg-foreground/20 rounded"></div>
            <div className="h-6 w-20 bg-foreground/20 rounded"></div>
            <div className="h-6 w-28 bg-foreground/20 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
