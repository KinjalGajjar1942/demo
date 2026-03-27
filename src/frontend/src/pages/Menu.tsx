import { motion } from "motion/react";

const categories = [
  {
    id: "icecream",
    title: "Ice Cream",
    image: "/assets/generated/icecream-product.dim_600x400.jpg",
    desc: "Indulge in a creamy range of irresistible ice cream flavours. From classic vanilla and chocolate to exotic mango, strawberry, and premium dry fruit varieties — every scoop is crafted with the finest ingredients at our 1,00,000 litre/day factory.",
    items: [
      "Classic Vanilla",
      "Belgian Chocolate",
      "Alphonso Mango",
      "Strawberry Bliss",
      "Butterscotch Crunch",
      "Premium Dry Fruit",
      "Kesar Pista",
      "Choco Chip",
    ],
  },
  {
    id: "cafe",
    title: "Cafe",
    image: "/assets/generated/cafe-product.dim_600x400.jpg",
    desc: "A cozy hangout spot where you can refresh, restart, and reconnect over great beverages. Our cafe menu features hot & cold coffees, teas, refreshing juices, and healthy snack options in a vibrant atmosphere.",
    items: [
      "Cold Coffee",
      "Hot Cappuccino",
      "Matcha Latte",
      "Fresh Juice",
      "Iced Tea",
      "Smoothie Bowl",
      "Club Sandwich",
      "Paneer Toast",
    ],
  },
  {
    id: "eatery",
    title: "Eatery",
    image: "/assets/generated/eatery-product.dim_600x400.jpg",
    desc: "Foodies have a destination! Indulge in a delectable choice of Indian snacks and fusion bites. From crispy chaats to hearty wraps, our eatery brings bold flavours to your plate.",
    items: [
      "Pav Bhaji",
      "Chole Bhature",
      "Masala Fries",
      "Corn Chaat",
      "Aloo Tikki",
      "Samosa Chaat",
      "Paneer Wrap",
      "Dal Makhani",
    ],
  },
  {
    id: "shakes",
    title: "Shakes",
    image: "/assets/generated/shakes-product.dim_600x400.jpg",
    desc: "Thick shakes, Faloodas, Lassis, Milkshakes, Chaas, and fruit-based shakes — all in one place. Made fresh with premium dairy and real fruit, our shakes are the ultimate refreshment.",
    items: [
      "Oreo Thick Shake",
      "Rose Falooda",
      "Mango Shake",
      "Sweet Lassi",
      "Masala Chaas",
      "Strawberry Smoothie",
      "Dry Fruit Milkshake",
      "Cold Badam Milk",
    ],
  },
  {
    id: "platter",
    title: "Platters",
    image: "/assets/generated/platter-product.dim_600x400.jpg",
    desc: "Waffles, Tacos, Kulfis and much more — real indulgence awaits. Our platters are generously portioned and perfect for sharing with family and friends.",
    items: [
      "Belgian Waffle",
      "Ice Cream Taco",
      "Kulfi Platter",
      "Fruit Cream Platter",
      "Choco Lava Waffle",
      "Mixed Ice Cream Platter",
      "Sundae Special",
      "Party Platter",
    ],
  },
  {
    id: "cakes",
    title: "Cakes",
    image: "/assets/generated/cakes-product.dim_600x400.jpg",
    desc: "Eggless cakes baked with love. Every moment is a celebration at Kudoz. From birthday specials to wedding cakes, we create confections for every occasion.",
    items: [
      "Chocolate Truffle",
      "Vanilla Sponge",
      "Mango Mousse",
      "Red Velvet",
      "Black Forest",
      "Ice Cream Cake",
      "Custom Photo Cake",
      "Fruit Gateau",
    ],
  },
];

export default function Menu() {
  return (
    <div className="py-20 bg-kudoz-cream" data-ocid="menu.page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl font-bold text-kudoz-maroon">
            Our Menu
          </h1>
          <p className="mt-3 text-kudoz-body text-lg">
            Explore our full range of delicious offerings
          </p>
        </motion.div>

        <div className="space-y-20">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              data-ocid={`menu.item.${i + 1}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-72 object-cover rounded-3xl shadow-card"
                  loading="lazy"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-heading text-4xl font-bold text-kudoz-maroon">
                  {cat.title}
                </h2>
                <p className="text-kudoz-body mt-3 leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-kudoz-blush text-kudoz-maroon text-sm rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
