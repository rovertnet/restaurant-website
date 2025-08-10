import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import { getMenus } from "../../services/menuService";

export default function MenuCards() {
  const { wishlist, toggleWishlist } = useWishlist();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      const data = await getMenus();
      setMenuItems(data);
      setLoading(false);
    };
    fetchMenus();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Chargement du menu...</p>;
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍽️ Notre Menu
      </h2>
      {menuItems.length === 0 ? (
        <p className="text-center text-gray-500">Aucun plat disponible.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => {
            const isInWishlist = wishlist.some((w) => w.id === item.id);

            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* ❤️ Wishlist Button */}
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

                {/* Image */}
                <img
                  src={item.image || "https://via.placeholder.com/300"}
                  alt={item.nom}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.nom}
                  </h3>
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
        </div>
      )}
    </section>
  );
}
