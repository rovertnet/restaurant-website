import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMenusByCategorie,
  getCategorieById,
} from "../../services/categorieService";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../../context/CartContext"; // 🔥 import

const CategorieDetail = () => {
  const { id } = useParams();
  const [menus, setMenus] = useState([]);
  const [categorie, setCategorie] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart(); // 🔥 hook du panier

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cat = await getCategorieById(id);
        const menuList = await getMenusByCategorie(id);
        setCategorie(cat);
        setMenus(menuList);
        setLoading(false);
      } catch (error) {
        console.error("Erreur de chargement :", error);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="text-center py-10">Chargement...</p>;
  }

  if (!categorie) {
    return (
      <p className="text-center py-10 text-red-500">Catégorie introuvable.</p>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Bannière */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src={categorie.imageUrl || "https://via.placeholder.com/1200x400"}
          alt={categorie.nom}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {categorie.nom}
          </h1>
        </div>
      </div>

      {/* Liste des plats */}
      <div className="container mx-auto px-4 py-12">
        {menus.length === 0 ? (
          <p className="text-center text-gray-500">
            Aucun menu dans cette catégorie.
          </p>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {menus.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={item.image || "https://via.placeholder.com/300"}
                    alt={item.nom}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {item.nom}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.description || "Un plat délicieux à découvrir."}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-lg font-bold text-[#FF6B35]">
                        {item.prix} €
                      </span>
                      <div className="flex space-x-3">
                        <button
                          onClick={() => addToCart(item)} // 🔥 ajoute au panier
                          className="p-2 bg-[#FF6B35] text-white rounded-full hover:bg-[#e65c2f] transition"
                        >
                          <ShoppingCart size={18} />
                        </button>
                        <button className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition">
                          <Heart size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CategorieDetail;
