import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptop,
  FaTshirt,
  FaBook,
  FaFutbol,
  FaCouch,
  FaShoePrints,
  FaPuzzlePiece,
  FaBriefcase,
  FaGuitar,
} from "react-icons/fa";

const categories = [
  { name: "Electronics", icon: <FaLaptop /> },
  { name: "Clothing", icon: <FaTshirt /> },
  { name: "Books", icon: <FaBook /> },
  { name: "Sports", icon: <FaFutbol /> },
  { name: "Furniture", icon: <FaCouch /> },
  { name: "Footwear", icon: <FaShoePrints /> },
  { name: "Toys & Games", icon: <FaPuzzlePiece /> },
  { name: "Office Supplies", icon: <FaBriefcase /> },
  { name: "Sports", icon: <FaFutbol /> },
  { name: "Musical Instruments", icon: <FaGuitar /> },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
    <div className="w-full py-8 px-5 bg-gray-50">
     <h2 className="relative  md:text-3xl font-bold text-start mb-8 p-4 inline-block">
  Categories
  <span className="absolute left-4 bottom-0 w-1/3 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition"
          >
            <div className="text-4xl text-blue-500 mb-3">{cat.icon}</div>
            <p className="text-base font-medium text-gray-700 text-center">
              {cat.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
}
