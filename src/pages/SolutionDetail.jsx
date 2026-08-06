import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Compass, ChevronDown, ChevronUp, CheckCircle2, MessageCircle, AlertCircle, HelpCircle } from "lucide-react";
import { healthSolutions, solutionCategories } from "../data/solutionsData";
import { products } from "../data/productsData";

export default function SolutionDetail() {
  const { id } = useParams();
  const solution = healthSolutions.find((s) => s.id === id);

  // Scroll to top on load/change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!solution) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-forest">Solution Details Not Found</h2>
        <p className="text-charcoal-light text-sm max-w-sm">
          The health concern you selected is either not indexed yet or is under active consultation review.
        </p>
        <Link to="/solutions" className="px-6 py-3 bg-forest hover:bg-forest-light text-white rounded-full font-semibold text-xs uppercase tracking-wider font-button transition-all">
          Back to Directory
        </Link>
      </div>
    );
  }

  // Accordion status
  const [openSections, setOpenSections] = useState({
    causes: true,
    lifestyle: true,
    faqs: false
  });

  const toggleSection = (sec) => {
    setOpenSections({
      ...openSections,
      [sec]: !openSections[sec]
    });
  };

  // Grab details for recommended medicines
  const recommendedMedicinesDetails = products.filter((p) =>
    solution.recommendedMedicines.includes(p.id)
  );

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-ivory to-cream/20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-forest/80 hover:text-forest text-sm font-semibold mb-8 transition-colors group font-button"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Concerns Directory
        </Link>

        {/* Guided Patient Journey Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Main Column - Col Span 8 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8 space-y-8"
          >
            
            {/* Header profile */}
            <div className="space-y-4">
              <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">
                {solutionCategories.find((c) => c.id === solution.category)?.name}
              </span>
              <h1 className="font-serif text-3xl sm:text-4.5xl font-bold text-forest-dark leading-tight">
                {solution.name}
              </h1>
              <p className="text-charcoal-light text-sm leading-relaxed max-w-2xl">
                {solution.shortDescription}
              </p>
            </div>

            {/* Graphic image frame */}
            <div className="rounded-3xl overflow-hidden h-64 sm:h-80 shadow-md border border-forest/5 relative">
              <motion.img
                src={solution.image}
                alt={solution.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent pointer-events-none" />
            </div>

            {/* Accordion Panels */}
            <div className="space-y-6">
              
              {/* 1. Ayurvedic root causes */}
              <div className="glass-card-premium p-6 sm:p-8 border border-forest/10 shadow-sm bg-white/60">
                <button
                  onClick={() => toggleSection("causes")}
                  className="w-full flex items-center justify-between font-serif text-xl sm:text-2xl font-bold text-forest-dark text-left focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <Compass size={22} className="text-gold stroke-[1.5]" />
                    Possible Ayurvedic Root Causes
                  </span>
                  {openSections.causes ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openSections.causes && (
                  <div className="mt-6 space-y-4 border-t border-forest/10 pt-6">
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      In Ayurveda, symptoms are not isolated events. They reflect imbalances in your primary biological energies (Doshas):
                    </p>
                    <ul className="space-y-4 pl-1">
                      {solution.ayurvedicCauses.map((cause, idx) => {
                        const parts = cause.split(": ");
                        return (
                          <li key={idx} className="flex gap-3 text-xs leading-relaxed text-charcoal-light">
                            <span className="font-bold text-gold text-sm font-button">0{idx + 1}</span>
                            <div>
                              {parts.length > 1 ? (
                                <>
                                  <h4 className="font-sans font-bold text-forest-dark text-sm mb-1">{parts[0]}</h4>
                                  <p>{parts[1]}</p>
                                </>
                              ) : (
                                <p>{cause}</p>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>

              {/* 2. Lifestyle Tips */}
              <div className="glass-card-premium p-6 sm:p-8 border border-forest/10 shadow-sm bg-white/60">
                <button
                  onClick={() => toggleSection("lifestyle")}
                  className="w-full flex items-center justify-between font-serif text-xl sm:text-2xl font-bold text-forest-dark text-left focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <BookOpen size={22} className="text-gold stroke-[1.5]" />
                    Diet & Lifestyle Recommendations
                  </span>
                  {openSections.lifestyle ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openSections.lifestyle && (
                  <div className="mt-6 space-y-4 border-t border-forest/10 pt-6">
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      Support your healing journey with simple changes in daily routine (Dinacharya) and diet (Ahara):
                    </p>
                    <ul className="space-y-3.5 pl-1">
                      {solution.lifestyleTips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs text-charcoal-light leading-relaxed">
                          <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 3. FAQs */}
              <div className="glass-card-premium p-6 sm:p-8 border border-forest/10 shadow-sm bg-white/60">
                <button
                  onClick={() => toggleSection("faqs")}
                  className="w-full flex items-center justify-between font-serif text-xl sm:text-2xl font-bold text-forest-dark text-left focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle size={22} className="text-gold stroke-[1.5]" />
                    Frequently Asked Questions
                  </span>
                  {openSections.faqs ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openSections.faqs && (
                  <div className="mt-6 space-y-5 border-t border-forest/10 pt-6">
                    {solution.faqs.map((faq, idx) => (
                      <div key={idx} className="space-y-1.5 border-b border-forest/5 pb-4 last:border-0 last:pb-0">
                        <h4 className="font-sans font-bold text-forest-dark text-sm">Q: {faq.question}</h4>
                        <p className="text-charcoal-light text-xs leading-relaxed">A: {faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </motion.div>

          {/* Sidebar Recommended Remedies - Col Span 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-4 space-y-8 lg:sticky lg:top-28"
          >
            
            {/* Box container */}
            <div className="glass-card-premium p-6 sm:p-8 border border-gold/20 bg-white/80 shadow-md space-y-6">
              <div className="space-y-1 text-center">
                <span className="text-gold uppercase tracking-widest text-[10px] font-bold font-button block">Vaidya Selections</span>
                <h3 className="font-serif text-xl font-bold text-forest-dark">Recommended Medicines</h3>
                <div className="w-10 h-0.5 bg-gold mx-auto mt-2" />
              </div>

              <div className="space-y-6">
                {recommendedMedicinesDetails.map((med) => (
                  <div key={med.id} className="border-b border-forest/10 pb-6 last:border-0 last:pb-0 space-y-4">
                    <div className="flex gap-4">
                      {/* Image thumbnail */}
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-cream">
                        <img src={med.images[0]} alt={med.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col justify-center space-y-1">
                        <h4 className="font-serif font-bold text-forest-dark text-sm leading-snug">{med.name}</h4>
                        <span className="text-[10px] text-sage font-button font-semibold uppercase tracking-wider">
                          Certified Remedy
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-charcoal-light text-xs leading-relaxed line-clamp-2">
                      {med.shortDescription}
                    </p>

                    <div className="flex flex-col gap-2">
                      <Link
                        to={`/products/${med.id}`}
                        className="w-full py-2.5 border border-forest/20 hover:border-forest text-forest hover:bg-forest hover:text-white text-center font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 font-button"
                      >
                        View Medicine Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consult banner */}
            <div className="bg-forest text-white rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden shadow-lg border border-white/10 text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-gold mx-auto mb-2 animate-bounce">
                <MessageCircle size={18} className="fill-current" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Need a Custom Consultation?</h3>
              <p className="text-sage-light text-xs leading-relaxed">
                Send our Ayurvedic doctors a quick message with your specific symptoms.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  const el = document.getElementById("contact");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn-premium block w-full py-3.5 bg-gold hover:bg-gold-light text-forest-dark font-bold text-center rounded-2xl text-xs uppercase tracking-wider transition-all"
              >
                Send Query
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
}
