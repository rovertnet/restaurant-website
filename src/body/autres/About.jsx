import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // approx. 60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <span className="text-4xl font-bold text-[#6F4E37]">{count}</span>;
}

export default function AboutPage() {
  return (
    <div className="bg-[#F8F3F0]">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-80"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-5xl text-white font-bold text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            À propos de nous 🍴
          </motion.h1>
        </div>
      </div>

      {/* Compteurs */}
      <section className="py-12 bg-[#FFF9F5]">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <motion.div
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Counter end={1500} duration={3} />
            <p className="text-[#6F4E37] mt-2 font-semibold">
              Clients satisfaits
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Counter end={25000} duration={4} />
            <p className="text-[#6F4E37] mt-2 font-semibold">Plats servis</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Counter end={15} duration={2} />
            <p className="text-[#6F4E37] mt-2 font-semibold">
              Années d’expérience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-12 container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-[#6F4E37] mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Notre Histoire 📖
        </motion.h2>
        <motion.p
          className="text-gray-700 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Depuis 2010, <strong>Rovert Food</strong> s’est donné pour mission de
          réinventer la cuisine rapide en associant qualité, fraîcheur et
          saveurs uniques. Nous sommes une équipe passionnée qui œuvre chaque
          jour pour vous offrir une expérience culinaire inoubliable.
        </motion.p>
      </section>

      {/* Valeurs */}
      <section className="py-12 bg-[#FFF9F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#6F4E37] mb-8">
            Nos valeurs 🌱
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Qualité Premium",
                desc: "Nous sélectionnons les meilleurs ingrédients pour des plats savoureux.",
              },
              {
                title: "Rapidité & Service",
                desc: "Votre temps est précieux, nous servons rapidement sans compromettre la qualité.",
              },
              {
                title: "Produits Locaux",
                desc: "Nous travaillons avec des producteurs locaux pour soutenir la communauté.",
              },
            ].map((valeur, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-[#6F4E37] mb-2">
                  {valeur.title}
                </h3>
                <p className="text-gray-600">{valeur.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
