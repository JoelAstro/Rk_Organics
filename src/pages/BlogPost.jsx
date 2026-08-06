import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2, Compass } from "lucide-react";
import { blogs } from "../data/blogsData";

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!blog) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-forest">Article Not Found</h2>
        <p className="text-forest-light text-sm max-w-sm">
          The journal entry you are looking for does not exist or has been archived.
        </p>
        <Link to="/blogs" className="px-6 py-2.5 bg-forest hover:bg-forest-light text-white rounded-full font-semibold text-xs uppercase tracking-wide transition-all">
          Back to Journal
        </Link>
      </div>
    );
  }

  // Calculate read time roughly
  const words = blog.content.split(/\s+/).length;
  const readTime = Math.ceil(words / 180); // Avg reading speed 180 wpm

  // Related articles (excluding current one)
  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 2);

  // Parse markdown headings and lists roughly for elegant display
  const formatContent = (text) => {
    return text.split("\n").map((para, i) => {
      const trimmed = para.trim();
      if (!trimmed) return null;
      
      if (trimmed.startsWith("###")) {
        return (
          <h3 key={i} className="font-serif text-xl sm:text-2xl font-bold text-forest mt-8 mb-4">
            {trimmed.replace("###", "").trim()}
          </h3>
        );
      }
      
      if (trimmed.startsWith("##")) {
        return (
          <h2 key={i} className="font-serif text-2xl sm:text-3xl font-bold text-forest mt-10 mb-5 border-b border-forest/10 pb-2">
            {trimmed.replace("##", "").trim()}
          </h2>
        );
      }

      if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
        const itemContent = trimmed.substring(1).trim();
        // Check for bold lead in item: e.g. **Vata (Space & Air):** Controls...
        const boldMatch = itemContent.match(/^\*\*(.*?)\*\*(.*)/);
        if (boldMatch) {
          return (
            <li key={i} className="list-none flex items-start gap-2.5 ml-2 sm:ml-4 text-xs sm:text-sm text-forest-light leading-relaxed mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
              <span>
                <strong className="text-forest font-bold">{boldMatch[1]}</strong>
                {boldMatch[2]}
              </span>
            </li>
          );
        }
        return (
          <li key={i} className="list-none flex items-start gap-2.5 ml-2 sm:ml-4 text-xs sm:text-sm text-forest-light leading-relaxed mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
            <span>{itemContent}</span>
          </li>
        );
      }

      if (trimmed.match(/^\d+\./)) {
        const itemContent = trimmed.replace(/^\d+\./, "").trim();
        const boldMatch = itemContent.match(/^\*\*(.*?)\*\*(.*)/);
        return (
          <div key={i} className="flex gap-3 text-xs sm:text-sm text-forest-light leading-relaxed mb-4 ml-1">
            <span className="font-bold text-gold text-base leading-none">0{trimmed.match(/^\d+/)[0]}</span>
            <div>
              {boldMatch ? (
                <>
                  <h4 className="font-sans font-bold text-forest text-sm mb-1">{boldMatch[1]}</h4>
                  <p>{boldMatch[2]}</p>
                </>
              ) : (
                <p>{itemContent}</p>
              )}
            </div>
          </div>
        );
      }

      return (
        <p key={i} className="text-xs sm:text-sm text-forest-light leading-relaxed mb-6">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="pt-32 pb-24 bg-beige-light/35 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-forest/70 hover:text-forest text-sm font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>

        {/* Article Container */}
        <article className="bg-white rounded-3xl overflow-hidden shadow-md border border-forest/5 p-6 sm:p-10 md:p-14 mb-16">
          
          {/* Metadata */}
          <div className="space-y-4 mb-8">
            <span className="px-3 py-1 bg-forest/5 text-forest text-xs font-semibold uppercase tracking-wider rounded-full border border-forest/10 inline-block">
              {blog.category}
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-forest leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sage text-xs border-y border-forest/5 py-4">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{blog.date}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-forest/10" />
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{readTime} Min Read</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-forest/10" />
              <div className="flex items-center gap-1.5">
                <User size={14} />
                <span>By RK Ayurveda Team</span>
              </div>
            </div>
          </div>

          {/* Full Cover Image */}
          <div className="rounded-2xl overflow-hidden h-[300px] sm:h-[450px] mb-10 shadow-inner border border-forest/5">
            <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          {/* Article content */}
          <div className="prose max-w-none text-forest-dark">
            {formatContent(blog.content)}
          </div>

        </article>

        {/* Related Journal entries */}
        {relatedBlogs.length > 0 && (
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest">Continue Reading Wisdom</h2>
              <div className="w-12 h-0.5 bg-gold mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((b) => (
                <Link
                  key={b.id}
                  to={`/blogs/${b.id}`}
                  className="bg-white rounded-2xl overflow-hidden border border-forest/5 shadow-sm p-5 flex gap-4 group hover:shadow-md transition-all duration-300"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-beige-default">
                    <img src={b.coverImage} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col justify-center space-y-1.5">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-widest">{b.category}</span>
                    <h3 className="font-serif font-bold text-forest text-sm line-clamp-2 leading-snug group-hover:text-gold transition-colors">
                      {b.title}
                    </h3>
                    <span className="text-[10px] text-sage">{b.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
