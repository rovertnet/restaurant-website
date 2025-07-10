import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "+33612345678"; // Remplace par TON numéro WhatsApp

  return (
    <section className="py-16 bg-[#F8F3F0] min-h-screen relative">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <motion.h1
          className="text-4xl font-bold text-center mb-10 text-[#6F4E37]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contactez-nous 📞
        </motion.h1>

        {/* Grille : Formulaire + Infos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Formulaire */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-[#6F4E37]">
              Envoyez-nous un message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Votre nom"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6F4E37] focus:border-[#6F4E37]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="votre@email.com"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6F4E37] focus:border-[#6F4E37]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Votre message..."
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6F4E37] focus:border-[#6F4E37]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#6F4E37] text-white py-2 px-4 rounded-md hover:bg-[#5a3c2e] transition"
              >
                Envoyer ✉️
              </button>
            </form>
          </motion.div>

          {/* Infos de contact */}
          <motion.div
            className="flex flex-col justify-center bg-[#FFF9F5] rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#6F4E37]">
              Nos coordonnées
            </h2>
            <p className="text-gray-700 mb-2">
              📍 <strong>Adresse:</strong> 123 Rue des Gourmets, Paris
            </p>
            <p className="text-gray-700 mb-2">
              📞 <strong>Téléphone:</strong> +33 1 23 45 67 89
            </p>
            <p className="text-gray-700 mb-2">
              📧 <strong>Email:</strong> contact@rovertfood.com
            </p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Localisation Rovert Food"
                className="rounded-lg shadow"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ✅ Bouton WhatsApp flottant */}
      <motion.a
        href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
      >
        <MessageCircle size={28} />
      </motion.a>
    </section>
  );
}
