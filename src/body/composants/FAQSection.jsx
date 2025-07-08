import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Quels sont vos horaires d’ouverture ?",
    answer:
      "Nous sommes ouverts tous les jours de 10h à 23h, y compris les week-ends et jours fériés.",
  },
  {
    question: "Livrez-vous à domicile ?",
    answer:
      "Oui, nous proposons la livraison à domicile dans un rayon de 10 km autour de notre restaurant.",
  },
  {
    question: "Puis-je commander en ligne ?",
    answer:
      "Bien sûr ! Vous pouvez commander directement sur notre site ou via notre application mobile.",
  },
  {
    question: "Proposez-vous des plats végétariens ?",
    answer:
      "Oui, nous avons une sélection variée de plats végétariens et véganes.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Ferme si déjà ouvert
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#6F4E37]">
          Questions Fréquentes
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-[#6F4E37]">
                {faq.question}
              </span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#FF6B35] font-bold"
              >
                {activeIndex === index ? "−" : "+"}
              </motion.span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
