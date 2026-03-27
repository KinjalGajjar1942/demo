import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export default function Contact() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setIsPending(true);
    try {
      await actor.submitForm(name, email, "", "", message);
      toast.success("Message sent! We'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="bg-kudoz-cream" data-ocid="contact.page">
      {/* Hero */}
      <section
        className="py-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, #F26C8A 0%, #F6A07A 50%, #F6E28A 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto px-4"
        >
          <h1
            className="font-heading text-5xl font-black text-white"
            style={{ WebkitTextStroke: "2px #D94A6A" }}
          >
            Get in Touch
          </h1>
          <p className="text-white/90 text-lg mt-3">
            We'd love to hear from you
          </p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl font-bold text-kudoz-maroon mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-kudoz-blush flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-kudoz-pink" />
                  </div>
                  <div>
                    <p className="font-semibold text-kudoz-maroon">Address</p>
                    <p className="text-kudoz-body mt-1">Gujarat, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-kudoz-blush flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-kudoz-pink" />
                  </div>
                  <div>
                    <p className="font-semibold text-kudoz-maroon">Phone</p>
                    <a
                      href="tel:+918690014310"
                      className="text-kudoz-pink mt-1 block hover:underline"
                    >
                      +91 8690014310
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-kudoz-blush flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-kudoz-pink" />
                  </div>
                  <div>
                    <p className="font-semibold text-kudoz-maroon">WhatsApp</p>
                    <a
                      href="https://api.whatsapp.com/send/?phone=8690014310"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-kudoz-pink mt-1 block hover:underline"
                      data-ocid="contact.button"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-card border border-kudoz-blush"
            >
              <h2 className="font-heading text-2xl font-bold text-kudoz-maroon mb-6">
                Send a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-ocid="contact.panel"
              >
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="text-kudoz-maroon font-semibold"
                  >
                    Name *
                  </Label>
                  <Input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="mt-1"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-email"
                    className="text-kudoz-maroon font-semibold"
                  >
                    Email *
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="mt-1"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-message"
                    className="text-kudoz-maroon font-semibold"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="How can we help you?"
                    rows={5}
                    className="mt-1"
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-full bg-kudoz-pink hover:bg-[#c23d5d] text-white font-semibold"
                  data-ocid="contact.submit_button"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
