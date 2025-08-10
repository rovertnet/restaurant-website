import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/rovertfood.png"; // Mets ton logo ici

export default function Preloader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un délai de chargement
    const timer = setTimeout(() => setIsLoading(false), 4000); // ⏳ 4s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800"
          >
            {/* Glow derrière le logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 blur-2xl"
            ></motion.div>

            {/* Logo animé */}
            <motion.img
              src={logo}
              alt="Logo"
              className="w-24 h-24 relative z-10"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenu principal avec effet Zoom/Slide/Fade */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{
          opacity: isLoading ? 0 : 1,
          scale: isLoading ? 0.95 : 1,
          y: isLoading ? 50 : 0,
        }}
        transition={{
          delay: isLoading ? 0 : 0.8,
          duration: 1,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </>
  );
}
