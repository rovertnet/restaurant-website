import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/panier";

const getAuthAxios = (token) => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addItemToPanier = async (data, token) => {
  const api = getAuthAxios(token);
  const res = await api.post(`/item`, data);
  return res.data;
};

export const getPanier = async (token) => {
  const api = axios.create({
    baseURL: API_URL,
    headers: { Authorization: `Bearer ${token}` },
  });
  const res = await api.get(`/`);
  return res.data;
};

export const removeItemFromPanier = async (itemId, token) => {
  const api = getAuthAxios(token);
  const res = await api.delete(`/item/${itemId}`);
  return res.data;
};

export const clearPanier = async (token) => {
  const api = getAuthAxios(token);
  const res = await api.delete(`/clear`);
  return res.data;
};
