import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"; // adapte si besoin

export const getCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}/categories/`);
    return res.data;
  } catch (err) {
    console.error("Erreur lors du chargement des catégories", err);
    return [];
  }
};

export const getCategorieById = async (categorieId) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/categories/${categorieId}`
  );
  if (!response.ok)
    throw new Error("Erreur lors de la récupération de la catégorie");
  return response.json();
};

export const getMenusByCategorie = async (categorieId) => {
  try {
    const res = await axios.get(`${API_URL}/categorie/${categorieId}/menus`);
    return res.data.menus || [];
  } catch (err) {
    console.error("Erreur lors du chargement des menus par catégorie", err);
    return [];
  }
};
