import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Client fidèle",
    review:
      "Les pizzas sont incroyables 🍕 et le service est rapide. Je recommande vivement Rovert Food !",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Claire Martin",
    role: "Amatrice de sushi",
    review:
      "Le meilleur sushi de la ville 🥢! Frais, délicieux et toujours bien présenté.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Lucas Petit",
    role: "Gourmand",
    review:
      "Le burger double est une tuerie 🍔🔥. Et en plus, livraison rapide.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#F8F3F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#6F4E37]">
          Ce que disent nos clients
        </h2>

        {/* Slider */}
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scroll-smooth px-2">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 snap-center"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#6F4E37]">
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">“{t.review}”</p>
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  {[...Array(5 - t.rating)].map((_, i) => (
                    <span key={i} className="text-gray-300">
                      ★
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrows desktop */}
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 px-4 transform -translate-y-1/2">
            <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
              <ChevronLeft size={24} className="text-[#6F4E37]" />
            </button>
            <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
              <ChevronRight size={24} className="text-[#6F4E37]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
