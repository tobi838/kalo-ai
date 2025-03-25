
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import ChatBot from './ChatBot';

const ChatSupportButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Floating chat button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          onClick={toggleChat}
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg"
        >
          <MessageCircle size={24} />
        </Button>
      </div>

      {/* Chat bot component */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default ChatSupportButton;
