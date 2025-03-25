
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, BarChart3, PieChart, LineChart, Users, TrendingUp, Activity } from 'lucide-react';
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
        
        {/* Dashboard Preview Component */}
        <div className="mt-16 relative max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '1s' }}>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-background/95">
            {/* Dashboard Header */}
            <div className="p-4 border-b border-border/30 bg-card/50 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-6 w-24 bg-primary/10 rounded-md"></div>
                <div className="h-6 w-6 rounded-full bg-primary/10"></div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-4 grid grid-cols-12 gap-4" style={{ height: '480px' }}>
              {/* Sidebar */}
              <div className="col-span-2 bg-card/50 rounded-lg p-3 border border-border/20">
                <div className="space-y-4">
                  <div className="h-8 flex items-center space-x-2 rounded-md bg-primary/10 p-2">
                    <Activity className="h-4 w-4 text-primary" />
                    <div className="h-3 w-14 bg-primary/20 rounded"></div>
                  </div>
                  {[Users, BarChart3, LineChart, TrendingUp, PieChart].map((Icon, idx) => (
                    <div key={idx} className="h-8 flex items-center space-x-2 p-2 opacity-60 hover:opacity-100 transition-opacity">
                      <Icon className="h-4 w-4" />
                      <div className="h-3 w-14 bg-foreground/20 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Main Content */}
              <div className="col-span-10 space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { color: 'primary', number: '28.4K', label: 'Users' },
                    { color: 'blue', number: '$85.2K', label: 'Revenue' },
                    { color: 'green', number: '69.3%', label: 'Conversion' },
                    { color: 'purple', number: '12.5M', label: 'Data Points' }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-card/50 rounded-lg p-3 border border-border/20 flex flex-col justify-between">
                      <div className={`text-${stat.color}-500 text-lg font-bold`}>{stat.number}</div>
                      <div className="text-sm text-foreground/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Charts Row */}
                <div className="grid grid-cols-3 gap-4 h-52">
                  {/* Line Chart Mock */}
                  <div className="col-span-2 bg-card/50 rounded-lg p-3 border border-border/20">
                    <div className="h-5 w-28 bg-foreground/20 rounded mb-2"></div>
                    <div className="h-full flex items-end justify-between px-2 pt-6">
                      <div className="h-[30%] w-2 bg-primary/60 rounded-t"></div>
                      <div className="h-[45%] w-2 bg-primary/60 rounded-t"></div>
                      <div className="h-[25%] w-2 bg-primary/60 rounded-t"></div>
                      <div className="h-[60%] w-2 bg-primary/60 rounded-t"></div>
                      <div className="h-[75%] w-2 bg-primary/60 rounded-t"></div>
                      <div className="h-[65%] w-2 bg-primary/60 rounded-t"></div>
                      <div className="h-[80%] w-2 bg-primary/60 rounded-t"></div>
                      <div className="h-[90%] w-2 bg-primary rounded-t"></div>
                      <div className="h-[70%] w-2 bg-primary/60 rounded-t"></div>
                      <div className="h-[85%] w-2 bg-primary rounded-t animate-pulse-soft"></div>
                    </div>
                  </div>
                  
                  {/* Pie Chart Mock */}
                  <div className="bg-card/50 rounded-lg p-3 border border-border/20">
                    <div className="h-5 w-28 bg-foreground/20 rounded mb-2"></div>
                    <div className="flex justify-center items-center h-[80%]">
                      <div className="relative w-24 h-24">
                        <div className="absolute inset-0 rounded-full border-8 border-primary/70"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-blue-500/70 border-r-blue-500/70 transform rotate-45"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-b-purple-500/70 transform -rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Table Mock */}
                <div className="bg-card/50 rounded-lg p-3 border border-border/20 grid gap-2">
                  <div className="grid grid-cols-4 border-b border-border/20 pb-2">
                    <div className="h-4 w-16 bg-foreground/20 rounded"></div>
                    <div className="h-4 w-16 bg-foreground/20 rounded"></div>
                    <div className="h-4 w-16 bg-foreground/20 rounded"></div>
                    <div className="h-4 w-16 bg-foreground/20 rounded"></div>
                  </div>
                  {[1, 2, 3].map((row) => (
                    <div key={row} className="grid grid-cols-4 py-2">
                      <div className="h-4 w-20 bg-foreground/10 rounded"></div>
                      <div className="h-4 w-14 bg-foreground/10 rounded"></div>
                      <div className="h-4 w-12 bg-foreground/10 rounded"></div>
                      <div className="h-4 w-16 bg-foreground/10 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
