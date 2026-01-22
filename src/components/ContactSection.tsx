import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button variant="gold" onClick={() => setSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Begin Your Musical Journey
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Ready to see if Harmony Studio is the right fit for your family? 
              Schedule a free trial lesson or reach out with any questions. 
              We'd love to hear from you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎹</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Free Trial Lesson</h4>
                  <p className="text-muted-foreground text-sm">
                    Experience our teaching style with a complimentary 30-minute session.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📅</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Flexible Scheduling</h4>
                  <p className="text-muted-foreground text-sm">
                    We'll work with you to find a time that fits your schedule.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-muted-foreground text-sm">
                    We respond to all inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl shadow-medium p-8">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Schedule Your Free Trial
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Parent's Name
                  </label>
                  <Input 
                    placeholder="Your name" 
                    required 
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Student's Name
                  </label>
                  <Input 
                    placeholder="Child's name" 
                    required 
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Program Interest
                </label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">Private Lessons</SelectItem>
                    <SelectItem value="piano-lab">Piano Lab</SelectItem>
                    <SelectItem value="band">Band Ensemble</SelectItem>
                    <SelectItem value="theater">Musical Theater</SelectItem>
                    <SelectItem value="multiple">Multiple Programs</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Student
                </label>
                <Textarea
                  placeholder="Age, experience level, musical interests, goals..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Request Free Trial
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
