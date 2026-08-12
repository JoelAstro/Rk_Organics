import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const getWhatsAppLink = () => {
    const defaultMsg = "Hello RK Organics, I would like to know more about your products.";
    // Using a safe placeholder number until client provides theirs
    return `https://wa.me/+919876543210?text=${encodeURIComponent(defaultMsg)}`;
  };

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25d366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Ripple Ping Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25d366]/40 animate-ping group-hover:animate-none"></span>
      
      {/* Lucide MessageCircle Icon */}
      <MessageCircle className="w-6 h-6 relative z-10 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-forest text-white px-3 py-1.5 text-xs font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none border border-gold/20 font-button">
        Chat with RK Organics
      </span>
    </a>
  );
}
