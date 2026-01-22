import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Piano, Users, Theater, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Music,
    title: "Private Lessons",
    description:
      "One-on-one instruction tailored to your child's pace and interests. Piano, voice, guitar, and more.",
    features: ["30 or 60 minute sessions", "Personalized curriculum", "All ages & levels"],
    color: "from-gold/20 to-gold/5",
    iconBg: "bg-gold/20",
  },
  {
    icon: Piano,
    title: "Piano Lab",
    description:
      "Group piano classes where students learn together using digital keyboards in an interactive setting.",
    features: ["Small group environment", "Theory & technique", "Fun & engaging"],
    color: "from-navy-light/10 to-navy-light/5",
    iconBg: "bg-navy-light/10",
  },
  {
    icon: Users,
    title: "Band Ensemble",
    description:
      "Learn to play as a team! Students form bands and perform together, building teamwork and confidence.",
    features: ["Multiple instruments", "Regular performances", "Team collaboration"],
    color: "from-secondary to-secondary/50",
    iconBg: "bg-secondary",
  },
  {
    icon: Theater,
    title: "Musical Theater",
    description:
      "Combine singing, acting, and movement in exciting productions that showcase every student's talents.",
    features: ["Seasonal productions", "Acting & singing", "Stage presence"],
    color: "from-gold-light/20 to-gold-light/5",
    iconBg: "bg-gold-light/20",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Musical Journeys for Every Student
          </h2>
          <p className="text-muted-foreground text-lg">
            From individual lessons to ensemble performances, we offer diverse programs 
            designed to inspire creativity and build lasting musical skills.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className={`group relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${program.color}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${program.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <program.icon className="w-7 h-7 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button variant="ghost" className="group/btn p-0 h-auto text-foreground hover:text-gold hover:bg-transparent">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
