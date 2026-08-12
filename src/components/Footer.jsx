import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, AlertCircle, HelpCircle } from "lucide-react";
import ClientVerification from "./ClientVerification";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);

  const handleHashLink = (e, id) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getWhatsAppLink = () => {
    const defaultMsg = "Hello RK Organics, I would like to know more about your traditional formulations.";
    return `https://wa.me/+919876543210?text=${encodeURIComponent(defaultMsg)}`;
  };

  return (
    <footer className="bg-plum-dark text-cream-white pt-24 pb-8 relative overflow-hidden border-t border-white/5">
      {/* Delicate background blur elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-copper/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Large Statement Panel */}
        <div className="text-center lg:text-left border-b border-white/5 pb-12">
          <h2 className="font-serif text-4.5xl sm:text-6xl font-bold text-champagne leading-tight">
            Tradition, <br className="sm:hidden" />
            <span className="text-stroke-copper font-serif italic text-copper font-normal">thoughtfully presented.</span>
          </h2>
        </div>

        {/* Footer core details columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Logo & Brand Info Column - 5/12 */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-copper flex items-center justify-center text-champagne">
                <Leaf size={18} className="fill-current" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-widest text-white">
                RK <span className="text-rose">Organics</span>
              </span>
            </Link>
            <p className="text-taupe text-sm leading-relaxed max-w-sm">
              Preserving traditional preparation integrity exactly as detailed in ancient Indian Ayurveda scriptures. Sourced naturally and presented thoughtfully.
            </p>
            
            {/* WhatsApp CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury inline-flex items-center gap-2 px-6 py-3.5 bg-copper hover:bg-copper-light text-cream-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg cursor-pointer"
              >
                Chat with RK Organics
              </a>
            </div>
          </div>

          {/* Quick Links Column - 3/12 */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-serif text-lg font-semibold text-champagne border-b border-copper/20 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-taupe hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors font-button block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-taupe hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors font-button block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-taupe hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors font-button block">
                  Solutions Finder
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-taupe hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors font-button block">
                  Products
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => handleHashLink(e, "contact")}
                  className="text-taupe hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors font-button block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* General Information Column - 4/12 */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-serif text-lg font-semibold text-champagne border-b border-copper/20 pb-2 inline-block">
              General Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-taupe text-sm">
                <MapPin size={18} className="text-copper flex-shrink-0 mt-1" />
                <span>Address details pending client confirmation.</span>
              </li>
              <li className="flex items-center gap-3 text-taupe text-sm">
                <Phone size={18} className="text-copper flex-shrink-0" />
                <span>Phone: pending client confirmation.</span>
              </li>
              <li className="flex items-center gap-3 text-taupe text-sm">
                <Mail size={18} className="text-copper flex-shrink-0" />
                <span>Email: pending client confirmation.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="border-t border-white/5 pt-6 text-center lg:text-left">
          <div className="bg-plum/40 border border-white/5 rounded-2xl p-6 flex flex-col lg:flex-row gap-4 items-start">
            <AlertCircle className="text-gold w-6 h-6 flex-shrink-0 mt-0.5 self-center lg:self-start" />
            <p className="text-[11px] text-taupe leading-relaxed text-justify">
              <span className="font-bold text-white uppercase tracking-wider block mb-1">Safety Disclaimer</span>
              Information on this website is provided for general product information and awareness. Product suitability, usage and dosage may vary by individual and formulation. Please consult RK Organics or a qualified healthcare/Ayurveda practitioner for product-specific guidance. This website does not provide medical diagnosis or replace professional medical advice.
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <p className="text-taupe text-[10px] uppercase tracking-widest font-button">
            © {currentYear} RK Organics. All rights reserved. Nature-Inspired Health Showcase.
          </p>
          
          <div className="flex items-center gap-6 text-[10px] text-taupe font-bold uppercase tracking-widest font-button">
            <button
              onClick={() => setIsVerificationOpen(true)}
              className="text-copper hover:text-copper-light flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <HelpCircle size={12} />
              Content Review Panel
            </button>
            <span className="border-l border-white/5 h-4 hidden sm:block"></span>
            <span>Ayush Compliant Wording</span>
          </div>
        </div>
      </div>

      {/* Verification Check overlay drawer */}
      <ClientVerification
        isOpen={isVerificationOpen}
        onClose={() => setIsVerificationOpen(false)}
      />
    </footer>
  );
}
