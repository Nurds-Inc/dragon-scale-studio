import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle, Mail, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import PageLayout from "@/components/PageLayout";
import dragonScales from "@/assets/dragon-scales-pattern.png";
import flyerDragon from "@/assets/flyer-dragon.png";
import { trackFormSubmit } from "@/lib/analytics";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.sandbox.nurds.com";
const FORM_KEY = "contact";
const FORM_SUBMISSION_ENDPOINT = `${API_BASE_URL}/api/v1/public/workspaces/dragon-scale/forms/${FORM_KEY}/submissions`;
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "0x4AAAAAADK-pq5fJkCLoMDR";

declare global {
  interface Window {
    turnstile?: {
      render: (
        target: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          appearance?: "always" | "interaction-only" | "execute";
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [audienceType, setAudienceType] = useState("");
  const [programInterest, setProgramInterest] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;

    const renderWidget = () => {
      if (!window.turnstile || !turnstileRef.current || turnstileWidgetId.current) return;
      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
        appearance: "always",
      });
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    const scriptSelector = 'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"]';
    const existing = document.querySelector<HTMLScriptElement>(scriptSelector);
    if (existing) {
      existing.addEventListener("load", renderWidget, { once: true });
      return () => existing.removeEventListener("load", renderWidget);
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderWidget, { once: true });
    document.head.appendChild(script);

    return () => script.removeEventListener("load", renderWidget);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const parts = name.trim().split(/\s+/).filter(Boolean);
      const firstName = parts[0] || name.trim();
      const lastName = parts.slice(1).join(" ");
      const response = await fetch(FORM_SUBMISSION_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company: "",
          phone: phone || undefined,
          message: message || undefined,
          website: website || undefined,
          sourceUrl: window.location.href,
          turnstileToken: turnstileToken || undefined,
          metadata: {
            audienceType: audienceType || "",
            programInterest: programInterest || "",
          },
          createCrmLead: true,
        }),
      });

      if (!response.ok) {
        if (turnstileWidgetId.current && window.turnstile) {
          window.turnstile.reset(turnstileWidgetId.current);
          setTurnstileToken("");
        }
        throw new Error(`Lead submission failed: ${response.status}`);
      }

      trackFormSubmit("contact");
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setAudienceType("");
      setProgramInterest("");
      setMessage("");
      setWebsite("");
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
      setTurnstileToken("");
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch {
      toast({
        title: "Could not send message",
        description: "Please try again in a minute or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="relative py-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: '250px', backgroundRepeat: 'repeat' }} />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Get in Touch</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
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
                    <p className="text-muted-foreground text-sm">angela@dragonscalestudio.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <p className="text-muted-foreground text-sm">(480) 588-0709</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
                  <h3 className="font-display text-xl font-bold mb-2">👨‍👩‍👧‍👦 For Families</h3>
                  <p className="text-primary-foreground/80 text-sm">Looking for piano lessons, after-school clubs, or homeschool music programs? Fill out the form and we'll help you find the right fit.</p>
                </div>
                <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
                  <h3 className="font-display text-xl font-bold mb-2">🏫 For Schools</h3>
                  <p className="text-primary-foreground/80 text-sm">Interested in bringing music enrichment to your campus? Let us know and we'll send you program details and pricing.</p>
                </div>
                <div className="bg-card rounded-3xl p-8 border border-border">
                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">💬 Already a Studio Family?</h3>
                  <p className="text-muted-foreground text-sm mb-4">Share your child&apos;s music story to help new families feel confident getting started.</p>
                  <Link to="/testimonials">
                    <Button variant="accent" size="lg">Share a Testimonial</Button>
                  </Link>
                </div>
              </div>

              {/* Dragon accent */}
              <div className="mt-8 flex justify-center opacity-30">
                <img src={flyerDragon} alt="" className="w-48 h-auto" />
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-3xl shadow-medium p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Name</label>
                    <Input
                      placeholder="Your name"
                      required
                      className="rounded-xl"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="rounded-xl"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="rounded-xl"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">I Am A...</label>
                    <Select value={audienceType} onValueChange={setAudienceType}>
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
                  <Select value={programInterest} onValueChange={setProgramInterest}>
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
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </div>

                <input
                  type="text"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                />

                {TURNSTILE_SITE_KEY ? (
                  <div className="pt-1">
                    <div ref={turnstileRef} />
                  </div>
                ) : null}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || (!!TURNSTILE_SITE_KEY && !turnstileToken)}
                >
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
