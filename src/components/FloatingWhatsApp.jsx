import React from "react";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "+919876543210";
  const defaultMessage = "Hello RK Organics, I would like to know more about your Ayurvedic products.";
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Ripple Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25d366]/40 animate-ping group-hover:animate-none"></span>
      
      {/* Icon */}
      <MessageSquare className="w-6 h-6 relative z-10 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-forest text-beige-light px-3 py-1.5 text-xs font-medium rounded-lg shadow-md whitespace-nowrap opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none border border-gold/20">
        Chat with us
      </span>
    </a>
  );
}
