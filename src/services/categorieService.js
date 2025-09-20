import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const getCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}/categories`);
    return res.data;
  } catch (err) {
    console.error("Erreur lors du chargement des catégories", err);
    return [];
  }
};

export const getCategorieById = async (categorieId) => {
  try {
    const res = await axios.get(`${API_URL}/categories/${categorieId}`);
    return res.data;
  } catch (err) {
    console.error("Erreur lors de la récupération de la catégorie", err);
    return null;
  }
};

export const getMenusByCategorie = async (categorieId) => {
  try {
    const res = await axios.get(`${API_URL}/categories/${categorieId}/menus`);
    return res.data || [];
  } catch (err) {
    console.error("Erreur lors du chargement des menus par catégorie", err);
    return [];
  }
};
