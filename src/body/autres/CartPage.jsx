import React, { useEffect, useState } from "react";
import {
  getPanier,
  removeItemFromPanier,
  clearPanier,
} from "../../services/panierService";

export default function CartPage() {
  const [panier, setPanier] = useState(null);
  const [loading, setLoading] = useState(true);

  // Charger le panier du user connecté
  const fetchPanier = async () => {
    try {
      const data = await getPanier();
      setPanier(data);
    } catch (err) {
      console.error("Erreur lors du chargement du panier :", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPanier();
  }, []);

  // Supprimer un article
  const handleRemoveItem = async (itemId) => {
    try {
      await removeItemFromPanier(itemId);
      fetchPanier(); // recharger le panier
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
    }
  };

  // Vider le panier
  const handleClearPanier = async () => {
    try {
      await clearPanier();
      fetchPanier();
    } catch (err) {
      console.error("Erreur lors du vidage du panier :", err);
    }
  };

  if (loading) return <p>Chargement du panier...</p>;

  if (!panier || panier.items.length === 0) {
    return (
      <p className="text-center text-gray-500">Votre panier est vide 🛒</p>
    );
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">🛒 Mon Panier</h2>

      <div className="space-y-4">
        {panier.items.map((item) => (
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
        <p className="font-bold text-lg">
          Total :{" "}
          {panier.items.reduce(
            (sum, item) => sum + item.quantite * item.menu.prix,
            0
          )}{" "}
          €
        </p>
        <button
          onClick={handleClearPanier}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900"
        >
          Vider le panier
        </button>
      </div>
    </section>
  );
}
