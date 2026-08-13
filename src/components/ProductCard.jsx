import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Eye, AlertCircle } from "lucide-react";

export default function ProductCard({ formulation, onOpenDetails }) {
  const getWhatsAppLink = (name) => {
    const msg = `Hello RK Organics, I would like to know more about ${name}.`;
    return `https://wa.me/+919876543210?text=${encodeURIComponent(msg)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-card-dark overflow-hidden flex flex-col justify-between h-full bg-white border border-sand-light shadow-sm hover:shadow-md"
    >
      {/* Product Image Frame */}
      <div className="h-56 overflow-hidden relative bg-sand-light">
        <img
          src={formulation.image}
          alt={formulation.displayName}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-botanical/90 backdrop-blur-md text-cream px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border border-botanical/10 font-button">
          {formulation.displayName}
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="font-serif text-2xl font-bold text-botanical-dark leading-tight group-hover:text-botanical transition-colors">
            {formulation.teluguTitle}
          </h3>

          <div className="flex gap-1.5 text-terracotta items-center">
            <AlertCircle size={12} className="flex-shrink-0" />
            <span className="text-[9px] font-bold uppercase tracking-wider font-button opacity-90">
              {formulation.concerns}
            </span>
          </div>

          <p className="text-charcoal-green/80 text-xs leading-relaxed italic font-sans line-clamp-2">
            {formulation.description}
          </p>
        </div>

        {/* Action Panel Buttons */}
        <div className="flex flex-col gap-2 pt-2">
          {/* View Details */}
          <button
            onClick={() => onOpenDetails(formulation)}
            className="w-full py-3 bg-botanical hover:bg-botanical-light text-cream font-bold text-center rounded-xl text-xs uppercase tracking-wider transition-all duration-300 font-button flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Eye size={14} /> View Details
          </button>
          
          {/* Ask WhatsApp */}
          <a
            href={getWhatsAppLink(formulation.displayName)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 border border-botanical/20 hover:border-botanical text-botanical text-center font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 font-button flex items-center justify-center gap-1.5 cursor-pointer bg-white"
          >
            <MessageSquare size={14} /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
