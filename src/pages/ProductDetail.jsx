import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ShieldAlert, Award, FileText, ChevronDown, ChevronUp, Eye, MessageSquare } from "lucide-react";
import { products, categories } from "../data/productsData";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  // Scroll to top on load/change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-forest">Remedy Not Found</h2>
        <p className="text-charcoal-light text-sm max-w-sm">
          The Ayurvedic remedy you are looking for does not exist or has been relocated.
        </p>
        <Link to="/products" className="px-6 py-3 bg-forest hover:bg-forest-light text-white rounded-full font-semibold text-xs uppercase tracking-wider font-button transition-all">
          Back to Catalog
        </Link>
      </div>
    );
  }

  // Active Image Gallery Index
  const [activeImage, setActiveImage] = useState(product.images[0]);
  useEffect(() => {
    setActiveImage(product.images[0]);
  }, [product]);

  // Accordion state
  const [openSections, setOpenSections] = useState({
    benefits: true,
    ingredients: true,
    usage: false,
    storage: false,
    faqs: false
  });

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    });
  };

  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Fallback related products
  const fallbackRelated = relatedProducts.length > 0 
    ? relatedProducts 
    : products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-ivory to-cream/20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-forest/80 hover:text-forest text-sm font-semibold mb-8 transition-colors group font-button"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Catalog
        </Link>

        {/* Product Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-md border border-forest/5 mb-16">
          
          {/* Left Column: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-cream border border-forest/5 shadow-inner">
              <motion.img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Gallery Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    activeImage === img ? "border-gold scale-95 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`${product.name} gallery ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Title and Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">
                {categories.find((c) => c.id === product.category)?.name}
              </span>
              <h1 className="font-serif text-3xl sm:text-4.5xl font-bold text-forest-dark leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Suitability panel block */}
            <div className="p-4 bg-forest/5 rounded-2xl border border-forest/5 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark font-button">
                Suitable For:
              </span>
              <p className="text-forest-dark font-medium text-xs font-sans">
                {product.suitableFor}
              </p>
            </div>

            <p className="text-charcoal-light text-sm leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Quality Certs */}
            <div className="grid grid-cols-2 gap-4 border-y border-forest/10 py-6">
              <div className="flex items-center gap-2">
                <Award className="text-gold w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold text-forest uppercase tracking-wider font-button">GMP Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="text-gold w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold text-forest uppercase tracking-wider font-button">Lab Audited</span>
              </div>
            </div>

            {/* Accordion List for details */}
            <div className="space-y-4 pt-2">
              
              {/* 1. Benefits Accordion */}
              <div className="border-b border-forest/10 pb-4">
                <button
                  onClick={() => toggleSection("benefits")}
                  className="w-full flex items-center justify-between font-serif text-lg font-bold text-forest-dark text-left focus:outline-none cursor-pointer"
                >
                  <span>Therapeutic Benefits</span>
                  {openSections.benefits ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openSections.benefits && (
                  <ul className="mt-3 space-y-2.5 pl-1">
                    {product.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal-light leading-relaxed">
                        <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* 2. Ingredients Accordion */}
              <div className="border-b border-forest/10 pb-4">
                <button
                  onClick={() => toggleSection("ingredients")}
                  className="w-full flex items-center justify-between font-serif text-lg font-bold text-forest-dark text-left focus:outline-none cursor-pointer"
                >
                  <span>Natural Ingredients</span>
                  {openSections.ingredients ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openSections.ingredients && (
                  <ul className="mt-3 space-y-2 pl-1">
                    {product.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-2 flex-shrink-0"></span>
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* 3. Usage & Dosage Accordion */}
              <div className="border-b border-forest/10 pb-4">
                <button
                  onClick={() => toggleSection("usage")}
                  className="w-full flex items-center justify-between font-serif text-lg font-bold text-forest-dark text-left focus:outline-none cursor-pointer"
                >
                  <span>Dosage & Usage</span>
                  {openSections.usage ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openSections.usage && (
                  <div className="mt-3 pl-1 text-xs text-charcoal-light leading-relaxed space-y-2">
                    <p>{product.usage}</p>
                    <p className="font-semibold text-forest-dark mt-1">Dosage: {product.dosage}</p>
                    <div className="flex gap-2 p-3 bg-cream/35 rounded-xl border border-forest/5 mt-2">
                      <ShieldAlert size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-[10px] leading-relaxed">
                        Consult with an Ayurvedic practitioner or physician prior to usage if you are pregnant, nursing, or have a pre-existing medical condition.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Storage Accordion */}
              <div className="border-b border-forest/10 pb-4">
                <button
                  onClick={() => toggleSection("storage")}
                  className="w-full flex items-center justify-between font-serif text-lg font-bold text-forest-dark text-left focus:outline-none cursor-pointer"
                >
                  <span>Storage & Warnings</span>
                  {openSections.storage ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openSections.storage && (
                  <div className="mt-3 pl-1 text-xs text-charcoal-light leading-relaxed">
                    <p>{product.storage}</p>
                  </div>
                )}
              </div>

              {/* 5. FAQs Accordion */}
              <div className="border-b border-forest/10 pb-4">
                <button
                  onClick={() => toggleSection("faqs")}
                  className="w-full flex items-center justify-between font-serif text-lg font-bold text-forest-dark text-left focus:outline-none cursor-pointer"
                >
                  <span>Frequently Asked Questions</span>
                  {openSections.faqs ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openSections.faqs && (
                  <div className="mt-3 pl-1 space-y-4">
                    {product.faqs.map((faq, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <h5 className="font-sans font-bold text-forest-dark text-sm">Q: {faq.question}</h5>
                        <p className="text-charcoal-light text-xs leading-relaxed">A: {faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Quick Consult CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  const el = document.getElementById("contact");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn-premium w-full py-4 bg-forest hover:bg-forest-light text-white font-bold text-center rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 shadow flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} /> Request Vaidya Consultation
              </a>
            </div>

          </motion.div>

        </div>

        {/* Related Medicines Showcase */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="font-serif text-3xl font-bold text-forest-dark">Related Medicines</h2>
            <div className="w-12 h-0.5 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fallbackRelated.map((prod) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-premium overflow-hidden bg-white/60 flex flex-col group"
              >
                <div className="h-48 overflow-hidden bg-cream">
                  <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-serif font-bold text-forest-dark group-hover:text-gold transition-colors text-lg line-clamp-1 leading-snug">{prod.name}</h3>
                    <p className="text-charcoal-light text-xs leading-relaxed line-clamp-2">{prod.shortDescription}</p>
                  </div>
                  <Link
                    to={`/products/${prod.id}`}
                    className="w-full py-2.5 bg-forest/5 hover:bg-forest hover:text-white text-forest text-center font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 font-button"
                  >
                    <Eye size={12} /> View Remedy details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
