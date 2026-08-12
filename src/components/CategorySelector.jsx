import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, MessageSquare, ChevronDown, ChevronUp, AlertCircle, RefreshCw } from "lucide-react";
import { formulations } from "../data/formulationsData";

// Icon components mapped to categories
const icons = {
  "respiratory-allergy": Leaf,
  "urinary-comfort": Leaf,
  "digestive-comfort": Leaf,
  "skin-wellness": Leaf,
  "mens-wellness": Leaf,
  "pain-comfort": Leaf
};

export default function CategorySelector() {
  const [activeId, setActiveId] = useState(null);
  const [showFullIngredients, setShowFullIngredients] = useState(false);

  const activeFormulation = formulations.find((f) => f.id === activeId);

  const handleCardClick = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setShowFullIngredients(false);
    }
  };

  const getWhatsAppLink = (name) => {
    const defaultMsg = `Hello RK Organics, I would like to know more about ${name}.`;
    return `https://wa.me/+919876543210?text=${encodeURIComponent(defaultMsg)}`;
  };

  return (
    <div className="space-y-12">
      {/* 6-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {formulations.map((form) => {
          const IconComp = icons[form.id] || Leaf;
          const isActive = activeId === form.id;
          const isDimmed = activeId !== null && activeId !== form.id;

          return (
            <motion.div
              key={form.id}
              onClick={() => handleCardClick(form.id)}
              whileHover={{ y: isActive ? 0 : -8, scale: isActive ? 1 : 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`glass-card-premium p-6 md:p-8 cursor-pointer flex flex-col justify-between transition-opacity duration-500 bg-white/60 relative ${
                isActive ? "border-gold ring-1 ring-gold shadow-lg" : "border-forest/5"
              } ${isDimmed ? "opacity-50" : "opacity-100"}`}
            >
              {/* Gold Ribbon Indicator */}
              {isActive && (
                <div className="absolute top-0 right-6 px-3 py-1 bg-gold text-forest-dark text-[9px] font-bold uppercase tracking-wider rounded-b-lg font-button shadow-sm">
                  Active
                </div>
              )}

              <div className="space-y-6">
                {/* Dynamic Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                  isActive ? "bg-forest text-gold" : "bg-forest/5 text-forest"
                }`}>
                  <IconComp className="w-6 h-6 stroke-[1.5]" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-widest font-button block">
                    Category {formulations.indexOf(form) + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-forest-dark leading-tight">
                    {form.displayName}
                  </h3>
                  <p className="text-charcoal-light text-xs font-medium font-sans">
                    {form.concerns}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between pt-4 border-t border-forest/5">
                <span className="text-[10px] text-sage font-bold uppercase tracking-wider font-button">
                  {form.ingredients.length} Ingredients
                </span>
                <span className="text-xs font-bold text-forest group-hover:translate-x-1 transition-transform font-button">
                  {isActive ? "Close Details" : "Discover Solution →"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Animation Formulation Content Panel */}
      <AnimatePresence mode="wait">
        {activeId && activeFormulation && (
          <motion.div
            key={activeFormulation.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card-premium p-6 sm:p-10 border border-gold/20 bg-white/70 shadow-xl space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Details Column - 7/12 */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold bg-forest/5 border border-forest/15 px-3 py-1 rounded-full text-forest uppercase tracking-widest font-button">
                      {activeFormulation.displayName}
                    </span>
                    <span className="text-xs text-sage italic font-sans font-semibold">
                      Traditionally used formulation
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-forest-dark mt-2 leading-tight">
                    {activeFormulation.teluguTitle}
                  </h3>
                </div>

                {/* About placeholer */}
                <div className="space-y-2">
                  <h4 className="font-button text-xs font-bold uppercase tracking-widest text-forest">
                    Product Description
                  </h4>
                  <p className="text-charcoal-light text-sm leading-relaxed italic">
                    {activeFormulation.description}
                  </p>
                </div>

                {/* Ingredients Accordion Section */}
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center border-b border-forest/10 pb-2">
                    <h4 className="font-button text-xs font-bold uppercase tracking-widest text-forest">
                      Ingredients ({activeFormulation.ingredients.length} total)
                    </h4>
                  </div>

                  {activeFormulation.ingredients.length > 12 ? (
                    <div className="space-y-4">
                      {/* Short list preview */}
                      {!showFullIngredients && (
                        <div className="space-y-2">
                          <p className="text-xs text-charcoal-light leading-relaxed">
                            Includes premium components: <span className="font-semibold">{activeFormulation.ingredients.slice(0, 8).join(", ")}</span>...
                          </p>
                          <button
                            onClick={() => setShowFullIngredients(true)}
                            className="px-4 py-2 border border-forest/20 hover:border-forest text-forest hover:bg-forest/5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer font-button"
                          >
                            <ChevronDown size={14} /> View Complete Ingredients ({activeFormulation.ingredients.length} items)
                          </button>
                        </div>
                      )}

                      {/* Full expanded list */}
                      {showFullIngredients && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-3"
                        >
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-60 overflow-y-auto pr-2 custom-scroll border border-forest/5 rounded-2xl p-4 bg-sand/35">
                            {activeFormulation.ingredients.map((ing, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-light">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
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
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    /* Render short lists directly */
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border border-forest/5 rounded-2xl p-4 bg-sand/35">
                      {activeFormulation.ingredients.map((ing, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          <span>{ing}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Safety disclaimers box */}
                <div className="p-4 bg-terracotta/5 rounded-2xl border border-terracotta/10 space-y-2">
                  <div className="flex gap-2 text-terracotta">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider font-button">Usage Guidelines</span>
                  </div>
                  <p className="text-[11px] text-charcoal-light leading-relaxed">
                    {activeFormulation.usage}
                  </p>
                </div>
              </div>

              {/* Action Column - 5/12 */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                {/* Botanical placeholder image */}
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-cream border border-forest/5 shadow-inner relative">
                  <img
                    src={activeFormulation.image}
                    alt={activeFormulation.displayName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider font-button">
                    Image Placeholder
                  </div>
                </div>

                {/* Pre-filled WhatsApp CTA */}
                <a
                  href={getWhatsAppLink(activeFormulation.displayName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium w-full py-4 bg-forest hover:bg-forest-light text-white font-bold text-center rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={16} /> Inquiry on WhatsApp
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
