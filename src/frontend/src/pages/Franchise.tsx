import {
  DollarSign,
  Globe,
  Headphones,
  Megaphone,
  Shield,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import FranchiseForm from "../components/FranchiseForm";

const benefits = [
  {
    icon: DollarSign,
    title: "Low Investment",
    desc: "Start your Kudoz franchise with an accessible investment that delivers strong ROI.",
  },
  {
    icon: Shield,
    title: "Proven Brand",
    desc: "14+ years of trust. Customers already love Kudoz — you benefit from that instantly.",
  },
  {
    icon: Headphones,
    title: "Full Training",
    desc: "We train you and your team on operations, product quality, and customer service.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    desc: "National and regional marketing campaigns drive footfall to your outlet.",
  },
  {
    icon: TrendingUp,
    title: "High Growth",
    desc: "The Indian ice cream market is booming. Ride the wave with a trusted partner.",
  },
  {
    icon: Globe,
    title: "Pan-India Network",
    desc: "Join 200+ distributors and franchise partners across 4+ states.",
  },
];

const stats = [
  { key: "years", value: "14+", label: "Years Experience" },
  { key: "distributors", value: "200+", label: "Distribution Partners" },
  { key: "customers", value: "50+ Lac", label: "Happy Customers" },
  { key: "states", value: "4+", label: "States" },
];

export default function Franchise() {
  return (
    <div className="bg-kudoz-cream" data-ocid="franchise.page">
      {/* Hero */}
      <section
        className="py-24 text-center"
        style={{
          background:
            "linear-gradient(135deg, #F26C8A 0%, #F6A07A 50%, #F6E28A 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-4"
        >
          <h1
            className="font-heading text-5xl md:text-6xl font-black text-white"
            style={{ WebkitTextStroke: "2px #D94A6A" }}
          >
            Own a Kudoz Franchise
          </h1>
          <p className="text-white/90 text-xl mt-4">
            Join the fastest growing ice cream &amp; cafe brand in Gujarat
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-kudoz-blush">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`franchise.item.${i + 1}`}
              >
                <p className="font-heading text-4xl font-black text-kudoz-pink">
                  {s.value}
                </p>
                <p className="text-kudoz-body text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold text-kudoz-maroon text-center mb-12"
          >
            Why Choose Kudoz?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-kudoz-blush rounded-2xl p-6 shadow-card"
                data-ocid={`franchise.item.${i + 5}`}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-xs">
                  <b.icon className="w-6 h-6 text-kudoz-pink" />
                </div>
                <h3 className="font-heading text-lg font-bold text-kudoz-maroon">
                  {b.title}
                </h3>
                <p className="text-kudoz-body text-sm mt-2 leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section
        className="py-20 bg-kudoz-blush"
        data-ocid="franchise_form.section"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-card"
          >
            <h2 className="font-heading text-3xl font-bold text-kudoz-maroon text-center mb-2">
              Start Your Inquiry
            </h2>
            <p className="text-kudoz-body text-center mb-8">
              Fill in the form and our franchise team will reach out within 24
              hours.
            </p>
            <FranchiseForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
