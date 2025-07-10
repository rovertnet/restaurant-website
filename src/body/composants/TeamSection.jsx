import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Paul Chef",
    role: "Chef Pâtissier",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emma Cuisine",
    role: "Chef Sushi",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Lucas Grill",
    role: "Chef Grillades",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sophie Saveur",
    role: "Chef Cuisine Française",
    photo: "https://randomuser.me/api/portraits/women/72.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-[#F8F3F0]">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center mb-10 text-[#6F4E37]">
          Notre Équipe 👨‍🍳
        </h2>

        {/* Cartes équipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#6F4E37]">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton voir toute l’équipe */}
        <div className="text-center mt-10">
          <Link
            to="/team"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition"
          >
            Voir toute l’équipe 👥
          </Link>
        </div>
      </div>
    </section>
  );
}
