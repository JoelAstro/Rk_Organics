import React, { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1546849448-65f53a37ced4?auto=format&fit=crop&q=80&w=800",
    title: "Organic Herbs Extraction",
    category: "Herbs"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    title: "Raw Turmeric Roots",
    category: "Ingredients"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
    title: "Pure Ayurvedic Oils",
    category: "Products"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
    title: "Fresh Aloe Vera Harvest",
    category: "Ingredients"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519735008984-df302de37025?auto=format&fit=crop&q=80&w=800",
    title: "Herbal Decoction Cooking",
    category: "Manufacturing"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
    title: "Saffron Glow Elixir Bottles",
    category: "Products"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    title: "Eco-Friendly Glass Packaging",
    category: "Packaging"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    title: "Wellness & Ayurvedic Herbs",
    category: "Herbs"
  }
];

export default function LightboxGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = galleryImages.length - 1;
    if (nextIndex >= galleryImages.length) nextIndex = 0;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <div>
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-forest/5"
            onClick={() => openLightbox(image, index)}
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.title}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">
                {image.category}
              </span>
              <h4 className="text-white font-serif text-lg font-bold">
                {image.title}
              </h4>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <ZoomIn size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/75 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 active:scale-95 z-55"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateLightbox(-1)}
              className="absolute left-4 md:left-8 text-white/75 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 active:scale-95 z-55"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => navigateLightbox(1)}
              className="absolute right-4 md:right-8 text-white/75 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 active:scale-95 z-55"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Fullscreen Image Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              
              {/* Text Meta info */}
              <div className="text-center mt-4">
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-serif text-xl font-bold mt-1">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
