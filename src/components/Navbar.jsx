import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Leaf, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/", type: "route" },
    { name: "About", path: "/about", type: "route" },
    { name: "Health Solutions", path: "/solutions", type: "route" },
    { name: "Products", path: "/products", type: "route" },
    { name: "Our Process", path: "/#process", type: "hash" },
    { name: "Blogs", path: "/blogs", type: "route" },
    { name: "Testimonials", path: "/#testimonials", type: "hash" },
    { name: "Contact", path: "/#contact", type: "hash" },
  ];

  const handleNavClick = (item, e) => {
    setIsOpen(false);
    if (item.type === "hash") {
      e.preventDefault();
      const targetId = item.path.split("#")[1];
      
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-nav-premium py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-11 h-11 rounded-full bg-forest flex items-center justify-center text-gold transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 shadow-md">
                <Leaf size={18} className="fill-current" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-forest-dark group-hover:text-forest transition-colors">
                RK <span className="text-gold">Organics</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.type === "route" ? (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-button ${
                      location.pathname === item.path
                        ? "text-forest font-bold bg-forest/5"
                        : "text-charcoal/80 hover:text-forest hover:bg-forest/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                    className="px-3 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-charcoal/80 hover:text-forest hover:bg-forest/5 transition-all duration-300 font-button"
                  >
                    {item.name}
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Consultation CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick({ path: "/#contact", type: "hash" }, e)}
              className="btn-premium inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider rounded-full text-white bg-forest hover:bg-forest-light hover:scale-105 active:scale-95 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle size={14} />
              Consult Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-forest hover:text-forest-light hover:bg-forest/5 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-3 pt-2 pb-4 space-y-1 bg-ivory border-b border-forest/10 shadow-xl">
          {menuItems.map((item) => (
            <React.Fragment key={item.name}>
              {item.type === "route" ? (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors font-button ${
                    location.pathname === item.path
                      ? "text-white bg-forest"
                      : "text-charcoal/80 hover:text-forest hover:bg-forest/5"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.path}
                  onClick={(e) => handleNavClick(item, e)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-charcoal/80 hover:text-forest hover:bg-forest/5 transition-colors font-button"
                >
                  {item.name}
                </a>
              )}
            </React.Fragment>
          ))}
          <div className="pt-4 pb-1 px-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick({ path: "/#contact", type: "hash" }, e)}
              className="block w-full text-center px-6 py-3.5 text-sm font-bold uppercase tracking-widest rounded-full text-white bg-forest hover:bg-forest-light transition-colors shadow-md font-button"
            >
              Consult Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
