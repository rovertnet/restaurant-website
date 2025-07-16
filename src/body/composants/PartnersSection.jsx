import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    name: "Amazon",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    name: "Apple",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    name: "Netflix",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    name: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    name: "Spotify",
  },
];

export default function PartnersSection() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  // Fonction pour lancer l’animation
  const startAnimation = async () => {
    while (true) {
      await controls.start({
        x: ["0%", "-50%"], // Va de 0% à -50% (défile vers la gauche)
        transition: {
          duration: 10,
          ease: "linear",
        },
      });
      await controls.start({
        x: ["-50%", "0%"], // Revient de -50% à 0% (défile vers la droite)
        transition: {
          duration: 10,
          ease: "linear",
        },
      });
    }
  };

  React.useEffect(() => {
    if (!isPaused) startAnimation();
    else controls.stop();
  }, [isPaused]);

  return (
    <section className="py-12 bg-[#F8F3F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#6F4E37]">
          Nos Partenaires
        </h2>

        {/* Logos Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)} // 🛑 Pause au survol
          onMouseLeave={() => setIsPaused(false)} // ▶️ Reprend après
        >
          <motion.div className="flex space-x-12" animate={controls}>
            {[...Array(2)].flatMap(() =>
              // 🔁 Duplique les logos
              logos.map((logo, i) => (
                <img
                  key={`${logo.name}-${i}`}
                  src={logo.src}
                  alt={`Logo de ${logo.name}`}
                  className="h-12 sm:h-10 grayscale hover:grayscale-0 transition duration-300"
                />
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
