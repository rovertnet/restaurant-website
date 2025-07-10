import React from "react";
import { useWishlist } from "../../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="bg-[#F8F3F0] min-h-screen py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#6F4E37] mb-8">
          ❤️ Ma Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <p className="text-center text-gray-600">Votre wishlist est vide.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-4 relative"
              >
                <button
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
                >
                  <span className="text-red-500 text-xl">❤️</span>
                </button>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
