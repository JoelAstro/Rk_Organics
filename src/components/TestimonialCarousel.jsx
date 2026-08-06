import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    review: "The Amrit Ras Chyawanprash has transformed my energy levels. As a yoga teacher, I require clean vitality throughout the day. This gold-enriched formulation provides exactly that without any crashes."
  },
  {
    id: 2,
    name: "Dr. Ananya Nair",
    role: "Wellness Consultant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    review: "I recommend Kumkumadi Kesar Glow Serum to my clients seeking clean, organic skin solutions. It balances skin tones beautifully, and the traditional Ksheera Pakva preparation shines through in its texture."
  },
  {
    id: 3,
    name: "Rajesh Iyer",
    role: "Software Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 4,
    review: "Due to long hours sitting, I struggled with chronic digestion issues. Taking Triphala Tablets before sleep has regulated my gut completely. It is gentle, organic, and highly effective."
  },
  {
    id: 4,
    name: "Mira Sen",
    role: "Classical Dancer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    review: "Neelibhringadi Hair Oil is an absolute treasure. My hair feels thicker, holds its dark color naturally, and has a wonderful shine. The botanical smell is deeply calming and relaxing."
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Variant animations for sliding effect
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const current = testimonials[activeIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Background decoration */}
      <div className="absolute -top-6 -left-6 text-forest/5 pointer-events-none">
        <Quote size={120} className="transform -scale-y-100" />
      </div>

      <div className="relative min-h-[300px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full text-center"
          >
            <div className="flex flex-col items-center">
              {/* Photo */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gold text-forest p-1.5 rounded-full shadow-md z-20">
                  <Quote size={14} className="fill-current" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < current.rating ? "text-gold fill-gold" : "text-beige-dark"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-lg md:text-xl italic text-forest-dark leading-relaxed mb-6 max-w-2xl">
                "{current.review}"
              </p>

              {/* Author */}
              <h4 className="font-sans font-bold text-forest text-base tracking-wide">
                {current.name}
              </h4>
              <p className="text-sage text-xs uppercase tracking-widest mt-0.5">
                {current.role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-8 max-w-xs mx-auto">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-forest/10 bg-white hover:bg-forest hover:text-white flex items-center justify-center text-forest transition-all duration-300 shadow-sm active:scale-95"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-gold" : "w-2 bg-forest/20"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-forest/10 bg-white hover:bg-forest hover:text-white flex items-center justify-center text-forest transition-all duration-300 shadow-sm active:scale-95"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
