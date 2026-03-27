import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import FranchiseForm from "../components/FranchiseForm";

const confettiDots = Array.from({ length: 20 }, (_, i) => ({
  key: `dot-${i}`,
  width: `${8 + (i % 5) * 4}px`,
  height: `${8 + (i % 5) * 4}px`,
  left: `${(i * 17) % 95}%`,
  top: `${(i * 23) % 85}%`,
  background: i % 3 === 0 ? "#fff" : i % 3 === 1 ? "#D94A6A" : "#F4C542",
}));

const offerings = [
  {
    id: "icecream",
    title: "Ice Cream",
    image: "/assets/generated/icecream-product.dim_600x400.jpg",
    desc: "Treat your tastebuds to a creamy range of irresistible flavours in every scoop.",
  },
  {
    id: "cafe",
    title: "Cafe",
    image: "/assets/generated/cafe-product.dim_600x400.jpg",
    desc: "A hangout spot where you can refresh and restart your day with great drinks & vibes.",
  },
  {
    id: "eatery",
    title: "Eatery",
    image: "/assets/generated/eatery-product.dim_600x400.jpg",
    desc: "Foodies now have a destination to indulge in a delectable choice of snacks.",
  },
  {
    id: "shakes",
    title: "Shakes",
    image: "/assets/generated/shakes-product.dim_600x400.jpg",
    desc: "Thick Shake, Falooda, Lassi, Milkshake, Chaas, Fruit-based Shake — all in one place.",
  },
  {
    id: "platter",
    title: "Platters",
    image: "/assets/generated/platter-product.dim_600x400.jpg",
    desc: "Waffles, Tacos, Kulfis and much more — real indulgence awaits on every platter.",
  },
  {
    id: "cakes",
    title: "Cakes",
    image: "/assets/generated/cakes-product.dim_600x400.jpg",
    desc: "Eggless cakes baked with love. Every moment is a celebration at Kudoz.",
  },
];

const stats = [
  { key: "factory", value: "1,55,000", label: "Sq Ft Factory Area" },
  { key: "litre", value: "1,00,000", label: "Litre Ice Cream / Day" },
  { key: "years", value: "14+", label: "Years of Experience" },
  { key: "customers", value: "50+ Lac", label: "Happy Customers" },
  { key: "distributors", value: "200+", label: "Distributors" },
  { key: "states", value: "4+", label: "States" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-[560px] md:min-h-[700px] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #F26C8A 0%, #F6A07A 50%, #F6E28A 100%)",
        }}
        data-ocid="hero.section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1920x700.jpg')",
          }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {confettiDots.map((dot) => (
            <div
              key={dot.key}
              className="absolute rounded-full opacity-30"
              style={{
                width: dot.width,
                height: dot.height,
                left: dot.left,
                top: dot.top,
                background: dot.background,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="hero-headline text-6xl md:text-8xl font-black text-white leading-tight mb-4">
              EAT | TREAT | REPEAT
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-8 drop-shadow">
              Gujarat's favourite ice cream &amp; cafe destination
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-kudoz-pink hover:bg-[#c23d5d] text-white font-bold px-8 py-3 text-base shadow-lg"
                data-ocid="hero.primary_button"
              >
                <Link to="/menu">Explore Our Menu</Link>
              </Button>
              <Button
                asChild
                className="rounded-full bg-kudoz-yellow hover:bg-[#e0b238] text-kudoz-maroon font-bold px-8 py-3 text-base shadow-lg"
                data-ocid="hero.secondary_button"
              >
                <Link to="/franchise">Franchise Inquiry</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 hidden md:flex items-end justify-center gap-6 px-8 pb-0 overflow-hidden">
          {offerings.slice(0, 5).map((item, i) => (
            <motion.img
              key={item.id}
              src={item.image}
              alt={item.title}
              className="w-32 h-24 object-cover rounded-t-2xl shadow-xl"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-20 bg-kudoz-cream" data-ocid="offerings.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-kudoz-maroon">
              Our Delicious Offerings
            </h2>
            <p className="mt-3 text-kudoz-body text-lg">
              Something for every craving, crafted with love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-kudoz-blush rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-shadow"
                data-ocid={`offerings.item.${i + 1}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-heading text-xl font-bold text-kudoz-maroon">
                    {item.title}
                  </h3>
                  <p className="text-kudoz-body text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-1 mt-3 text-kudoz-pink font-semibold text-sm hover:gap-2 transition-all"
                    data-ocid="offerings.link"
                  >
                    View More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="py-16 bg-kudoz-blush" data-ocid="stats.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-kudoz-maroon text-center mb-12"
          >
            Kudoz by Numbers
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
                data-ocid={`stats.item.${i + 1}`}
              >
                <p className="font-heading text-3xl md:text-4xl font-black text-kudoz-pink">
                  {stat.value}
                </p>
                <p className="text-kudoz-body text-sm mt-1 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FRANCHISE SECTION */}
      <section className="py-20 bg-kudoz-cream" data-ocid="franchise.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-kudoz-blush rounded-full px-4 py-1.5 text-kudoz-pink text-sm font-semibold mb-4">
                <TrendingUp className="w-4 h-4" />
                Business Opportunity
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-kudoz-maroon leading-tight">
                Why Become a KUDOZ Franchise Owner?
              </h2>
              <p className="text-kudoz-body text-lg mt-4 leading-relaxed">
                Be part of a winning team. Expand your business horizons with a
                trusted brand loved across Gujarat and beyond.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Low investment, high returns",
                  "Proven & trusted brand",
                  "Complete training & support",
                  "Marketing & operations backup",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-kudoz-body"
                  >
                    <span className="w-2 h-2 rounded-full bg-kudoz-pink flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 rounded-full bg-kudoz-pink hover:bg-[#c23d5d] text-white font-bold px-8"
                data-ocid="franchise.primary_button"
              >
                <Link to="/franchise">Learn More</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-card border border-kudoz-blush"
            >
              <h3 className="font-heading text-2xl font-bold text-kudoz-maroon mb-6">
                Send Franchise Inquiry
              </h3>
              <FranchiseForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
