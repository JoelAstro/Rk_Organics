import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Leaf, Eye, X } from "lucide-react";
import { categories, products } from "../data/productsData";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "all";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter);

  useEffect(() => {
    setSelectedCategory(categoryFilter);
  }, [categoryFilter]);

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    if (catId === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", catId);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchTerm("");
    handleCategorySelect("all");
  };

  const filteredProducts = products.filter((prod) => {
    const matchesCategory = selectedCategory === "all" || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          prod.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          prod.ingredients.some(i => i.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-ivory to-cream/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">Botanical Extraction Catalog</span>
          <h1 className="font-serif text-4xl md:text-5.5xl font-bold text-forest-dark leading-tight">Explore Our Remedies</h1>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-charcoal-light text-sm max-w-xl mx-auto leading-relaxed">
            Browse our range of certified organic Ayurvedic formulations, crafted traditionally and audited independently for purity.
          </p>
        </motion.div>

        {/* Filter Controls Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card-premium p-6 sm:p-8 mb-12 space-y-6 bg-white/60"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                placeholder="Search remedies or ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-forest/10 focus:border-forest rounded-2xl py-3.5 pl-11 pr-4 text-charcoal placeholder-charcoal/40 focus:ring-1 focus:ring-forest outline-none transition-all duration-300 text-sm font-button"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40 w-4.5 h-4.5" />
            </div>

            {/* Clear Filters Indicator */}
            {(searchTerm || selectedCategory !== "all") && (
              <button
                onClick={clearFilters}
                className="text-xs font-bold text-gold hover:text-gold-dark flex items-center gap-1 transition-colors self-center cursor-pointer font-button"
              >
                <X size={14} /> Clear All Filters
              </button>
            )}
          </div>

          {/* Category Badges Filter */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-light/70 font-button block">
              Filter by System Area:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategorySelect("all")}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-355 cursor-pointer font-button ${
                  selectedCategory === "all"
                    ? "bg-forest text-white shadow-sm"
                    : "bg-white text-charcoal/80 border border-forest/5 hover:bg-cream"
                }`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-355 cursor-pointer font-button ${
                    selectedCategory === cat.id
                      ? "bg-forest text-white shadow-sm"
                      : "bg-white text-charcoal/80 border border-forest/5 hover:bg-cream"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: (idx % 3) * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-premium overflow-hidden group flex flex-col justify-between bg-white/60"
              >
                {/* Image */}
                <div className="h-60 overflow-hidden relative bg-cream">
                  <motion.img
                    src={prod.images[0]}
                    alt={prod.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-forest px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-forest/10 font-button">
                    {categories.find((c) => c.id === prod.category)?.name}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-forest-dark group-hover:text-forest transition-colors leading-tight">
                      {prod.name}
                    </h3>
                    <p className="text-charcoal-light text-xs leading-relaxed line-clamp-3 font-sans">
                      {prod.shortDescription}
                    </p>
                    
                    {/* Suitable for tag */}
                    <div className="p-3 bg-forest/5 rounded-xl border border-forest/5 space-y-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-gold-dark font-button">
                        Suitable For:
                      </span>
                      <p className="text-forest-dark font-medium text-xs">
                        {prod.suitableFor}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/products/${prod.id}`}
                    className="w-full py-3.5 bg-forest hover:bg-forest-light text-white font-bold text-center rounded-xl text-xs uppercase tracking-wider transition-all duration-300 font-button flex items-center justify-center gap-1.5"
                  >
                    <Eye size={14} /> View Remedy details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-forest/5 max-w-xl mx-auto space-y-4">
            <Leaf className="w-12 h-12 text-sage/40 mx-auto animate-bounce" />
            <h3 className="font-serif text-2xl font-bold text-forest-dark">No Remedies Found</h3>
            <p className="text-charcoal-light text-xs max-w-sm mx-auto leading-relaxed">
              We couldn't find any remedies matching your criteria. Try adjusting your keywords or clearing the category filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-forest hover:bg-forest-light text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow transition-all font-button cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
