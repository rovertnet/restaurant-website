import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, User, Heart } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const mobileMenuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 fixed w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/" className="hover:text-gray-300">
            <img src="../../public/rovertfood.png" alt="rovert food" className="w-14 h-14" />
          </a>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a href="/" className="text-gray-300 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/menu" className="text-gray-300 hover:text-white">
              Menu
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 hover:text-white">
              A propos
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </li>
          {/* Icons */}
          <li className="flex space-x-4 ml-4">
            <a href="/wishlist" className="text-gray-300 hover:text-white">
              <Heart />
            </a>
            <a href="/cart" className="text-gray-300 hover:text-white">
              <ShoppingCart />
            </a>
            <a href="/account" className="text-gray-300 hover:text-white">
              <User />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col justify-between items-center py-16 z-50"
          >
            {/* Menu Links */}
            <div className="flex flex-col space-y-6 items-center">
              <a
                href="/"
                className="text-3xl text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="/menu"
                className="text-3xl text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                Menu
              </a>
              <a
                href="/about"
                className="text-3xl text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                A propos
              </a>
              <a
                href="/contact"
                className="text-3xl text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                Contact
              </a>
            </div>

            {/* Bottom Icons */}
            <div className="flex space-x-10">
              <a
                href="/wishlist"
                className="text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                <Heart size={32} />
              </a>
              <a
                href="/cart"
                className="text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                <ShoppingCart size={32} />
              </a>
              <a
                href="/account"
                className="text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                <User size={32} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
