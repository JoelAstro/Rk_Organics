import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView, animate } from "framer-motion";
import {
  Leaf,
  Droplets,
  Layers,
  Flame,
  CheckCircle,
  Package,
  Truck,
  ArrowRight,
  Shield,
  Heart,
  FileCheck,
  Sparkles,
  Users,
  Compass,
  Award,
  Brain,
  Activity,
  Moon,
  Smile,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import TestimonialCarousel from "../components/TestimonialCarousel";
import LightboxGallery from "../components/LightboxGallery";
import ContactForm from "../components/ContactForm";
import { categories, products } from "../data/productsData";
import { healthSolutions } from "../data/solutionsData";
import { blogs } from "../data/blogsData";

// Animated Counter Component using Framer Motion
function Counter({ from = 0, to, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// Icon mapping helper for Solutions
const iconMap = {
  Brain,
  Activity,
  Flame,
  Moon,
  Smile,
  Leaf,
  Heart,
  Award
};

function SolutionIcon({ name, className }) {
  const IconComp = iconMap[name] || Activity;
  return <IconComp className={className} />;
}

export default function Home() {
  const navigate = useNavigate();

  // Scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Why Choose Us luxury glass card array with stats mapping
  const whyChooseUsData = [
    {
      title: "100% Natural",
      desc: "Pure wild-crafted roots, fresh therapeutic flowers, and organic herbs. Absolutely zero synthetic chemicals.",
      icon: <Leaf className="w-5 h-5" />,
      stat: <Counter to={100} suffix="%" />
    },
    {
      title: "Self Manufactured",
      desc: "We own and operate our state-of-the-art sterile extracting units, guaranteeing absolute quality control.",
      icon: <Layers className="w-5 h-5" />,
      stat: <Counter to={8} suffix=" Classical Meds" />
    },
    {
      title: "Quality Tested",
      desc: "Independently audited via HPLC analysis and ICP-MS to guarantee 100% heavy-metal exclusion.",
      icon: <FileCheck className="w-5 h-5" />,
      stat: <Counter to={15} suffix=" Vaidyas" />
    },
    {
      title: "Trusted Formulations",
      desc: "Passed down through generational family Vaidyas, balancing doshas and restoring physical reserves safely.",
      icon: <Heart className="w-5 h-5" />,
      stat: <Counter to={10000} suffix="+" />
    }
  ];

  // Horizontal Timeline Step array
  const timelineSteps = [
    {
      step: "01",
      title: "Herb Selection",
      desc: "Harvesting fresh wild-crafted roots and botanical leaves during peak potency seasons.",
      icon: <Leaf className="w-5 h-5" />
    },
    {
      step: "02",
      title: "Cleaning",
      desc: "Triple-washing in natural forest spring water to extract raw dust particles.",
      icon: <Droplets className="w-5 h-5" />
    },
    {
      step: "03",
      title: "Grinding",
      desc: "Slow stone milling at low speeds to prevent heat-friction oil nutrient destruction.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      step: "04",
      title: "Mixing",
      desc: "Slow cooking (Ksheera Pakva method) in milk-base decoctions on clay-lined ovens.",
      icon: <Flame className="w-5 h-5" />
    },
    {
      step: "05",
      title: "Quality Testing",
      desc: "HPLC checking to guarantee concentration parameters and 0% heavy metals.",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      step: "06",
      title: "Packaging",
      desc: "Sterile bottling in recyclable protective glass jars to safeguard bio-active elements.",
      icon: <Package className="w-5 h-5" />
    },
    {
      step: "07",
      title: "Distribution",
      desc: "Transporting direct to patients and wellness seekers with protective eco-friendly packaging.",
      icon: <Truck className="w-5 h-5" />
    }
  ];

  // Floating leaf positions in Hero
  const floatingLeaves = [
    { id: 1, top: "18%", left: "6%", size: 40, className: "animate-float-leaf-1 text-sage/30" },
    { id: 2, top: "25%", left: "82%", size: 30, className: "animate-float-leaf-2 text-gold/30" },
    { id: 3, top: "60%", left: "5%", size: 50, className: "animate-float-leaf-2 text-forest-light/20" },
    { id: 4, top: "78%", left: "88%", size: 35, className: "animate-float-leaf-1 text-sage/25" }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-ivory">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        
        {/* Slowly Zooming Background Visual */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80"
            alt="Nature backdrop"
            className="w-full h-full object-cover pointer-events-none"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-ivory/95 to-transparent" />
        </div>

        {/* Floating animated leaf graphics */}
        {floatingLeaves.map((leaf) => (
          <div
            key={leaf.id}
            className={`absolute z-10 pointer-events-none ${leaf.className}`}
            style={{ top: leaf.top, left: leaf.left }}
          >
            <svg
              width={leaf.size}
              height={leaf.size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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

        {/* Hero content structure */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center lg:text-left py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text description */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs font-semibold uppercase tracking-widest font-button"
              >
                <Leaf size={12} className="text-gold fill-current" />
                Preserving Ancient Vedic Integrity
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4.5xl sm:text-5.5xl md:text-6.5xl font-bold text-forest-dark leading-tight"
              >
                Natural Healing Begins <br />
                <span className="text-stroke-gold font-serif italic text-gold font-normal">with RK Organics</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-charcoal-light text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
              >
                Traditional Ayurvedic wisdom combined with modern quality standards to support your family's health naturally. Discover customized herbal solutions tailored for your unique body constitution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
              >
                <Link
                  to="/solutions"
                  className="btn-premium px-8 py-4 bg-forest hover:bg-forest-light text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group text-xs uppercase tracking-wider"
                >
                  Explore Solutions
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products"
                  className="btn-premium px-8 py-4 bg-transparent hover:bg-forest/5 text-forest border-2 border-forest/20 hover:border-forest font-semibold rounded-full hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-wider"
                >
                  Our Products
                </Link>
              </motion.div>
            </div>

            {/* Circular picture frame */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[410px] md:h-[410px]"
              >
                {/* Thin gold ring */}
                <div className="absolute inset-0 rounded-full border border-gold/30 scale-105 animate-pulse" />
                {/* Image frame */}
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl border-4 border-white z-10">
                  <motion.img
                    src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=800&q=80"
                    alt="Ayurvedic medicine bottle"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>

        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] fill-white">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V30.9C1124.47,48.23,1051.11,110,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. FIND YOUR HEALTH SOLUTION CENTERPIECE */}
      <section id="health-concerns" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">Patient Guided Journey</span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">What Health Concern Are You Facing Today?</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-charcoal-light text-sm max-w-lg mx-auto leading-relaxed">
              Click on your specific concern to understand possible Ayurvedic root causes, herbal guidelines, and lifestyle management tips.
            </p>
          </motion.div>

          {/* Grid of health concerns (Frosted Glass Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {healthSolutions.slice(0, 9).map((sol, idx) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => navigate(`/solutions/${sol.id}`)}
                className="glass-card-premium p-6 sm:p-8 cursor-pointer flex flex-col justify-between group bg-white/60"
              >
                <div className="space-y-5">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-forest/5 text-forest group-hover:bg-forest group-hover:text-gold flex items-center justify-center transition-colors duration-500 shadow-sm">
                    <SolutionIcon name={sol.icon} className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  
                  {/* Title details */}
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-2xl font-bold text-forest-dark group-hover:text-forest transition-colors leading-tight">
                      {sol.name}
                    </h3>
                    <p className="text-charcoal-light text-xs leading-relaxed line-clamp-3">
                      {sol.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-forest group-hover:translate-x-1.5 transition-transform font-button pt-4 border-t border-forest/5">
                  Learn Remedies & Tips <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Browse all button */}
          <div className="text-center">
            <Link
              to="/solutions"
              className="btn-premium inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest hover:bg-forest-light text-white text-xs uppercase tracking-wider rounded-full shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Browse All Health Solutions
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. ABOUT STORY */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Imagery panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-forest/5">
                <motion.img
                  src="https://images.unsplash.com/photo-1546849448-65f53a37ced4?auto=format&fit=crop&q=80&w=800"
                  alt="Ayurvedic organic extraction process"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              {/* Overlapping small accent card */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur border border-gold/20 p-6 rounded-2xl shadow-xl max-w-xs space-y-2 hidden sm:block">
                <div className="flex gap-2 text-gold">
                  <Award size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-button">Quality Verified</span>
                </div>
                <h4 className="font-serif font-bold text-forest-dark text-sm leading-snug">Independently Tested Purity</h4>
                <p className="text-charcoal-light text-[10px] leading-relaxed">
                  Every batch of medicine is checked in analytical labs to guarantee active markers.
                </p>
              </div>
            </motion.div>

            {/* Storytelling details */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">Our Legacy</span>
              <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark leading-tight">
                Authentic Ayurvedic Heritage
              </h2>
              <div className="w-16 h-0.5 bg-gold rounded-full" />
              
              <p className="text-charcoal-light text-sm leading-relaxed">
                Founded deep in the Veda Valley of Kerala, RK Organics was created by traditional Vaidyas to safeguard pristine medicine preparation. Rather than chemical extraction, we follow natural solar cycles and manual grinding processes to keep therapeutic molecules alive.
              </p>
              <p className="text-charcoal-light text-sm leading-relaxed">
                We believe that healing begins by understanding root metabolic causes rather than suppressing superficial symptoms. We harvest herbs ethically from organic cooperative farms, maintaining respect for nature.
              </p>

              <div className="flex gap-6 pt-4">
                <Link
                  to="/about"
                  className="btn-premium text-xs uppercase tracking-wider text-forest font-bold hover:text-gold flex items-center gap-1.5"
                >
                  Our Detailed Story <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING TIMELINE PROCESS */}
      <section id="process" className="py-24 bg-cream/35 border-y border-forest/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">Step by Step Integrity</span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">Our Manufacturing Process</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-charcoal-light text-sm max-w-lg mx-auto leading-relaxed">
              Trace how our wild-harvested botanicals are transformed into sterile, high-potency Ayurvedic remedies.
            </p>
          </motion.div>

          {/* Horizontal scroll/swipe progress timeline container */}
          <div className="overflow-x-auto pb-6 hide-scrollbar relative">
            <div className="flex min-w-[1000px] lg:min-w-0 justify-between items-start relative px-4">
              
              {/* Connecting progress line */}
              <div className="absolute top-10 left-12 right-12 h-0.5 bg-forest/15 z-0 pointer-events-none hidden md:block" />
              
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
                  className="flex-1 flex flex-col items-center text-center px-4 relative z-10 group space-y-4"
                >
                  {/* Step bubble */}
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-forest/15 text-forest group-hover:border-gold group-hover:bg-forest group-hover:text-gold flex items-center justify-center transition-all duration-350 shadow-md relative">
                    {step.icon}
                    <span className="absolute -bottom-1 -right-1 bg-gold text-forest-dark text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-white font-button">
                      {step.step}
                    </span>
                  </div>
                  
                  {/* Step metadata */}
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-forest-dark text-base">{step.title}</h4>
                    <p className="text-charcoal-light text-[11px] leading-relaxed max-w-[140px] mx-auto opacity-90">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE RK ORGANICS WITH ANIMATED STATS */}
      <section id="why-choose" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">Purity & Trust</span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">Why Choose RK Organics?</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-charcoal-light text-sm max-w-lg mx-auto leading-relaxed">
              We focus on building long-term family vitality using strict botanical guidelines.
            </p>
          </motion.div>

          {/* Grid of glass cards with count-up statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-premium p-6 sm:p-8 border border-forest/5 flex flex-col justify-between bg-white/60"
              >
                <div className="space-y-5">
                  <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest group-hover:bg-forest group-hover:text-gold flex items-center justify-center transition-colors duration-500 shadow-sm">
                    {card.icon}
                  </div>
                  
                  {/* Animated Stat Counter */}
                  <div className="text-3xl font-bold text-forest font-button">
                    {card.stat}
                  </div>

                  <h3 className="font-serif font-bold text-forest-dark text-lg mb-2 group-hover:text-forest transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-charcoal-light text-xs leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FEATURED MEDICINES (LIMITED TO 8 SPECIFIC) */}
      <section id="featured-products" className="py-24 bg-gradient-to-b from-white to-cream/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 text-center md:text-left">
              <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">Premium Extraction Catalog</span>
              <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">Featured Remedies</h2>
              <div className="w-16 h-0.5 bg-gold rounded-full md:mx-0 mx-auto" />
            </div>
            <Link
              to="/products"
              className="btn-premium text-xs uppercase tracking-wider text-forest hover:text-gold font-bold transition-colors group md:self-end flex items-center gap-1.5"
            >
              Browse All Medicines
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid of high-end product cards (Limit to 3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-premium overflow-hidden group flex flex-col justify-between bg-white/60"
              >
                {/* Image frame */}
                <div className="h-64 overflow-hidden relative bg-cream">
                  <motion.img
                    src={prod.images[0]}
                    alt={prod.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-forest px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-forest/10 font-button">
                    {categories.find(c => c.id === prod.category)?.name}
                  </div>
                </div>

                {/* Metadata content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-forest-dark group-hover:text-forest transition-colors leading-tight">
                      {prod.name}
                    </h3>
                    <p className="text-charcoal-light text-xs leading-relaxed line-clamp-2">
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
                    className="w-full py-3.5 border border-forest/20 hover:border-forest text-forest hover:bg-forest hover:text-white font-bold text-center rounded-xl text-xs uppercase tracking-wider transition-all duration-300 font-button"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. HEALTH JOURNAL BLOGS */}
      <section id="blogs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">Ayurvedic Literature</span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">Health & Wellness Journal</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, idx) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
                className="group cursor-pointer space-y-4"
                onClick={() => navigate(`/blogs/${blog.id}`)}
              >
                <div className="relative rounded-2xl overflow-hidden h-56 shadow-md border border-forest/5">
                  <motion.img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 left-4 bg-forest text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10 z-10 font-button">
                    {blog.category}
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-sage text-[10px] font-bold uppercase tracking-wider font-button">{blog.date}</span>
                  <h3 className="font-serif text-2xl font-bold text-forest-dark group-hover:text-gold transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-charcoal-light text-xs leading-relaxed line-clamp-2">
                    {blog.summary}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* 8. TESTIMONIALS SLIDER */}
      <section id="testimonials" className="py-24 bg-cream/35 border-y border-forest/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-12 space-y-4"
          >
            <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">Patient Diaries</span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">Loved by Wellness Seekers</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>

          <TestimonialCarousel />

        </div>
      </section>

      {/* 9. MASONRY GALLERY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">Visual Chronicles</span>
            <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">Our Botanical Sanctuary</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>

          <LightboxGallery />

        </div>
      </section>

      {/* 10. CONTACT FORM & INFO */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">Reach Out</span>
                <h2 className="font-serif text-3.5xl md:text-4.5xl font-bold text-forest-dark">Connect with our Vaidyas</h2>
                <div className="w-16 h-1 bg-gold rounded-full" />
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Have questions about your Dosha balancing, dietary compatibility, or our GMP extraction standards? Complete our contact form. Our traditional medical consultants will review and respond.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest/5 text-forest flex items-center justify-center flex-shrink-0">
                    <Leaf size={22} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-forest-dark text-lg">Office Address</h4>
                    <p className="text-charcoal-light text-xs mt-1 leading-relaxed">
                      108, Herbal Garden Highway, Veda Valley, Kerala, India - 695001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest/5 text-forest flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={20} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-forest-dark text-lg">Consultations</h4>
                    <p className="text-charcoal-light text-xs mt-1 leading-relaxed">
                      Phone Support: +91 98765 43210 <br />
                      Office Hours: Mon-Sat, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Minimal Map Placeholder */}
              <div className="rounded-3xl overflow-hidden h-48 border border-forest/10 relative">
                <div className="absolute inset-0 bg-cream/70 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <Leaf className="text-gold w-8 h-8 animate-bounce fill-current" />
                  <span className="text-xs font-bold text-forest-dark">RK Organics Sanctuary, Kerala</span>
                  <span className="text-[10px] text-charcoal-light">Latitude: 8.5241° N, Longitude: 76.9366° E</span>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-7 bg-cream/30 border border-forest/5 rounded-[32px] p-6 sm:p-10 shadow-lg"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
