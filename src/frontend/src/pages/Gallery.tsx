import { motion } from "motion/react";

const images = [
  {
    id: "icecream",
    src: "/assets/generated/icecream-product.dim_600x400.jpg",
    alt: "Ice Cream",
    span: "col-span-2",
  },
  {
    id: "cafe",
    src: "/assets/generated/cafe-product.dim_600x400.jpg",
    alt: "Cafe",
  },
  {
    id: "eatery",
    src: "/assets/generated/eatery-product.dim_600x400.jpg",
    alt: "Eatery",
  },
  {
    id: "shakes",
    src: "/assets/generated/shakes-product.dim_600x400.jpg",
    alt: "Shakes",
  },
  {
    id: "platter",
    src: "/assets/generated/platter-product.dim_600x400.jpg",
    alt: "Platters",
    span: "col-span-2",
  },
  {
    id: "cakes",
    src: "/assets/generated/cakes-product.dim_600x400.jpg",
    alt: "Cakes",
  },
];

export default function Gallery() {
  return (
    <div className="py-20 bg-kudoz-cream" data-ocid="gallery.page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="font-heading text-5xl font-bold text-kudoz-maroon">
            Gallery
          </h1>
          <p className="mt-3 text-kudoz-body text-lg">
            A visual treat — because you eat with your eyes first
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`overflow-hidden rounded-2xl shadow-card ${img.span ?? ""}`}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
