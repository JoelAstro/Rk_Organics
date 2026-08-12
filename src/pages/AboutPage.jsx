import React from "react";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Compass } from "lucide-react";

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
    <div className="luxury-bg-layered min-h-screen pt-32 pb-24 text-cream-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Cinematic Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <span className="text-copper font-bold tracking-widest text-[10px] uppercase block font-button">
            Rooted in Tradition
          </span>
          <h1 className="font-serif text-4.5xl sm:text-6xl font-bold text-champagne leading-tight">
            Our Ayurvedic Legacy
          </h1>
          <div className="w-16 h-1 bg-copper mx-auto rounded-full" />
          <p className="text-taupe text-sm max-w-xl mx-auto leading-relaxed font-sans font-light">
            RK Organics is dedicated to preserving the integrity of traditional Indian formulations. We present classical herbo-mineral preparations with complete transparency.
          </p>
        </motion.div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne">
              Holistic Balance, Authentically Sourced
            </h2>
            <div className="w-12 h-0.5 bg-copper rounded-full" />
            
            <div className="space-y-4 text-taupe text-sm leading-relaxed font-sans font-light text-justify">
              <p>
                At RK Organics, we believe wellness is a reflection of physical, mental, and environmental harmony. Instead of fabricating stories or clinical claims, we place our trust in time-tested herbal combinations used in India for generations.
              </p>
              <p>
                We compile and maintain precise lists of raw ingredients—roots, resins, seeds, and mineral clays—exactly as they are passed down. This ensures you receive authentic, traditional formulations designed to support your body's systems naturally.
              </p>
            </div>

            <div className="p-5 bg-plum-light/35 border border-white/5 rounded-2xl">
              <p className="text-xs text-taupe leading-relaxed italic font-sans font-light">
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
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-plum-dark">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
                alt="Traditional Ayurvedic ingredients"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* badge */}
            <div className="absolute -bottom-6 -left-6 bg-plum-light border border-white/10 p-5 rounded-2xl shadow-xl max-w-xs space-y-1.5 hidden sm:block">
              <div className="flex gap-2 text-copper items-center">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest font-button">100% Traditional</span>
              </div>
              <p className="text-[10px] text-taupe leading-relaxed">
                We preserve exact Telugu ingredient proportions without chemical additives.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="space-y-12 pt-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-serif text-3xl font-bold text-champagne">
              Our Core Principles
            </h3>
            <p className="text-xs text-taupe">
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
                  className="glass-card-dark p-8 bg-plum-light/35 border-white/5 text-center flex flex-col items-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-plum-dark border border-white/5 text-copper flex items-center justify-center">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-champagne">
                    {pil.title}
                  </h4>
                  <p className="text-taupe text-xs leading-relaxed font-sans font-light">
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
