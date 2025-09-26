import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Créer une commande
export const createCommande = async (commandeData) => {
  const response = await axios.post(`${API_URL}/commandes`, commandeData);
  return response.data;
};

// Récupérer toutes les commandes
export const getCommandes = async () => {
  const response = await axios.get(`${API_URL}/commandes`);
  return response.data;
};

// Récupérer une commande par ID
export const getCommandeById = async (id) => {
  const response = await axios.get(`${API_URL}/commandes/${id}`);
  return response.data;
};
