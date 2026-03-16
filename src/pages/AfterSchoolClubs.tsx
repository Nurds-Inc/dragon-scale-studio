import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle, Music, BookOpen, Star, Users, Calendar,
  Piano, Mic, Guitar, Theater, Palette, Sparkles, Heart,
  School, ClipboardList, ArrowRight
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import heroImage from "@/assets/hero-music.jpg";
import CTASection from "@/components/CTASection";
import dragonScales from "@/assets/dragon-scales-pattern.png";

const programOptions = [
  {
    icon: Piano,
    title: "Beginner Piano Club",
    description: "Students learn keyboard basics, rhythm, and simple songs in a group setting.",
  },
  {
    icon: Music,
    title: "Music Exploration Club",
    description: "Younger students explore rhythm, instruments, and musical creativity through interactive activities.",
  },
  {
    icon: Sparkles,
    title: "Band Instrument Club",
    description: "Students develop foundational skills on band instruments they already play.",
  },
  {
    icon: Guitar,
    title: "Orchestra / Strings Club",
    description: "Small group learning for violin, viola, cello, or other string instruments.",
  },
  {
    icon: Mic,
    title: "Choir or Vocal Club",
    description: "Students develop vocal skills, harmony, and ensemble singing.",
  },
  {
    icon: Theater,
    title: "Musical Theater Club",
    description: "Students work on vocal performance, acting, and preparation for school productions.",
  },
  {
    icon: Palette,
    title: "Creative Production Club",
    description: "Students assist with sets, props, and costumes for musical productions.",
  },
];

const benefits = [
  "Expands enrichment opportunities for students",
  "Encourages creativity and artistic expression",
  "Supports confidence and teamwork",
  "Provides structured after-school programming",
  "Easy to host within existing school enrichment schedules",
];

const schoolProvides = [
  "A classroom or activity space",
  "Access to a piano or keyboard",
  "Student instruments for band or orchestra programs",
];

const scheduleFormats = [
  "6-week sessions",
  "8-week sessions",
  "Semester clubs",
  "Full-year programs",
  "Summer music camps",
];

const additionalOpportunities = [
  { icon: BookOpen, title: "Private Music Lessons", description: "On-campus private instruction for individual students." },
  { icon: Star, title: "Music Enrichment Workshops", description: "One-time or short-series workshops on specific music topics." },
  { icon: Theater, title: "Musical Theater Support", description: "Assistant director or director roles for school musicals and productions." },
];

const AfterSchoolClubs = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Students learning music together in a classroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">After-School Programs</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Music Enrichment Programs for Schools
            </h1>
            <p className="text-primary-foreground/85 text-lg leading-relaxed mb-8">
              Dragon Scale Music Studio partners with schools to provide engaging music enrichment programs that help students explore music, build skills, and develop creativity in a supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="xl" variant="accent">Partner With Your School</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Program Overview</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Structured Music Enrichment for Your Campus
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Dragon Scale Music Studio offers flexible music programs designed to work within each school's schedule and resources. Programs may run as 6-week sessions, 8-week sessions, semester clubs, or longer-term enrichment programs depending on the school's format.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Programs introduce students to music through engaging instruction while helping them develop real musical skills.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Clubs */}
      <section className="relative py-24 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Types of Clubs</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Music Programs We Can Host
            </h2>
            <p className="text-muted-foreground text-lg">
              Programs can be customized depending on your school's needs, student interests, and available resources. Here are some examples of what we can offer.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {programOptions.map((program) => (
              <Card key={program.title} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{program.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Schools */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Why Partner With Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Benefits for Schools
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Hosting music enrichment programs provides valuable opportunities for students while requiring minimal effort from your staff.
              </p>
              <div className="grid gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Requirements */}
            <div className="space-y-6">
              <div className="bg-primary rounded-3xl p-8">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-accent" /> Program Requirements
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-5">What's typically needed to host a music club:</p>
                <div className="space-y-3 mb-6">
                  <p className="text-accent font-bold text-xs uppercase tracking-wider">Schools Generally Provide</p>
                  {schoolProvides.map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-primary-foreground/10 rounded-2xl p-4">
                      <School className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-primary-foreground font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-primary-foreground/15 pt-4">
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    Dragon Scale Music Studio provides instruction, curriculum structure, and program leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Scheduling */}
      <section className="relative py-24 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Flexible Scheduling</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Designed to Fit Your School Schedule
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Scheduling can be adapted to each school's existing enrichment structure. Programs can be offered in a variety of formats to fit your campus.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {scheduleFormats.map((format) => (
                <div key={format} className="bg-card rounded-2xl p-5 shadow-soft text-center">
                  <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="text-foreground font-semibold text-sm">{format}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Music Opportunities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Beyond Clubs</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Additional Music Opportunities
            </h2>
            <p className="text-muted-foreground text-lg">
              Schools may also partner with Dragon Scale Music Studio for extended music programming.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalOpportunities.map((item) => (
              <Card key={item.title} className="border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Family Referral */}
      <section className="relative py-20 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="w-8 h-8 text-highlight mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want a Music Club at Your School?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              If you're a parent or student interested in bringing a music club to your school, we'd love to hear from you. Many of our school partnerships begin with families who share the program with their administrators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="default">Refer Your School</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Share Program Information <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Bring Music to Your School"
        description="If your school is interested in offering engaging music enrichment opportunities, Dragon Scale Music Studio would love to partner with you to create a program that fits your campus."
        primaryLabel="Contact Us to Get Started"
        primaryLink="/contact"
        secondaryLabel="Discuss Programs for Your School"
        secondaryLink="/contact"
      />
    </PageLayout>
  );
};

export default AfterSchoolClubs;
