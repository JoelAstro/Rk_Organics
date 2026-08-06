import React, { useState } from "react";
import { Send, CheckCircle2, User, Mail, MessageSquare, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1800);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center border border-sage/20 shadow-xl"
      >
        <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center text-gold mb-6 animate-pulse">
          <CheckCircle2 size={48} className="stroke-[1.5]" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-forest-light text-base max-w-md mx-auto mb-8 leading-relaxed">
          Thank you for reaching out to RK Organics. Our Ayurvedic consultants will review your request and get back to you within 24-48 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-forest hover:bg-forest-light text-beige-light font-semibold rounded-full shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="relative">
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-forest/70 mb-2">
            Your Name <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Joel Roy"
              className="w-full bg-white/70 border border-forest/10 focus:border-forest rounded-2xl py-3.5 pl-11 pr-4 text-forest-dark placeholder-forest/40 focus:ring-1 focus:ring-forest outline-none transition-all duration-300 text-sm"
            />
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40 w-4 h-4" />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-forest/70 mb-2">
            Email Address <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. joel@example.com"
              className="w-full bg-white/70 border border-forest/10 focus:border-forest rounded-2xl py-3.5 pl-11 pr-4 text-forest-dark placeholder-forest/40 focus:ring-1 focus:ring-forest outline-none transition-all duration-300 text-sm"
            />
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40 w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-forest/70 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className="w-full bg-white/70 border border-forest/10 focus:border-forest rounded-2xl py-3.5 pl-11 pr-4 text-forest-dark placeholder-forest/40 focus:ring-1 focus:ring-forest outline-none transition-all duration-300 text-sm"
            />
            <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40 w-4 h-4" />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-forest/70 mb-2">
            Subject <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Product Inquiry, Custom consultation"
            className="w-full bg-white/70 border border-forest/10 focus:border-forest rounded-2xl py-3.5 px-4 text-forest-dark placeholder-forest/40 focus:ring-1 focus:ring-forest outline-none transition-all duration-300 text-sm"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-forest/70 mb-2">
          Your Message <span className="text-gold">*</span>
        </label>
        <div className="relative">
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you are looking for..."
            className="w-full bg-white/70 border border-forest/10 focus:border-forest rounded-2xl py-3.5 pl-11 pr-4 text-forest-dark placeholder-forest/40 focus:ring-1 focus:ring-forest outline-none transition-all duration-300 text-sm resize-none"
          />
          <MessageSquare className="absolute left-4 top-5 text-forest/40 w-4 h-4" />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-forest hover:bg-forest-light disabled:bg-forest/50 text-beige-light font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] focus:outline-none transition-all duration-300 cursor-pointer text-sm tracking-wide"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing...
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
