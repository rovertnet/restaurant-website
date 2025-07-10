import React from "react";
import { motion } from "framer-motion";
import { LogOut, Pencil, ShoppingBag, Heart } from "lucide-react";

export default function MonCompte() {
  const user = {
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "+243 812 345 678",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  };

  const commandes = [
    { id: 1, date: "05/07/2025", total: "45.99€", status: "Livrée" },
    { id: 2, date: "29/06/2025", total: "29.50€", status: "En cours" },
  ];

  return (
    <div className="bg-[#F8F3F0] min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#6F4E37] mb-8">
          👤 Mon Compte
        </h1>

        {/* Profil */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#6F4E37]">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
            </div>
            <button className="bg-yellow-400 text-gray-900 font-medium px-4 py-2 rounded-full hover:bg-yellow-500 transition flex items-center gap-2">
              <Pencil size={18} /> Modifier
            </button>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mes Commandes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-[#6F4E37] mb-4 flex items-center gap-2">
              <ShoppingBag size={20} /> Mes Commandes
            </h3>
            {commandes.map((cmd) => (
              <div
                key={cmd.id}
                className="border-b py-2 flex justify-between text-gray-700"
              >
                <span>
                  📅 {cmd.date} -{" "}
                  <span className="font-medium">{cmd.status}</span>
                </span>
                <span className="font-bold text-[#6F4E37]">{cmd.total}</span>
              </div>
            ))}
          </motion.div>

          {/* Ma Wishlist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-[#6F4E37] mb-4 flex items-center gap-2">
              <Heart size={20} /> Ma Wishlist
            </h3>
            <p className="text-gray-600">
              Vous avez <span className="font-bold">3</span> articles dans votre
              wishlist.{" "}
              <a
                href="/wishlist"
                className="text-[#6F4E37] font-medium hover:underline"
              >
                Voir
              </a>
            </p>
          </motion.div>
        </div>

        {/* Se Déconnecter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition flex items-center gap-2 mx-auto">
            <LogOut size={18} /> Se déconnecter
          </button>
        </motion.div>
      </div>
    </div>
  );
}
