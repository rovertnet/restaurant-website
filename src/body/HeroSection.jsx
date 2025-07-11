import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://video-previews.elements.envatousercontent.com/cda33c1e-fc18-4675-b2ca-a2a0dd2a053e/watermarked_preview/watermarked_preview.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

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
          <Link
            to="/menupage"
            className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 transition"
          >
            Voir notre menu 🍽️
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
