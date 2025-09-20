import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// === AuthService ===
export const authService = {
  // Login
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/users/login`, credentials);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // stocke le JWT
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Erreur lors de la connexion" };
    }
  },

  // Register
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Erreur lors de l'inscription" };
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem("token");
  },

  // Récupérer le token
  getToken: () => {
    return localStorage.getItem("token");
  },

  // Vérifier si utilisateur connecté
  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },
};
