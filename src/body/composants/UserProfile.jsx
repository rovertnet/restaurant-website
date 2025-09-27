import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

export default function UserProfile() {
  const { user, logout, updateUser } = useAuth(); // updateUser = fonction pour modifier l'utilisateur
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nom: user.nom || "",
    prenom: user.prenom || "",
    email: user.email || "",
    telephone: user.telephone || "",
  });
  const [avatar, setAvatar] = useState(null);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">
          Vous devez être connecté pour voir ce profil.
        </p>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  const handleSave = () => {
    updateUser(formData); // suppose que la fonction updateUser envoie les données au backend
    setEditMode(false);
  };

  // Exemple d'historique de commandes
  const commandes = [
    { id: 1, date: "2025-09-25", total: 45.5 },
    { id: 2, date: "2025-09-20", total: 32.0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10 space-y-6"
    >
      {/* Avatar */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full bg-[#6F4E37] text-white flex items-center justify-center text-3xl font-bold overflow-hidden">
          {avatar ? (
            <img
              src={avatar}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            user.nom[0].toUpperCase()
          )}
        </div>
        {editMode && (
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
        )}
      </div>

      {/* Infos */}
      <div className="space-y-4">
        {["nom", "prenom", "email", "telephone"].map((field) => (
          <div key={field} className="flex flex-col">
            <label className="text-gray-600 capitalize">{field}</label>
            {editMode ? (
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="border rounded-lg p-2 focus:outline-none focus:border-[#6F4E37]"
              />
            ) : (
              <p className="text-gray-800">{formData[field]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex space-x-4">
        {editMode ? (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#6F4E37] text-white rounded-lg hover:bg-[#8B5E3C] transition"
            >
              Sauvegarder
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
            >
              Annuler
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="px-4 py-2 bg-[#6F4E37] text-white rounded-lg hover:bg-[#8B5E3C] transition"
          >
            Modifier le profil
          </button>
        )}

        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Déconnexion
        </button>
      </div>

      {/* Historique des commandes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6"
      >
        <h3 className="text-xl font-semibold mb-2">Historique des commandes</h3>
        {commandes.length > 0 ? (
          <ul className="space-y-2">
            {commandes.map((cmd) => (
              <li
                key={cmd.id}
                className="flex justify-between border-b pb-1 text-gray-800"
              >
                <span>
                  Commande #{cmd.id} - {cmd.date}
                </span>
                <span>{cmd.total.toFixed(2)} €</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Aucune commande effectuée.</p>
        )}
      </motion.div>
    </motion.div>
  );
}
