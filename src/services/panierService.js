import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/panier";

// Ajouter un article au panier
export const addItemToPanier = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/item`, data);
    return res.data;
  } catch (err) {
    console.error("Erreur lors de l'ajout au panier :", err);
    throw err;
  }
};

// Récupérer le panier de l'utilisateur connecté
export const getPanier = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Supprimer un article
export const removeItemFromPanier = async (id) => {
  const res = await axios.delete(`${API_URL}/item/${id}`);
  return res.data;
};

// Vider le panier
export const clearPanier = async () => {
  const res = await axios.delete(`${API_URL}/clear`);
  return res.data;
};
