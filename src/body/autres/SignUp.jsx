import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";

export default function SignUp() {
  const { register: registerUser } = useContext(AuthContext);
  const { register: formRegister, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      // Mapper les champs pour correspondre au backend
      await registerUser({
        nom: data.name,
        email: data.email,
        motDePasse: data.password,
      });
      toast.success("Compte créé avec succès !");
      window.location.href = "/login";
      // Redirection après inscription
    } catch (err) {
      toast.error(err.message || "Erreur lors de l'inscription");
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
          Créer un compte 👤
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Nom complet"
            {...formRegister("name")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6F4E37]"
          />
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
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            {...formRegister("confirmPassword")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6F4E37]"
          />
          <button
            type="submit"
            className="cursor-pointer  w-full bg-[#6F4E37] text-white font-semibold py-3 rounded-lg hover:bg-[#8B5E3C] transition"
          >
            ✅ S'inscrire
          </button>
        </form>
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
