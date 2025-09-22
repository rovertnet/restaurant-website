import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, User, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Detect scroll only on home
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true); // Other pages = always opaque
    }
  }, [location.pathname]);

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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            <img
              src="../../public/rovertfood.png"
              alt="rovert food"
              className="w-14 h-14"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/menupage" className="text-gray-300 hover:text-white">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              A propos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </li>
          {/* Icons */}
          <li className="flex space-x-4 ml-4">
            <Link to="/wishlist" className="text-gray-300 hover:text-white">
              <Heart />
            </Link>
            <Link to="/cart" className="text-gray-300 hover:text-white">
              <ShoppingCart />
            </Link>
            <Link to="/login" className="text-gray-300 hover:text-white">
              <User />
            </Link>
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
              <Link
                to="/"
                className="text-3xl text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                Accueil
              </Link>
              <Link
                to="/menupage"
                className="text-3xl text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="text-3xl text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                A propos
              </Link>
              <Link
                to="/contact"
                className="text-3xl text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>

            {/* Bottom Icons */}
            <div className="flex space-x-10">
              <Link
                to="/wishlist"
                className="text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                <Heart size={32} />
              </Link>
              <Link
                to="/cart"
                className="text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                <ShoppingCart size={32} />
              </Link>
              <Link
                to="/login"
                className="text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                <User size={32} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
