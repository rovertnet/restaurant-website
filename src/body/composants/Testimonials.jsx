import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="py-16 bg-[#F8F3F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#6F4E37]">
          Ce que disent nos clients
        </h2>

        <div className="relative max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              drag={window.innerWidth >= 768 ? "x" : false} // ✅ désactive drag mobile
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > 50 || velocity.x > 500) prevSlide();
                else if (offset.x < -50 || velocity.x < -500) nextSlide();
              }}
              className="bg-white rounded-xl shadow-lg p-6 text-center cursor-grab active:cursor-grabbing"
            >
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-[#6F4E37]">
                {testimonials[current].name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {testimonials[current].role}
              </p>
              <p className="text-gray-700 mb-4">
                “{testimonials[current].review}”
              </p>
              <div className="flex justify-center space-x-1">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
                {[...Array(5 - testimonials[current].rating)].map((_, i) => (
                  <span key={i} className="text-gray-300">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-[#6F4E37]" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>

          {/* Arrows only for desktop */}
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 px-4 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              {/* Hidden on mobile */}
              <ChevronLeft size={24} className="text-[#6F4E37]" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              <ChevronRight size={24} className="text-[#6F4E37]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}