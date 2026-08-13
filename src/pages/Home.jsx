import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, MessageSquare, Compass, ShieldCheck, Heart, FileText, ArrowRight, Sparkles, AlertCircle, ChevronDown, ChevronUp, PhoneCall } from "lucide-react";
import CategorySelector from "../components/CategorySelector";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import { formulations } from "../data/formulationsData";

// FAQ Item helper component
function FAQAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-sand-light py-4 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group"
      >
        <span className="font-serif text-lg font-bold text-botanical-dark group-hover:text-terracotta transition-colors">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full bg-sand-light text-botanical flex items-center justify-center transition-transform duration-300 ${
          isOpen ? "rotate-180 bg-botanical text-white" : ""
        }`}>
          <ChevronDown size={16} />
        </div>
      </button>
      <div className={`accordion-content ${isOpen ? "open mt-3" : ""}`}>
        <p className="text-charcoal-green/85 text-xs sm:text-sm leading-relaxed font-sans font-light">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [selectedFormulation, setSelectedFormulation] = useState(null);

  // Trust items - compliant headers
  const trustItems = [
    {
      title: "Traditional Formulation Information",
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

  // Process timeline items
  const processSteps = [
    {
      step: "01",
      title: "Choose a Category",
      desc: "Select a primary health system or concern area to discover corresponding traditional remedies."
    },
    {
      step: "02",
      title: "Explore Formulations",
      desc: "Review ingredient list components provided directly from classical Ayurvedic guidelines."
    },
    {
      step: "03",
      title: "Review Product Info",
      desc: "Read detailed safety warnings and preparation notices before taking specific steps."
    },
    {
      step: "04",
      title: "Contact RK Organics",
      desc: "Start a chat on WhatsApp with our consultants for product-specific guidance."
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: "What information is available for RK Organics formulations?",
      answer: "We provide complete raw ingredients listings exactly as supplied by the brand in Telugu, alongside general descriptive guidance. Dosage, contraindications, and specific clinical advice are omitted to maintain Ayush compliance."
    },
    {
      question: "How can I find a formulation by category?",
      answer: "Use our centerpiece 'Find Your Solution' selector on the homepage or Solutions page. You can click on any category to view its associated traditional Ayurvedic mixture."
    },
    {
      question: "Where can I view the ingredients?",
      answer: "Every formulation card and detail page contains a detailed list of ingredients. For formulas with long listings (Categories 2 and 4), you can click 'View Complete Ingredients' to expand the accordion."
    },
    {
      question: "How can I contact RK Organics?",
      answer: "You can click any WhatsApp icon across the site or submit your inquiry through the Contact section. We also provide email and phone details pending final confirmation."
    },
    {
      question: "Where can I get product-specific usage information?",
      answer: "Dosage and suitability vary dynamically depending on individual body constitution (doshas). We strongly recommend consulting with a qualified Ayurvedic practitioner or contacting the brand directly."
    }
  ];

  return (
    <div className="bg-natural-light min-h-screen text-charcoal-green relative">
      
      {/* 1. PREMIUM SPACIOUS HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-sand-light/40">
        
        {/* Soft botanical parallax background elements */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80"
            alt="Botanical backdrop foliage"
            className="w-full h-full object-cover pointer-events-none opacity-[0.03]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-botanical/5 border border-botanical/15 text-botanical text-xs font-semibold uppercase tracking-wider font-button"
              >
                <Leaf size={12} className="text-terracotta fill-current" />
                TRADITIONAL AYURVEDIC FORMULATIONS
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-5xl sm:text-6xl md:text-6.5xl font-bold text-botanical-dark leading-tight"
              >
                Discover Traditional Wellness, <br />
                <span className="italic text-terracotta font-normal font-serif">Thoughtfully Presented.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-charcoal-green/80 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-light"
              >
                Explore RK Organics formulations, ingredients and product information. Authentic herbo-mineral mixtures sourced ethically and presented with botanical clarity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
              >
                <Link
                  to="/products"
                  className="btn-luxury px-8 py-4 bg-botanical hover:bg-botanical-light text-cream rounded-full shadow-md hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Explore Formulations
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/solutions"
                  className="btn-luxury px-8 py-4 bg-white border border-sand-dark hover:border-botanical text-botanical font-semibold rounded-full hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Sparkles size={12} className="text-terracotta" />
                  Find Your Solution
                </Link>
              </motion.div>
            </div>

            {/* Right masked image reveal column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[410px] md:h-[410px]"
              >
                {/* Visual circle accents */}
                <div className="absolute inset-0 rounded-full border border-sand-dark scale-105 animate-pulse" />
                <div className="absolute inset-4 rounded-3xl overflow-hidden border border-sand-light shadow-2xl bg-white z-10">
                  <motion.img
                    src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800"
                    alt="Ayurvedic dry herbal ingredients composition"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 bg-white relative border-t border-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Asymmetric left column visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-sand-light bg-sand-light">
                <img
                  src="https://images.unsplash.com/photo-1546849448-65f53a37ced4?auto=format&fit=crop&q=80&w=800"
                  alt="Extraction processes of raw herbs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-natural-light border border-sand-light p-6 rounded-2xl shadow-xl max-w-xs space-y-1 hidden sm:block">
                <div className="flex gap-2 text-terracotta items-center">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-button">Purity Integrity</span>
                </div>
                <p className="text-[10px] text-charcoal-green/80 leading-relaxed font-sans">
                  Every formulation list reflects exact, unfiltered raw ingredients provided by regional Vaidyas.
                </p>
              </div>
            </motion.div>

            {/* Right text layout */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <span className="text-terracotta font-bold tracking-widest text-[10px] uppercase block font-button">
                Rooted in Traditional Wellness
              </span>
              <h2 className="font-serif text-4xl md:text-4.5xl font-bold text-botanical-dark leading-tight">
                Authentic Formulas, Safely Transcribed.
              </h2>
              <div className="w-16 h-0.5 bg-botanical rounded-full" />
              
              <div className="space-y-4 text-charcoal-green/90 text-sm leading-relaxed font-sans font-light">
                <p>
                  At RK Organics, we believe wellness is a reflection of physical, mental, and environmental harmony. Instead of fabricating stories or clinical claims, we place our trust in time-tested herbal combinations used in India for generations.
                </p>
                <p>
                  We compile and maintain precise lists of raw ingredients—roots, resins, seeds, and mineral clays—exactly as they are passed down. This ensures you receive authentic, traditional formulations designed to support your body's systems naturally.
                </p>
              </div>

              <div className="p-4 bg-sand-light/50 border border-sand-light rounded-2xl">
                <p className="text-xs text-charcoal-green/75 leading-relaxed italic font-sans font-light">
                  "Detailed history, founding members, and certification numbers are maintained by RK Organics and can be verified directly upon consultation."
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. FIND YOUR SOLUTION PICKER */}
      <section className="py-24 bg-sand-light/35 border-y border-sand-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="text-terracotta font-bold tracking-widest text-[10px] uppercase block font-button">
              Find Your Solution
            </span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-botanical-dark">
              Where would you like to begin?
            </h2>
            <div className="w-16 h-1 bg-botanical mx-auto rounded-full" />
          </motion.div>

          <CategorySelector />

        </div>
      </section>

      {/* 4. FORMULATIONS SHOWCASE */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 text-center md:text-left">
              <span className="text-terracotta font-bold tracking-widest text-[10px] uppercase block font-button">
                Selected Mixtures
              </span>
              <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-botanical-dark">
                Our Traditional Formulations
              </h2>
              <div className="w-16 h-0.5 bg-botanical rounded-full md:mx-0 mx-auto" />
            </div>

            <Link
              to="/products"
              className="btn-luxury text-xs font-bold uppercase tracking-wider text-botanical hover:text-terracotta transition-colors group flex items-center gap-1.5"
            >
              Browse Complete Catalog
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

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

      {/* 5. TRUST & RECOGNITION SECTION */}
      <section className="py-24 bg-sand-light/35 border-y border-sand-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="text-terracotta font-bold tracking-widest text-[10px] uppercase block font-button">
              Transparent Standards
            </span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-botanical-dark">
              Trust & Traditional Integrity
            </h2>
            <div className="w-16 h-1 bg-botanical mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
                  className="glass-card-dark p-8 bg-white border border-sand-light flex flex-col items-start space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-botanical/5 text-botanical flex items-center justify-center shadow-inner">
                    <IconComp className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-botanical-dark">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-green/80 text-xs leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. HOW IT WORKS TIMELINE */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="text-terracotta font-bold tracking-widest text-[10px] uppercase block font-button">
              Step by Step
            </span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-botanical-dark">
              How It Works
            </h2>
            <div className="w-16 h-1 bg-botanical mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
                className="p-6 bg-sand-light/40 border border-sand-light rounded-2xl flex flex-col justify-between h-full space-y-6"
              >
                <div className="space-y-4">
                  <span className="font-serif text-3xl font-bold text-terracotta/40 block">
                    {step.step}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-botanical-dark">
                    {step.title}
                  </h4>
                  <p className="text-charcoal-green/85 text-xs font-sans font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FAQ ACCORDIONS */}
      <section className="py-24 bg-sand-light/35 border-t border-sand-light relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-terracotta font-bold tracking-widest text-[10px] uppercase block font-button">
              FAQ
            </span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-botanical-dark">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-0.5 bg-botanical mx-auto rounded-full" />
          </div>

          <div className="bg-white border border-sand-light rounded-3xl p-6 sm:p-10 shadow-sm divide-y divide-sand-light">
            {faqs.map((faq, idx) => (
              <FAQAccordion
                key={idx}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 8. FINAL CONTACT CTA */}
      <section id="contact" className="py-24 bg-botanical text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-botanical-dark/90 via-botanical to-botanical-light/75 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="space-y-4">
            <span className="text-terracotta-light font-bold tracking-widest text-xs uppercase block font-button">
              Inquiries
            </span>
            <h2 className="font-serif text-4xl sm:text-5.5xl font-bold text-white leading-tight">
              Want to Know More About a Formulation?
            </h2>
            <p className="text-sage-light text-sm sm:text-base max-w-xl mx-auto font-sans font-light leading-relaxed">
              Contact RK Organics directly for product-specific details, herb purifications, or content verification questions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <a
              href="https://wa.me/+919876543210?text=Hello%20RK%20Organics%2C%20I%20would%20like%20to%20know%20more%20about%20your%20formulations."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury px-8 py-4 bg-terracotta hover:bg-terracotta-light text-white rounded-full flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-wider cursor-pointer"
            >
              <MessageSquare size={16} /> WhatsApp RK Organics
            </a>
            
            <a
              href="tel:+919876543210"
              className="btn-luxury px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white rounded-full flex items-center gap-2 hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-wider cursor-pointer"
            >
              <PhoneCall size={16} /> Call RK Organics
            </a>
          </div>

        </div>
      </section>

      {/* Product Details Modal */}
      <ProductDetails
        formulation={selectedFormulation}
        isOpen={selectedFormulation !== null}
        onClose={() => setSelectedFormulation(null)}
      />

    </div>
  );
}
