import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // Charger l'utilisateur depuis le token si présent
  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/auth/me`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setUser(res.data);
        } catch (err) {
          console.error("Token invalide :", err);
          logout();
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, [token]);

  // Sauvegarde du token dans localStorage
  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  // 🔑 Login qui récupère token depuis le backend
  const login = async ({ email, motDePasse }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          motDePasse,
        }
      );

      const jwt = res.data.access_token;
      if (!jwt) throw new Error("Token non reçu");

      setToken(jwt); // déclenche le useEffect pour localStorage

      // Charger les infos utilisateur
      const me = await axios.get(`${import.meta.env.VITE_API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      setUser(me.data);

      return me.data;
    } catch (err) {
      throw err.response?.data || { message: "Erreur de connexion" };
    }
  };  

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const register = async (userData) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        userData
      );
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: "Erreur lors de l'inscription" };
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, register, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
