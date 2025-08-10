import { useEffect, useState } from "react";
import { getCategories } from "../../services/categorieService";

const categoryImages = {
  Pizza: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
  Sushi: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
  Burgers: "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg",
  Salades: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
  Pâtes: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  Desserts: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg",
};

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      const withImages = data.map((cat) => {
        const cleanedName = cat.name?.trim().toLowerCase();

        const imageKey = Object.keys(categoryImages).find(
          (key) => key.toLowerCase() === cleanedName
        );

        if (!imageKey) {
          console.warn(`Aucune image trouvée pour la catégorie: "${cat.name}"`);
        }

        return {
          ...cat,
          image: categoryImages[imageKey] || "https://via.placeholder.com/300",
        };
      });

      setCategories(withImages);
    });
  }, []);
  

  return (
    <section className="py-16 bg-[#F8F3F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#6F4E37]">
          Nos catégories populaires
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-2xl text-white font-bold mb-4">
                    {cat.name}
                  </h3>
                  <a
                    href={`/menu/${(cat.name || "categorie").toLowerCase()}`}
                    className="bg-white text-[#FF6B35] px-4 py-2 rounded-full font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors duration-300"
                  >
                    Voir les plats
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
