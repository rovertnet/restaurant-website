import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/McDonald%27s_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Spotify_logo_with_text.svg",
];

export default function PartnersSection() {
  return (
    <section className="py-12 bg-[#F8F3F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#6F4E37]">
          Nos Partenaires
        </h2>

        {/* Logos Carousel */}
        <motion.div
          className="flex items-center justify-center overflow-hidden relative"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          <div className="flex space-x-12">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Logo ${i}`}
                className="h-12 grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
            {/* Duplicate logos for seamless looping */}
            {logos.map((logo, i) => (
              <img
                key={i + logos.length}
                src={logo}
                alt={`Logo ${i}`}
                className="h-12 grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
