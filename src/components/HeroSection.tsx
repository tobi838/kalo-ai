
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
        
        {/* Enhanced Interactive Dashboard Preview */}
        <div className="mt-16 relative max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="parallax-element rounded-2xl shadow-2xl overflow-hidden border border-border/50 glass" data-speed="5">
            {/* Window Controls */}
            <div className="bg-gradient-to-b from-gray-900/90 to-gray-800/90 pt-2 pb-1">
              <div className="flex items-center px-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto bg-gray-700/60 rounded-md py-1 px-4 text-xs text-gray-300 flex items-center gap-1.5">
                  <span className="h-2 w-2 bg-primary/80 rounded-full animate-pulse-soft"></span>
                  KaloAI Dashboard
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-gray-700/60"></div>
                  <div className="w-4 h-4 rounded-sm bg-gray-700/60"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Interface Elements */}
            <div className="p-5 relative bg-gradient-to-br from-gray-900/95 to-gray-800/95">
              <div className="grid grid-cols-12 gap-4">
                {/* Left sidebar with improved visuals */}
                <div className="col-span-3 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/40 flex items-center justify-center text-xs text-white font-bold">K</div>
                    <div className="h-7 rounded bg-gray-700/60 w-3/5"></div>
                  </div>
                  
                  <div className="mt-6 space-y-1">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/30">
                      <div className="h-3.5 w-3.5 rounded-sm bg-primary/80"></div>
                      <div className="h-4 rounded bg-gray-300/80 w-24 text-xs text-white">Dashboard</div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/20 transition-colors">
                      <div className="h-3.5 w-3.5 rounded-sm bg-gray-600/80"></div>
                      <div className="h-4 rounded bg-gray-700/60 w-20"></div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/20 transition-colors">
                      <div className="h-3.5 w-3.5 rounded-sm bg-gray-600/80"></div>
                      <div className="h-4 rounded bg-gray-700/60 w-16"></div>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/20 transition-colors">
                      <div className="h-3.5 w-3.5 rounded-sm bg-gray-600/80"></div>
                      <div className="h-4 rounded bg-gray-700/60 w-24"></div>
                    </div>
                  </div>
                  
                  <div className="pt-6 space-y-3">
                    <div className="h-5 rounded bg-gray-700/50 w-4/5"></div>
                    <div className="h-28 rounded-lg bg-gradient-to-br from-gray-700/30 to-gray-700/10 w-full p-3">
                      <div className="flex justify-between mb-2">
                        <div className="h-3 w-12 bg-gray-600/60 rounded-sm"></div>
                        <div className="h-3 w-8 bg-primary/40 rounded-sm"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-2 bg-gray-700/40 rounded-full">
                          <div className="h-full w-4/5 bg-primary/60 rounded-full"></div>
                        </div>
                        <div className="w-full h-2 bg-gray-700/40 rounded-full">
                          <div className="h-full w-3/5 bg-blue-500/60 rounded-full"></div>
                        </div>
                        <div className="w-full h-2 bg-gray-700/40 rounded-full">
                          <div className="h-full w-2/3 bg-green-500/60 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main content area with enhanced visuals */}
                <div className="col-span-9 space-y-5">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/40 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <div className="text-sm text-gray-300 font-medium">Analytics Dashboard</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-gray-700/40 flex items-center justify-center">
                        <div className="h-3 w-3 bg-gray-500/80 rounded-sm"></div>
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-gray-700/40 flex items-center justify-center">
                        <div className="h-3 w-3 bg-gray-500/80 rounded-sm"></div>
                      </div>
                      <div className="h-8 px-3 rounded-lg bg-primary/50 flex items-center justify-center">
                        <div className="h-1.5 w-4 bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced metric cards */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { color: 'from-purple-500/20 to-purple-600/10', value: '128.5K', label: 'Views', increase: '+14.2%', delay: '0.2s', width: '65%' },
                      { color: 'from-blue-500/20 to-blue-600/10', value: '$8,450', label: 'Revenue', increase: '+5.4%', delay: '0.4s', width: '45%' },
                      { color: 'from-green-500/20 to-green-600/10', value: '94.2%', label: 'Satisfaction', increase: '+2.8%', delay: '0.6s', width: '75%' }
                    ].map((metric, index) => (
                      <div key={index} className={`h-28 rounded-xl bg-gradient-to-br ${metric.color} p-4 flex flex-col justify-between animate-pulse-soft border border-white/5`} style={{ animationDelay: metric.delay }}>
                        <div className="text-xs text-gray-400">{metric.label}</div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl font-bold text-white">{metric.value}</div>
                          <div className="text-xs text-green-400 bg-green-900/30 px-1.5 py-0.5 rounded">{metric.increase}</div>
                        </div>
                        <div className="w-full h-1 bg-gray-700/40 rounded-full mt-2">
                          <div className="h-full bg-white/40 rounded-full animate-progress" style={{ width: metric.width }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced chart area */}
                  <div className="grid grid-cols-3 gap-4 h-64">
                    <div className="col-span-2 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-800/10 border border-white/5 p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-sm text-gray-300">Performance Overview</div>
                        <div className="flex gap-2">
                          <div className="px-2 py-1 rounded-md bg-gray-700/60 text-xs text-gray-300">Monthly</div>
                          <div className="px-2 py-1 rounded-md bg-gray-700/30 text-xs text-gray-400">Weekly</div>
                        </div>
                      </div>
                      {/* Realistic chart visualization */}
                      <div className="h-44 flex items-end">
                        <div className="w-full flex items-end justify-between relative">
                          {/* Chart lines */}
                          <div className="absolute inset-0 flex flex-col justify-between opacity-30">
                            <div className="border-b border-dashed border-gray-600/30"></div>
                            <div className="border-b border-dashed border-gray-600/30"></div>
                            <div className="border-b border-dashed border-gray-600/30"></div>
                            <div className="border-b border-dashed border-gray-600/30"></div>
                          </div>
                          
                          {/* Chart data points */}
                          {[35, 65, 45, 78, 52, 63, 41, 55, 80, 45, 58, 70].map((height, i) => (
                            <div key={i} className="relative w-full h-full flex flex-col justify-end group">
                              <div 
                                className="w-2 mx-auto rounded-t bg-primary/50 animate-chart" 
                                style={{ 
                                  '--chart-height': `${height}%`,
                                  animationDelay: `${0.1 * i}s`
                                } as React.CSSProperties}>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 rounded px-1.5 py-0.5 text-[10px] text-white pointer-events-none">
                                  {height}%
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side content breakdown */}
                    <div className="rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-800/10 border border-white/5 p-4">
                      <div className="text-sm text-gray-300 mb-3">Content Breakdown</div>
                      <div className="space-y-3">
                        {[
                          { color: 'bg-primary/60', name: 'Social', value: '42%' },
                          { color: 'bg-blue-500/60', name: 'Direct', value: '28%' },
                          { color: 'bg-green-500/60', name: 'Organic', value: '18%' },
                          { color: 'bg-yellow-500/60', name: 'Referral', value: '12%' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`h-3 w-3 rounded-sm ${item.color}`}></div>
                            <div className="text-xs text-gray-300">{item.name}</div>
                            <div className="ml-auto text-xs text-gray-400">{item.value}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5">
                        <div className="h-32 w-32 mx-auto relative">
                          <svg viewBox="0 0 100 100" className="transform -rotate-90">
                            <circle r="40" cx="50" cy="50" fill="transparent" stroke="rgba(107, 114, 128, 0.2)" strokeWidth="10"></circle>
                            <circle r="40" cx="50" cy="50" fill="transparent" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset="146" className="animate-chart" style={{ animationDelay: '0.5s' }}></circle>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">42%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Activity feed */}
                  <div className="rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-800/10 border border-white/5 p-4 h-24">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm text-gray-300">Recent Activity</div>
                      <div className="text-xs text-primary">View All</div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { user: 'A', action: 'Created a new dashboard', time: '2m ago' },
                        { user: 'S', action: 'Updated analytics settings', time: '1h ago' }
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs bg-${i === 0 ? 'primary' : 'blue'}-500/40`}>
                            {activity.user}
                          </div>
                          <div className="text-xs text-gray-300">{activity.action}</div>
                          <div className="ml-auto text-xs text-gray-500">{activity.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced simulated cursor */}
              <div className="absolute h-4 w-4 rounded-full bg-white/90 shadow-xl animate-cursor hidden md:block">
                <div className="absolute -top-1 -left-1 h-6 w-6 rounded-full border-2 border-white/30 opacity-60 animate-ping"></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced glow effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 -z-10 animate-pulse-soft"></div>
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
