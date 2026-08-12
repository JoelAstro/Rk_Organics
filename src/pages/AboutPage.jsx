import React from "react";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Heart, Award, Compass } from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      title: "Ancient Wisdom",
      desc: "Following pure formulations extracted from traditional Ayurvedic scriptures and regional heritage recipes.",
      icon: Leaf
    },
    {
      title: "Direct Transparency",
      desc: "Providing precise ingredient list naming to let families know exactly what botanical components support them.",
      icon: ShieldCheck
    },
    {
      title: "Indian Wellness Heritage",
      desc: "Nurturing wellness through holistic balancing elements instead of temporary chemical symptom suppression.",
      icon: Compass
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-ivory to-cream/20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Cinematic Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <span className="text-gold font-bold tracking-widest text-xs uppercase block font-button">
            Rooted in Tradition
          </span>
          <h1 className="font-serif text-4xl md:text-5.5xl font-bold text-forest-dark leading-tight">
            Our Ayurvedic Legacy
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-charcoal-light text-sm max-w-xl mx-auto leading-relaxed">
            RK Organics is dedicated to preserving the integrity of traditional Indian formulations. We present classical herbo-mineral preparations with complete transparency.
          </p>
        </motion.div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl font-bold text-forest-dark">
              Holistic Balance, Authentically Sourced
            </h2>
            <div className="w-12 h-0.5 bg-gold rounded-full" />
            
            <p className="text-charcoal-light text-sm leading-relaxed">
              At RK Organics, we believe wellness is a reflection of physical, mental, and environmental harmony. Instead of fabricating stories or clinical claims, we place our trust in time-tested herbal combinations used in India for generations.
            </p>
            <p className="text-charcoal-light text-sm leading-relaxed">
              We compile and maintain precise lists of raw ingredients—roots, resins, seeds, and mineral clays—exactly as they are passed down. This ensures you receive authentic, traditional formulations designed to support your body's systems naturally.
            </p>

            <div className="p-4 bg-sand/30 border border-forest/10 rounded-2xl">
              <p className="text-xs text-charcoal-light leading-relaxed italic">
                "Detailed history, founding members, and certification numbers are maintained by RK Organics and can be verified directly upon consultation."
              </p>
            </div>
          </motion.div>

          {/* Visual image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-forest/5 bg-cream">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
                alt="Traditional herbs grinding"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Soft decorative accent badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 border border-gold/20 p-5 rounded-2xl shadow-lg hidden sm:block max-w-xs space-y-1">
              <div className="flex gap-2 text-gold items-center">
                <Heart size={14} className="fill-current" />
                <span className="text-[10px] font-bold uppercase tracking-wider font-button">100% Traditional</span>
              </div>
              <p className="text-[10px] text-charcoal-light leading-relaxed">
                We preserve exact Telugu ingredient proportions without chemical additives.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3 Pillars Cards */}
        <div className="space-y-8 pt-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-dark">
              Our Core Principles
            </h3>
            <p className="text-xs text-charcoal-light">
              We stand for transparent, natural, and respectful presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
                  className="glass-card-premium p-6 bg-white/60 text-center flex flex-col items-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-forest/5 text-forest flex items-center justify-center">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-forest-dark">
                    {pil.title}
                  </h4>
                  <p className="text-charcoal-light text-xs leading-relaxed font-sans">
                    {pil.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
