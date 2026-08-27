
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a nav link
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/staff", label: "Our Staff" },
    { to: "/admission", label: "Admission" },
    { to: "/gallery", label: "Gallery" },
    { to: "/parents", label: "For Parents" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
  <img
    src="/images/logo1.jpg"
    alt="GLIER Logo"
    className="h-10 w-auto"
  />
  <span className="font-serif text-xl md:text-2xl font-semibold">GLIER Public School</span>
</Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleNavLinkClick}
                className={cn(
                  "px-3 py-2 text-sm rounded-md transition-colors duration-200",
                  isActive(link.to) 
                    ? "bg-primary/20 text-primary font-medium" 
                    : "hover:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-foreground md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out pt-20",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleNavLinkClick}
                className={cn(
                  "px-4 py-3 rounded-md transition-colors duration-200 text-center",
                  isActive(link.to) 
                    ? "bg-primary/20 text-primary font-medium" 
                    : "hover:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
