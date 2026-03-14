import { Heart, Star, Music, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import flyerDragon from "@/assets/flyer-dragon.png";
import dragonScales from "@/assets/dragon-scales-pattern.png";

const values = [
  { icon: Heart, title: "Love of Music", description: "We inspire a genuine love for music that lasts a lifetime. Every lesson is designed to spark joy and curiosity." },
  { icon: Star, title: "Real Skills", description: "Students learn actual musical foundations — reading music, rhythm, technique — in a way that's fun and engaging." },
  { icon: Sparkles, title: "Creativity First", description: "We help kids discover their own creativity and express themselves through music, building confidence along the way." },
  { icon: Music, title: "Fun & Encouraging", description: "Learning should feel like play. Our programs are structured yet joyful, challenging yet supportive." },
];

const About = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Making Music Education Accessible and Fun
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Our mission is to make music education accessible, engaging, and confidence-building for every kid. We believe every child deserves the chance to discover their musical voice.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We started with a simple belief: music education should be joyful, not intimidating. Too many kids never get the chance to explore music because programs feel rigid, expensive, or unwelcoming.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                That's why we created Dragon Scale Studio — a place where kids can learn piano, explore music fundamentals, and build real skills in an environment that feels fun, creative, and encouraging.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether we're teaching in our studio, running an after-school club at a local school, or working with homeschool families, our approach is always the same: meet kids where they are, make it fun, and help them grow.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <img src={flyerDragon} alt="Wispy watercolor music dragon" className="w-full max-w-sm h-auto" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/15 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">What We Believe</h2>
            <p className="text-muted-foreground text-lg">Our programs are built on these core values.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-3xl p-8 shadow-soft text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Make Music Together"
        description="Whether you're a family or a school, we'd love to share our passion for music education with you."
        primaryLabel="Contact Us"
        primaryLink="/contact"
        secondaryLabel="View Programs"
        secondaryLink="/piano-lessons"
      />
    </PageLayout>
  );
};

export default About;