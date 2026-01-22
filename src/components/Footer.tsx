import { Music, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-xl font-semibold">Harmony Studio</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Nurturing musical talent in a warm, supportive home environment. 
              Where every student's musical journey begins.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#programs" className="hover:text-gold transition-colors">Private Lessons</a></li>
              <li><a href="#programs" className="hover:text-gold transition-colors">Piano Lab</a></li>
              <li><a href="#programs" className="hover:text-gold transition-colors">Band Ensemble</a></li>
              <li><a href="#programs" className="hover:text-gold transition-colors">Musical Theater</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Studio Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Monday - Friday: 3pm - 8pm</li>
              <li>Saturday: 9am - 5pm</li>
              <li>Sunday: By appointment</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <span>hello@harmonystudio.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>123 Music Lane<br />Your City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Harmony Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
