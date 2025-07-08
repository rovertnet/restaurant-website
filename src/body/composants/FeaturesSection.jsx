import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Leaf,
  ShieldCheck,
  Headset,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Truck size={48} className="text-yellow-400 mx-auto mb-4" />,
    title: "Livraison rapide",
    description: "Recevez vos plats en moins de 30 minutes.",
    details:
      "Nous garantissons une livraison express grâce à notre flotte dédiée et nos partenaires stratégiques.",
  },
  {
    id: 2,
    icon: <Leaf size={48} className="text-green-500 mx-auto mb-4" />,
    title: "Produits frais",
    description: "Des ingrédients frais et de qualité chaque jour.",
    details:
      "Nos chefs utilisent uniquement des produits de saison provenant de producteurs locaux.",
  },
  {
    id: 3,
    icon: <ShieldCheck size={48} className="text-blue-500 mx-auto mb-4" />,
    title: "Paiement sécurisé",
    description: "Transactions protégées et garanties.",
    details:
      "Vos paiements sont 100% sécurisés grâce à notre système de cryptage SSL avancé.",
  },
  {
    id: 4,
    icon: <Headset size={48} className="text-purple-500 mx-auto mb-4" />,
    title: "Support 24/7",
    description: "Une assistance toujours disponible pour vous aider.",
    details:
      "Notre équipe de support est à votre écoute jour et nuit pour répondre à vos besoins.",
  },
];

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const carouselRef = useRef(null);

  // Fonction pour scroller horizontalement
  const scroll = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-50 py-12 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Pourquoi choisir Rovert Food ?
        </h2>

        {/* Carrousel centré */}
        <div className="relative">
          {/* Flèche gauche (desktop uniquement) */}
          <button
            onClick={() => scroll(-300)}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carrousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-6 px-2 snap-x snap-mandatory scroll-smooth"
          >
            {features.map(({ id, icon, title, description, details }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: id * 0.2 }}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-white rounded-xl shadow-md p-6 text-center snap-center flex-shrink-0"
              >
                {icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
                <button
                  onClick={() => setSelectedFeature({ title, details })}
                  className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-500 transition"
                >
                  En savoir plus
                </button>
              </motion.div>
            ))}
          </div>

          {/* Flèche droite (desktop uniquement) */}
          <button
            onClick={() => scroll(300)}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {selectedFeature.title}
              </h3>
              <p className="text-gray-700 mb-6">{selectedFeature.details}</p>
              <button
                onClick={() => setSelectedFeature(null)}
                className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
