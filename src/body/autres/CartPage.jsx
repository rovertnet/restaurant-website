import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const initialCart = [
  {
    id: 1,
    name: "Pizza Margherita",
    description: "Tomate, mozzarella, basilic frais 🍕",
    price: 8.99,
    quantity: 2,
    image:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 2,
    name: "Cheesecake",
    description: "Cheesecake aux fruits rouges 🍓",
    price: 5.5,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#F8F3F0] min-h-screen py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#6F4E37] mb-8">
          🛒 Votre Panier
        </h1>

        {cartItems.length > 0 ? (
          <>
            {/* Cart Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 object-cover"
                  />
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#6F4E37]">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {item.description}
                      </p>
                      <p className="mt-2 text-[#6F4E37] font-semibold">
                        {(item.price * item.quantity).toFixed(2)}€
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition"
                        aria-label="Supprimer"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Total + Checkout */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-[#6F4E37]">Total</span>
                <span className="text-xl font-bold text-[#6F4E37]">
                  {total.toFixed(2)}$
                </span>
              </div>
              <Link
                to="/checkout"
                className="w-full bg-[#6F4E37] text-white flex justify-center items-center  py-2 rounded-lg text-center hover:bg-[#8B5E3C] transition"
              >
                Passer à la caisse
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            Votre panier est vide 🛒
          </p>
        )}
      </div>
    </div>
  );
}
