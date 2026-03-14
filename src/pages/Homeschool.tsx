import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Users, Music, Lightbulb } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";
import flyerDragon from "@/assets/flyer-dragon.png";
import dragonScales from "@/assets/dragon-scales-pattern.png";

const offerings = [
"Group music classes with peers",
"Piano learning and keyboard skills",
"Music theory fundamentals",
"Creative music activities and composition",
"Rhythm, note reading, and ear training",
"Performance opportunities"];


const Homeschool = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Homeschool Programs</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">Home School Music Education 

            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Add structured, engaging music education to your homeschool curriculum. Group classes, piano learning, and creative activities designed for homeschool students.
            </p>
            <Link to="/contact">
              <Button size="xl" variant="accent">Inquire About Programs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">What We Offer</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Structured Music for Your Curriculum
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our homeschool music programs help families add high-quality music education to their learning plan. Students build real skills, connect with peers, and discover the joy of making music.
              </p>
              <div className="grid gap-3">
                {offerings.map((item) =>
                <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
              { icon: BookOpen, label: "Structured Learning", bg: "bg-primary/10", color: "text-primary" },
              { icon: Users, label: "Peer Interaction", bg: "bg-fun/10", color: "text-fun" },
              { icon: Music, label: "Real Skills", bg: "bg-primary/5", color: "text-primary" },
              { icon: Lightbulb, label: "Creative Growth", bg: "bg-fun/10", color: "text-fun" }].
              map((item) =>
              <div key={item.label} className={`${item.bg} rounded-3xl p-8 text-center`}>
                  <item.icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                  <p className="font-display font-bold text-foreground">{item.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Homeschool Families Choose Us */}
      <section className="relative py-24 bg-muted overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Homeschool Families Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Curriculum-Friendly</h3>
              <p className="text-muted-foreground text-sm">Designed to complement your existing homeschool plan.</p>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Social Learning</h3>
              <p className="text-muted-foreground text-sm">Students learn and create alongside other homeschool kids.</p>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Flexible Scheduling</h3>
              <p className="text-muted-foreground text-sm">Daytime class options that work with your homeschool schedule.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Add Music to Your Homeschool Journey"
        description="Contact us to learn about upcoming group classes and program options for homeschool students."
        primaryLabel="Get in Touch"
        primaryLink="/contact" />
      
    </PageLayout>);

};

export default Homeschool;