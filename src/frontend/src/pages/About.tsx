import { Award, Heart, Star, Users } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Award,
    title: "Quality First",
    desc: "Every product undergoes strict quality checks at our state-of-the-art facility.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    desc: "Every recipe is crafted with passion, using only the finest dairy and ingredients.",
  },
  {
    icon: Star,
    title: "Pure Taste",
    desc: "Authentic flavours that bring back childhood memories and create new ones.",
  },
  {
    icon: Users,
    title: "Family Happiness",
    desc: "We believe in bringing joy to families across Gujarat with every scoop.",
  },
];

const milestones = [
  { year: "2010", event: "Founded Khushboo Ice Cream in Gujarat" },
  { year: "2014", event: "Expanded to 4+ states with 100+ distributors" },
  { year: "2018", event: "Launched the Kudoz brand with premium offerings" },
  { year: "2020", event: "Opened flagship Kudoz Cafe & Eatery outlets" },
  { year: "2022", event: "Reached 50+ Lac happy customers milestone" },
  { year: "2024", event: "200+ distributors and growing across India" },
];

export default function About() {
  return (
    <div className="bg-kudoz-cream" data-ocid="about.page">
      {/* Hero */}
      <section
        className="py-24 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #F26C8A 0%, #F6A07A 50%, #F6E28A 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4"
        >
          <h1
            className="font-heading text-5xl md:text-6xl font-black text-white"
            style={{ WebkitTextStroke: "2px #D94A6A" }}
          >
            Our Story
          </h1>
          <p className="text-white/90 text-xl mt-4">
            Gujarat's most loved ice cream & cafe brand
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/generated/icecream-product.dim_600x400.jpg"
                alt="Kudoz Story"
                className="rounded-3xl shadow-card w-full h-80 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl font-bold text-kudoz-maroon">
                From a Dream to Gujarat's Favourite
              </h2>
              <div className="text-kudoz-body mt-4 space-y-4 leading-relaxed">
                <p>
                  Born in the heart of Gujarat, Kudoz India began as Khushboo
                  Ice Cream — a small enterprise driven by a big dream: to bring
                  pure, delicious, and affordable ice cream to every household
                  in Gujarat.
                </p>
                <p>
                  Over 14+ years of relentless passion and commitment to
                  quality, we have grown from a local brand to a state-wide
                  phenomenon. Our manufacturing facility spans 1,55,000 sq ft
                  and produces over 1,00,000 litres of ice cream daily.
                </p>
                <p>
                  With the launch of the Kudoz brand, we expanded our vision to
                  include cafes, eateries, shakes, and cakes — creating a
                  one-stop destination for food lovers of all ages.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-kudoz-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold text-kudoz-maroon text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-card"
                data-ocid={`about.item.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-kudoz-blush flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-kudoz-pink" />
                </div>
                <h3 className="font-heading text-lg font-bold text-kudoz-maroon">
                  {v.title}
                </h3>
                <p className="text-kudoz-body text-sm mt-2">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold text-kudoz-maroon text-center mb-12"
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-kudoz-blush" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                data-ocid={`about.item.${i + 5}`}
              >
                <div
                  className={`w-1/2 ${i % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                >
                  <span className="font-heading text-2xl font-black text-kudoz-pink">
                    {m.year}
                  </span>
                  <p className="text-kudoz-body text-sm mt-1">{m.event}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-kudoz-pink border-4 border-kudoz-cream" />
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
