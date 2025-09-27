import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CreditCard, DollarSign } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { createCommande } from "../../services/commandeService";
import { getPanier } from "../../services/panierService";
import { useAuth } from "../../context/AuthContext";

export default function CheckoutPage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const [panier, setPanier] = useState(null);

  const paiement = watch("paiement", "Carte");

  useEffect(() => {
    if (token) {
      getPanier(token)
        .then((data) => setPanier(data))
        .catch((err) => console.error(err));
    }
  }, [token]);

  const onSubmit = async (data) => {
    if (!panier || panier.length === 0)
      return toast.error("Votre panier est vide !");
    setLoading(true);

    try {
      const commandeData = {
        ...data,
        userId: 1,
        items: panier.map((item) => ({
          menuId: item.menu.id,
          quantite: item.quantite,
          prix: item.menu.prix,
        })),
        total: panier.reduce(
          (sum, item) => sum + item.menu.prix * item.quantite,
          0
        ),
      };

      await createCommande(commandeData);
      toast.success("Commande validée !");
      setPanier([]);
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la commande.");
    } finally {
      setLoading(false);
    }
  };
  
  // ⚡ Loading condition dans le JSX
  if (!panier) {
    return <p className="text-center mt-20">Chargement du résumé...</p>;
  }

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
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">🧾 Résumé de la commande</h2>

            {panier.length > 0 ? (
              <>
                {panier.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2 mb-2"
                  >
                    <span>
                      {item.menu.nom} x {item.quantite}
                    </span>
                    <span>{(item.menu.prix * item.quantite).toFixed(2)} €</span>
                  </div>
                ))}

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>
                    {panier
                      .reduce(
                        (sum, item) => sum + item.menu.prix * item.quantite,
                        0
                      )
                      .toFixed(2)}{" "}
                    €
                  </span>
                </div>
              </>
            ) : (
              <p className="text-gray-500">Votre panier est vide.</p>
            )}
          </div>

          {/* Valider */}
          <motion.button
            type="submit"
            disabled={loading || !isValid || panier.length === 0}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #6F4E37" }}
            className={`cursor-pointer w-full py-3 rounded-lg text-lg transition ${
              loading || !isValid || panier.length === 0
                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                : "bg-[#6F4E37] text-white hover:bg-[#8B5E3C]"
            }`}
          >
            {loading ? "⏳ Traitement..." : "✅ Valider ma commande"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
