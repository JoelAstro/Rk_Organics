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
      <div className="fixed inset-0 z-50 overflow-y-auto bg-plum-dark/85 backdrop-blur-md flex items-center justify-center p-4">
        {/* Soft atmospheric background light leaks inside modal area */}
        <div className="absolute inset-0 bg-gradient-to-tr from-copper/5 via-transparent to-rose/5 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-plum-light/95 border border-white/10 rounded-[32px] max-w-4xl w-full p-6 sm:p-8 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto z-10"
        >
          {/* Close trigger */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-champagne/60 hover:text-champagne p-2.5 rounded-full hover:bg-white/5 transition-all cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Image gallery and CTA - 5/12 */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden bg-plum-dark border border-white/5 shadow-inner">
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
                  className="btn-luxury w-full py-4 bg-copper hover:bg-copper-light text-cream-white font-bold text-center rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={16} /> Ask RK Organics
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-3 border border-white/10 hover:border-copper text-champagne text-center font-semibold rounded-xl text-xs uppercase tracking-widest transition-all font-button cursor-pointer bg-plum-dark/45"
                >
                  Close Details
                </button>
              </div>

              {/* Heritage Certification */}
              <div className="p-4 bg-plum-dark/50 border border-white/5 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="text-gold w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-champagne block font-button">Heritage Formulation</span>
                  <p className="text-[10px] text-taupe leading-relaxed">
                    Prepared following traditional recipes from classical Ayurvedic texts.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative details - 7/12 */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-copper font-bold tracking-widest text-[10px] uppercase block font-button">
                  {formulation.displayName}
                </span>
                <h2 className="font-serif text-3xl sm:text-4.5xl font-bold text-champagne leading-tight">
                  {formulation.teluguTitle}
                </h2>
                <p className="text-rose text-xs font-semibold font-button uppercase tracking-widest">
                  Target: {formulation.concerns}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="font-button text-[10px] font-bold uppercase tracking-widest text-copper">
                  About this formulation
                </h3>
                <p className="text-taupe text-xs leading-relaxed italic font-sans">
                  {formulation.description}
                </p>
              </div>

              {/* Ingredients list with numbering */}
              <div className="space-y-3">
                <h3 className="font-button text-[10px] font-bold uppercase tracking-widest text-copper">
                  Ingredients ({formulation.ingredients.length} total)
                </h3>

                {formulation.ingredients.length > 12 ? (
                  <div className="space-y-3">
                    {!showFullIngredients ? (
                      <div className="space-y-2">
                        <p className="text-xs text-taupe leading-relaxed font-sans">
                          Includes: <span className="font-semibold text-champagne">{formulation.ingredients.slice(0, 8).join(", ")}</span>...
                        </p>
                        <button
                          onClick={() => setShowFullIngredients(true)}
                          className="px-4 py-2 border border-white/10 hover:border-copper text-champagne hover:bg-copper/5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer font-button"
                        >
                          <ChevronDown size={14} /> View Complete Ingredients ({formulation.ingredients.length} items)
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-48 overflow-y-auto pr-2 custom-scroll border border-white/5 rounded-2xl p-4 bg-plum-dark/60">
                          {formulation.ingredients.map((ing, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-taupe font-sans">
                              <span className="font-serif text-[10px] text-copper/60 font-bold mr-1.5">0{idx + 1}</span>
                              <span>{ing}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => setShowFullIngredients(false)}
                          className="px-4 py-2 border border-white/10 hover:border-copper text-champagne hover:bg-copper/5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer font-button"
                        >
                          <ChevronUp size={14} /> Collapse Ingredient List
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 border border-white/5 rounded-2xl p-4 bg-plum-dark/60">
                    {formulation.ingredients.map((ing, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-taupe font-sans">
                        <span className="font-serif text-[10px] text-copper/60 font-bold mr-1.5">0{idx + 1}</span>
                        <span>{ing}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Preparation */}
              <div className="space-y-2">
                <h3 className="font-button text-[10px] font-bold uppercase tracking-widest text-copper">
                  Traditional Preparation
                </h3>
                <p className="text-taupe text-xs leading-relaxed italic font-sans">
                  {formulation.preparation}
                </p>
              </div>

              {/* Usage guidelines */}
              <div className="p-4 bg-copper/5 rounded-2xl border border-copper/10 space-y-2">
                <div className="flex gap-2 text-copper items-center">
                  <AlertTriangle size={15} className="flex-shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-button">Usage Guidelines</span>
                </div>
                <p className="text-xs text-taupe leading-relaxed font-sans">
                  {formulation.usage}
                </p>
              </div>

              {/* Safety notice */}
              <div className="p-4 bg-rose/5 border border-rose/10 rounded-xl">
                <p className="text-[10px] text-taupe leading-relaxed font-sans text-justify">
                  <span className="font-bold text-rose block mb-0.5 uppercase tracking-widest">Notice</span>
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
