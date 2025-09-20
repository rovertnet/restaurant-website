import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"; // adapte au port de ton backend NestJS

// Créer une commande
export const createCommande = async (commandeData) => {
  const response = await axios.post(API_URL, commandeData);
  return response.data;
};

// Récupérer toutes les commandes
export const getCommandes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Récupérer une commande
export const getCommandeById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
