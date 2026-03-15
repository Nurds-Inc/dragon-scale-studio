import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Users, BookOpen, ArrowRight, Star, Heart, Sparkles, Piano } from "lucide-react";
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
  description: "Private and group piano instruction designed to build strong musical foundations while developing confidence, creativity and expressive playing.",
  link: "/piano-lessons",
  color: "bg-primary/10",
  iconColor: "text-primary"
},
{
  icon: Users,
  title: "After-School Music Clubs",
  description: "Structured enrichment programs hosted at schools. Beginner piano, music fundamentals, and group learning.",
  link: "/after-school-clubs",
  color: "bg-fun/10",
  iconColor: "text-fun"
},
{
  icon: BookOpen,
  title: "Homeschool Music Programs",
  description: "Music education designed for homeschool families. Group classes, piano, theory, and creative activities.",
  link: "/homeschool",
  color: "bg-accent/10",
  iconColor: "text-accent"
}];


const features = [
{ icon: Star, label: "Supportive instruction for every level", bg: "bg-highlight/15", iconBg: "bg-highlight/25", iconColor: "text-highlight" },
{ icon: Music, label: "Strong musical foundations", bg: "bg-fun/15", iconBg: "bg-fun/25", iconColor: "text-fun" },
{ icon: Sparkles, label: "Piano, voice, and instrumental exploration", bg: "bg-accent/15", iconBg: "bg-accent/25", iconColor: "text-accent" },
{ icon: Heart, label: "Creativity and confidence building", bg: "bg-highlight/15", iconBg: "bg-highlight/25", iconColor: "text-highlight" }];


const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section - Sheet Music + Dragon */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={sheetMusicBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/30" />
        </div>
        {/* Centered two-column layout: dragon + text stay together */}
        <div className="relative w-full flex items-center justify-center min-h-[90vh] px-4">
          <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[400px_1fr] items-center max-w-5xl w-full">
            {/* Dragon column */}
            <div className="hidden md:flex h-[70vh] items-center justify-center overflow-hidden rounded-l-3xl">
              <img
                src={flyerDragon}
                alt="Watercolor music dragon"
                className="h-[130%] w-auto object-contain drop-shadow-lg scale-150" />
            </div>
            {/* Content column */}
            <div className="flex items-center justify-center py-10">
              <div className="text-center max-w-2xl backdrop-blur-sm bg-background/20 rounded-3xl md:rounded-l-none py-10 px-6 md:px-8">
                <h1 className="font-display text-5xl md:text-6xl font-bold text-primary leading-tight mb-3 animate-fade-up lg:text-6xl">Dragon Scale Music Studio</h1>
                <p className="text-lg mb-6 font-display font-semibold italic animate-fade-up delay-100 pt-0 md:text-3xl text-fun">Engaging music instruction that helps students grow, create, and build lasting musical skills</p>
                <p className="text-base text-foreground font-semibold mb-10 animate-fade-up delay-200 md:text-xl">Private Lessons • Homeschool Classes • After-School Clubs</p>
                <div className="flex flex-col items-center gap-4 animate-fade-up delay-300">
                  <Link to="/piano-lessons">
                    <Button size="xl" variant="highlight" className="min-w-[280px] rounded-full text-base tracking-wider uppercase">
                      Start Lessons
                    </Button>
                  </Link>
                  <Link to="/schools">
                    <Button size="xl" variant="accent" className="min-w-[280px] rounded-full text-base tracking-wider uppercase">
                      Bring a Club to Your School
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div>
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Our Philosophy</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-6">
                Where Musical Journeys Begin
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                At Dragon Scale Music Studio, we believe music education should be engaging, creative, and confidence-building. Our teaching approach focuses on helping students develop strong musical foundations while encouraging curiosity, expression, and a lifelong appreciation for music. Whether someone is beginning their first instrument or continuing to grow as a musician, every student is supported on their unique musical journey.
              </p>
              <Link to="/about">
                <Button variant="highlight" size="lg">
                  Learn More About Us <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            {/* Feature cards side */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.label} className={`backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform duration-300 ${feature.bg}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.iconBg}`}>
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <span className="font-semibold text-primary-foreground text-sm">{feature.label}</span>
                </div>
              ))}
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
              From private lessons to after-school clubs and homeschool programs — Dragon School Music Studio offers engaging programs for students at every stage of their musical journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program) =>
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
            )}
          </div>
        </div>
      </section>

      {/* Dual Audience CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-3xl p-10 text-primary-foreground relative overflow-hidden">
              <img src={dragonPiano} alt="" className="absolute bottom-4 right-4 w-28 h-28 object-contain opacity-50" />
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
              <img src={dragonPiano} alt="" className="absolute bottom-4 right-4 w-28 h-28 object-contain opacity-50" />
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
        secondaryLink="/piano-lessons" />
      
    </PageLayout>);

};

export default Index;