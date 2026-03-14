import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Users, BookOpen, ArrowRight, Star, Heart, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";

import dragonHero from "@/assets/dragon-music-hero.png";
import dragonPiano from "@/assets/dragon-piano.png";

const programs = [
  {
    icon: Music,
    title: "Piano Lessons",
    description: "Individual and small group piano instruction for kids of all levels. Fun, engaging, and confidence-building.",
    link: "/piano-lessons",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "After-School Music Clubs",
    description: "Structured enrichment programs hosted at schools. Beginner piano, music fundamentals, and group learning.",
    link: "/after-school-clubs",
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: BookOpen,
    title: "Homeschool Music Programs",
    description: "Music education designed for homeschool families. Group classes, piano, theory, and creative activities.",
    link: "/homeschool",
    color: "bg-fun/10",
    iconColor: "text-fun",
  },
];

const features = [
  { icon: Star, label: "Beginner-friendly piano learning" },
  { icon: Heart, label: "Creativity and confidence building" },
  { icon: Sparkles, label: "Fun group learning experiences" },
  { icon: Music, label: "Real music fundamentals" },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Kids learning piano together in a colorful music classroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-up">
              Fun and Engaging Music Education for Kids
            </h1>
            <p className="text-lg md:text-xl text-background/85 mb-10 max-w-2xl leading-relaxed animate-fade-up delay-100">
              Piano lessons and after-school music clubs that build confidence, creativity, and real musical skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-200">
              <Link to="/piano-lessons">
                <Button size="xl" variant="accent">Explore Programs</Button>
              </Link>
              <Link to="/schools">
                <Button variant="outline" size="xl" className="border-background/30 text-background hover:bg-background/10 hover:text-background">
                  Partner With Your School
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">About Our Program</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
                Where Kids Discover the Joy of Music
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our programs focus on making music fun, creative, and confidence-building for kids, while still teaching real musical skills and foundations. Whether it's their first time touching a keyboard or they're ready to perform, every student finds their place here.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-3 p-3 rounded-2xl bg-muted">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground text-sm">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden flex items-center justify-center bg-muted/50 p-6">
                <img src={dragonHero} alt="Watercolor music dragon with flowing musical notes" className="w-full h-full object-contain animate-float" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-highlight/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Musical Journeys for Every Student
            </h2>
            <p className="text-muted-foreground text-lg">
              From individual piano lessons to after-school clubs and homeschool programs — we have something for every young musician.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.title} className="group border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <program.icon className={`w-7 h-7 ${program.iconColor}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  <Link to={program.link} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Audience CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-3xl p-10 text-secondary-foreground relative overflow-hidden">
              <img src={dragonPiano} alt="" className="absolute -bottom-8 -right-8 w-40 h-40 object-contain opacity-20" />
              <div className="relative">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="font-display text-2xl font-bold mb-3">For Families</h3>
                <p className="text-secondary-foreground/80 mb-6">Looking for music lessons or want your child to join an after-school music club? We'd love to hear from you.</p>
                <Link to="/contact">
                  <Button variant="accent" size="lg">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="bg-primary rounded-3xl p-10 text-primary-foreground relative overflow-hidden">
              <img src={dragonPiano} alt="" className="absolute -bottom-8 -right-8 w-40 h-40 object-contain opacity-20 scale-x-[-1]" />
              <div className="relative">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="font-display text-2xl font-bold mb-3">For Schools</h3>
                <p className="text-primary-foreground/80 mb-6">Bring a structured, engaging music enrichment program to your campus. Easy to host, loved by students.</p>
                <Link to="/schools">
                  <Button variant="accent" size="lg">Partner With Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Child's Musical Journey?"
        description="Contact us today to learn about our programs and find the perfect fit for your young musician."
        primaryLabel="Contact Us"
        primaryLink="/contact"
        secondaryLabel="View Programs"
        secondaryLink="/piano-lessons"
      />
    </PageLayout>
  );
};

export default Index;
