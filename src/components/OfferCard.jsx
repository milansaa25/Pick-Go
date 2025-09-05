import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner1 from "./../assets/banner1.jpg";
import banner2 from "./../assets/banner2.jpg";
import banner3 from "./../assets/banner3.jpg";

const banners = [
  { id: 1, img: "{banner1}" },
  { id: 2, img: "{banner2}" },
  { id: 3, img: "{banner3}" },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl">
      <AnimatePresence>
        <motion.img
          key={banners[current].id}
          src={banners[current].img}
          alt={`Banner ${banners[current].id}`}
          className="w-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
}
