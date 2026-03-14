import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import dragonScales from "@/assets/dragon-scales-pattern.png";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryLink: string;
  secondaryLabel?: string;
  secondaryLink?: string;
  variant?: "primary" | "accent" | "fun";
}

const CTASection = ({ title, description, primaryLabel, primaryLink, secondaryLabel, secondaryLink, variant = "primary" }: CTASectionProps) => {
  return (
    <section className="relative bg-primary py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{title}</h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryLink}>
            <Button variant="accent" size="xl">{primaryLabel}</Button>
          </Link>
          {secondaryLabel && secondaryLink && (
            <Link to={secondaryLink}>
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">{secondaryLabel}</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;