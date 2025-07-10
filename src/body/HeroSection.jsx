import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center banner-image"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg')",
        }}
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Welcome to <span className="text-yellow-400">Rovert Food</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          Discover delicious meals & premium service
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            href="/menu"
            className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition"
          >
            See Our Menu 🍽️
          </a>
        </motion.div>
      </div>
    </section>
  );
}
