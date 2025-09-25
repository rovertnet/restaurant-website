import React, { useEffect, useState } from "react";
import {
  getPanier,
  removeItemFromPanier,
  clearPanier,
} from "../../services/panierService";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { token } = useAuth();
  const [panierItems, setPanierItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPanier = async () => {
    try {
      const data = await getPanier(token);
      setPanierItems(data);
    } catch (err) {
      console.error("Erreur lors du chargement du panier :", err);
      toast.error("Impossible de charger le panier");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchPanier();
  }, [token]);

  const handleRemoveItem = async (itemId) => {
    try {
      await removeItemFromPanier(itemId, token);
      toast.success("Item supprimé du panier");
      fetchPanier();
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
      toast.error("Impossible de supprimer cet item");
    }
  };

  const handleClearPanier = async () => {
    try {
      await clearPanier(token);
      toast.success("Panier vidé");
      fetchPanier();
    } catch (err) {
      console.error("Erreur lors du vidage du panier :", err);
      toast.error("Impossible de vider le panier");
    }
  };

  if (loading) return <p>Chargement du panier...</p>;
  if (!panierItems || panierItems.length === 0) {
    return (
      <p className="text-center text-gray-500">Votre panier est vide 🛒</p>
    );
  }

  const total = panierItems.reduce(
    (sum, item) => sum + item.quantite * item.menu.prix,
    0
  );

  return (
    <section className="container mx-auto px-4 py-10 my-40 max-w-3xl bg-[#F8F3F0] rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">🛒 Mon Panier</h2>

      <div className="space-y-4">
        {panierItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <div>
              <h3 className="font-semibold">{item.menu.nom}</h3>
              <p className="text-gray-500">
                Quantité : {item.quantite} | Prix : {item.menu.prix} €
              </p>
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="font-bold text-lg">Total : {total} €</p>
        <div className="flex gap-2">
          {/* Bouton vider le panier */}
          <button
            onClick={handleClearPanier}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900"
          >
            Vider le panier
          </button>

          {/* Bouton passer à la commande */}
          <Link
            to="/checkout"
            className={`px-4 py-2 text-white rounded ${
              panierItems.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            Passer à la commande
          </Link>
        </div>
      </div>
    </section>
  );
}
