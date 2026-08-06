import React from "react";
import { Leaf, ShieldAlert, Award, FileText, CheckCircle, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-beige-light/35 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-gold font-bold tracking-widest text-xs uppercase block">Our Heritage</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-forest">About RK Organics</h1>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-forest-light text-sm max-w-lg mx-auto">
            Traditional Vaidyas restoring health through pure botanical medicine and clinical precision.
          </p>
        </div>

        {/* Story Section Alternating */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-forest">Rooted in Veda Valley</h2>
            <p className="text-forest-light text-sm leading-relaxed">
              For generations, our family practiced local healing in the Veda Valley of Kerala, harvesting wild-growing herbs from the tropical foothills and preparing fresh extracts for villagers in our small local pharmacy (Oushadhashala).
            </p>
            <p className="text-forest-light text-sm leading-relaxed">
              When modern commercialization began flooding the market with diluted powders containing toxic heavy metals and high chemical preserves, our head Vaidya realized the sacred art of Ayurveda was in danger of being lost.
            </p>
            <p className="text-forest-light text-sm leading-relaxed">
              RK Organics was born to restore that integrity. We combine pure forest harvesting protocols with world-class clinical analytics, proving to the modern world that classical natural remedies work.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg h-96 relative border border-forest/5">
            <img
              src="https://images.unsplash.com/photo-1546849448-65f53a37ced4?auto=format&fit=crop&q=80&w=800"
              alt="Harvesting herbs in forest"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Commitment Cards */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-forest/5 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl font-bold text-forest">Our Core Commitment</h2>
            <p className="text-forest-light text-xs uppercase tracking-wider">No Compromises. Pure Efficacy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-forest/5 text-forest rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif font-bold text-forest text-lg">Purity Guarantee</h3>
              <p className="text-forest-light text-xs leading-relaxed">
                We use 100% organic botanicals, non-GMO, harvested at peak potency times. Free from synthetic fillers, glues, binding agents, or chemical preservatives.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-forest/5 text-forest rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif font-bold text-forest text-lg">Ancient Integrity</h3>
              <p className="text-forest-light text-xs leading-relaxed">
                We strictly adhere to classical guidelines. Our oils are cooked slow for days in pure milk (Ksheera Pakva) and organic sesame/coconut bases, activating maximum bio-availability.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-forest/5 text-forest rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif font-bold text-forest text-lg">Modern Quality Checks</h3>
              <p className="text-forest-light text-xs leading-relaxed">
                Every batch undergoes third-party lab testing via High-Performance Liquid Chromatography (HPLC) to verify active mark concentrations, and ICP-MS to guarantee heavy metal exclusion.
              </p>
            </div>
          </div>
        </div>

        {/* Traditional Knowledge vs Modern Standards Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Box 1 */}
          <div className="glass-card rounded-3xl p-8 border border-forest/10 space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-gold w-8 h-8" />
              <h3 className="font-serif text-xl font-bold text-forest">Timeless Scriptural Wisdom</h3>
            </div>
            <p className="text-forest-light text-xs leading-relaxed">
              Traditional Ayurveda recognizes that active principles are not just isolated chemicals; they work synergistically within a plant's natural matrix. We extract herbs together as a whole, preserving the nature-balanced ratios of alkaloids and flavonoids exactly as detailed in the Charaka Samhita.
            </p>
            <ul className="space-y-2 text-xs text-forest-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                Sourced from native organic farms in Kerala and Himalayas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                Cooked slowly on copper and clay vessels to prevent ionization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                Harvested responsibly, maintaining local environmental health
              </li>
            </ul>
          </div>

          {/* Box 2 */}
          <div className="glass-card rounded-3xl p-8 border border-forest/10 space-y-6">
            <div className="flex items-center gap-3">
              <Award className="text-gold w-8 h-8" />
              <h3 className="font-serif text-xl font-bold text-forest">Validated Scientific Excellence</h3>
            </div>
            <p className="text-forest-light text-xs leading-relaxed">
              We respect ancient scripts but believe in proving their efficacy scientifically to global consumers. Our modern, sterile testing laboratories check raw materials for pesticide residues, micro-organisms, and toxic mercury or lead particles.
            </p>
            <ul className="space-y-2 text-xs text-forest-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                GMP Certified and ISO 9001:2015 Approved manufacturing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                Gas Chromatography-Mass Spectrometry analysis for active markers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                100% cruelty-free, vegan-accredited testing methodologies
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
