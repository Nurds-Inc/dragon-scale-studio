import { Link } from "react-router-dom";
import { Music, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Music className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">Harmony Labs</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Fun and engaging music education for kids. Piano lessons and after-school music clubs that build confidence, creativity, and real musical skills.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">For Families</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link to="/piano-lessons" className="hover:text-primary transition-colors">Piano Lessons</Link></li>
              <li><Link to="/after-school-clubs" className="hover:text-primary transition-colors">After-School Clubs</Link></li>
              <li><Link to="/homeschool" className="hover:text-primary transition-colors">Homeschool Programs</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">For Schools</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link to="/schools" className="hover:text-primary transition-colors">Partner With Us</Link></li>
              <li><Link to="/after-school-clubs" className="hover:text-primary transition-colors">Club Programs</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@harmonylabs.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} Harmony Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
