import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import { formulations } from "../data/formulationsData";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFormulation, setSelectedFormulation] = useState(null);

  const categories = [
    { id: "all", name: "All Formulations" },
    { id: "respiratory-allergy", name: "Respiratory" },
    { id: "urinary-comfort", name: "Urinary" },
    { id: "digestive-comfort", name: "Digestive" },
    { id: "skin-wellness", name: "Skin & Beauty" },
    { id: "mens-wellness", name: "Men's Wellness" },
    { id: "pain-comfort", name: "Pain Care" }
  ];

  const filteredFormulations = formulations.filter((f) => {
    return selectedCategory === "all" || f.id === selectedCategory;
  });

  return (
    <div className="luxury-bg-layered min-h-screen pt-32 pb-24 text-cream-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-copper font-bold tracking-widest text-[10px] uppercase block font-button">
            Traditional Catalog
          </span>
          <h1 className="font-serif text-4.5xl sm:text-6xl font-bold text-champagne leading-tight">
            Our Traditional Formulations
          </h1>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full" />
          <p className="text-taupe text-sm max-w-xl mx-auto leading-relaxed font-sans font-light">
            Browse our compiled range of Ayurvedic herbo-mineral mixtures. Detailed specifications, dosages, and preparation histories are pending official confirmation.
          </p>
        </motion.div>

        {/* Category Badges Filter Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card-dark p-6 bg-plum-light/35 border-white/5"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2 text-copper">
              <Filter size={16} />
              <span className="text-xs font-bold uppercase tracking-widest font-button">Filter by System:</span>
            </div>

            <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 font-button cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-copper text-cream-white shadow-md scale-102"
                      : "bg-plum-dark/45 text-taupe border border-white/5 hover:bg-white/5"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFormulations.map((form) => (
            <ProductCard
              key={form.id}
              formulation={form}
              onOpenDetails={(item) => setSelectedFormulation(item)}
            />
          ))}
        </div>

        {/* Dynamic Modal View */}
        <ProductDetails
          formulation={selectedFormulation}
          isOpen={selectedFormulation !== null}
          onClose={() => setSelectedFormulation(null)}
        />

      </div>
    </div>
  );
}
