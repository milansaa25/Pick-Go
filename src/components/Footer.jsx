import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "./../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* Company Info Section */}
          <div>
            <div className="flex items-center space-x-2">
              <img src="{logo}" alt="" />
            </div>
            <p className="mt-4 text-gray-400">
              Shop the latest trends and elevate your wardrobe with our
              exclusive collection.
            </p>
            <div className="mt-4 space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-orange-500" />
                <p>+977-9876543210</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-orange-500" />
                <p>devnira4@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <p>Biratnagar-12, Morang, Nepal</p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Quick Link</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* My Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Join our community to receive latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-md px-4 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-r-md hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Bar Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-1xl">
          <p>
            © 2025 <span className="text-orange-600 text-lg">Pick&Go.</span> All
            Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Terms&Conditions
            </a>
            <span>||</span>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
