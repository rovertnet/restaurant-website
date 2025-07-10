import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Paul Chef",
    role: "Chef Pâtissier",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Paul est passionné de desserts depuis 15 ans et apporte une touche sucrée unique à notre carte.",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Emma Cuisine",
    role: "Chef Sushi",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Emma sublime les saveurs japonaises et crée des sushis d’une fraîcheur incomparable.",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Lucas Grill",
    role: "Chef Grillades",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Lucas maîtrise l’art du feu et vous propose les meilleures grillades de la ville.",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Sophie Saveur",
    role: "Chef Cuisine Française",
    photo: "https://randomuser.me/api/portraits/women/72.jpg",
    bio: "Sophie revisite les classiques français avec passion et créativité.",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Marc Veggie",
    role: "Chef Vegan",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
    bio: "Marc est le spécialiste des plats végétariens et vegan gourmands.",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Ana Pasta",
    role: "Chef Pasta",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    bio: "Ana est notre experte en pâtes italiennes traditionnelles faites maison.",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];

export default function TeamPage() {
  return (
    <section className="pt-32 pb-16 bg-[#F8F3F0] min-h-screen">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <h1 className="text-4xl font-bold text-center mb-12 text-[#6F4E37]">
          Notre Équipe 👨‍🍳
        </h1>

        {/* Grille des membres */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                {/* Image + Zoom */}
                <motion.img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-60 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Overlay + Texte animé */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <span className="text-white text-lg font-semibold">
                    Voir le profil
                  </span>
                </motion.div>
              </div>
              {/* Infos */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-[#6F4E37]">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
                {/* Réseaux sociaux */}
                <div className="flex justify-center space-x-3 mt-4">
                  <a
                    href={member.socials.facebook}
                    className="text-[#6F4E37] hover:text-yellow-400 transition"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={member.socials.instagram}
                    className="text-[#6F4E37] hover:text-yellow-400 transition"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="text-[#6F4E37] hover:text-yellow-400 transition"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
