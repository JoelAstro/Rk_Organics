import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, ShieldCheck, Send, Check } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleHashLink = (e, id) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
      }, 2000);
    }
  };

  const quickSolutions = [
    { name: "Digestive Pain", path: "/solutions/stomach-pain" },
    { name: "Headache & Tension", path: "/solutions/headache" },
    { name: "Joint & Back Pain", path: "/solutions/joint-pain" },
    { name: "Stress & Anxiety", path: "/solutions/stress" },
    { name: "Skin & Hair Therapy", path: "/solutions/hair-fall" }
  ];

  return (
    <footer className="bg-forest text-ivory pt-20 pb-8 relative overflow-hidden">
      {/* Delicate leaf graphics background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Company Brief - Col Span 4 */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-forest">
                <Leaf size={18} className="fill-current" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                RK <span className="text-gold-light">Organics</span>
              </span>
            </Link>
            <p className="text-sage-light text-sm leading-relaxed">
              Preserving classical Ksheera Pakva methods and sustainable forest harvesting protocols. We translate timeless Vedic science into clinically validated natural healing.
            </p>
            
            {/* Social icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-forest-light border border-sage/20 flex items-center justify-center text-sage-light hover:text-gold hover:border-gold hover:scale-110 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-forest-light border border-sage/20 flex items-center justify-center text-sage-light hover:text-gold hover:border-gold hover:scale-110 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-forest-light border border-sage/20 flex items-center justify-center text-sage-light hover:text-gold hover:border-gold hover:scale-110 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick links - Col Span 2 */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-serif text-lg font-semibold text-white border-b border-gold/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sage-light hover:text-white text-xs uppercase tracking-wider transition-colors font-button block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sage-light hover:text-white text-xs uppercase tracking-wider transition-colors font-button block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sage-light hover:text-white text-xs uppercase tracking-wider transition-colors font-button block">
                  Health Solutions
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sage-light hover:text-white text-xs uppercase tracking-wider transition-colors font-button block">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-sage-light hover:text-white text-xs uppercase tracking-wider transition-colors font-button block">
                  Wellness Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Health solutions links - Col Span 3 */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-serif text-lg font-semibold text-white border-b border-gold/20 pb-2">
              Solutions Focus
            </h3>
            <ul className="space-y-3">
              {quickSolutions.map((sol) => (
                <li key={sol.name}>
                  <Link to={sol.path} className="text-sage-light hover:text-white text-xs font-medium transition-colors block">
                    {sol.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Form - Col Span 3 */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-serif text-lg font-semibold text-white border-b border-gold/20 pb-2">
              Newsletter
            </h3>
            <p className="text-sage-light text-xs leading-relaxed">
              Subscribe to receive Ayurvedic wellness guidance, seasonal routine guides, and botanical research reports.
            </p>
            
            {isSubscribed ? (
              <div className="p-3 bg-forest-light border border-sage/20 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-white">
                <Check size={14} className="text-gold-light" /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="relative flex">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-forest-dark border border-sage/20 text-white text-xs rounded-xl py-3.5 pl-4 pr-11 placeholder-sage-light/50 focus:outline-none focus:border-gold transition-colors font-button"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gold text-forest flex items-center justify-center hover:bg-gold-light active:scale-95 transition-all cursor-pointer"
                  aria-label="Subscribe email"
                >
                  <Send size={12} className="stroke-[2.5]" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Contact Strip */}
        <div className="border-t border-sage/10 pt-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-3 text-sage-light">
            <MapPin size={18} className="text-gold flex-shrink-0" />
            <span className="text-xs">Veda Valley, Kerala, India - 695001</span>
          </div>
          <div className="flex justify-center items-center gap-3 text-sage-light">
            <Phone size={18} className="text-gold flex-shrink-0" />
            <span className="text-xs">+91 98765 43210</span>
          </div>
          <div className="flex justify-center md:justify-end items-center gap-3 text-sage-light">
            <Mail size={18} className="text-gold flex-shrink-0" />
            <span className="text-xs">info@rkorganics.com</span>
          </div>
        </div>

        <div className="border-t border-sage/10 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <p className="text-sage-light text-[10px] uppercase tracking-widest font-button">
            © {currentYear} RK Organics. All rights reserved. Nature-certified health support.
          </p>
          <div className="flex gap-4 mt-3 sm:mt-0 text-[10px] text-sage-light font-bold uppercase tracking-wider">
            <span>GMP Standard</span>
            <span>ISO 9001:2015</span>
            <span>FSSAI Approved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
