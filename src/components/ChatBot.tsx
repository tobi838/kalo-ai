
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, ChevronDown, ChevronUp, Minimize2, Maximize2 } from 'lucide-react';
import Button from './Button';

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

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to tell you more about our pricing plans. What specific information are you looking for?",
        "That's a great question! Our Enterprise plan includes unlimited users and advanced AI insights. Would you like me to connect you with a human sales rep for more details?",
        "We offer custom plans for organizations with specific needs. Can you tell me more about your requirements?",
        "Yes, all our plans include a 14-day free trial with full access to features. Would you like me to help you get started?",
        "We do offer special discounts for nonprofits and educational institutions. I can have someone from our team contact you with more information.",
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const botReply: Message = {
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
                variant={inputValue.trim() ? 'primary' : 'ghost'}
                disabled={!inputValue.trim()}
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
