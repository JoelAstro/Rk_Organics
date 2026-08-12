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
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card-premium overflow-hidden group flex flex-col justify-between bg-white/60"
    >
      {/* Formulation image placeholder */}
      <div className="h-56 overflow-hidden relative bg-cream">
        <motion.img
          src={formulation.image}
          alt={formulation.displayName}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-forest px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border border-forest/10 font-button">
          {formulation.displayName}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="font-serif text-2xl font-bold text-forest-dark leading-tight group-hover:text-forest transition-colors">
            {formulation.teluguTitle}
          </h3>
          
          <div className="flex gap-1.5 text-terracotta items-center">
            <AlertCircle size={12} className="flex-shrink-0" />
            <span className="text-[9px] font-bold uppercase tracking-wider font-button">
              {formulation.concerns}
            </span>
          </div>

          <p className="text-charcoal-light text-xs leading-relaxed italic font-sans line-clamp-2">
            {formulation.description}
          </p>
        </div>

        {/* Action Panel Buttons */}
        <div className="flex flex-col gap-2 pt-2">
          {/* View Details */}
          <button
            onClick={() => onOpenDetails(formulation)}
            className="w-full py-2.5 bg-forest hover:bg-forest-light text-white font-bold text-center rounded-xl text-xs uppercase tracking-wider transition-all duration-300 font-button flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Eye size={14} /> View Details
          </button>
          
          {/* WhatsApp Inquire */}
          <a
            href={getWhatsAppLink(formulation.displayName)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 border border-forest/20 hover:border-forest text-forest text-center font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 font-button flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <MessageSquare size={14} /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
