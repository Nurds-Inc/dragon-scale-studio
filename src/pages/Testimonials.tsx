import { FormEvent, useState } from "react";
import { MessageSquareHeart, CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import dragonScales from "@/assets/dragon-scales-pattern.png";
import flyerDragon from "@/assets/flyer-dragon.png";

const prompts = [
  "What changed for your child after starting lessons?",
  "What does your student enjoy most about class?",
  "Would you recommend Dragon Scale Music Studio to another family, and why?",
];

const Testimonials = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [program, setProgram] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [email, setEmail] = useState("");
  const [approvedForPublicUse, setApprovedForPublicUse] = useState(false);
  const [photoPermission, setPhotoPermission] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!approvedForPublicUse) {
      toast({
        title: "Permission needed",
        description: "Please confirm we can share your testimonial publicly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setIsSubmitting(false);
    setSubmitted(true);
    setParentName("");
    setStudentName("");
    setProgram("");
    setTestimonial("");
    setEmail("");
    setApprovedForPublicUse(false);
    setPhotoPermission(false);
    toast({
      title: "Thank you for sharing",
      description: "Your testimonial has been saved for review.",
    });
  };

  if (submitted) {
    return (
      <PageLayout>
        <section className="py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Thank You for Sharing</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Your story helps other families know what to expect when they start their music journey.
              </p>
              <Button onClick={() => setSubmitted(false)}>Share Another Testimonial</Button>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="relative py-16 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: `url(${dragonScales})`, backgroundSize: "250px", backgroundRepeat: "repeat" }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Share Your Child&apos;s Music Story</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A few honest sentences helps other families understand what the experience is like.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-semibold text-primary mb-6">
                <MessageSquareHeart className="w-4 h-4" />
                Writing prompts
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Not sure what to write?</h2>
              <p className="text-muted-foreground mb-6">
                Use one or two of these prompts to guide your testimonial. Short and specific is perfect.
              </p>

              <div className="space-y-3">
                {prompts.map((prompt) => (
                  <div key={prompt} className="rounded-2xl border border-border bg-card p-4 text-foreground">
                    {prompt}
                  </div>
                ))}
              </div>

              <div className="mt-8 opacity-35 flex justify-center lg:justify-start">
                <img src={flyerDragon} alt="" className="w-40 h-auto" />
              </div>
            </div>

            <div className="bg-card rounded-3xl shadow-medium p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Submit a Testimonial</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Parent Name</label>
                    <Input
                      required
                      value={parentName}
                      onChange={(event) => setParentName(event.target.value)}
                      placeholder="Your name"
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Student Name (optional)</label>
                    <Input
                      value={studentName}
                      onChange={(event) => setStudentName(event.target.value)}
                      placeholder="First name only is fine"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Program</label>
                  <Select value={program} onValueChange={setProgram}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Choose a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="piano">Piano Lessons</SelectItem>
                      <SelectItem value="after-school">After-School Music Clubs</SelectItem>
                      <SelectItem value="homeschool">Homeschool Music Programs</SelectItem>
                      <SelectItem value="school">School Partnership Program</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Your Testimonial</label>
                  <Textarea
                    required
                    rows={6}
                    value={testimonial}
                    onChange={(event) => setTestimonial(event.target.value)}
                    placeholder="Share your family experience in a few sentences..."
                    className="rounded-xl resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Email (optional)</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="For follow-up if needed"
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-4 pt-1">
                  <label className="flex items-start gap-3 text-sm text-foreground">
                    <Checkbox
                      checked={approvedForPublicUse}
                      onCheckedChange={(value) => setApprovedForPublicUse(value === true)}
                      className="mt-0.5"
                    />
                    <span>I give permission for Dragon Scale Music Studio to share this testimonial publicly.</span>
                  </label>
                  <label className="flex items-start gap-3 text-sm text-foreground">
                    <Checkbox
                      checked={photoPermission}
                      onCheckedChange={(value) => setPhotoPermission(value === true)}
                      className="mt-0.5"
                    />
                    <span>I also give permission to use my child&apos;s class photo if one is provided separately.</span>
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Submit Testimonial"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Testimonials;
