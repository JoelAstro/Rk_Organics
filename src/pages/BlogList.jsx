import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { blogs } from "../data/blogsData";

export default function BlogList() {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-beige-light/35 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-bold tracking-widest text-xs uppercase block">Vedic Wellness Intelligence</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-forest">The Ayurvedic Journal</h1>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-forest-light text-sm max-w-lg mx-auto">
            Deep dive into traditional self-care rituals, herbs monographs, seasonal diet suggestions, and philosophies of longevity.
          </p>
        </div>

        {/* Featured Big Blog post at top */}
        {blogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate(`/blogs/${blogs[0].id}`)}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-forest/5 mb-16 cursor-pointer group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 h-80 lg:h-[450px] overflow-hidden">
                <img
                  src={blogs[0].coverImage}
                  alt={blogs[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
              </div>
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center space-y-6">
                <span className="px-3 py-1 bg-forest text-white text-[10px] font-bold uppercase tracking-wider rounded-full self-start">
                  Featured Article
                </span>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-sage text-xs">
                    <Calendar size={14} />
                    <span>{blogs[0].date}</span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-forest group-hover:text-gold transition-colors leading-snug">
                    {blogs[0].title}
                  </h2>
                  <p className="text-forest-light text-xs leading-relaxed line-clamp-4">
                    {blogs[0].summary}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-forest group-hover:underline">
                  Read Full Wisdom <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(1).map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => navigate(`/blogs/${blog.id}`)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-forest/5 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-forest text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10">
                  {blog.category}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-sage text-xs">
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-forest group-hover:text-gold transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-forest-light text-xs leading-relaxed line-clamp-3">
                    {blog.summary}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-forest group-hover:underline self-start pt-2">
                  Read Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
