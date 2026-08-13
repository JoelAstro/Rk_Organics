import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, MessageSquare, ChevronDown, ChevronUp, AlertCircle, ArrowUpRight } from "lucide-react";
import { formulations } from "../data/formulationsData";

// Color indicators for categories
const categoryAccents = {
  "respiratory-allergy": { border: "border-purple-200/50", text: "text-purple-600", bg: "bg-purple-50/30" },
  "urinary-comfort": { border: "border-slate-200/50", text: "text-slate-600", bg: "bg-slate-50/30" },
  "digestive-comfort": { border: "border-terracotta-200/50", text: "text-terracotta", bg: "bg-terracotta/5" },
  "skin-wellness": { border: "border-rose-200/50", text: "text-rose-600", bg: "bg-rose-50/30" },
  "mens-wellness": { border: "border-amber-200/50", text: "text-amber-700", bg: "bg-amber-50/30" },
  "pain-comfort": { border: "border-indigo-200/50", text: "text-indigo-600", bg: "bg-indigo-50/30" }
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
    const msg = `Hello RK Organics, I would like to know more about ${name}.`;
    return `https://wa.me/+919876543210?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="space-y-16">
      
      {/* 6 Category Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {formulations.map((form, idx) => {
          const isActive = activeId === form.id;
          const isDimmed = activeId !== null && activeId !== form.id;
          const accent = categoryAccents[form.id] || { border: "border-sand-light", text: "text-botanical", bg: "bg-white" };

          return (
            <motion.div
              key={form.id}
              onClick={() => handleCardClick(form.id)}
              whileHover={{ y: isActive ? 0 : -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`p-8 cursor-pointer flex flex-col justify-between rounded-2xl border transition-all duration-300 bg-white ${
                isActive 
                  ? `${accent.border} shadow-lg ring-1 ring-sage/10` 
                  : "border-sand-light shadow-sm"
              } ${isDimmed ? "opacity-40" : "opacity-100"}`}
            >
              <div className="space-y-6">
                {/* Number and Icon Header */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-sage opacity-40">
                    0{idx + 1}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? "bg-botanical text-cream" : "bg-sand-light text-sage"
                  }`}>
                    <Leaf size={14} className="fill-current" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl font-bold text-botanical-dark leading-tight">
                    {form.displayName}
                  </h4>
                  <p className="text-charcoal-green/75 text-xs leading-relaxed font-sans">
                    {form.concerns}
                  </p>
                </div>
              </div>

              {/* Card Footer actions */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-sand-light">
                <span className="text-[9px] font-bold uppercase tracking-widest text-sage font-button">
                  {form.ingredients.length} Compounds
                </span>
                
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs font-semibold font-button ${isActive ? "text-terracotta" : "text-botanical"}`}>
                    {isActive ? "Close Details" : "View Remedy"}
                  </span>
                  <ArrowUpRight size={14} className={`transition-transform duration-300 ${
                    isActive ? "rotate-45 text-terracotta" : "text-botanical group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic details sliding panel */}
      <AnimatePresence mode="wait">
        {activeId && activeFormulation && (
          <motion.div
            key={activeFormulation.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="p-8 sm:p-12 border border-sand-light rounded-3xl bg-sand-light/60 shadow-inner space-y-8 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
              
              {/* Left Column: Formulations Specifications - 7/12 */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-bold bg-botanical/5 border border-botanical/15 px-3 py-1 rounded-full text-botanical uppercase tracking-wider font-button">
                      {activeFormulation.displayName}
                    </span>
                    <span className="text-xs text-sage italic font-sans">
                      Traditionally used formulation
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-botanical-dark mt-2 leading-tight">
                    {activeFormulation.teluguTitle}
                  </h3>
                </div>

                {/* About Section */}
                <div className="space-y-2">
                  <h4 className="font-button text-[10px] font-bold uppercase tracking-wider text-botanical">
                    Description
                  </h4>
                  <p className="text-charcoal-green/90 text-sm leading-relaxed italic font-sans">
                    {activeFormulation.description}
                  </p>
                </div>

                {/* Ingredients Accordions list */}
                <div className="space-y-4 pt-2">
                  <h4 className="font-button text-[10px] font-bold uppercase tracking-wider text-botanical">
                    Ingredients ({activeFormulation.ingredients.length} total)
                  </h4>

                  {activeFormulation.ingredients.length > 12 ? (
                    <div className="space-y-4">
                      {!showFullIngredients ? (
                        <div className="space-y-3">
                          <p className="text-xs text-charcoal-green/80 leading-relaxed font-sans">
                            Includes primary elements: <span className="font-semibold text-botanical">{activeFormulation.ingredients.slice(0, 8).join(", ")}</span>...
                          </p>
                          <button
                            onClick={() => setShowFullIngredients(true)}
                            className="px-5 py-2.5 border border-botanical/20 hover:border-botanical text-botanical hover:bg-botanical/5 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer font-button"
                          >
                            <ChevronDown size={14} /> View Complete Ingredients ({activeFormulation.ingredients.length} items)
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-2 custom-scroll border border-sand-dark rounded-2xl p-5 bg-white shadow-sm">
                            {activeFormulation.ingredients.map((ing, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-green/85 font-sans">
                                <span className="font-serif text-[10px] text-terracotta/70 font-bold">0{idx + 1}</span>
                                <span>{ing}</span>
                              </div>
                            ))}
                          </div>
                          <button
                            onClick={() => setShowFullIngredients(false)}
                            className="px-5 py-2.5 border border-botanical/20 hover:border-botanical text-botanical hover:bg-botanical/5 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer font-button"
                          >
                            <ChevronUp size={14} /> Collapse Ingredient List
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border border-sand-dark rounded-2xl p-5 bg-white shadow-sm">
                      {activeFormulation.ingredients.map((ing, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-green/85 font-sans">
                          <span className="font-serif text-[10px] text-terracotta/70 font-bold">0{idx + 1}</span>
                          <span>{ing}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Safe Warnings */}
                <div className="p-4 bg-terracotta/5 rounded-2xl border border-terracotta-200/40 space-y-2">
                  <div className="flex gap-2 text-terracotta items-center">
                    <AlertCircle size={15} className="flex-shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider font-button">Usage Guidelines</span>
                  </div>
                  <p className="text-[11px] text-charcoal-green/80 leading-relaxed font-sans">
                    {activeFormulation.usage}
                  </p>
                </div>
              </div>

              {/* Right Column: Imagery composition and action - 5/12 */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
                {/* Botanical image placeholder */}
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-sand-dark border border-sand-light relative group">
                  <img
                    src={activeFormulation.image}
                    alt={activeFormulation.displayName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-botanical-dark/20 to-transparent pointer-events-none" />
                </div>

                {/* prefilled WhatsApp CTA */}
                <a
                  href={getWhatsAppLink(activeFormulation.displayName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury w-full py-4 bg-botanical hover:bg-botanical-light text-cream font-bold text-center rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
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
