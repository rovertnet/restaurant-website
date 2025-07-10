import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 12.99,
    image:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  },
  {
    id: 3,
    name: "Spicy Ramen",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  },
  {
    id: 4,
    name: "Fresh Salad",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  },
  {
    id: 3,
    name: "Spicy Ramen",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  },
  {
    id: 1,
    name: "Classic Burger",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600",
  },
];

export default function MenuCards() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍽️ Notre Menu
      </h2>
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
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                <button className="mt-4 w-full bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-full hover:bg-yellow-500 transition">
                  Ajouter au panier 🛒
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
