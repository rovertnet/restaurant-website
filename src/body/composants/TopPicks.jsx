import React from "react";
import { motion } from "framer-motion";

const topPicks = [
  {
    id: 1,
    name: "Pizza Margherita",
    price: "12.99€",
    image:
      "https://images.pexels.com/photos/4109084/pexels-photo-4109084.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    badge: "🔥 Best Seller",
  },
  {
    id: 2,
    name: "Sushi Mix Deluxe",
    price: "19.50€",
    image:
      "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    badge: "⭐ Top Pick",
  },
  {
    id: 3,
    name: "Double Cheeseburger",
    price: "10.00€",
    image:
      "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    badge: "🔥 Best Seller",
  },
  {
    id: 4,
    name: "Salade César",
    price: "8.50€",
    image:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    badge: "🌱 Healthy",
  },
];

export default function TopPicks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#6F4E37]">
          Meilleures ventes
        </h2>

        {/* Grid desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {topPicks.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              {/* Badge */}
              <span className="absolute top-2 left-2 bg-[#FF6B35] text-white text-xs px-3 py-1 rounded-full z-10">
                {item.badge}
              </span>

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#6F4E37] mb-2">
                  {item.name}
                </h3>
                <p className="text-[#E63946] font-semibold mb-3">
                  {item.price}
                </p>
                <button className="w-full bg-[#FF6B35] text-white py-2 rounded-full font-medium hover:bg-[#E63946] transition-colors duration-300">
                  Ajouter au panier
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carrousel mobile */}
        <div className="flex md:hidden overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth px-2">
          {topPicks.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer snap-center"
            >
              {/* Badge */}
              <span className="absolute top-2 left-2 bg-[#FF6B35] text-white text-xs px-3 py-1 rounded-full z-10">
                {item.badge}
              </span>

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-3">
                <h3 className="text-base font-bold text-[#6F4E37] mb-1">
                  {item.name}
                </h3>
                <p className="text-[#E63946] font-semibold mb-2">
                  {item.price}
                </p>
                <button className="w-full bg-[#FF6B35] text-white py-1 rounded-full font-medium hover:bg-[#E63946] transition-colors duration-300">
                  Ajouter au panier
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
