import React from "react";
import { motion } from "framer-motion";

export default function SignUp() {
  return (
    <div className="bg-[#F8F3F0] min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full"
      >
        {/* Titre */}
        <h1 className="text-3xl font-bold text-center text-[#6F4E37] mb-6">
          Créer un compte 👤
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Inscrivez-vous pour passer vos commandes plus rapidement
        </p>

        {/* Formulaire */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nom complet"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6F4E37]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6F4E37]"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6F4E37]"
          />
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6F4E37]"
          />

          <button
            type="submit"
            className="w-full bg-[#6F4E37] text-white font-semibold py-3 rounded-lg hover:bg-[#8B5E3C] transition"
          >
            ✅ S'inscrire
          </button>
        </form>

        {/* Lien vers connexion */}
        <p className="text-center text-gray-600 mt-4">
          Vous avez déjà un compte ?{" "}
          <a
            href="/login"
            className="text-[#6F4E37] font-medium hover:underline"
          >
            Connectez-vous
          </a>
        </p>
      </motion.div>
    </div>
  );
}
