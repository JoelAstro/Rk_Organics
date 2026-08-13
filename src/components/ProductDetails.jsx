import React, { useState, useEffect } from "react";
import { X, MessageSquare, AlertTriangle, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetails({ formulation, isOpen, onClose }) {
  const [showFullIngredients, setShowFullIngredients] = useState(false);

  // Lock body scroll when modal is active
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
      <div className="fixed inset-0 z-50 overflow-y-auto bg-botanical-dark/60 backdrop-blur-sm flex items-center justify-center p-4">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-natural-light border border-sand-light rounded-[32px] max-w-4xl w-full p-6 sm:p-8 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto z-10"
        >
          {/* Close trigger */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-botanical/60 hover:text-botanical p-2.5 rounded-full hover:bg-botanical/5 transition-all cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Image and Action CTA - 5/12 */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden bg-sand-dark border border-sand-light shadow-inner">
                <img
                  src={formulation.image}
                  alt={formulation.displayName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <a
                  href={getWhatsAppLink(formulation.displayName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury w-full py-4 bg-botanical hover:bg-botanical-light text-cream font-bold text-center rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={16} /> Ask RK Organics
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-3 border border-botanical/20 hover:border-botanical text-botanical text-center font-semibold rounded-xl text-xs uppercase tracking-wider transition-all font-button cursor-pointer bg-white"
                >
                  Close Details
                </button>
              </div>

              {/* Heritage Certification */}
              <div className="p-4 bg-white border border-sand-light rounded-2xl flex items-start gap-3 shadow-sm">
                <ShieldCheck className="text-terracotta w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-botanical-dark block font-button">Heritage Formulation</span>
                  <p className="text-[10px] text-charcoal-green/80 leading-relaxed font-sans">
                    Prepared following traditional recipes from classical Ayurvedic texts.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative details - 7/12 */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-terracotta font-bold tracking-widest text-[10px] uppercase block font-button">
                  {formulation.displayName}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-botanical-dark leading-tight">
                  {formulation.teluguTitle}
                </h2>
                <p className="text-sage text-xs font-semibold font-button uppercase tracking-wider">
                  Target: {formulation.concerns}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="font-button text-[10px] font-bold uppercase tracking-wider text-botanical">
                  About this formulation
                </h3>
                <p className="text-charcoal-green/95 text-xs leading-relaxed italic font-sans">
                  {formulation.description}
                </p>
              </div>

              {/* Ingredients list with numbering */}
              <div className="space-y-3">
                <h3 className="font-button text-[10px] font-bold uppercase tracking-wider text-botanical">
                  Ingredients ({formulation.ingredients.length} total)
                </h3>

                {formulation.ingredients.length > 12 ? (
                  <div className="space-y-3">
                    {!showFullIngredients ? (
                      <div className="space-y-2">
                        <p className="text-xs text-charcoal-green/80 leading-relaxed font-sans">
                          Includes: <span className="font-semibold text-botanical">{formulation.ingredients.slice(0, 8).join(", ")}</span>...
                        </p>
                        <button
                          onClick={() => setShowFullIngredients(true)}
                          className="px-4 py-2 border border-botanical/20 hover:border-botanical text-botanical hover:bg-botanical/5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer font-button"
                        >
                          <ChevronDown size={14} /> View Complete Ingredients ({formulation.ingredients.length} items)
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-48 overflow-y-auto pr-2 custom-scroll border border-sand-light rounded-2xl p-4 bg-white shadow-inner">
                          {formulation.ingredients.map((ing, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-green/85 font-sans">
                              <span className="font-serif text-[10px] text-terracotta/70 font-bold mr-1.5">0{idx + 1}</span>
                              <span>{ing}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => setShowFullIngredients(false)}
                          className="px-4 py-2 border border-botanical/20 hover:border-botanical text-botanical hover:bg-botanical/5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer font-button"
                        >
                          <ChevronUp size={14} /> Collapse Ingredient List
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 border border-sand-light rounded-2xl p-4 bg-white shadow-inner">
                    {formulation.ingredients.map((ing, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-green/85 font-sans">
                        <span className="font-serif text-[10px] text-terracotta/70 font-bold mr-1.5">0{idx + 1}</span>
                        <span>{ing}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Preparation */}
              <div className="space-y-2">
                <h3 className="font-button text-[10px] font-bold uppercase tracking-wider text-botanical">
                  Traditional Preparation
                </h3>
                <p className="text-charcoal-green/90 text-xs leading-relaxed italic font-sans font-light">
                  {formulation.preparation}
                </p>
              </div>

              {/* Usage guidelines */}
              <div className="p-4 bg-botanical/5 rounded-2xl border border-botanical/15 space-y-2">
                <div className="flex gap-2 text-botanical items-center">
                  <AlertTriangle size={15} className="flex-shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-button">Usage Guidelines</span>
                </div>
                <p className="text-xs text-charcoal-green/90 leading-relaxed font-sans">
                  {formulation.usage}
                </p>
              </div>

              {/* Safety notice */}
              <div className="p-4 bg-terracotta/5 border border-terracotta-200/40 rounded-xl">
                <p className="text-[10px] text-charcoal-green/90 leading-relaxed font-sans text-justify">
                  <span className="font-bold text-terracotta block mb-0.5 uppercase tracking-wider">Notice</span>
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
