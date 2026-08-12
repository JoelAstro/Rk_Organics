import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, X, HelpCircle } from "lucide-react";
import CategorySelector from "../components/CategorySelector";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import { formulations } from "../data/formulationsData";

export default function Solutions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFormulation, setSelectedFormulation] = useState(null);

  // Filter formulations client-side
  const filteredFormulations = formulations.filter((f) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    // Search by displayName
    const matchesName = f.displayName.toLowerCase().includes(query);
    // Search by teluguTitle
    const matchesTelugu = f.teluguTitle.toLowerCase().includes(query);
    // Search by concerns
    const matchesConcerns = f.concerns.toLowerCase().includes(query);
    // Search by individual ingredients (Telugu strings)
    const matchesIngredients = f.ingredients.some((ing) =>
      ing.toLowerCase().includes(query)
    );

    return matchesName || matchesTelugu || matchesConcerns || matchesIngredients;
  });

  return (
    <div className="luxury-bg-layered min-h-screen pt-32 pb-24 text-cream-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-copper font-bold tracking-widest text-[10px] uppercase block font-button">
            Guided Discovery
          </span>
          <h1 className="font-serif text-4.5xl sm:text-6xl font-bold text-champagne leading-tight">
            Find Your Solution
          </h1>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full" />
          <p className="text-taupe text-sm max-w-xl mx-auto leading-relaxed font-sans font-light">
            Select a therapeutic category or type an ingredient name (e.g. 'మిరియాలు', 'Ashwagandha') to locate matching traditional formulations.
          </p>
        </motion.div>

        {/* Instantly Updating Search Console */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mx-auto relative z-20"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search formulations, concerns, or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-plum-dark/85 border border-white/10 focus:border-copper rounded-full py-4 pl-12 pr-12 text-cream-white placeholder-taupe/40 focus:ring-1 focus:ring-copper outline-none transition-all duration-300 shadow-xl text-sm font-button"
            />
            <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 text-copper/55 w-5 h-5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4.5 top-1/2 -translate-y-1/2 text-champagne/60 hover:text-champagne transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Dynamic Display Panel */}
        <div>
          {searchQuery ? (
            /* Search Results Grid */
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-xs font-semibold text-taupe font-button">
                  Found {filteredFormulations.length} formulation{filteredFormulations.length !== 1 ? "s" : ""}
                </span>
              </div>

              {filteredFormulations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredFormulations.map((form) => (
                    <ProductCard
                      key={form.id}
                      formulation={form}
                      onOpenDetails={(item) => setSelectedFormulation(item)}
                    />
                  ))}
                </div>
              ) : (
                /* Empty state warning */
                <div className="text-center py-20 bg-plum-light/25 rounded-3xl border border-white/5 max-w-xl mx-auto space-y-4">
                  <HelpCircle className="w-12 h-12 text-rose/30 mx-auto animate-pulse" />
                  <h3 className="font-serif text-2xl font-bold text-champagne">
                    No Matching Formulation Found
                  </h3>
                  <p className="text-taupe text-xs max-w-xs mx-auto leading-relaxed font-sans font-light">
                    Try searching with another Telugu ingredient keyword (like 'సొంటి' or 'చందన') or clear the search to browse all categories.
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="px-6 py-3 bg-copper hover:bg-copper-light text-cream-white text-xs font-semibold uppercase tracking-widest rounded-full shadow transition-all font-button cursor-pointer"
                  >
                    Browse Categories
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* 6-Card Category Selector Centerpiece */
            <CategorySelector />
          )}
        </div>

        {/* Formulation Details modal rendering */}
        <ProductDetails
          formulation={selectedFormulation}
          isOpen={selectedFormulation !== null}
          onClose={() => setSelectedFormulation(null)}
        />

      </div>
    </div>
  );
}
