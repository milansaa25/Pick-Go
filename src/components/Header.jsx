import { useState } from "react";
import logo from "./../assets/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  FaHeart,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-sky-50 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Pick & Go" className="h-18 w-18" />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#" className="hover:text-orange-500">
            Home
          </a>
          <a href="#" className="hover:text-orange-500">
            Shop
          </a>
          <a href="#" className="hover:text-orange-500">
            About
          </a>
          <a href="#" className="hover:text-orange-500">
            Contact
          </a>
        </nav>

        {/* Search + Icons */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search any products..."
              className="px-4 py-2 rounded-full border outline-none w-64"
            />
            <span className="absolute right-3 top-2.5 text-gray-500">
              <BiSearchAlt2 className="items-center" />
            </span>
          </div>

          {/* Icons */}
          <FaHeart className="text-orange-500 text-xl cursor-pointer" />
          <FaShoppingCart className="text-orange-500 text-xl cursor-pointer" />
          <FaUser className="text-orange-500 text-xl cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-orange-500 font-medium"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-orange-500">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-orange-500">
            Shop
          </a>
          <a href="#" className="block text-gray-700 hover:text-orange-500">
            About
          </a>
          
          <a href="#" className="block text-gray-700 hover:text-orange-500">
            Contact
          </a>
          <div className="flex gap-4 mt-4">
            <FaHeart className="text-orange-500 text-xl cursor-pointer" />
            <FaShoppingCart className="text-orange-500 text-xl cursor-pointer" />
            <FaUser className="text-orange-500 text-xl cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
}
