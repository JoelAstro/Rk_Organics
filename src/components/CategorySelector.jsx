import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, MessageSquare, ChevronDown, ChevronUp, AlertCircle, ArrowRight } from "lucide-react";
import { formulations } from "../data/formulationsData";

// Accent borders and colors based on categories
const categoryAccents = {
  "respiratory-allergy": { border: "border-purple-300/30", text: "text-purple-300", bg: "rgba(214, 199, 232, 0.05)" },
  "urinary-comfort": { border: "border-blue-300/30", text: "text-blue-300", bg: "rgba(166, 181, 197, 0.05)" },
  "digestive-comfort": { border: "border-amber-500/30", text: "text-amber-500", bg: "rgba(200, 138, 117, 0.05)" },
  "skin-wellness": { border: "border-rose-300/30", text: "text-rose-300", bg: "rgba(201, 162, 166, 0.05)" },
  "mens-wellness": { border: "border-orange-400/30", text: "text-orange-400", bg: "rgba(214, 154, 126, 0.05)" },
  "pain-comfort": { border: "border-indigo-300/30", text: "text-indigo-300", bg: "rgba(188, 168, 184, 0.05)" }
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
    <div className="space-y-16">
      
      {/* Immersive Title block */}
      <div className="text-center space-y-2">
        <h3 className="font-serif text-3xl sm:text-4xl text-champagne font-bold">
          Where would you like to begin?
        </h3>
        <p className="text-xs text-taupe max-w-sm mx-auto">
          Explore our compiled formulations by choosing a primary area of wellness exploration.
        </p>
      </div>

      {/* 6 Elegant Category Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {formulations.map((form, idx) => {
          const isActive = activeId === form.id;
          const isDimmed = activeId !== null && activeId !== form.id;
          const accent = categoryAccents[form.id] || { border: "border-white/5", text: "text-champagne", bg: "transparent" };

          return (
            <motion.div
              key={form.id}
              onClick={() => handleCardClick(form.id)}
              whileHover={{ y: isActive ? 0 : -8, scale: isActive ? 1 : 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ backgroundColor: isActive ? accent.bg : "rgba(45, 36, 61, 0.35)" }}
              className={`p-8 cursor-pointer flex flex-col justify-between transition-all duration-500 rounded-[28px] border relative ${
                isActive ? `${accent.border} shadow-2xl` : "border-white/5"
              } ${isDimmed ? "opacity-35" : "opacity-100"}`}
            >
              {/* Highlight ribbon indicator */}
              {isActive && (
                <div className="absolute top-0 right-8 px-3.5 py-1 bg-copper text-cream-white text-[9px] font-bold uppercase tracking-widest rounded-b-lg font-button">
                  Active
                </div>
              )}

              <div className="space-y-6">
                {/* Number and Icon Row */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl sm:text-4xl text-stroke-copper font-bold block opacity-75">
                    0{idx + 1}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/5 ${
                    isActive ? "bg-copper text-champagne" : "bg-plum-light/50 text-rose"
                  }`}>
                    <Leaf size={14} className="fill-current" />
                  </div>
                </div>

                {/* Name details */}
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl font-bold text-champagne leading-tight">
                    {form.displayName}
                  </h4>
                  <p className="text-taupe text-xs leading-relaxed font-sans opacity-95">
                    {form.concerns}
                  </p>
                </div>
              </div>

              {/* Action indicator footer */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-[9px] text-rose font-bold uppercase tracking-widest font-button">
                  {form.ingredients.length} Compounds
                </span>
                <span className={`text-[11px] font-bold font-button flex items-center gap-1 ${
                  isActive ? "text-copper" : "text-champagne/60 hover:text-champagne"
                }`}>
                  {isActive ? "Close Panel" : "Discover Solution →"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Transformation formulation panel */}
      <AnimatePresence mode="wait">
        {activeId && activeFormulation && (
          <motion.div
            key={activeFormulation.id}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-8 sm:p-12 border border-white/10 rounded-[36px] bg-plum-light/45 backdrop-blur-md shadow-2xl space-y-8 relative overflow-hidden"
          >
            {/* Soft background radial light */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-copper/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
              
              {/* Detailed specification layout - 7/12 */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-bold border border-copper/30 px-3 py-1 rounded-full text-copper uppercase tracking-widest font-button bg-copper/5">
                      {activeFormulation.displayName}
                    </span>
                    <span className="text-xs text-rose italic font-sans">
                      Traditionally used formulation
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4.5xl font-bold text-champagne mt-2 leading-tight">
                    {activeFormulation.teluguTitle}
                  </h3>
                </div>

                {/* About placeholder */}
                <div className="space-y-2">
                  <h4 className="font-button text-[10px] font-bold uppercase tracking-widest text-copper">
                    About this mixture
                  </h4>
                  <p className="text-taupe text-sm leading-relaxed italic font-sans">
                    {activeFormulation.description}
                  </p>
                </div>

                {/* Ingredients listing layout */}
                <div className="space-y-4 pt-2">
                  <h4 className="font-button text-[10px] font-bold uppercase tracking-widest text-copper">
                    Ingredients ({activeFormulation.ingredients.length} total)
                  </h4>

                  {activeFormulation.ingredients.length > 12 ? (
                    <div className="space-y-4">
                      {!showFullIngredients ? (
                        <div className="space-y-3">
                          <p className="text-xs text-taupe leading-relaxed">
                            Includes premium Ayurvedic components: <span className="font-semibold">{activeFormulation.ingredients.slice(0, 8).join(", ")}</span>...
                          </p>
                          <button
                            onClick={() => setShowFullIngredients(true)}
                            className="px-5 py-2.5 border border-white/10 hover:border-copper text-champagne hover:bg-copper/5 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer font-button"
                          >
                            <ChevronDown size={14} /> View Complete Ingredients ({activeFormulation.ingredients.length} items)
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-2 custom-scroll border border-white/5 rounded-2xl p-4 bg-plum-dark/40">
                            {activeFormulation.ingredients.map((ing, idx) => (
                              <div key={idx} className="flex items-center gap-2.5 text-xs text-taupe font-sans">
                                <span className="font-serif text-[10px] text-copper/60 font-bold">0{idx + 1}</span>
                                <span>{ing}</span>
                              </div>
                            ))}
                          </div>
                          <button
                            onClick={() => setShowFullIngredients(false)}
                            className="px-5 py-2.5 border border-white/10 hover:border-copper text-champagne hover:bg-copper/5 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer font-button"
                          >
                            <ChevronUp size={14} /> Collapse Ingredient List
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border border-white/5 rounded-2xl p-4 bg-plum-dark/40">
                      {activeFormulation.ingredients.map((ing, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-taupe font-sans">
                          <span className="font-serif text-[10px] text-copper/60 font-bold">0{idx + 1}</span>
                          <span>{ing}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Safety compliance box */}
                <div className="p-5 bg-copper/5 rounded-2xl border border-copper/10 space-y-2">
                  <div className="flex gap-2 text-copper items-center">
                    <AlertCircle size={15} className="flex-shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider font-button">Usage Advisory</span>
                  </div>
                  <p className="text-xs text-taupe leading-relaxed font-sans">
                    {activeFormulation.usage}
                  </p>
                </div>
              </div>

              {/* Visual artwork / CTA column - 5/12 */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                {/* Botanical Composition */}
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-plum-dark border border-white/5 shadow-inner relative group">
                  <img
                    src={activeFormulation.image}
                    alt={activeFormulation.displayName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/50 to-transparent pointer-events-none" />
                </div>

                {/* WhatsApp action */}
                <a
                  href={getWhatsAppLink(activeFormulation.displayName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury w-full py-4 bg-copper hover:bg-copper-light text-cream-white font-bold text-center rounded-2xl text-xs uppercase tracking-widest transition-all duration-400 shadow-md flex items-center justify-center gap-2 cursor-pointer"
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
