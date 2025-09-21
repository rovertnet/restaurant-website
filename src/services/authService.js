// src/services/authService.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/auth"; // adapte à ton backend

// Enregistrer un nouvel utilisateur
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Connexion
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    // Ici, tu peux stocker le token si ton backend renvoie JWT
    if (response.data?.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Déconnexion
export const logout = () => {
  localStorage.removeItem("token");
};

// Vérifier si l'utilisateur est connecté
export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  // Tu peux décoder le token si nécessaire pour récupérer les infos
  return token;
};

// Export pour utilisation plus simple
export const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};
