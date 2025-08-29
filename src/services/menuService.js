// services/menuService.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const getMenus = async () => {
  try {
    const response = await axios.get(`${API_URL}/menus`);
    // 🔥 On ajuste ici : on reconstruit l'URL de l'image
    return response.data.map((menu) => ({
      ...menu,
      imageUrl: menu.image
        ? `${API_URL}/${menu.image}`
        : "https://via.placeholder.com/300",
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des menus", error);
    return [];
  }
};

export const getMenusByCategorie = async (categorieId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/categories/${categorieId}/menus`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur récupération menus par catégorie :", error);
    return [];
  }
};


