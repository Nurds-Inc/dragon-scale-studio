import { Heart, Award, Home, Clock } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Nurturing Environment",
    description:
      "A warm, welcoming home studio where students feel comfortable to learn, grow, and express themselves musically.",
  },
  {
    icon: Award,
    title: "Experienced Instruction",
    description:
      "Passionate educators with years of teaching experience who adapt to each student's unique learning style.",
  },
  {
    icon: Home,
    title: "Convenient Location",
    description:
      "Located in a peaceful residential area with easy parking and a comfortable waiting space for parents.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "After-school, evening, and weekend slots available to fit your family's busy schedule.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              A Home for Musical Growth
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Harmony Studio, we believe every child has musical potential waiting to be 
              discovered. Our intimate home-based setting creates the perfect atmosphere for 
              learning—relaxed, encouraging, and focused on each student's individual journey.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether your child is picking up an instrument for the first time or preparing 
              for performances, we provide the guidance and support they need to flourish 
              as confident, skilled musicians.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gold/20 via-secondary to-muted overflow-hidden shadow-medium">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gold"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </svg>
                  </div>
                  <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
                    "Music gives a soul to the universe, wings to the mind, flight to the imagination."
                  </blockquote>
                  <cite className="block mt-4 text-muted-foreground text-sm">— Plato</cite>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-navy/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
