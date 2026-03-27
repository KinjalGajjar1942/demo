import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export default function FranchiseForm() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setIsPending(true);
    try {
      await actor.submitForm(name, email, phone, location, message);
      setSubmitted(true);
      toast.success("Inquiry submitted! We'll get back to you soon.");
      setName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setMessage("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center py-12 gap-4"
        data-ocid="franchise_form.success_state"
      >
        <CheckCircle className="w-16 h-16 text-green-500" />
        <h3 className="font-heading text-2xl font-bold text-kudoz-maroon">
          Thank you!
        </h3>
        <p className="text-kudoz-body text-center">
          Your franchise inquiry has been received. Our team will contact you
          shortly.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          className="rounded-full bg-kudoz-pink text-white hover:bg-[#c23d5d]"
        >
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      data-ocid="franchise_form.panel"
    >
      <div>
        <Label
          htmlFor="franchise-name"
          className="text-kudoz-maroon font-semibold"
        >
          Full Name *
        </Label>
        <Input
          id="franchise-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
          className="mt-1 border-kudoz-blush focus:ring-kudoz-pink"
          data-ocid="franchise_form.input"
        />
      </div>
      <div>
        <Label
          htmlFor="franchise-email"
          className="text-kudoz-maroon font-semibold"
        >
          Email Address *
        </Label>
        <Input
          id="franchise-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your@email.com"
          className="mt-1 border-kudoz-blush"
          data-ocid="franchise_form.input"
        />
      </div>
      <div>
        <Label
          htmlFor="franchise-phone"
          className="text-kudoz-maroon font-semibold"
        >
          Phone Number *
        </Label>
        <Input
          id="franchise-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="+91 XXXXXXXXXX"
          className="mt-1 border-kudoz-blush"
          data-ocid="franchise_form.input"
        />
      </div>
      <div>
        <Label
          htmlFor="franchise-location"
          className="text-kudoz-maroon font-semibold"
        >
          Preferred Location
        </Label>
        <Input
          id="franchise-location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City, State"
          className="mt-1 border-kudoz-blush"
          data-ocid="franchise_form.input"
        />
      </div>
      <div>
        <Label
          htmlFor="franchise-message"
          className="text-kudoz-maroon font-semibold"
        >
          Message
        </Label>
        <Textarea
          id="franchise-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about yourself and your goals..."
          rows={4}
          className="mt-1 border-kudoz-blush"
          data-ocid="franchise_form.textarea"
        />
      </div>
      <Button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-kudoz-pink hover:bg-[#c23d5d] text-white font-semibold py-3 text-base"
        data-ocid="franchise_form.submit_button"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </Button>
    </form>
  );
}
