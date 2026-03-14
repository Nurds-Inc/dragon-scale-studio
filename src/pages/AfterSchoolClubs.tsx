import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Music, BookOpen, Star } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import heroImage from "@/assets/hero-music.jpg";
import CTASection from "@/components/CTASection";

const clubFeatures = [
  "Beginner piano instruction",
  "Music fundamentals and theory basics",
  "Rhythm and note reading",
  "Interactive group learning",
  "Fun performance opportunities",
  "Structured 6-week sessions",
];

const studentReceives = [
  "Structured, curriculum-based lessons",
  "Music learning materials",
  "Fun activities and games",
];

const ageGroups = [
  { name: "K–2 Beginner Music Club", description: "Introduction to music, rhythm, and basic keyboard skills through play and song.", emoji: "🎶" },
  { name: "3–5 Piano Club", description: "Hands-on piano learning, reading music, and performing fun songs together.", emoji: "🎹" },
  { name: "Middle School Music Club", description: "Deeper music exploration, technique building, and creative projects.", emoji: "🎸" },
];

const AfterSchoolClubs = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Kids learning piano together in a music classroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">After-School Clubs</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              After-School Music Clubs Kids Look Forward To
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Schools can partner with us to provide structured, engaging music enrichment clubs. Students learn real music skills in a fun, supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/schools">
                <Button size="xl">Partner With Your School</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Clubs Include */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">What Clubs Include</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Structured Music Enrichment Programs
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our clubs are designed as 6-week sessions with a clear curriculum that keeps students engaged and learning. Every session is packed with music, creativity, and fun.
              </p>
              <div className="grid gap-3">
                {clubFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary rounded-3xl p-8">
              <h3 className="font-display text-xl font-bold text-secondary-foreground mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" /> Each Student Receives
              </h3>
              <div className="space-y-4">
                {studentReceives.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-secondary-foreground/10 rounded-2xl p-4">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-secondary-foreground font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-fun font-bold text-sm uppercase tracking-wider">Age Groups</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Programs for Every Age
            </h2>
            <p className="text-muted-foreground text-lg">
              Schools can host clubs for different age groups, each tailored to the developmental stage and musical readiness of the students.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group) => (
              <Card key={group.name} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{group.emoji}</div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{group.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{group.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Bring a Music Club to Your School"
        description="Partner with us to provide high-quality music enrichment for your students. It's easy to set up and kids love it."
        primaryLabel="Contact Us to Get Started"
        primaryLink="/contact"
        secondaryLabel="Learn About School Partnerships"
        secondaryLink="/schools"
        variant="accent"
      />
    </PageLayout>
  );
};

export default AfterSchoolClubs;
