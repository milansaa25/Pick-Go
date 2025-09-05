import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Albert Flores",
    role: "Web Designer",
    feedback:
      "Exceptional service! I couldn't be happier with the results. The team went above and beyond to meet my needs and deliver outstanding outcomes.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Mona Koch I",
    role: "Marketing Coordinator",
    feedback:
      "Highly recommended! This product exceeded my expectations in every way. It has become an essential part of my daily life, and I'm grateful for the positive impact it has had on me.",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Robert Langosh",
    role: "Product Quality Engineer",
    feedback:
      "An absolute pleasure to work with. They made the process seamless. Working with this team was a seamless and enjoyable experience.",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Senior Assurance Assistant",
    feedback:
      "Your design exceeded our expectations—it's clean, modern, and perfectly aligned with our brand vision. We’re impressed by the attention to detail and the creativity you brought to this project.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
       <h2 className="relative inline-block text-3xl font-bold mb-8 p-4 text-start">
  Testimonials
  <span className="absolute left-4 bottom-0 w-1/3 h-[4px] bg-gradient-to-r from-blue-600 to-pink-500"></span>
</h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 text-left flex gap-4 items-start"
            >
              {/* Profile Image */}
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />

              {/* Feedback */}
              <div>
                <p className="text-gray-700 italic mb-2">“{t.feedback}”</p>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
