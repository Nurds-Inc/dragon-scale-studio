import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, BookOpen, Smile, Award, CheckCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-piano-lessons.jpg";
import dragonScales from "@/assets/dragon-scales-pattern.png";

const benefits = [
  "Reading music and note recognition",
  "Rhythm and timing fundamentals",
  "Keyboard basics and proper technique",
  "Fun, engaging songs kids love",
  "Building confidence through performance",
  "Personalized pace for every student",
];

const PianoLessons = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Hands playing piano with music notes" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Piano Lessons</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Beginner Piano Lessons That Kids Actually Love
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Our piano lessons are designed to be engaging and approachable for young students. We focus on building real skills while keeping the fun front and center.
            </p>
            <Link to="/contact">
              <Button size="xl" variant="accent">Contact for Lesson Availability</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Students Learn */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">What Students Learn</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Building Musical Foundations, One Key at a Time
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Every lesson is tailored to the student's level and interests. Whether they're touching a piano for the first time or ready to learn their favorite song, we meet them where they are.
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
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Music, label: "Piano Skills", bg: "bg-primary/10", color: "text-primary" },
                { icon: BookOpen, label: "Music Theory", bg: "bg-fun/10", color: "text-fun" },
                { icon: Smile, label: "Fun Learning", bg: "bg-primary/5", color: "text-primary" },
                { icon: Award, label: "Confidence", bg: "bg-fun/10", color: "text-fun" },
              ].map((item) => (
                <div key={item.label} className={`${item.bg} rounded-3xl p-8 text-center`}>
                  <item.icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                  <p className="font-display font-bold text-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Format */}
      <section className="relative py-24 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Lesson Options</h2>
          <p className="text-muted-foreground text-lg mb-12">Flexible options to fit your family's schedule and your child's learning style.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <div className="text-4xl mb-4">🎹</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Individual Lessons</h3>
              <p className="text-muted-foreground">One-on-one instruction tailored to your child's pace, interests, and goals.</p>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <div className="text-4xl mb-4">👫</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Small Group Lessons</h3>
              <p className="text-muted-foreground">Learn alongside peers in a supportive, collaborative environment.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Contact us to check lesson availability and schedule a time for your child."
        primaryLabel="Contact for Availability"
        primaryLink="/contact"
      />
    </PageLayout>
  );
};

export default PianoLessons;