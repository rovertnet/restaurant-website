import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/rovertfood.png"; // Mets ton logo ici

export default function Preloader({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "RovertFood";

  // Machine à écrire
  useEffect(() => {
    let typingTimer, loaderTimer;

    if (isLoading) {
      let index = 0;
      typingTimer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(typingTimer);
        }
      }, 150);
    }

    // Simule un délai de chargement
    loaderTimer = setTimeout(() => setIsLoading(false), 4000);

    return () => {
      clearInterval(typingTimer);
      clearTimeout(loaderTimer);
    };
  }, [isLoading, fullText]);

  return (
    <>
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
            {/* Animation cercle lumineux */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 blur-2xl"
            ></motion.div>

            {/* Logo */}
            <motion.img
              src={logo}
              alt="Logo"
              className="w-28 h-28 relative z-10"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              exit={{ scale: 12, opacity: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />

            {/* Texte machine à écrire */}
            <motion.p
              className="text-white text-3xl font-bold mt-6 tracking-widest relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {displayedText}
              <span className="border-r-2 border-white animate-pulse ml-1"></span>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenu principal (slide-in après chargement) */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: isLoading ? "100vh" : 0 }}
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
