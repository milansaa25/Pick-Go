import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { span } from "framer-motion/client";
import logo from "./../assets/NewArrivals.png";

const products = [
  { id: 1, title: "Product Title", price: 328 },
  { id: 2, title: "Product Title", price: 328 },
  { id: 3, title: "Product Title", price: 328 },
  { id: 4, title: "Product Title", price: 328 },
];

export default function NewArrivals() {
  return (
    <div className="w-full py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex justify-between mb-7">
          <h2 className="relative  md:text-3xl font-bold text-start mb-8 p-4 inline-block">
            New Arrivals
            <span className="absolute left-4 bottom-0 w-1/3 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>

          <button className="text-blue-600 hover:underline font-medium">
            View All
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
            >
              {/* Product Image Placeholder */}
              <div className="relative bg-gray-200 h-48 flex items-center justify-center">
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </span>
                <img src="{NewArrivals}" alt="" />
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-blue-600 font-bold text-xl mt-1">
                  ${product.price}
                </p>
                <button className="mt-4 flex items-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition">
                  <FaShoppingCart /> Add To Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
