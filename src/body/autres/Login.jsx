import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const { register: formRegister, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = await login({
        email: data.email,
        motDePasse: data.password,
      });
      console.log("Utilisateur connecté :", user);
      window.location.href = "/menupage";
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Erreur lors de la connexion");
    }
  };

  return (
    <div className="bg-[#F8F3F0] min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-center text-[#6F4E37] mb-6">
          Se connecter 🔐
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            {...formRegister("email")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6F4E37]"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            {...formRegister("password")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6F4E37]"
          />
          <button
            type="submit"
            className="cursor-pointer w-full bg-[#6F4E37] text-white font-semibold py-3 rounded-lg hover:bg-[#8B5E3C] transition"
          >
            🔑 Se connecter
          </button>
        </form>
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
