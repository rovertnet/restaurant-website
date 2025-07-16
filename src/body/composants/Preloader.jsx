import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; // Mets ton logo ici

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un délai de chargement (2.5s)
    const timer = setTimeout(() => setIsLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          {/* Logo animé */}
          <motion.img
            src={logo}
            alt="Logo"
            className="w-24 h-24 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1.2, rotate: 360 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          {/* Texte animé */}
          <motion.p
            className="text-gray-700 text-xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Chargement...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
