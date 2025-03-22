
import React, { useState } from 'react';
import { ArrowRight, BarChart, LineChart, TrendingUp, Video, ShoppingCart, Users } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Solutions = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const industries = [
    {
      icon: <Video size={24} />,
      title: 'Content Creators',
      description: 'Understand your audience engagement, optimize content strategy, and maximize monetization opportunities.',
      benefits: [
        'Content performance analytics',
        'Audience growth tracking',
        'Engagement rate optimization',
        'Revenue stream analysis'
      ],
      id: 'creators'
    },
    {
      icon: <Users size={24} />,
      title: 'Influencers',
      description: 'Track your social impact, demonstrate value to brand partners, and optimize your content for maximum engagement.',
      benefits: [
        'Cross-platform analytics',
        'Sponsored content ROI tracking',
        'Audience demographic insights',
        'Performance benchmarking'
      ],
      id: 'influencers'
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'E-commerce Sellers',
      description: 'Optimize your product listings, understand customer behavior, and increase sales through data-driven decisions.',
      benefits: [
        'Product performance tracking',
        'Customer behavior insights',
        'Sales funnel optimization',
        'Competitive market analysis'
      ],
      id: 'ecommerce'
    }
  ];

  const useCases = [
    {
      title: 'Social Media Analytics',
      description: 'Comprehensive insights across all social platforms with unified metrics for true performance understanding.',
      icon: <BarChart size={24} />,
      benefits: [
        'Cross-platform performance metrics',
        'Content strategy recommendations',
        'Audience growth tracking',
        'Engagement pattern analysis'
      ],
      id: 'social-analytics'
    },
    {
      title: 'Trend Detection',
      description: 'Stay ahead of viral content and market trends to position your content and products for maximum impact.',
      icon: <TrendingUp size={24} />,
      benefits: [
        'Real-time trend alerts',
        'Category-specific insights',
        'Competitive trend analysis',
        'Early opportunity detection'
      ],
      id: 'trend-detection'
    },
    {
      title: 'Revenue Optimization',
      description: 'Maximize your earnings by understanding which content, products, and strategies drive the most revenue.',
      icon: <LineChart size={24} />,
      benefits: [
        'Revenue stream analysis',
        'Monetization strategy testing',
        'Pricing optimization',
        'Conversion rate improvement'
      ],
      id: 'revenue-optimization'
    }
  ];

  // Function to close dialog
  const closeDialog = () => setOpenDialog(null);

  // Function to open a specific dialog
  const openSpecificDialog = (id: string) => () => setOpenDialog(id);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Solutions
            </span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Analytics for creators and sellers
          </h1>
          <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Discover how KaloAI helps content creators, influencers, and e-commerce sellers make data-driven decisions to grow their business.
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Tailored Solutions
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Built for your specific needs
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our platform adapts to the unique challenges and opportunities in your specific industry.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-background border border-border/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10 text-primary">
                    {industry.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-foreground/70 mb-6">{industry.description}</p>
                  
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      icon={<ArrowRight size={16} />} 
                      iconPosition="right"
                      onClick={openSpecificDialog(industry.id)}
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Use Cases
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Solving real creator challenges
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Explore how KaloAI addresses specific challenges in content creation, social influence, and e-commerce.
            </p>
          </div>
          
          <div className="mt-16">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="mb-12 lg:mb-24 animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                  <div className={`mb-12 lg:mb-0 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10 text-primary">
                      {useCase.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-lg text-foreground/70 mb-6">{useCase.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {useCase.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-foreground/80">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      icon={<ArrowRight />} 
                      iconPosition="right"
                      onClick={openSpecificDialog(useCase.id)}
                    >
                      Explore this solution
                    </Button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-lg relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5">
                        {/* Mock UI for each use case */}
                        <div className="absolute inset-0 p-6">
                          <div className="h-full flex flex-col bg-card/80 rounded-xl p-4 border border-border/50 shadow-sm backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-4">
                              <div className="text-lg font-semibold">{useCase.title} Dashboard</div>
                              <div className="flex space-x-2">
                                <div className="w-8 h-8 rounded-full bg-primary/10"></div>
                                <div className="w-8 h-8 rounded-full bg-primary/10"></div>
                              </div>
                            </div>
                            
                            {index === 0 && (
                              <div className="flex-1 grid grid-cols-12 gap-4">
                                <div className="col-span-4 space-y-4">
                                  <div className="bg-background/80 rounded-lg p-3 h-32 flex flex-col justify-center items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 mb-2"></div>
                                    <div className="h-4 w-16 bg-primary/10 rounded-md"></div>
                                    <div className="h-3 w-12 bg-primary/10 rounded-md mt-1"></div>
                                  </div>
                                  <div className="bg-background/80 rounded-lg p-3 h-32 flex flex-col justify-center items-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 mb-2"></div>
                                    <div className="h-4 w-16 bg-primary/10 rounded-md"></div>
                                    <div className="h-3 w-12 bg-primary/10 rounded-md mt-1"></div>
                                  </div>
                                </div>
                                <div className="col-span-8 bg-background/80 rounded-lg p-3">
                                  <div className="h-8 w-1/3 bg-primary/10 rounded-md mb-4"></div>
                                  <div className="h-64 grid grid-cols-3 gap-2">
                                    <div className="bg-primary/10 rounded-md"></div>
                                    <div className="bg-blue-500/10 rounded-md"></div>
                                    <div className="bg-purple-500/10 rounded-md"></div>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {index === 1 && (
                              <div className="flex-1 grid grid-cols-12 gap-4">
                                <div className="col-span-8 bg-background/80 rounded-lg p-3">
                                  <div className="h-8 w-1/3 bg-primary/10 rounded-md mb-4"></div>
                                  <div className="h-64 flex items-end space-x-2">
                                    {[30, 60, 40, 80, 50, 70, 90, 45, 65, 75, 55, 85].map((height, i) => (
                                      <div 
                                        key={i} 
                                        className="flex-1 rounded-t bg-primary/60" 
                                        style={{height: `${height}%`}}
                                      ></div>
                                    ))}
                                  </div>
                                </div>
                                <div className="col-span-4 space-y-4">
                                  <div className="bg-background/80 rounded-lg p-3 h-20"></div>
                                  <div className="bg-background/80 rounded-lg p-3 h-20"></div>
                                  <div className="bg-background/80 rounded-lg p-3 h-20"></div>
                                </div>
                              </div>
                            )}
                            
                            {index === 2 && (
                              <div className="flex-1 grid grid-cols-12 gap-4">
                                <div className="col-span-5 bg-background/80 rounded-lg p-3">
                                  <div className="h-8 w-2/3 bg-primary/10 rounded-md mb-4"></div>
                                  <div className="space-y-2">
                                    {[...Array(8)].map((_, i) => (
                                      <div key={i} className="h-6 bg-primary/10 rounded-md"></div>
                                    ))}
                                  </div>
                                </div>
                                <div className="col-span-7 bg-background/80 rounded-lg p-3">
                                  <div className="h-8 w-1/3 bg-primary/10 rounded-md mb-4"></div>
                                  <div className="h-64 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="w-32 h-32 rounded-full border-8 border-primary/30 flex items-center justify-center">
                                        <div className="text-2xl font-bold">+28%</div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-24 flex justify-between items-end">
                                      <div className="h-12 w-16 bg-green-500/20 rounded-t"></div>
                                      <div className="h-20 w-16 bg-primary/20 rounded-t"></div>
                                      <div className="h-8 w-16 bg-yellow-500/20 rounded-t"></div>
                                      <div className="h-4 w-16 bg-red-500/20 rounded-t"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-primary/20 rounded-full filter blur-2xl opacity-70"></div>
                      <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-24 h-24 bg-blue-500/20 rounded-full filter blur-2xl opacity-70"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Success Stories
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              See how creators and sellers succeed with KaloAI
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Real stories from real users who transformed their businesses with our platform.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                company: 'Fashion Influencer',
                industry: 'Influencer',
                title: '67% growth in engagement with data-driven content strategy',
                logo: 'FI',
                image: 'influencer',
                id: 'case-influencer'
              },
              {
                company: 'Tech Review Channel',
                industry: 'Content Creator',
                title: '45% increase in revenue through optimized sponsorship deals',
                logo: 'TR',
                image: 'creator',
                id: 'case-creator'
              },
              {
                company: 'Handmade Store',
                industry: 'E-commerce',
                title: '52% boost in conversions with targeted product strategy',
                logo: 'HS',
                image: 'ecommerce',
                id: 'case-ecommerce'
              }
            ].map((study, index) => (
              <div 
                key={index}
                className="rounded-xl overflow-hidden bg-background border border-border/50 shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-blue-500/10 relative">
                  {/* Company logo placeholder */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-card flex items-center justify-center font-bold text-primary border border-primary/20">
                    {study.logo}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{study.company}</h3>
                      <p className="text-sm text-foreground/60">{study.industry}</p>
                    </div>
                  </div>
                  
                  <p className="font-medium mb-6">{study.title}</p>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    icon={<ArrowRight size={16} />} 
                    iconPosition="right"
                    onClick={openSpecificDialog(study.id)}
                  >
                    Read case study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to grow your online business?
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Join thousands of creators and sellers who use KaloAI to make smarter, data-driven decisions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                icon={<ArrowRight />} 
                iconPosition="right" 
                href="/contact"
              >
                Start your free trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="/features"
              >
                View all features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dialogs for each industry */}
      {industries.map((industry) => (
        <Dialog key={industry.id} open={openDialog === industry.id} onOpenChange={closeDialog}>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                  {industry.icon}
                </div>
                {industry.title} Solutions
              </DialogTitle>
              <DialogDescription>
                Explore how KaloAI helps {industry.title.toLowerCase()} transform their data into growth.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-foreground/80">{industry.description}</p>
              
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Key Benefits</h4>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4">
                <h4 className="font-medium mb-3">How it works</h4>
                <p className="text-foreground/80 mb-4">
                  Our solution for {industry.title.toLowerCase()} integrates with all your platforms and tools.
                  The analytics engine collects data across channels, providing actionable insights through 
                  intuitive dashboards and automated reports.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/features">Explore Features</Button>
                  <Button variant="outline" href="/contact">Schedule a Demo</Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}

      {/* Dialogs for use cases */}
      {useCases.map((useCase) => (
        <Dialog key={useCase.id} open={openDialog === useCase.id} onOpenChange={closeDialog}>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                  {useCase.icon}
                </div>
                {useCase.title}
              </DialogTitle>
              <DialogDescription>
                Learn how our {useCase.title.toLowerCase()} solution can transform your business.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-foreground/80">{useCase.description}</p>
              
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Key Capabilities</h4>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4">
                <h4 className="font-medium mb-3">Getting Started</h4>
                <p className="text-foreground/80 mb-4">
                  Getting started is easy. Connect your accounts, import your data, and within minutes 
                  you'll have access to powerful insights that can transform your business strategy.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/features">See All Features</Button>
                  <Button variant="outline" href="/contact">Request a Demo</Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}

      {/* Dialogs for case studies */}
      {[
        {
          id: 'case-influencer',
          company: 'Fashion Influencer',
          industry: 'Influencer',
          challenge: 'Struggling to grow audience engagement despite consistent content posting.',
          solution: 'Implemented KaloAI\'s analytics suite to identify optimal posting times and content themes.',
          results: [
            '67% increase in engagement rates',
            '43% growth in followers within 3 months',
            '85% more brand partnership inquiries',
            '2.5x increase in average post reach'
          ]
        },
        {
          id: 'case-creator',
          company: 'Tech Review Channel',
          industry: 'Content Creator',
          challenge: 'Unable to optimize monetization strategies due to lack of audience insights.',
          solution: 'Used KaloAI\'s audience analysis and content performance tracking to negotiate better sponsorships.',
          results: [
            '45% increase in sponsorship revenue',
            '32% improvement in video completion rates',
            '28% growth in channel subscribers',
            'Secured 3 long-term brand partnerships'
          ]
        },
        {
          id: 'case-ecommerce',
          company: 'Handmade Store',
          industry: 'E-commerce',
          challenge: 'Struggling with inconsistent sales and difficulty identifying profitable products.',
          solution: 'Implemented KaloAI\'s e-commerce analytics to track product performance and customer behavior.',
          results: [
            '52% increase in conversion rates',
            '38% reduction in ad spend waste',
            '73% improvement in inventory turnover',
            '41% increase in average order value'
          ]
        }
      ].map((study) => (
        <Dialog key={study.id} open={openDialog === study.id} onOpenChange={closeDialog}>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>{study.company} Case Study</DialogTitle>
              <DialogDescription>
                {study.industry} - Success Story
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Challenge</h4>
                <p className="text-foreground/80">{study.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-medium">Solution</h4>
                <p className="text-foreground/80">{study.solution}</p>
              </div>
              
              <div>
                <h4 className="font-medium">Results</h4>
                <ul className="space-y-2 mt-2">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4">
                <Button href="/contact">Get Similar Results</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default Solutions;
