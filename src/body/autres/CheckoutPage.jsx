import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, DollarSign } from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("Carte");

  return (
    <div className="bg-[#F8F3F0] min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#6F4E37] mb-8">
          🛵 Passer la commande
        </h1>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-lg space-y-6"
        >
          {/* Livraison */}
          <div>
            <h2 className="text-xl font-bold text-[#6F4E37] mb-2">
              📦 Adresse de livraison
            </h2>
            <input
              type="text"
              placeholder="Nom et prénom"
              className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-[#6F4E37]"
            />
            <input
              type="text"
              placeholder="Adresse (rue, numéro...)"
              className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-[#6F4E37]"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ville"
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:border-[#6F4E37]"
              />
              <input
                type="text"
                placeholder="Code postal"
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:border-[#6F4E37]"
              />
            </div>
            <input
              type="tel"
              placeholder="Téléphone"
              className="w-full p-3 border rounded-lg mt-3 focus:outline-none focus:border-[#6F4E37]"
            />
          </div>

          {/* Paiement */}
          <div>
            <h2 className="text-xl font-bold text-[#6F4E37] mb-2">
              💳 Mode de paiement
            </h2>
            <div className="flex gap-4">
              {/* Carte */}
              <motion.button
                type="button"
                onClick={() => setPaymentMethod("Carte")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #6F4E37" }}
                className={`flex-1 p-3 rounded-lg border text-center font-medium transition flex flex-col items-center ${
                  paymentMethod === "Carte"
                    ? "bg-[#6F4E37] text-white"
                    : "bg-white text-[#6F4E37] border-[#6F4E37]"
                }`}
              >
                <CreditCard size={24} className="mb-1" />
                Carte
              </motion.button>

              {/* PayPal */}
              <motion.button
                type="button"
                onClick={() => setPaymentMethod("PayPal")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #6F4E37" }}
                className={`flex-1 p-3 rounded-lg border text-center font-medium transition flex flex-col items-center ${
                  paymentMethod === "PayPal"
                    ? "bg-[#6F4E37] text-white"
                    : "bg-white text-[#6F4E37] border-[#6F4E37]"
                }`}
              >
                <img
                  src="https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg"
                  alt="PayPal"
                  className="w-16 h-6 object-contain mb-1"
                />
                PayPal
              </motion.button>

              {/* Espèces */}
              <motion.button
                type="button"
                onClick={() => setPaymentMethod("Espèces")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #6F4E37" }}
                className={`flex-1 p-3 rounded-lg border text-center font-medium transition flex flex-col items-center ${
                  paymentMethod === "Espèces"
                    ? "bg-[#6F4E37] text-white"
                    : "bg-white text-[#6F4E37] border-[#6F4E37]"
                }`}
              >
                <DollarSign size={24} className="mb-1" />
                Espèces
              </motion.button>
            </div>
          </div>

          {/* Résumé */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#6F4E37] mb-2">
              🛒 Résumé de votre commande
            </h3>
            <div className="flex justify-between mb-1">
              <span>Pizza Margherita x2</span>
              <span>17,98€</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Cheesecake x1</span>
              <span>5,50€</span>
            </div>
            <div className="border-t border-gray-300 my-2"></div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>23,48€</span>
            </div>
          </div>

          {/* Valider */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #6F4E37" }}
            className="w-full bg-[#6F4E37] text-white py-3 rounded-lg text-lg hover:bg-[#8B5E3C] transition"
          >
            ✅ Valider ma commande
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
