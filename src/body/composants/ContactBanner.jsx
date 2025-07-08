import React from "react";
import { motion } from "framer-motion";

export default function ContactBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative bg-[#FF6B35] text-white py-12"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold">
            📞 Besoin d’aide ? Contactez-nous dès maintenant
          </h2>
          <p className="mt-2 text-lg">
            Notre équipe est disponible pour répondre à toutes vos questions.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="tel:+243000000000"
            className="bg-white text-[#FF6B35] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Appeler
          </a>
          <a
            href="/contact"
            className="bg-[#6F4E37] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#55392C] transition-colors duration-300"
          >
            Envoyer un message
          </a>
        </div>
      </div>
    </motion.section>
  );
}
