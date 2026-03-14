import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import dragonLogo from "@/assets/dragon-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
  { label: "Home", href: "/" },
  { label: "Piano Lessons", href: "/piano-lessons" },
  { label: "After-School Clubs", href: "/after-school-clubs" },
  { label: "Homeschool", href: "/homeschool" },
  { label: "For Schools", href: "/schools" },
  { label: "About", href: "/about" }];


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full overflow-hidden transition-transform group-hover:scale-110">
              <img src={dragonLogo} alt="Dragon Scale Studio logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">Dragon Scale Music Studio

            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
            <Link
              key={link.label}
              to={link.href}
              className="text-muted-foreground hover:text-primary transition-colors font-semibold text-sm">
              
                {link.label}
              </Link>
            )}
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">
            
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen &&
        <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) =>
            <Link
              key={link.label}
              to={link.href}
              className="text-muted-foreground hover:text-primary transition-colors font-semibold py-2"
              onClick={() => setIsOpen(false)}>
              
                  {link.label}
                </Link>
            )}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button size="lg" className="w-full mt-2">Contact Us</Button>
              </Link>
            </div>
          </div>
        }
      </div>
    </nav>);

};

export default Navbar;