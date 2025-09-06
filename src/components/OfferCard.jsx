import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  { id: 1, img: "banner1.png" },
  { id: 2, img: "banner2.jpg" },
  { id: 3, img: "banner3.png" },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={banners[current].id}
          src={banners[current].img}
          alt={`Banner ${banners[current].id}`}
          className="w-full h-[400px] object-cover"
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
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
