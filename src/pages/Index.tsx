import React from 'react';
import { ArrowRight, BarChart3, Cpu, LineChart, Lock, Shield, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import VideoPlayer from '../components/VideoPlayer';

const Index = () => {
  const features = [
    {
      icon: <BarChart3 size={24} />,
      title: 'Advanced Analytics',
      description: 'Powerful analytics tools to help you understand your data and make better decisions.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'AI-Powered Insights',
      description: 'Leverage artificial intelligence to uncover hidden patterns and predict future trends.'
    },
    {
      icon: <LineChart size={24} />,
      title: 'Real-time Visualization',
      description: 'Interactive dashboards and visualizations that update in real-time as your data changes.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Enterprise Security',
      description: 'Industry-leading security features to keep your data safe and compliant.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Data Governance',
      description: 'Comprehensive tools for managing data access, quality, and compliance.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Lightning Fast',
      description: 'Optimized for performance to handle billions of data points with sub-second response times.'
    }
  ];

  return (
    <>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Key Features
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
              Everything you need to master your data
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our platform combines powerful analytics with an intuitive interface to give you complete control over your data strategy.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
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
      
      {/* How It Works Section */}
      <section className="py-20 sm:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                How It Works
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
                From data to decisions in minutes, not days
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                Our platform simplifies the complex process of data analysis, making it accessible to everyone in your organization.
              </p>
              
              <div className="mt-10 space-y-8">
                {[
                  {
                    number: '01',
                    title: 'Connect your data sources',
                    description: 'Easily integrate with your existing data infrastructure, whether it\'s cloud-based or on-premises.'
                  },
                  {
                    number: '02',
                    title: 'Create interactive visualizations',
                    description: 'Build beautiful dashboards and reports with our drag-and-drop interface, no coding required.'
                  },
                  {
                    number: '03',
                    title: 'Discover AI-powered insights',
                    description: 'Let our intelligent algorithms analyze your data and suggest actions to improve your business.'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-semibold">
                        {step.number}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="mt-1 text-foreground/70">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button icon={<ArrowRight />} iconPosition="right">
                  See it in action
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <VideoPlayer 
                videoSrc="/demo-video.mp4" 
                posterSrc="/dashboard-preview.jpg"
                title="Product Demo"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Testimonials
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
              Trusted by data teams everywhere
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              See what our customers have to say about how KaloAI has transformed their businesses.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "KaloAI has revolutionized how we approach our data strategy. The insights we've gained have directly contributed to a 30% increase in efficiency.",
                author: "Sarah Johnson",
                role: "Data Science Lead",
                company: "TechCorp Inc."
              },
              {
                quote: "The platform is incredibly intuitive. Our entire team was up and running in less than a day, and we were seeing valuable insights almost immediately.",
                author: "Michael Chen",
                role: "VP of Analytics",
                company: "Global Finance"
              },
              {
                quote: "What impressed me most was how the AI features actually delivered practical, actionable recommendations that made sense for our business.",
                author: "Emily Rodriguez",
                role: "Chief Data Officer",
                company: "Retail Giants"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 inline-block text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="flex-grow">
                    <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                  </blockquote>
                  
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-foreground/60">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to transform your data strategy?
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Join thousands of companies that are using KaloAI to unlock the full potential of their data.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" icon={<ArrowRight />} iconPosition="right">
                Get started free
              </Button>
              <Button variant="outline" size="lg">
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
