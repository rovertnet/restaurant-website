import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CreditCard, DollarSign } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { createCommande } from "../../services/commandeService";

export default function CheckoutPage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" }); // important : mode onChange pour activer en direct
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const paiement = watch("paiement", "Carte");

  // Charger le panier depuis localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(storedCart);
    const totalPrice = storedCart.reduce(
      (sum, item) => sum + item.prix * item.quantite,
      0
    );
    setTotal(totalPrice);
    setValue("paiement", "Carte");
  }, [setValue]);

  const onSubmit = async (data) => {
    if (!items.length) return toast.error("Votre panier est vide !");
    setLoading(true);

    try {
      const commandeData = {
        ...data,
        userId: 1, // à remplacer par l'utilisateur connecté
        items: items.map((item) => ({
          menuId: item.menuId, // ✅ correction ici
          quantite: item.quantite,
          prix: item.prix,
        })),
        total,
      };

      // 🔍 debug : voir ce qui part vers ton backend
      console.log("📦 Données envoyées à l'API :", commandeData);

      await createCommande(commandeData);
      toast.success("Commande validée avec succès !");
      localStorage.removeItem("cart");
      setItems([]);
      setTotal(0);
    } catch (error) {
      console.error("❌ Erreur API :", error);
      toast.error("Erreur lors de la commande. Merci de réessayer !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8F3F0] min-h-screen py-32">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#6F4E37] mb-8">
          🛵 Passer la commande
        </h1>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
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
              {...register("nom", { required: true })}
              className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-[#6F4E37]"
            />
            {errors.nom && <p className="text-red-500">Nom obligatoire</p>}

            <input
              type="text"
              placeholder="Adresse (rue, numéro...)"
              {...register("adresse", { required: true })}
              className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-[#6F4E37]"
            />
            {errors.adresse && (
              <p className="text-red-500">Adresse obligatoire</p>
            )}

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ville"
                {...register("ville", { required: true })}
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:border-[#6F4E37]"
              />
              <input
                type="text"
                placeholder="Code postal"
                {...register("codePostal", { required: true })}
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:border-[#6F4E37]"
              />
            </div>
            {(errors.ville || errors.codePostal) && (
              <p className="text-red-500">Ville et code postal obligatoires</p>
            )}

            <input
              type="tel"
              placeholder="Téléphone"
              {...register("telephone", { required: true })}
              className="w-full p-3 border rounded-lg mt-3 focus:outline-none focus:border-[#6F4E37]"
            />
            {errors.telephone && (
              <p className="text-red-500">Téléphone obligatoire</p>
            )}
          </div>

          {/* Paiement */}
          <div>
            <h2 className="text-xl font-bold text-[#6F4E37] mb-2">
              💳 Mode de paiement
            </h2>
            <div className="flex gap-4">
              {["Carte", "PayPal", "Espèces"].map((method) => (
                <motion.button
                  key={method}
                  type="button"
                  onClick={() => setValue("paiement", method)}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #6F4E37" }}
                  className={`flex-1 p-3 rounded-lg border text-center font-medium transition flex flex-col items-center ${
                    paiement === method
                      ? "bg-[#6F4E37] text-white"
                      : "bg-white text-[#6F4E37] border-[#6F4E37]"
                  }`}
                >
                  {method === "Carte" && (
                    <CreditCard size={24} className="mb-1" />
                  )}
                  {method === "Espèces" && (
                    <DollarSign size={24} className="mb-1" />
                  )}
                  {method === "PayPal" && (
                    <img
                      src="https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg"
                      alt="PayPal"
                      className="w-16 h-6 object-contain mb-1"
                    />
                  )}
                  {method}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Résumé */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#6F4E37] mb-3">
              🛒 Résumé de votre commande
            </h3>

            {items.length ? (
              items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-200 py-2"
                >
                  <div>
                    <p className="font-medium text-[#6F4E37]">
                      {item.nom || `Menu #${item.menuId}`}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.quantite} x {item.prix.toFixed(2)}€
                    </p>
                  </div>
                  <span className="font-semibold">
                    {(item.prix * item.quantite).toFixed(2)}€
                  </span>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Votre panier est vide</p>
            )}

            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total</span>
              <span>{total.toFixed(2)}€</span>
            </div>
          </div>

          {/* Valider */}
          <motion.button
            type="submit"
            disabled={loading || !items.length || !isValid}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #6F4E37" }}
            className="w-full bg-[#6F4E37] text-white py-3 rounded-lg text-lg hover:bg-[#8B5E3C] transition disabled:opacity-50"
          >
            {loading ? "⏳ Traitement..." : "✅ Valider ma commande"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
