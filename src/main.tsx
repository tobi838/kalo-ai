
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add custom CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes animate-float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes animate-pulse-soft {
    0% { opacity: 0.5; }
    50% { opacity: 0.7; }
    100% { opacity: 0.5; }
  }
  
  .animate-float {
    animation: animate-float 6s ease-in-out infinite;
  }
  
  .animate-pulse-soft {
    animation: animate-pulse-soft 4s ease-in-out infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
  
  .dark .glass {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
