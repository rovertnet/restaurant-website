import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Pizza",
    color: "bg-[#FF6B35]/80", // Orange
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 2,
    name: "Sushi",
    color: "bg-[#52B788]/80", // Vert
    image:
      "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 3,
    name: "Burgers",
    color: "bg-[#E63946]/80", // Rouge
    image:
      "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 4,
    name: "Salades",
    color: "bg-[#52B788]/80", // Vert
    image:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 5,
    name: "Pâtes",
    color: "bg-[#6F4E37]/80", // Marron
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-[#F8F3F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#6F4E37]">
          Nos catégories populaires
        </h2>

        {/* Grid desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                className={`${cat.color} absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <h3 className="text-2xl text-white font-bold">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carrousel mobile */}
        <div className="flex md:hidden overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth px-2">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer snap-center"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                className={`${cat.color} absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <h3 className="text-xl text-white font-bold">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
