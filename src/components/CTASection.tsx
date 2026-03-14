import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  const bgClass = variant === "accent" ? "bg-accent" : variant === "fun" ? "bg-fun" : "bg-secondary";

  return (
    <section className={`${bgClass} py-20`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">{title}</h2>
        <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryLink}>
            <Button variant="accent" size="xl">{primaryLabel}</Button>
          </Link>
          {secondaryLabel && secondaryLink && (
            <Link to={secondaryLink}>
              <Button variant="outline" size="xl" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">{secondaryLabel}</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
