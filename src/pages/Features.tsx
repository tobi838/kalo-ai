
import React from 'react';
import { 
  ArrowRight, BarChart3, BrainCircuit, Clock, Code, Cpu, Database, 
  FileText, Globe, LineChart, Lock, MessagesSquare, Puzzle, Shield, Zap 
} from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';

const Features = () => {
  const primaryFeatures = [
    {
      icon: <BarChart3 size={24} />,
      title: 'Advanced Analytics',
      description: 'Leverage sophisticated statistical models to extract meaningful patterns from complex datasets with ease.'
    },
    {
      icon: <BrainCircuit size={24} />,
      title: 'AI-Powered Insights',
      description: 'Our machine learning algorithms analyze your data to predict trends and recommend optimal actions.'
    },
    {
      icon: <LineChart size={24} />,
      title: 'Interactive Visualizations',
      description: 'Create stunning interactive dashboards that transform raw data into compelling visual stories.'
    },
    {
      icon: <Database size={24} />,
      title: 'Universal Data Connectors',
      description: 'Connect to virtually any data source with our extensive library of pre-built connectors and APIs.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time, with changes synced instantly across all devices.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Enterprise-grade Security',
      description: 'Protect your data with end-to-end encryption, role-based access controls, and compliance features.'
    },
  ];

  const secondaryFeatures = [
    {
      icon: <Puzzle size={24} />,
      title: 'Custom Extensions',
      description: 'Extend platform capabilities with custom plugins and integrations to meet your specific needs.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Automated Reporting',
      description: 'Schedule and distribute reports automatically to stakeholders in their preferred format.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Historical Analysis',
      description: 'Access and analyze historical data to understand trends and patterns over time.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Data Governance',
      description: 'Implement comprehensive data governance policies to ensure quality and compliance.'
    },
    {
      icon: <Code size={24} />,
      title: 'Developer APIs',
      description: 'Integrate KaloAI capabilities into your own applications with our comprehensive API.'
    },
    {
      icon: <MessagesSquare size={24} />,
      title: 'AI Chat Assistant',
      description: 'Ask questions about your data in natural language and receive instant insights and visualizations.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Anomaly Detection',
      description: 'Automatically identify unusual patterns or outliers in your data that require attention.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Lightning-fast Performance',
      description: 'Process billions of data points with sub-second query response times for smooth user experience.'
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Features
            </span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Powerful features for modern data teams
          </h1>
          <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Everything you need to transform raw data into actionable insights and drive better business decisions.
          </p>
        </div>
      </section>

      {/* Primary Features Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Core Capabilities
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Essential tools for every data-driven organization
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our platform combines the most powerful data analytics features in one intuitive interface.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {primaryFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 mb-12 lg:mb-0">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Spotlight
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight">
                AI-Powered Insights Engine
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                Our advanced AI analyzes your data in real-time to uncover hidden patterns, predict future trends, and recommend actions that drive business results.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Predictive Analytics',
                    description: 'Forecast future outcomes based on historical data patterns'
                  },
                  {
                    title: 'Natural Language Processing',
                    description: 'Ask questions in plain English and get instant visual answers'
                  },
                  {
                    title: 'Automated Insights',
                    description: 'Receive proactive notifications about significant changes in your data'
                  },
                  {
                    title: 'Custom ML Models',
                    description: 'Deploy your own machine learning models or use our pre-built templates'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="mt-1 text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button icon={<ArrowRight />} iconPosition="right">
                  Explore AI features
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-xl relative">
                {/* This would be a real image or interactive demo in production */}
                <div className="aspect-[3/2] bg-gradient-to-br from-primary/5 to-blue-500/5 relative">
                  {/* Mock AI dashboard UI */}
                  <div className="absolute inset-0 p-6">
                    <div className="h-full flex flex-col bg-card/80 rounded-xl p-4 border border-border/50 shadow-sm backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-lg font-semibold">AI Insights Dashboard</div>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10"></div>
                          <div className="w-8 h-8 rounded-full bg-primary/10"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1 grid grid-cols-12 gap-4">
                        <div className="col-span-8 bg-background/80 rounded-lg p-3 flex flex-col">
                          <div className="text-sm font-medium mb-2">Revenue Forecast</div>
                          <div className="flex-1 flex items-end space-x-1">
                            {[40, 55, 70, 45, 60, 80, 65, 90, 75, 85, 95, 80].map((height, i) => (
                              <div 
                                key={i} 
                                className="flex-1 rounded-t bg-primary/70" 
                                style={{height: `${height}%`}}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="col-span-4 flex flex-col space-y-4">
                          <div className="flex-1 bg-background/80 rounded-lg p-3">
                            <div className="text-sm font-medium mb-2">Anomaly Detection</div>
                            <div className="mt-2 h-4 bg-primary/10 rounded-full overflow-hidden">
                              <div className="h-full bg-primary/60 w-2/3"></div>
                            </div>
                            <div className="mt-2 h-4 bg-primary/10 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500/60 w-1/4"></div>
                            </div>
                            <div className="mt-2 h-4 bg-primary/10 rounded-full overflow-hidden">
                              <div className="h-full bg-primary/60 w-4/5"></div>
                            </div>
                          </div>
                          
                          <div className="flex-1 bg-background/80 rounded-lg p-3">
                            <div className="text-sm font-medium mb-2">Recommendations</div>
                            <div className="space-y-2">
                              <div className="h-4 bg-primary/10 rounded-full w-full"></div>
                              <div className="h-4 bg-primary/10 rounded-full w-3/4"></div>
                              <div className="h-4 bg-primary/10 rounded-full w-1/2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-primary/20 rounded-full filter blur-3xl opacity-70"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-blue-500/20 rounded-full filter blur-3xl opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Features Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              More Features
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Additional capabilities to power your data strategy
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Discover more specialized features designed to help you get the most from your data.
            </p>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {secondaryFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
                hoverEffect={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to experience these features?
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Start your free trial today and discover how KaloAI can transform your approach to data.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" icon={<ArrowRight />} iconPosition="right">
                Start free trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule a demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
