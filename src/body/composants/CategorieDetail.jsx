import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMenusByCategorie,
  getCategorieById,
} from "../../services/categorieService";
import { motion, AnimatePresence } from "framer-motion";

const CategorieDetail = () => {
  const { id } = useParams();
  const [menus, setMenus] = useState([]);
  const [categorie, setCategorie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cat = await getCategorieById(id);
        const menuList = await getMenusByCategorie(id);
        setCategorie(cat);
        setMenus(menuList);
        setLoading(false);
      } catch (error) {
        console.error("Erreur de chargement :", error);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="text-center py-10">Chargement...</p>;
  }

  if (!categorie) {
    return (
      <p className="text-center py-10 text-red-500">Catégorie introuvable.</p>
    );
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{categorie.nom}</h1>
      {categorie.image && (
        <img
          src={categorie.image}
          alt={categorie.nom}
          className="mx-auto mb-6 rounded-lg w-full max-w-xl object-cover h-60"
        />
      )}

      {menus.length === 0 ? (
        <p className="text-center text-gray-500">
          Aucun menu dans cette catégorie.
        </p>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {menus.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={item.image || "https://via.placeholder.com/300"}
                  alt={item.nom}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.nom}
                  </h3>
                  <p className="text-gray-600">{item.prix} €</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};

export default CategorieDetail;
