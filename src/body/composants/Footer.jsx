import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#6F4E37] text-white">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl font-bold mb-3">Rovert Food 🍕</h1>
          <p className="text-sm text-gray-200">
            Votre restaurant préféré pour savourer des plats délicieux et un
            service exceptionnel.
          </p>
        </motion.div>

        {/* Liens rapides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-semibold mb-3">Liens rapides</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Accueil
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-yellow-400 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                À propos
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-200 mb-3">
            Inscrivez-vous pour recevoir nos offres spéciales et actualités 🍔.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Votre email"
              className="px-3 py-2 rounded text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-[#6F4E37] py-2 rounded font-semibold hover:bg-yellow-500 transition"
            >
              S’abonner
            </button>
          </form>
        </motion.div>

        {/* Contact & Réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="flex items-center gap-2 text-sm">
            <Mail size={16} /> contact@rovertfood.com
          </p>
          <p className="flex items-center gap-2 text-sm mt-1">
            <Phone size={16} /> +243 000 000 000
          </p>
          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              className="hover:text-yellow-400 transition"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} RovertNet. Tous droits réservés.
      </div>
    </footer>
  );
}
