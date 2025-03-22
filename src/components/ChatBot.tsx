
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

type Message = {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

type ChatBotProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ChatBot = ({ isOpen, onClose }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm your KaloAI sales assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = getBotResponse(inputValue.toLowerCase());
      
      const botReply: Message = {
        text: botResponses,
        sender: 'bot',
        timestamp: new Date(),
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botReply]);
    }, 1500);
  };

  const getBotResponse = (input: string): string => {
    // Simple keyword matching for more contextual responses
    if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      return "Our pricing starts at $24/month for the Starter plan, $69/month for Professional, and $179/month for Enterprise when billed annually. Would you like more specific information about a particular plan?";
    } else if (input.includes('trial') || input.includes('free')) {
      return "Yes, all our plans include a 14-day free trial with full access to features. No credit card required to start. Would you like me to help you get started?";
    } else if (input.includes('discount') || input.includes('offer')) {
      return "We offer special discounts for nonprofits and educational institutions. I can have someone from our team contact you with more information. Could you share your email address?";
    } else if (input.includes('enterprise') || input.includes('custom')) {
      return "Our Enterprise plan is customizable to your organization's needs. It includes unlimited users, data points, and advanced security features. Would you like me to arrange a call with our sales team to discuss your specific requirements?";
    } else if (input.includes('feature') || input.includes('capability')) {
      return "Our platform offers advanced analytics, AI-powered insights, custom dashboards, and team collaboration tools. The specific features vary by plan. Which capabilities are most important for your use case?";
    } else if (input.includes('support') || input.includes('help')) {
      return "We offer email support for all plans, with priority support for Professional and dedicated support for Enterprise customers. Our Enterprise plan also includes onboarding assistance and SLA guarantees.";
    } else if (input.includes('security') || input.includes('compliance')) {
      return "Security is a top priority for us. We offer SSO and advanced security features with our Enterprise plan, and all plans use encryption for data protection. Do you have specific compliance requirements?";
    } else if (input.includes('compare') || input.includes('difference')) {
      return "The main differences between our plans are the number of users, data points, and available features. The Starter plan is best for individuals and small teams, Professional for growing teams needing more power, and Enterprise for organizations requiring maximum scalability and security.";
    } else if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
      return "Hello! I'm your KaloAI sales assistant. How can I help you today? Feel free to ask about our pricing, features, or anything else about our platform.";
    } else if (input.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with today?";
    } else if (input.includes('human') || input.includes('person') || input.includes('sales rep')) {
      return "I'd be happy to connect you with a human sales representative. Could you please provide your email address so someone from our team can reach out to you?";
    } else {
      const genericResponses = [
        "That's a great question! Our Enterprise plan includes unlimited users and advanced AI insights. Would you like me to connect you with a human sales rep for more details?",
        "We offer custom plans for organizations with specific needs. Can you tell me more about your requirements?",
        "I'd be happy to provide more information about that. To better assist you, could you share a bit more about what you're looking for?",
        "Thanks for your interest! Is there a specific aspect of our platform you'd like to know more about?",
        "I can definitely help with that. Could you provide a bit more detail about your use case so I can give you the most relevant information?",
      ];
      
      return genericResponses[Math.floor(Math.random() * genericResponses.length)];
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 flex flex-col bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden transition-all duration-300 ${
      isMinimized ? 'w-72 h-16' : 'w-80 sm:w-96 h-[500px] max-h-[80vh]'
    }`}>
      {/* Chat header */}
      <div className="bg-primary/10 p-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
            <Bot size={18} className="text-primary" />
          </div>
          <h3 className="font-medium">Sales Assistant</h3>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setIsMinimized(!isMinimized)} 
            className="p-1.5 hover:bg-primary/10 rounded-full transition-colors"
          >
            {isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <button 
            onClick={onClose} 
            className="p-1.5 hover:bg-primary/10 rounded-full transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
      
      {!isMinimized && (
        <>
          {/* Message container */}
          <div className="flex-grow p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 max-w-[85%] ${
                  message.sender === 'user' ? 'ml-auto' : 'mr-auto'
                }`}
              >
                <div
                  className={`p-3 rounded-xl ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-none'
                      : 'bg-card border border-border/50 rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-xs mt-1 text-foreground/60 ${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="mb-4 max-w-[85%] mr-auto">
                <div className="p-3 rounded-xl bg-card border border-border/50 rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-3 border-t border-border/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none bg-card"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                variant={inputValue.trim() ? "default" : "ghost"}
                disabled={!inputValue.trim() || isTyping}
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;
