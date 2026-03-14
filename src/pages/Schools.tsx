import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, BookOpen, Star, Award } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-schools.jpg";
import dragonScales from "@/assets/dragon-scales-pattern.png";

const programIncludes = [
  "Structured music curriculum aligned with education standards",
  "Beginner piano instruction for all skill levels",
  "Group music activities and collaborative learning",
  "Engaging, age-appropriate programming",
  "All necessary materials and resources provided",
  "Regular progress updates for administrators",
];

const benefits = [
  { icon: Star, title: "High-Quality Enrichment", description: "Professional, curriculum-based music programs that parents and students love." },
  { icon: Shield, title: "Easy to Host", description: "We handle everything — curriculum, materials, and instruction. Minimal effort from your staff." },
  { icon: BookOpen, title: "Structured Curriculum", description: "Every session follows a clear plan with learning objectives, activities, and assessments." },
  { icon: Users, title: "Engaging for Students", description: "Our programs are designed to be fun and interactive, keeping students excited week after week." },
  { icon: Award, title: "Performance Opportunities", description: "Students showcase what they've learned in optional end-of-session performances." },
];

const Schools = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">For Schools & Administrators</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Bring Music Enrichment to Your School
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              We provide high-quality after-school music enrichment programs that are easy to host, structured, and loved by students. Partner with us to bring the gift of music to your campus.
            </p>
            <Link to="/contact">
              <Button size="xl" variant="accent">Bring a Music Club to Your School</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">What We Provide</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Turnkey Music Enrichment Programs
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our after-school enrichment clubs are designed to be easy for schools to implement. We bring the curriculum, materials, and instruction — you provide the space and the students.
              </p>
              <div className="grid gap-3">
                {programIncludes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-3xl p-10">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">Program Structure</h3>
              <div className="space-y-4">
                <div className="bg-primary-foreground/10 rounded-2xl p-4">
                  <p className="font-bold text-primary-foreground">📅 6-Week Sessions</p>
                  <p className="text-primary-foreground/70 text-sm">Structured programs with clear start and end dates.</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-2xl p-4">
                  <p className="font-bold text-primary-foreground">👥 Multiple Age Groups</p>
                  <p className="text-primary-foreground/70 text-sm">K–2, 3–5, and Middle School options available.</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-2xl p-4">
                  <p className="font-bold text-primary-foreground">🎹 Hands-On Learning</p>
                  <p className="text-primary-foreground/70 text-sm">Students engage with instruments and activities every session.</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-2xl p-4">
                  <p className="font-bold text-primary-foreground">🎤 Optional Performances</p>
                  <p className="text-primary-foreground/70 text-sm">End-of-session showcases for parents and school community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Benefits for Your School</h2>
            <p className="text-muted-foreground text-lg">Here's why schools love partnering with us.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-3xl p-8 shadow-soft">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With Us Today"
        description="Bring a high-quality music enrichment program to your school. Contact us to discuss options and scheduling."
        primaryLabel="Contact Us"
        primaryLink="/contact"
      />
    </PageLayout>
  );
};

export default Schools;