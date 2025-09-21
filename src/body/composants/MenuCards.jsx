import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import { getMenus } from "../../services/menuService";
import {
  getCategories,
  getMenusByCategorie,
} from "../../services/categorieService";

export default function MenuCards() {
  const { wishlist, toggleWishlist } = useWishlist();
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cats = await getCategories();
      setCategories(cats);

      const menus = await getMenus();
      setMenuItems(menus.filter((menu) => menu.disponible));
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleCategoryClick = async (id) => {
    setActiveCategory(id);
    if (id === null) {
      const menus = await getMenus();
      setMenuItems(menus.filter((menu) => menu.disponible));
    } else {
      const menus = await getMenusByCategorie(id);
      setMenuItems(menus.filter((menu) => menu.disponible));
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Chargement...</p>;
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍽️ Notre Menu
      </h2>

      {/* Boutons catégories */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <button
          onClick={() => handleCategoryClick(null)}
          className={`px-4 py-2 rounded-full border transition-colors ${
            activeCategory === null
              ? "bg-yellow-400 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Tous
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`px-4 py-2 rounded-full border transition-colors ${
              activeCategory === cat.id
                ? "bg-yellow-400 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat.nom}
          </button>
        ))}
      </div>

      {menuItems.length === 0 ? (
        <p className="text-center text-gray-500">Aucun plat disponible.</p>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {menuItems.map((item) => {
              const isInWishlist = wishlist.some((w) => w.id === item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Bouton wishlist */}
                  <div className="absolute top-3 right-3 z-10">
                    <motion.button
                      onClick={() => toggleWishlist(item)}
                      whileTap={{ scale: 1.2 }}
                      animate={isInWishlist ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="bg-white rounded-full p-2 shadow hover:scale-110 transition-transform"
                    >
                      <Heart
                        size={20}
                        className={`${
                          isInWishlist
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        } transition-colors duration-300`}
                      />
                    </motion.button>
                  </div>

                  {/* Image avec effet de zoom au survol */}
                  <motion.img
                    src={
                      item.image
                        ? `http://localhost:3000/uploads/menus/${item.image}`
                        : "https://picsum.photos/300/200" // <-- ici
                    }
                    alt={item.nom}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Contenu */}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.nom}
                    </h3>

                    {item.categorie?.nom && (
                      <p className="text-gray-500 text-sm mt-1">
                        Catégorie : {item.categorie.nom}
                      </p>
                    )}

                    <p className="text-gray-600 mt-1">
                      {item.prix ? `${item.prix} €` : "Prix non disponible"}
                    </p>

                    <button className="mt-4 w-full bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-full hover:bg-yellow-500 transition">
                      Ajouter au panier 🛒
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
