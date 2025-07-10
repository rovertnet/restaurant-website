import React from "react";
import { motion } from "framer-motion";

export default function Login() {
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
          Se connecter 🔐
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Accédez à votre compte pour continuer
        </p>

        {/* Formulaire */}
        <form className="space-y-4">
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

          <button
            type="submit"
            className="w-full bg-[#6F4E37] text-white font-semibold py-3 rounded-lg hover:bg-[#8B5E3C] transition"
          >
            🔑 Se connecter
          </button>
        </form>

        {/* Lien vers inscription */}
        <p className="text-center text-gray-600 mt-4">
          Vous n'avez pas encore de compte ?{" "}
          <a
            href="/signup"
            className="text-[#6F4E37] font-medium hover:underline"
          >
            Créez-en un
          </a>
        </p>
      </motion.div>
    </div>
  );
}
