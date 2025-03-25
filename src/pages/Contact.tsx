
import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    privacyPolicy: false
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.privacyPolicy) {
      toast({
        title: "Error",
        description: "Please accept the privacy policy",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        privacyPolicy: false
      });
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error('Error submitting the form:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Contact Us
            </span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Get in touch with our team
          </h1>
          <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Have questions about our platform? Want to schedule a demo or discuss your specific needs?
            We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Main Contact Content */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form Column */}
            <div className="md:col-span-2">
              <div className="bg-background rounded-xl border border-border/50 shadow-sm p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      id="privacyPolicy"
                      name="privacyPolicy"
                      type="checkbox"
                      checked={formData.privacyPolicy}
                      onChange={handleCheckboxChange}
                      className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/50"
                      required
                    />
                    <label htmlFor="privacyPolicy" className="ml-2 text-sm text-foreground/80">
                      I agree to the <a href="#" className="text-primary hover:underline">privacy policy</a> and consent to being contacted regarding my request.
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    icon={<ArrowRight />}
                    iconPosition="right"
                    className="w-full sm:w-auto"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Information Column */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-foreground/70 mb-2">Our friendly team is here to help</p>
                    <a href="mailto:hello@kaloai.com" className="text-primary hover:underline">
                      hello@kaloai.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {/* Simple icon placeholder */}
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                <div className="space-y-2 text-foreground/80">
                  <p>Monday - Friday: 9AM - 6PM EST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Headquarters</h3>
                <address className="not-italic text-foreground/80">
                  123 Innovation Drive<br />
                  Tech District<br />
                  San Francisco, CA 94103<br />
                  United States
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-foreground/70">
              Find answers to common questions about our platform and services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I get started with KaloAI?",
                answer: "Getting started is easy! Simply create a free account, connect your data sources, and our platform will guide you through the setup process. We also offer onboarding sessions for new users."
              },
              {
                question: "Can I try KaloAI before purchasing?",
                answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card is required to start your trial."
              },
              {
                question: "What kind of support do you offer?",
                answer: "We provide 24/7 technical support via chat, email, and phone. Our customer success team is also available to help with onboarding, training, and strategic guidance."
              },
              {
                question: "How secure is my data on your platform?",
                answer: "Security is our top priority. We use enterprise-grade encryption, maintain strict access controls, and are compliant with major security frameworks and regulations including GDPR, HIPAA, and SOC 2."
              },
              {
                question: "Can I connect KaloAI to my existing tools?",
                answer: "Yes! KaloAI integrates seamlessly with popular business tools and data sources including Salesforce, Google Analytics, Shopify, QuickBooks, and many more."
              },
              {
                question: "What is your pricing model?",
                answer: "We offer flexible subscription plans based on your needs. Pricing depends on factors like data volume, number of users, and required features. Visit our pricing page for details or contact us for a custom quote."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-foreground/80">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4">
              Can't find the answer you're looking for?
            </p>
            <Button
              onClick={() => {
                // Scroll to contact form
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ask us directly
            </Button>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-gray-200">
            {/* Placeholder for a map */}
            <div className="h-full w-full flex items-center justify-center bg-primary/5">
              <p className="text-foreground/50 text-lg">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
