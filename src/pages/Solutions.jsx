import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Brain, Activity, Flame, RefreshCw, ShieldAlert, Scissors, Compass, Moon, Smile, Shield, Heart, Award, HelpCircle } from "lucide-react";
import { healthSolutions, solutionCategories } from "../data/solutionsData";

const iconMap = {
  Brain,
  Activity,
  Flame,
  RefreshCw,
  ShieldAlert,
  Scissors,
  Compass,
  Moon,
  Smile,
  Shield,
  Heart,
  Award
};

function SolutionIcon({ name, className }) {
  const IconComp = iconMap[name] || HelpCircle;
  return <IconComp className={className} />;
}

export default function Solutions() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSolutions = healthSolutions.filter((sol) => {
    const matchesCategory = selectedCategory === "all" || sol.category === selectedCategory;
    const matchesSearch = sol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          sol.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          sol.ayurvedicCauses.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-ivory to-cream/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">Guided Wellness Journey</span>
          <h1 className="font-serif text-4xl md:text-5.5xl font-bold text-forest-dark leading-tight">
            Find Your Health Solution
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-charcoal-light text-sm max-w-xl mx-auto leading-relaxed">
            Select your health concern below. Our Vaidyas have mapped possible Ayurvedic root causes (dosha imbalances) to recommended, pure herbal remedies.
          </p>
        </motion.div>

        {/* Search & Categories Console */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card-premium p-6 sm:p-8 mb-12 space-y-6 bg-white/60"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                placeholder="Search health concerns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-forest/10 focus:border-forest rounded-2xl py-3.5 pl-11 pr-4 text-charcoal placeholder-charcoal/40 focus:ring-1 focus:ring-forest outline-none transition-all duration-300 text-sm font-button"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40 w-4.5 h-4.5" />
            </div>
            
            {/* Counts */}
            <span className="text-xs font-semibold text-charcoal-light font-button">
              Showing {filteredSolutions.length} health solution{filteredSolutions.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Categories Grid Tabs */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-light/70 font-button block">
              Filter by System:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-button cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-forest text-white shadow-md scale-102"
                    : "bg-white hover:bg-cream text-charcoal/80 border border-forest/5"
                }`}
              >
                All Concerns
              </button>
              {solutionCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-button cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-forest text-white shadow-md scale-102"
                      : "bg-white hover:bg-cream text-charcoal/80 border border-forest/5"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Concerns Cards Grid */}
        {filteredSolutions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((sol, idx) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: (idx % 3) * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => navigate(`/solutions/${sol.id}`)}
                className="glass-card-premium overflow-hidden group cursor-pointer flex flex-col justify-between bg-white/60"
              >
                {/* Header visual */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-forest/5 text-forest group-hover:bg-forest group-hover:text-gold flex items-center justify-center transition-colors duration-500 shadow-sm">
                    <SolutionIcon name={sol.icon} className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Title & brief */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-forest-dark group-hover:text-forest transition-colors leading-tight">
                      {sol.name}
                    </h3>
                    <p className="text-charcoal-light text-xs leading-relaxed line-clamp-3">
                      {sol.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer preview */}
                <div className="px-6 md:px-8 py-5 bg-cream/30 border-t border-forest/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark font-button">
                    {solutionCategories.find(c => c.id === sol.category)?.name}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-forest group-hover:translate-x-1.5 transition-transform font-button">
                    Explore Solution →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-forest/5 max-w-xl mx-auto space-y-4">
            <HelpCircle className="w-12 h-12 text-sage/40 mx-auto animate-pulse" />
            <h3 className="font-serif text-2xl font-bold text-forest-dark">Concern Not Indexed Yet</h3>
            <p className="text-charcoal-light text-xs max-w-sm mx-auto leading-relaxed">
              We cover over 20+ Ayurvedic treatments. Try searching with a different keyword or contact our Vaidyas directly for a custom analysis.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-forest hover:bg-forest-light text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow transition-all font-button cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
