
import React, { useState } from 'react';
import { ArrowRight, Building, LineChart, Lightbulb, ShoppingCart, Briefcase, Shield } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Solutions = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const industries = [
    {
      icon: <Building size={24} />,
      title: 'Finance',
      description: 'Optimize investment strategies, detect fraud, and improve risk management with data-driven insights.',
      benefits: [
        'Real-time fraud detection',
        'Market trend analysis',
        'Risk assessment automation',
        'Regulatory compliance monitoring'
      ],
      id: 'finance'
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'Retail',
      description: 'Enhance customer experiences, optimize inventory, and boost sales through data-powered decision making.',
      benefits: [
        'Customer segmentation',
        'Inventory optimization',
        'Demand forecasting',
        'Personalized recommendations'
      ],
      id: 'retail'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Manufacturing',
      description: 'Streamline operations, prevent downtime, and improve quality control through data intelligence.',
      benefits: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Production efficiency analysis'
      ],
      id: 'manufacturing'
    }
  ];

  const useCases = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with interactive dashboards and automated reporting.',
      icon: <LineChart size={24} />,
      benefits: [
        'Interactive visualization dashboards',
        'Automated report generation',
        'Data exploration tools',
        'Performance metric tracking'
      ],
      id: 'business-intelligence'
    },
    {
      title: 'Advanced Analytics',
      description: 'Leverage sophisticated analytical models to uncover hidden patterns and predict future outcomes.',
      icon: <Lightbulb size={24} />,
      benefits: [
        'Predictive modeling',
        'Anomaly detection',
        'Trend analysis',
        'What-if scenario planning'
      ],
      id: 'advanced-analytics'
    },
    {
      title: 'Data Governance',
      description: 'Ensure data quality, security, and compliance across your entire organization.',
      icon: <Shield size={24} />,
      benefits: [
        'Access control management',
        'Data lineage tracking',
        'Compliance monitoring',
        'Quality assurance automation'
      ],
      id: 'data-governance'
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
            Data solutions for every industry
          </h1>
          <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Discover how KaloAI can solve your industry-specific data challenges and unlock new opportunities for growth.
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Industry Solutions
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Tailored solutions for your industry
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our platform adapts to the unique challenges and opportunities in your specific industry.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2">
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
              Solving real business challenges
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Explore how KaloAI addresses specific use cases across different business functions.
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
                                  <div className="bg-background/80 rounded-lg p-3 h-32"></div>
                                  <div className="bg-background/80 rounded-lg p-3 h-32"></div>
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
                                        <div className="text-2xl font-bold">87%</div>
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
              See how customers are succeeding with KaloAI
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Real stories from real customers who transformed their businesses with our platform.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                company: 'GlobalFinance',
                industry: 'Finance',
                title: '40% faster insights for investment decisions',
                logo: 'GF',
                image: 'finance',
                id: 'case-finance'
              },
              {
                company: 'RetailGiant',
                industry: 'Retail',
                title: '52% increase in inventory efficiency and reduced costs',
                logo: 'RG',
                image: 'retail',
                id: 'case-retail'
              },
              {
                company: 'ManufacturePro',
                industry: 'Manufacturing',
                title: '35% reduction in maintenance costs with predictive analytics',
                logo: 'MP',
                image: 'manufacturing',
                id: 'case-manufacturing'
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
              Ready to solve your data challenges?
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our team of experts is ready to help you implement the right solution for your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                icon={<ArrowRight />} 
                iconPosition="right" 
                href="/contact"
              >
                Talk to an expert
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

      {/* Dialogs for each industry and use case */}
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
                Explore how KaloAI helps {industry.title.toLowerCase()} companies transform their data.
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
                  Our {industry.title.toLowerCase()} solution integrates seamlessly with your existing systems and processes.
                  The platform collects and analyzes data from multiple sources, providing actionable insights through 
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
                <h4 className="font-medium mb-3">Implementation Process</h4>
                <p className="text-foreground/80 mb-4">
                  Our team works closely with you to understand your needs, configure the platform, 
                  integrate with your data sources, and train your team to get the most value from the solution.
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
          id: 'case-finance',
          company: 'GlobalFinance',
          industry: 'Finance',
          challenge: 'Struggling with slow data analysis that delayed critical investment decisions.',
          solution: 'Implemented KaloAI\'s real-time analytics platform with custom financial models.',
          results: [
            '40% faster insights generation',
            '22% improvement in investment returns',
            '65% reduction in manual reporting time',
            'Enhanced regulatory compliance reporting'
          ]
        },
        {
          id: 'case-retail',
          company: 'RetailGiant',
          industry: 'Retail',
          challenge: 'Inefficient inventory management resulting in overstock and stockouts across 200+ locations.',
          solution: 'Deployed KaloAI\'s predictive inventory system with demand forecasting and automated replenishment.',
          results: [
            '52% increase in inventory efficiency',
            '28% reduction in carrying costs',
            '35% fewer stockouts',
            'Improved customer satisfaction scores by 18%'
          ]
        },
        {
          id: 'case-manufacturing',
          company: 'ManufacturePro',
          industry: 'Manufacturing',
          challenge: 'Frequent unexpected equipment failures causing costly production downtime.',
          solution: 'Implemented KaloAI\'s predictive maintenance solution with IoT sensor integration.',
          results: [
            '35% reduction in maintenance costs',
            '45% decrease in unplanned downtime',
            '20% improvement in equipment lifespan',
            '12% increase in overall production capacity'
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
