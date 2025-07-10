import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";
import MenuCards from "../composants/MenuCards";

const initialCart = [
  {
    id: 1,
    name: "Pizza Margherita",
    quantity: 2,
    price: 8.99,
  },
  {
    id: 2,
    name: "Cheesecake",
    quantity: 1,
    price: 5.5,
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCart);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-[#6F4E37] text-white p-4 rounded-full shadow-lg hover:bg-[#8B5E3C] transition duration-300"
        >
          <ShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#6F4E37] text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      {/* Sliding Cart Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-[#6F4E37]">
                Mon Panier 🛒
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-[#6F4E37]"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h3 className="text-[#6F4E37] font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Quantité: {item.quantity}
                    </p>
                  </div>
                  <span className="text-[#6F4E37] font-medium">
                    {(item.price * item.quantity).toFixed(2)}€
                  </span>
                </div>
              ))}
              {cartItems.length === 0 && (
                <p className="text-center text-gray-500">Panier vide 🛒</p>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-[#6F4E37]">Total</span>
                <span className="font-bold text-lg text-[#6F4E37]">
                  {total.toFixed(2)}€
                </span>
              </div>
              <button className="w-full bg-[#6F4E37] text-white py-2 rounded-lg hover:bg-[#8B5E3C] transition">
                Passer la commande
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MenuCards />
    </>
  );
}
