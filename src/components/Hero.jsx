import { motion } from "framer-motion";
import logo from "./../assets/Featured.png";
export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-white to-orange-50 pt-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
        {/* Left Text */}
        <motion.div
          className="max-w-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-7xl font-semibold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6 ">
            Shop Smarter, <br /> Not Harder
          </h1>
          <p className="text-gray-600 mb-6 font-semibold text-lg py-2">
            ~Experience the future of shopping with our seamless Pick & Go
            service-shop online, pick up in-store, and go !
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600 transition"
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="mt-10 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="{Featured}"
            alt="Product"
            className="w-[300px] md:w-[400px] drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
