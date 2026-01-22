import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-music.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Piano and sheet music in warm lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Star className="w-4 h-4 text-gold" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Nurturing Musicians Since 2024
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Where Young Musicians{" "}
            <span className="text-gradient-gold">Discover</span> Their Voice
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-200">
            Private lessons, piano labs, band ensembles, and musical theater—all in a 
            warm, nurturing home studio environment designed to inspire creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl">
              Schedule a Free Trial
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5 mr-1" />
              Watch Our Story
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gold">50+</div>
              <div className="text-primary-foreground/60 text-sm mt-1">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gold">5★</div>
              <div className="text-primary-foreground/60 text-sm mt-1">Parent Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gold">10+</div>
              <div className="text-primary-foreground/60 text-sm mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
