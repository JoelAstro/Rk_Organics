import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Leaf, Sparkles } from "lucide-react";

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
    { name: "Solutions", path: "/solutions", type: "route" },
    { name: "Formulations", path: "/products", type: "route" },
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
        isScrolled ? "glass-nav-luxury py-2 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-botanical flex items-center justify-center text-cream transition-transform duration-500 group-hover:rotate-12">
                <Leaf size={16} className="fill-current" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-botanical-dark">
                RK <span className="text-terracotta font-serif">Organics</span>
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
                    className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-button ${
                      location.pathname === item.path
                        ? "text-botanical font-bold bg-botanical/5"
                        : "text-charcoal-green/80 hover:text-botanical hover:bg-botanical/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-charcoal-green/80 hover:text-botanical hover:bg-botanical/5 transition-all duration-300 font-button"
                  >
                    {item.name}
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Solution Discovery CTA */}
          <div className="hidden lg:block">
            <Link
              to="/solutions"
              className="btn-luxury inline-flex items-center justify-center gap-2 px-6 py-3 border border-botanical/20 text-xs uppercase tracking-wider rounded-full text-botanical hover:bg-botanical hover:text-cream transition-all duration-300 shadow-sm bg-white"
            >
              <Sparkles size={12} className="text-terracotta" />
              Find Your Solution
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-botanical hover:text-botanical-light hover:bg-botanical/5 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-3 pt-2 pb-4 space-y-1 bg-natural-light border-b border-sand-light shadow-xl">
          {menuItems.map((item) => (
            <React.Fragment key={item.name}>
              {item.type === "route" ? (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors font-button ${
                    location.pathname === item.path
                      ? "text-cream bg-botanical shadow-md"
                      : "text-charcoal-green/85 hover:text-botanical hover:bg-botanical/5"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.path}
                  onClick={(e) => handleNavClick(item, e)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-charcoal-green/85 hover:text-botanical hover:bg-botanical/5 transition-colors font-button"
                >
                  {item.name}
                </a>
              )}
            </React.Fragment>
          ))}
          <div className="pt-4 pb-1 px-4">
            <Link
              to="/solutions"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3.5 text-sm font-bold uppercase tracking-widest rounded-full text-cream bg-botanical hover:bg-botanical-light transition-colors shadow-md font-button"
            >
              Find Your Solution
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
