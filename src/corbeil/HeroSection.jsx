import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1920&q=80",
    title: "Authentic Italian Pasta",
    subtitle: "Freshly made with love and tradition.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1920&q=80",
    title: "Juicy Gourmet Burgers",
    subtitle: "Grilled to perfection, every single time.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80",
    title: "Healthy & Tasty Meals",
    subtitle: "Because good food is also good for you.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ⏱️ Autoplay toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Texte */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          key={`title-${current}`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={`subtitle-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-200 leading-relaxed max-w-2xl mx-auto"
        >
          {slides[current].subtitle}
        </motion.p>
      </div>

      {/* Flèches */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
