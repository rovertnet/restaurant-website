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
      className="bg-[#FF6B35] text-white py-12"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">🎉 Offre spéciale limitée !</h2>
        <p className="mb-6 text-lg">
          🍕 *2 pizzas achetées = 1 offerte* 🥳 Dépêchez-vous, l’offre se
          termine bientôt !
        </p>

        {/* Timer */}
        <div className="flex justify-center space-x-4 mb-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-white text-[#FF6B35] rounded-lg px-4 py-2 flex flex-col items-center shadow-md"
            >
              <span className="text-2xl font-bold">{value}</span>
              <span className="text-xs uppercase">{unit}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <a
          href="/menu"
          className="inline-block bg-white text-[#FF6B35] font-semibold px-6 py-3 rounded-full hover:bg-[#E63946] hover:text-white transition-colors duration-300"
        >
          Commandez maintenant
        </a>
      </div>
    </motion.section>
  );
}
