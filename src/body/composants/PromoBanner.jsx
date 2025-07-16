import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PromoBanner() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative h-[400px] md:h-[500px] overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/4109084/pexels-photo-4109084.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="Pizza promo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          🎉 Offre spéciale limitée !
        </h2>
        <p className="mb-6 text-lg md:text-xl text-white">
          🍕 *2 pizzas achetées = 1 offerte* 🥳 Dépêchez-vous, l’offre se
          termine bientôt !
        </p>

        {/* Timer */}
        <div className="flex justify-center space-x-3 mb-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-white text-[#FF6B35] rounded-lg px-3 py-2 flex flex-col items-center shadow-md"
            >
              <span className="text-xl md:text-2xl font-bold">{value}</span>
              <span className="text-xs uppercase">{unit}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <a
          href="/menupage"
          className="inline-block bg-[#FF6B35] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#E63946] transition-colors duration-300"
        >
          Commandez maintenant
        </a>
      </div>
    </motion.section>
  );
}
