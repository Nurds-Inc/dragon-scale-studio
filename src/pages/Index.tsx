import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Users, BookOpen, ArrowRight, Star, Heart, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import flyerDragon from "@/assets/flyer-dragon.png";
import dragonPiano from "@/assets/dragon-piano.png";
import dragonScales from "@/assets/dragon-scales-pattern.png";
import sheetMusicBg from "@/assets/sheet-music-bg.jpg";

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
    color: "bg-fun/10",
    iconColor: "text-fun",
  },
  {
    icon: BookOpen,
    title: "Homeschool Music Programs",
    description: "Music education designed for homeschool families. Group classes, piano, theory, and creative activities.",
    link: "/homeschool",
    color: "bg-accent/10",
    iconColor: "text-accent",
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
      {/* Hero Section - Sheet Music + Dragon */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={sheetMusicBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dragon on the LEFT (it faces right) */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img 
                src={flyerDragon} 
                alt="Watercolor music dragon with flowing musical notes and staff lines" 
                className="w-full max-w-sm lg:max-w-md h-auto animate-float drop-shadow-lg mix-blend-multiply" 
              />
            </div>
            {/* Studio name + motto on the RIGHT */}
            <div className="text-center lg:text-right order-1 lg:order-2">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4 animate-fade-up">
                Dragon Scale<br />Music Studio
              </h1>
              <p className="text-lg md:text-xl text-primary/80 mb-3 font-display font-semibold italic animate-fade-up delay-100">
                Beginner-Friendly · Supportive · Confidence-Building
              </p>
              <p className="text-base md:text-lg text-foreground/70 mb-10 max-w-lg ml-auto leading-relaxed animate-fade-up delay-200">
                Fun and engaging music education for kids. Piano lessons and after-school music clubs that build confidence, creativity, and real musical skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end animate-fade-up delay-300">
                <Link to="/piano-lessons">
                  <Button size="xl">Explore Programs</Button>
                </Link>
                <Link to="/schools">
                  <Button variant="outline" size="xl">
                    Partner With Your School
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Dragon on LEFT */}
            <div className="relative flex items-center justify-center">
              <img src={flyerDragon} alt="Wispy watercolor music dragon" className="w-full max-w-sm h-auto" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
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
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="relative py-24 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Programs</span>
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
            <div className="bg-primary rounded-3xl p-10 text-primary-foreground relative overflow-hidden">
              <img src={dragonPiano} alt="" className="absolute -bottom-8 -left-8 w-40 h-40 object-contain opacity-15" />
              <div className="relative">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="font-display text-2xl font-bold mb-3">For Families</h3>
                <p className="text-primary-foreground/80 mb-6">Looking for music lessons or want your child to join an after-school music club? We'd love to hear from you.</p>
                <Link to="/contact">
                  <Button variant="accent" size="lg">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="bg-primary rounded-3xl p-10 text-primary-foreground relative overflow-hidden">
              <img src={dragonPiano} alt="" className="absolute -bottom-8 -left-8 w-40 h-40 object-contain opacity-15 scale-x-[-1]" />
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