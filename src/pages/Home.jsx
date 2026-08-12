import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, MessageSquare, Compass, ShieldCheck, Heart, FileText, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import CategorySelector from "../components/CategorySelector";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import { formulations } from "../data/formulationsData";

export default function Home() {
  const navigate = useNavigate();
  const [selectedFormulation, setSelectedFormulation] = useState(null);

  // Floating leaf particles for Hero
  const floatingParticles = [
    { id: 1, top: "18%", left: "5%", size: 30, className: "animate-float-particle-1 text-copper/20" },
    { id: 2, top: "25%", left: "80%", size: 25, className: "animate-float-particle-2 text-rose/15" },
    { id: 3, top: "60%", left: "4%", size: 35, className: "animate-float-particle-2 text-champagne/10" },
    { id: 4, top: "82%", left: "88%", size: 20, className: "animate-float-particle-1 text-copper/15" }
  ];

  // Why choose us items - compliant headers
  const qualities = [
    {
      title: "Traditional Formulations",
      desc: "Authentic combinations compiled carefully from classical regional Ayurvedic heritage files.",
      icon: Leaf
    },
    {
      title: "Carefully Sourced Ingredients",
      desc: "Preserving exact Telugu ingredient titles without translating them to guessed botanical names.",
      icon: FileText
    },
    {
      title: "Indian Wellness Traditions",
      desc: "Focused on restoring baseline systemic balance rather than temporary, chemical symptom masking.",
      icon: Compass
    },
    {
      title: "Direct Product Information",
      desc: "Providing a clean showcase of formulas, redirecting specific diagnostic questions to direct chat.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="luxury-bg-layered min-h-screen text-cream-white overflow-hidden relative">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        
        {/* Soft background light leakage image layer */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80"
            alt="Ayurvedic botanical forest leaves background overlay"
            className="w-full h-full object-cover pointer-events-none opacity-5 animate-slow-breath"
          />
        </div>

        {/* Floating animated botanical SVGs */}
        {floatingParticles.map((part) => (
          <div
            key={part.id}
            className={`absolute z-10 pointer-events-none ${part.className}`}
            style={{ top: part.top, left: part.left }}
          >
            <svg width={part.size} height={part.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 22C2 22 6 18 12 18C18 18 22 22 22 22M12 2C12 2 4 8 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2ZM12 2V22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-16 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Header Text column */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-copper/10 border border-copper/20 text-champagne text-[10px] font-bold uppercase tracking-widest font-button"
              >
                <Leaf size={12} className="text-copper fill-current" />
                TRADITION • FORMULATION • WELLNESS
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-champagne leading-none"
              >
                Ancient Wisdom, <br />
                <span className="text-stroke-copper font-serif italic text-copper font-normal">Reimagined.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-taupe text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-light"
              >
                Explore RK Organics formulations, ingredients and traditional wellness information. Authentic herbo-mineral mixtures sourced ethically and presented with botanical clarity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
              >
                <Link
                  to="/products"
                  className="btn-luxury px-8 py-4 bg-copper hover:bg-copper-light text-cream-white rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Explore Formulations
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/solutions"
                  className="btn-luxury px-8 py-4 bg-plum-light/50 border border-white/10 hover:border-copper text-champagne font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles size={12} className="text-copper" />
                  Find Your Solution
                </Link>
              </motion.div>
            </div>

            {/* Large Artistic Botanical Composition column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[410px] md:h-[410px]"
              >
                {/* Overlapping soft light circles */}
                <div className="absolute top-10 right-10 w-48 h-48 bg-copper/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-rose/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Floating botanical frame outside container */}
                <div className="absolute inset-4 rounded-[42px] overflow-hidden border-2 border-white/5 shadow-2xl relative z-10">
                  <motion.img
                    src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800"
                    alt="Dried herbs and roots visual composition"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/40 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* 2. SPLIT ASYMMETRIC ABOUT SECTION */}
      <section className="py-32 bg-plum-dark relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Narrative Text - 7/12 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-copper font-bold tracking-widest text-[10px] uppercase block font-button">
                Rooted in Tradition
              </span>
              <h2 className="font-serif text-4.5xl sm:text-6xl font-bold text-champagne leading-none">
                Rooted in Tradition.
              </h2>
              <div className="w-16 h-0.5 bg-copper rounded-full" />
              
              <div className="space-y-4 text-taupe text-sm leading-relaxed font-sans font-light text-justify">
                <p>
                  At RK Organics, we believe wellness is a reflection of physical, mental, and environmental harmony. Instead of fabricating stories or clinical claims, we place our trust in time-tested herbal combinations used in India for generations.
                </p>
                <p>
                  We compile and maintain precise lists of raw ingredients—roots, resins, seeds, and mineral clays—exactly as they are passed down. This ensures you receive authentic, traditional formulations designed to support your body's systems naturally.
                </p>
              </div>

              <div className="p-5 bg-plum-light/35 border border-white/5 rounded-2xl">
                <p className="text-xs text-taupe leading-relaxed italic font-sans">
                  "Detailed history, founding members, and certification numbers are maintained by RK Organics and can be verified directly upon consultation."
                </p>
              </div>
            </motion.div>

            {/* Right Botanical Image Composition - 5/12 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-plum-dark">
                <img
                  src="https://images.unsplash.com/photo-1546849448-65f53a37ced4?auto=format&fit=crop&q=80&w=800"
                  alt="Traditional Ayurvedic extraction process"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlapping badge */}
              <div className="absolute -bottom-6 -left-6 bg-plum-light border border-white/10 p-5 rounded-2xl shadow-xl max-w-xs space-y-1.5 hidden sm:block">
                <div className="flex gap-2 text-copper items-center">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-button">Purity Integrity</span>
                </div>
                <p className="text-[10px] text-taupe leading-relaxed">
                  Every formulation list reflects exact, unfiltered raw ingredients provided by regional Vaidyas.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. FIND YOUR SOLUTION PICKER CENTERPIECE */}
      <section className="py-32 bg-plum relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <CategorySelector />

        </div>
      </section>

      {/* 4. FEATURED FORMULATIONS */}
      <section className="py-32 bg-plum-dark relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 text-center md:text-left">
              <span className="text-copper font-bold tracking-widest text-[10px] uppercase block font-button">
                Selected Mixtures
              </span>
              <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-champagne">
                Featured Formulations
              </h2>
              <div className="w-16 h-0.5 bg-copper rounded-full md:mx-0 mx-auto" />
            </div>

            <Link
              to="/products"
              className="btn-luxury text-[10px] font-bold uppercase tracking-widest text-champagne hover:text-white transition-all group flex items-center gap-1.5"
            >
              Browse Complete Catalog
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Staggered cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formulations.slice(0, 3).map((form) => (
              <ProductCard
                key={form.id}
                formulation={form}
                onOpenDetails={(item) => setSelectedFormulation(item)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. INGREDIENTS / BOTANICAL EDUCATION */}
      <section className="py-32 bg-plum relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Copy details */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="text-copper font-bold tracking-widest text-[10px] uppercase block font-button">
                Nature to Formulation
              </span>
              <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-champagne leading-snug">
                Honoring Ayurvedic Ingredients
              </h2>
              <div className="w-16 h-0.5 bg-copper rounded-full" />
              
              <div className="space-y-4 text-taupe text-sm leading-relaxed font-sans font-light text-justify">
                <p>
                  Ayurvedic formulations depend on complex balances of wild herbs, tree barks, dried seeds, and mineral salts. RK Organics works directly with traditional raw ingredients sourced ethically and prepared cleanly.
                </p>
                <p>
                  We represent herbo-mineral elements (including Swarna Bhasma, Loha Bhasma, and Shilajit) transparently as they appear in classical recipes. We do not invent clinical proofs or diagnostic claims. The ingredients lists are compiled only for visitor information.
                </p>
              </div>
            </motion.div>

            {/* Botanical Composition Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-plum-dark">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800"
                  alt="Raw spices and herbal roots representation"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. WHY RK ORGANICS - COMPLIANT CARDS */}
      <section className="py-32 bg-plum-dark relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="text-copper font-bold tracking-widest text-[10px] uppercase block font-button">
              Transparent Standards
            </span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-champagne">
              Why RK Organics?
            </h2>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
                  className="glass-card-dark p-8 bg-plum-light/35 border-white/5 flex flex-col items-start space-y-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-plum/50 text-copper flex items-center justify-center border border-white/5">
                    <IconComp className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-champagne">
                    {item.title}
                  </h3>
                  <p className="text-taupe text-xs leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="py-32 bg-plum relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-copper font-bold tracking-widest text-[10px] uppercase block font-button">
                  Talk to RK Organics
                </span>
                <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-champagne">
                  Connect with the Brand
                </h2>
                <div className="w-16 h-1 bg-copper rounded-full" />
                <p className="text-taupe text-sm leading-relaxed font-sans font-light">
                  Have questions about raw ingredients, extraction cleanliness, or the verification of Telugu terms? Write to us directly on WhatsApp or email.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-plum-light border border-white/5 text-copper flex items-center justify-center flex-shrink-0">
                    <Leaf size={20} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-champagne text-lg">Address</h4>
                    <p className="text-taupe text-xs mt-1 leading-relaxed italic font-sans font-light">
                      Physical clinic/office address to be confirmed with RK Organics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-plum-light border border-white/5 text-copper flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={18} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-champagne text-lg">Direct Queries</h4>
                    <p className="text-taupe text-xs mt-1 leading-relaxed italic font-sans font-light">
                      Phone / WhatsApp: details pending client confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-7 bg-plum-light/25 border border-white/5 rounded-[32px] p-6 sm:p-10 shadow-2xl"
            >
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-champagne">Send a Message</h3>
                <p className="text-xs text-taupe font-sans font-light">Please submit your queries. We will review and follow up directly.</p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-bold uppercase tracking-widest text-copper font-button block mb-1">Your Name</label>
                      <input type="text" placeholder="Name" className="w-full bg-plum-dark/45 border border-white/5 focus:border-copper rounded-xl p-3 text-xs outline-none transition-all font-sans text-cream-white placeholder-taupe/40" />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase tracking-widest text-copper font-button block mb-1">Email / Phone</label>
                      <input type="text" placeholder="Contact details" className="w-full bg-plum-dark/45 border border-white/5 focus:border-copper rounded-xl p-3 text-xs outline-none transition-all font-sans text-cream-white placeholder-taupe/40" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest text-copper font-button block mb-1">Your Query</label>
                    <textarea rows="4" placeholder="Hello, I want to ask about..." className="w-full bg-plum-dark/45 border border-white/5 focus:border-copper rounded-xl p-3 text-xs outline-none transition-all font-sans text-cream-white placeholder-taupe/40 resize-none"></textarea>
                  </div>
                  <button type="submit" className="btn-luxury px-8 py-3.5 bg-copper hover:bg-copper-light text-cream-white rounded-full text-xs uppercase tracking-widest shadow-lg transition-all cursor-pointer">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Product Details Modal rendering */}
      <ProductDetails
        formulation={selectedFormulation}
        isOpen={selectedFormulation !== null}
        onClose={() => setSelectedFormulation(null)}
      />

    </div>
  );
}
