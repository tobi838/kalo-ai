
import React, { useState } from 'react';
import { ArrowRight, Check, HelpCircle } from 'lucide-react';
import Button from '../components/Button';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small teams just getting started with data analytics.',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        'Up to 5 users',
        '100K data points',
        'Basic analytics',
        '5 dashboards',
        'Email support',
        '7-day data history'
      ],
      limitations: [
        'No AI-powered insights',
        'No custom APIs',
        'Basic visualizations only'
      ],
      cta: 'Start with Starter',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing teams that need more power and advanced analytics capabilities.',
      monthlyPrice: 79,
      annualPrice: 69,
      features: [
        'Up to 20 users',
        '1M data points',
        'Advanced analytics',
        'Unlimited dashboards',
        'Priority support',
        '30-day data history',
        'Basic AI insights',
        'Custom visualizations',
        'Team collaboration'
      ],
      limitations: [],
      cta: 'Start with Professional',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For organizations that require the ultimate in scalability, security, and support.',
      monthlyPrice: 199,
      annualPrice: 179,
      features: [
        'Unlimited users',
        'Unlimited data points',
        'Full analytics suite',
        'Unlimited dashboards',
        'Dedicated support',
        'Unlimited data history',
        'Advanced AI insights',
        'Custom API access',
        'SSO & advanced security',
        'SLA guarantees',
        'Onboarding assistance'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Pricing
            </span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-10 flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <span className={`mr-4 ${annual ? 'text-foreground/60' : 'text-foreground font-medium'}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary/20 transition-colors duration-200 ease-in-out focus:outline-none"
              role="switch"
              aria-checked={annual}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-primary shadow ring-0 transition duration-200 ease-in-out ${
                  annual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`ml-4 ${annual ? 'text-foreground font-medium' : 'text-foreground/60'}`}>
              Annual billing 
              <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Save 15%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 animate-fade-up ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-xl bg-card' 
                    : 'border border-border/50 shadow bg-card/50 hover:shadow-lg hover:-translate-y-1'
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6 border-b border-border/50">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-foreground/70 min-h-[3rem]">{plan.description}</p>
                  
                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-extrabold">
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="ml-1 text-xl font-medium text-foreground/60">/mo</span>
                  </div>
                  
                  {annual && (
                    <p className="mt-1 text-sm text-foreground/60">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </p>
                  )}
                  
                  <div className="mt-6">
                    <Button 
                      fullWidth 
                      icon={<ArrowRight />} 
                      iconPosition="right"
                      variant={plan.popular ? "primary" : "outline"}
                      className={plan.popular ? "shadow-md" : ""}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-medium mb-4">Plan includes:</h4>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className="font-medium mt-6 mb-4 text-foreground/70">Limitations:</h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex">
                            <span className="h-5 w-5 text-foreground/40 flex-shrink-0 mr-2">—</span>
                            <span className="text-foreground/60">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">
              Compare plans in detail
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              See exactly what you get with each plan to make the right choice for your business.
            </p>
          </div>
          
          <div className="mt-16 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-4 pr-8 text-left font-semibold">Features</th>
                  {plans.map((plan, index) => (
                    <th key={index} className="px-4 py-4 text-center font-semibold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { category: 'Core Features', features: [
                    { name: 'Users', starter: 'Up to 5', professional: 'Up to 20', enterprise: 'Unlimited' },
                    { name: 'Data Points', starter: '100K', professional: '1M', enterprise: 'Unlimited' },
                    { name: 'Dashboards', starter: '5', professional: 'Unlimited', enterprise: 'Unlimited' },
                    { name: 'Data History', starter: '7 days', professional: '30 days', enterprise: 'Unlimited' },
                  ]},
                  { category: 'Analytics', features: [
                    { name: 'Basic Analytics', starter: true, professional: true, enterprise: true },
                    { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
                    { name: 'Predictive Analytics', starter: false, professional: false, enterprise: true },
                  ]},
                  { category: 'AI Features', features: [
                    { name: 'Basic AI Insights', starter: false, professional: true, enterprise: true },
                    { name: 'Advanced AI Insights', starter: false, professional: false, enterprise: true },
                    { name: 'Custom AI Models', starter: false, professional: false, enterprise: true },
                  ]},
                  { category: 'Support', features: [
                    { name: 'Email Support', starter: true, professional: true, enterprise: true },
                    { name: 'Priority Support', starter: false, professional: true, enterprise: true },
                    { name: 'Dedicated Support', starter: false, professional: false, enterprise: true },
                    { name: 'SLA Guarantees', starter: false, professional: false, enterprise: true },
                  ]},
                  { category: 'Security & Integration', features: [
                    { name: 'SSO Integration', starter: false, professional: false, enterprise: true },
                    { name: 'Custom API Access', starter: false, professional: true, enterprise: true },
                    { name: 'Advanced Security', starter: false, professional: false, enterprise: true },
                  ]},
                ].map((section, sectionIndex) => (
                  <React.Fragment key={sectionIndex}>
                    <tr className="bg-card/50">
                      <td colSpan={4} className="py-4 px-4 font-semibold">{section.category}</td>
                    </tr>
                    {section.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-border/20">
                        <td className="py-4 pr-8">
                          <div className="flex items-center">
                            <span>{feature.name}</span>
                            <HelpCircle className="ml-1 h-4 w-4 text-foreground/40" />
                          </div>
                        </td>
                        {['starter', 'professional', 'enterprise'].map((plan, i) => (
                          <td key={i} className="px-4 py-4 text-center">
                            {typeof feature[plan] === 'boolean' ? (
                              feature[plan] ? (
                                <Check className="h-5 w-5 text-primary mx-auto" />
                              ) : (
                                <span className="block h-5 w-5 mx-auto">—</span>
                              )
                            ) : (
                              <span>{feature[plan]}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              {
                question: 'Can I switch plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll be prorated for the remainder of your billing cycle. When downgrading, the new rate will apply at the start of your next billing cycle.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, all plans come with a 14-day free trial with full access to all features in that plan. No credit card is required to start your trial.'
              },
              {
                question: 'What happens when I hit my data points limit?',
                answer: 'You\'ll receive a notification when you reach 80% of your data points limit. If you exceed your limit, you can upgrade to a higher plan or purchase additional data points for your current plan.'
              },
              {
                question: 'Do you offer discounts for nonprofits or educational institutions?',
                answer: 'Yes, we offer special pricing for qualified nonprofit organizations and educational institutions. Please contact our sales team for more information.'
              },
              {
                question: 'Can I cancel my subscription anytime?',
                answer: 'Yes, you can cancel your subscription at any time. If you cancel, you\'ll continue to have access to your plan until the end of your current billing cycle.'
              },
              {
                question: 'Do you offer custom plans?',
                answer: 'Yes, for organizations with specific needs that don\'t fit our standard plans, we offer custom plans. Please contact our sales team to discuss your requirements.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border border-border/50 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-foreground/70">{faq.answer}</p>
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
              Still have questions?
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our team is ready to help you find the perfect plan for your needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" icon={<ArrowRight />} iconPosition="right">
                Contact sales
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

export default Pricing;
