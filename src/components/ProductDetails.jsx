import React, { useState, useEffect } from "react";
import { X, MessageSquare, AlertTriangle, ShieldCheck, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetails({ formulation, isOpen, onClose }) {
  const [showFullIngredients, setShowFullIngredients] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !formulation) return null;

  const getWhatsAppLink = (name) => {
    const msg = `Hello RK Organics, I would like to know more about ${name}.`;
    return `https://wa.me/+919876543210?text=${encodeURIComponent(msg)}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-ivory border border-gold/30 rounded-[32px] max-w-4xl w-full p-6 sm:p-8 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal p-2.5 rounded-full hover:bg-forest/5 transition-all cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Image and Action CTA - 5/12 */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden bg-cream border border-forest/5 shadow-inner">
                <img
                  src={formulation.image}
                  alt={formulation.displayName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={getWhatsAppLink(formulation.displayName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium w-full py-4 bg-forest hover:bg-forest-light text-white font-bold text-center rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={16} /> Ask RK Organics
                </a>
                
                <button
                  onClick={onClose}
                  className="w-full py-3 border border-forest/20 hover:border-forest text-forest hover:bg-forest/5 font-semibold text-center rounded-xl text-xs uppercase tracking-wider transition-all font-button cursor-pointer"
                >
                  Close Details
                </button>
              </div>

              {/* Traditional Certification Compliance Info */}
              <div className="p-4 bg-sand/30 border border-forest/5 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="text-gold w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-forest block font-button">Heritage Formulation</span>
                  <p className="text-[10px] text-charcoal-light leading-relaxed">
                    Prepared following traditional recipes from classical Ayurvedic texts.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Descriptions & Details - 7/12 */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">
                  {formulation.displayName}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-dark leading-tight">
                  {formulation.teluguTitle}
                </h2>
                <p className="text-terracotta text-xs font-semibold font-button uppercase tracking-wider">
                  Target: {formulation.concerns}
                </p>
              </div>

              {/* About Section */}
              <div className="space-y-2">
                <h3 className="font-button text-xs font-bold uppercase tracking-widest text-forest">
                  About this Formulation
                </h3>
                <p className="text-charcoal-light text-xs leading-relaxed italic">
                  {formulation.description}
                </p>
              </div>

              {/* Ingredients List Section */}
              <div className="space-y-3">
                <h3 className="font-button text-xs font-bold uppercase tracking-widest text-forest">
                  Ingredients ({formulation.ingredients.length} total)
                </h3>

                {formulation.ingredients.length > 12 ? (
                  <div className="space-y-3">
                    {!showFullIngredients ? (
                      <div className="space-y-2">
                        <p className="text-xs text-charcoal-light leading-relaxed font-sans">
                          Includes: <span className="font-semibold">{formulation.ingredients.slice(0, 8).join(", ")}</span>...
                        </p>
                        <button
                          onClick={() => setShowFullIngredients(true)}
                          className="px-4 py-2 border border-forest/20 hover:border-forest text-forest hover:bg-forest/5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer font-button"
                        >
                          <ChevronDown size={14} /> View Complete Ingredients ({formulation.ingredients.length} items)
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-48 overflow-y-auto pr-2 custom-scroll border border-forest/5 rounded-2xl p-4 bg-sand/35">
                          {formulation.ingredients.map((ing, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-light">
                              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                              <span>{ing}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => setShowFullIngredients(false)}
                          className="px-4 py-2 border border-forest/20 hover:border-forest text-forest hover:bg-forest/5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer font-button"
                        >
                          <ChevronUp size={14} /> Collapse Ingredient List
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 border border-forest/5 rounded-2xl p-4 bg-sand/35">
                    {formulation.ingredients.map((ing, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-light">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        <span>{ing}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Preparation block */}
              <div className="space-y-2">
                <h3 className="font-button text-xs font-bold uppercase tracking-widest text-forest">
                  Traditional Preparation
                </h3>
                <p className="text-charcoal-light text-xs leading-relaxed italic">
                  {formulation.preparation}
                </p>
              </div>

              {/* Usage block */}
              <div className="p-4 bg-forest/5 rounded-2xl border border-forest/10 space-y-2">
                <div className="flex gap-2 text-forest">
                  <AlertTriangle size={15} className="flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-button">Usage & Suitability</span>
                </div>
                <p className="text-[11px] text-charcoal-light leading-relaxed font-sans">
                  {formulation.usage}
                </p>
              </div>

              {/* Legal disclaimer */}
              <div className="p-3.5 bg-terracotta/5 border border-terracotta/10 rounded-xl">
                <p className="text-[10px] text-charcoal-light leading-relaxed font-sans text-justify">
                  <span className="font-bold text-terracotta block mb-0.5 uppercase tracking-wide">Notice</span>
                  Ayurvedic herbo-mineral preparations require careful lifestyle protocols. Do not substitute online summaries for clinical advice. Always consult an Ayurvedic practitioner.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
