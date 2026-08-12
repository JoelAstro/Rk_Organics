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

  // Floating leaf settings for Hero section
  const floatingLeaves = [
    { id: 1, top: "15%", left: "8%", size: 40, className: "animate-float-leaf-1 text-sage/35" },
    { id: 2, top: "22%", left: "85%", size: 30, className: "animate-float-leaf-2 text-gold/30" },
    { id: 3, top: "65%", left: "6%", size: 45, className: "animate-float-leaf-2 text-forest-light/15" },
    { id: 4, top: "78%", left: "82%", size: 35, className: "animate-float-leaf-1 text-sage/25" }
  ];

  // Why choose us items - compliant headers
  const qualities = [
    {
      title: "Traditional Formulations",
      desc: "Authentic combinations compiled carefully from classical regional Ayurvedic heritage files.",
      icon: Leaf
    },
    {
      title: "Carefully Presented Ingredients",
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
    <div className="relative w-full overflow-hidden bg-ivory">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-sand/35">
        
        {/* Parallax botanical visual backdrop */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80"
            alt="Ayurvedic botanical forest leaves"
            className="w-full h-full object-cover pointer-events-none opacity-20"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/95 to-transparent" />
        </div>

        {/* Floating animated botanical SVGs */}
        {floatingLeaves.map((leaf) => (
          <div
            key={leaf.id}
            className={`absolute z-10 pointer-events-none ${leaf.className}`}
            style={{ top: leaf.top, left: leaf.left }}
          >
            <svg width={leaf.size} height={leaf.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Header Text column */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs font-semibold uppercase tracking-widest font-button"
              >
                <Leaf size={12} className="text-gold fill-current" />
                Rooted in Indian Wellness Tradition
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4.5xl sm:text-5.5xl md:text-6.5xl font-bold text-forest-dark leading-tight"
              >
                Ancient Wisdom. <br />
                <span className="text-stroke-gold font-serif italic text-gold font-normal">Thoughtfully Presented.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-charcoal-light text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
              >
                Explore RK Organics formulations, ingredients and traditional wellness information. Sourced naturally, packaged sterile, and maintained with complete botanical transparency.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
              >
                <Link
                  to="/products"
                  className="btn-premium px-8 py-4 bg-forest hover:bg-forest-light text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 group"
                >
                  Explore Formulations
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/solutions"
                  className="btn-premium px-8 py-4 bg-transparent border-2 border-forest/20 hover:border-forest text-forest hover:bg-forest/5 font-semibold rounded-full hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Sparkles size={12} className="text-gold" />
                  Find Your Solution
                </Link>
              </motion.div>
            </div>

            {/* Circular picture composition column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px]"
              >
                {/* Thin gold ring */}
                <div className="absolute inset-0 rounded-full border border-gold/20 scale-105 animate-pulse" />
                {/* Image frame */}
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl border-4 border-white z-10">
                  <motion.img
                    src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800"
                    alt="Ayurvedic dry herbal roots composition"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Delicate curved section bottom divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] fill-white">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V30.9C1124.47,48.23,1051.11,110,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. ABOUT COMPLIANT SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Imagery composition */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-forest/5 bg-cream">
                <img
                  src="https://images.unsplash.com/photo-1546849448-65f53a37ced4?auto=format&fit=crop&q=80&w=800"
                  alt="Ayurvedic organic extraction process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/95 border border-gold/20 p-6 rounded-2xl shadow-xl max-w-xs space-y-1.5 hidden sm:block">
                <div className="flex gap-2 text-gold items-center">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-button">Purity Integrity</span>
                </div>
                <p className="text-[10px] text-charcoal-light leading-relaxed">
                  Every formulation list reflects exact, unfiltered raw ingredients provided by regional Vaidyas.
                </p>
              </div>
            </motion.div>

            {/* Narrative text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">
                Rooted in Tradition
              </span>
              <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">
                Preserving Formulation Purity
              </h2>
              <div className="w-16 h-0.5 bg-gold rounded-full" />
              
              <p className="text-charcoal-light text-sm leading-relaxed">
                RK Organics compiles and presents traditional Indian herbal formulations with complete data honesty. Rather than framing diagnostic promises or clinical claims, we act as a library for classical recipes passed down by generation Vaidyas.
              </p>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Each category showcases detailed, unchanged ingredient lists transliterated directly from Telugu sources. We recommend consultations prior to usage and are happy to connect you directly with the brand support.
              </p>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="btn-premium text-xs uppercase tracking-wider text-forest font-bold hover:text-gold flex items-center gap-1.5"
                >
                  Our Core Pillars <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. SIGNATURE CENTERPIECE: FIND YOUR SOLUTION */}
      <section className="py-24 bg-sand/35 border-y border-forest/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">
              Find Your Solution
            </span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">
              Discovery Centerpiece
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-charcoal-light text-sm max-w-lg mx-auto leading-relaxed">
              Explore our compiled formulations by wellness category. Selecting a card reveals Telugu ingredients list, usage guides, and WhatsApp details.
            </p>
          </motion.div>

          <CategorySelector />

        </div>
      </section>

      {/* 4. FEATURED FORMULATIONS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 text-center md:text-left">
              <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">
                Selected Mixtures
              </span>
              <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">
                Featured Formulations
              </h2>
              <div className="w-16 h-0.5 bg-gold rounded-full md:mx-0 mx-auto" />
            </div>

            <Link
              to="/products"
              className="btn-premium text-xs uppercase tracking-wider text-forest hover:text-gold font-bold transition-all group flex items-center gap-1.5"
            >
              Browse Complete Catalog
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid list of selected items (first 3) */}
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
      <section className="py-24 bg-cream/35 border-y border-forest/5 relative">
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
              <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">
                Nature to Formulation
              </span>
              <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">
                Honoring Ayurvedic Ingredients
              </h2>
              <div className="w-16 h-0.5 bg-gold rounded-full" />
              
              <p className="text-charcoal-light text-sm leading-relaxed">
                Ayurvedic formulations depend on complex balances of wild herbs, tree barks, dried seeds, and mineral salts. RK Organics works directly with traditional raw ingredients sourced ethically and prepared cleanly.
              </p>
              <p className="text-charcoal-light text-sm leading-relaxed text-justify">
                We represent herbo-mineral elements (including Swarna Bhasma, Loha Bhasma, and Shilajit) transparently as they appear in classical recipes. We do not invent clinical proofs or diagnostic claims. The ingredients lists are compiled only for visitor information.
              </p>
            </motion.div>

            {/* Botanical Composition Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-forest/5 bg-cream">
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
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">
              Transparent Standards
            </span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">
              Why RK Organics?
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
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
                  className="glass-card-premium p-6 md:p-8 bg-white/60 flex flex-col items-start space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest flex items-center justify-center shadow-inner">
                    <IconComp className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest-dark">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-light text-xs leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-ivory relative">
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
                <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">
                  Talk to RK Organics
                </span>
                <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">
                  Connect with the Brand
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full" />
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Have questions about raw ingredients, extraction cleanliness, or the verification of Telugu terms? Write to us directly on WhatsApp or email.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest/5 text-forest flex items-center justify-center flex-shrink-0">
                    <Leaf size={20} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-forest-dark text-lg">Address</h4>
                    <p className="text-charcoal-light text-xs mt-1 leading-relaxed italic">
                      Physical clinic/office address to be confirmed with RK Organics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest/5 text-forest flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={18} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-forest-dark text-lg">Direct Queries</h4>
                    <p className="text-charcoal-light text-xs mt-1 leading-relaxed italic">
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
              className="lg:col-span-7 bg-cream/30 border border-forest/5 rounded-[32px] p-6 sm:p-10 shadow-lg"
            >
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-forest-dark">Send a Message</h3>
                <p className="text-xs text-charcoal-light">Please submit your queries. We will review and follow up directly.</p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-forest font-button block mb-1">Your Name</label>
                      <input type="text" placeholder="Name" className="w-full bg-white border border-forest/10 focus:border-forest rounded-xl p-3 text-xs outline-none transition-all font-sans" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-forest font-button block mb-1">Email / Phone</label>
                      <input type="text" placeholder="Contact details" className="w-full bg-white border border-forest/10 focus:border-forest rounded-xl p-3 text-xs outline-none transition-all font-sans" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-forest font-button block mb-1">Your Query</label>
                    <textarea rows="4" placeholder="Hello, I want to ask about..." className="w-full bg-white border border-forest/10 focus:border-forest rounded-xl p-3 text-xs outline-none transition-all font-sans resize-none"></textarea>
                  </div>
                  <button type="submit" className="btn-premium px-8 py-3.5 bg-forest hover:bg-forest-light text-white rounded-full text-xs uppercase tracking-wider shadow transition-all cursor-pointer">
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
