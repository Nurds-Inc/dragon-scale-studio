import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle, Mail, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import PageLayout from "@/components/PageLayout";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      <PageLayout>
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Thank You!</h1>
              <p className="text-muted-foreground text-lg mb-8">We've received your message and will get back to you within 24 hours.</p>
              <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">Get in Touch</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Whether you're a family looking for lessons or a school interested in a partnership, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">How to Reach Us</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-muted-foreground text-sm">hello@harmonylabs.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <p className="text-muted-foreground text-sm">(555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
                  <h3 className="font-display text-xl font-bold mb-2">👨‍👩‍👧‍👦 For Families</h3>
                  <p className="text-primary-foreground/80 text-sm">Looking for piano lessons, after-school clubs, or homeschool music programs? Fill out the form and we'll help you find the right fit.</p>
                </div>
                <div className="bg-fun rounded-3xl p-8 text-fun-foreground">
                  <h3 className="font-display text-xl font-bold mb-2">🏫 For Schools</h3>
                  <p className="text-fun-foreground/80 text-sm">Interested in bringing music enrichment to your campus? Let us know and we'll send you program details and pricing.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-3xl shadow-medium p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Name</label>
                    <Input placeholder="Your name" required className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" required className="rounded-xl" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Phone</label>
                    <Input type="tel" placeholder="(555) 123-4567" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">I Am A...</label>
                    <Select>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parent">Parent / Family</SelectItem>
                        <SelectItem value="school">School / Administrator</SelectItem>
                        <SelectItem value="homeschool">Homeschool Family</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Program Interest</label>
                  <Select>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="piano">Piano Lessons</SelectItem>
                      <SelectItem value="after-school">After-School Music Clubs</SelectItem>
                      <SelectItem value="homeschool">Homeschool Programs</SelectItem>
                      <SelectItem value="school-partnership">School Partnership</SelectItem>
                      <SelectItem value="other">Other / General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about what you're looking for..."
                    rows={4}
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
