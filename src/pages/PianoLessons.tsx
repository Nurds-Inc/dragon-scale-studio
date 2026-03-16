import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, BookOpen, Users, Mic, Guitar, Theater, BrainCircuit, CheckCircle, UserCheck, GraduationCap, Baby, Sparkles, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import flyerDragon from "@/assets/flyer-dragon.png";
import dragonPiano from "@/assets/dragon-piano.png";
import dragonScales from "@/assets/dragon-scales-pattern.png";
import lessonsHeroBg from "@/assets/lessons-hero-bg.jpg";

const areasOfStudy = [
  { icon: Music, label: "Piano", color: "bg-primary/10", iconColor: "text-primary" },
  { icon: Mic, label: "Voice", color: "bg-highlight/15", iconColor: "text-highlight" },
  { icon: Guitar, label: "Strings", color: "bg-fun/10", iconColor: "text-fun" },
  { icon: Sparkles, label: "Band Instruments", color: "bg-accent/10", iconColor: "text-accent" },
  { icon: Theater, label: "Musical Theatre", color: "bg-highlight/15", iconColor: "text-highlight" },
  { icon: BrainCircuit, label: "Music Theory & Musicianship", color: "bg-fun/10", iconColor: "text-fun" },
];

const skills = [
  "Reading music notation",
  "Rhythm and timing",
  "Instrument technique",
  "Listening skills",
  "Musical expression",
  "Basic music theory",
];

const audienceList = [
  { icon: Baby, label: "Beginners starting their first instrument" },
  { icon: GraduationCap, label: "Students continuing their musical development" },
  { icon: BookOpen, label: "Homeschool students" },
  { icon: UserCheck, label: "Teens preparing for performances or auditions" },
  { icon: Users, label: "Adults interested in learning music" },
];

const PianoLessons = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={lessonsHeroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/20" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center rounded-3xl px-8 py-12 md:px-14 md:py-16 shadow-soft" style={{ background: 'radial-gradient(ellipse at center, hsl(40 30% 96% / 0.75) 0%, hsl(40 30% 96% / 0.7) 55%, hsl(40 30% 96% / 0) 100%)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 100%)' }}>
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Lessons</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-3 mb-5">
              Music Lessons
            </h1>
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-3 whitespace-pre-line">
              {"Flexible music instruction designed to support students\nat many stages of their musical journey.\n\n"}
            </p>
            <p className="text-accent font-semibold text-base md:text-lg mb-10">
              Private Lessons • Small Group Lessons • Instrumental and Vocal Study
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="xl" variant="default">Schedule a Lesson</Button>
              </Link>
              <Link to="/contact">
                <Button size="xl" variant="fun">Contact the Studio</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Lessons Work */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-fun font-bold text-sm uppercase tracking-wider">How It Works</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                How Lessons Work
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Lessons are structured to help students steadily develop musical skills while exploring repertoire and learning how music works. Instruction is adapted to each student's interests, experience level, and goals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether offered privately or in a small group, every lesson balances guided learning with hands-on practice — covering technique, listening, and musical understanding in a way that keeps students engaged and progressing.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-highlight/10 rounded-[2rem] -rotate-3" />
                <img
                  src={dragonPiano}
                  alt="Dragon playing piano"
                  className="relative w-64 md:w-80 drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Formats */}
      <section className="relative py-24 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Formats</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Lesson Formats
            </h2>
            <p className="text-muted-foreground text-lg">Choose the format that best fits your schedule and learning style.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Private */}
            <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 border border-highlight/20">
              <div className="w-14 h-14 rounded-2xl bg-highlight/15 flex items-center justify-center mb-5">
                <Music className="w-7 h-7 text-highlight" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Private Lessons</h3>
              <p className="text-muted-foreground leading-relaxed">
                One-on-one instruction that allows students to progress at their own pace while focusing on individual musical goals.
              </p>
            </div>
            {/* Small Group */}
            <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 border border-fun/20">
              <div className="w-14 h-14 rounded-2xl bg-fun/15 flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-fun" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Small Group Lessons</h3>
              <p className="text-muted-foreground leading-relaxed">
                Collaborative learning in a small group setting where students develop musical skills together while gaining experience playing with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Study */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-highlight font-bold text-sm uppercase tracking-wider">Explore</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Areas of Study
            </h2>
            <p className="text-muted-foreground text-lg">
              Lessons may include a variety of musical focuses depending on the student's interests.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {areasOfStudy.map((area) => (
              <div key={area.label} className={`${area.color} rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300`}>
                <area.icon className={`w-9 h-9 ${area.iconColor} mx-auto mb-3`} />
                <p className="font-display font-bold text-foreground text-sm md:text-base">{area.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Students Learn + Who Lessons Are For — side by side on desktop */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What Students Learn */}
            <div>
              <span className="text-highlight font-bold text-sm uppercase tracking-wider">Skills</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-8">
                What Students Learn
              </h2>
              <div className="grid gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 bg-primary-foreground/5 rounded-xl px-5 py-3">
                    <CheckCircle className="w-5 h-5 text-highlight flex-shrink-0" />
                    <span className="text-primary-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Lessons Are For */}
            <div>
              <span className="text-accent font-bold text-sm uppercase tracking-wider">For Everyone</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-4">
                Who Lessons Are For
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Lessons are available for a wide range of students — from first-timers to experienced musicians looking to grow.
              </p>
              <div className="grid gap-4">
                {audienceList.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 bg-primary-foreground/5 rounded-xl px-5 py-3">
                    <item.icon className="w-5 h-5 text-fun flex-shrink-0" />
                    <span className="text-primary-foreground font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-fun font-bold text-sm uppercase tracking-wider">Next Steps</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Getting Started
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              New students can reach out to the studio to discuss their goals, ask questions, and find the lesson format that works best for them. We're happy to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="xl" variant="highlight">
                  Schedule a Lesson <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="xl" variant="outline">Contact the Studio</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PianoLessons;
