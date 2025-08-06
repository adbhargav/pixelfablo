import React from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-80 text-white py-10 px-4 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left col-span-1">
          <img
            src="/assets/logo.png"
            alt="Pixelfable Logo"
            className="w-20 h-20 mb-4"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/80x80/333333/FFFFFF?text=Logo';
            }}
          />
          <p className="text-sm leading-relaxed max-w-xs text-gray-300">
            Pixelfable provides premium LUTs, color grading presets, and creative tools for filmmakers, photographers, and content creators. Elevate your visuals with professional color solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-sm hover:text-gray-400 transition">Home</a></li>
            <li><a href="/presets" className="text-sm hover:text-gray-400 transition">Presets</a></li>
            <li><a href="/grading" className="text-sm hover:text-gray-400 transition">Grading</a></li>
            <li><a href="/cart" className="text-sm hover:text-gray-400 transition">Cart</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4 text-gray-200">Contact Info</h3>
          <ul className="text-gray-300 space-y-3 text-sm">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaEnvelope className="text-white" />
              hello@pixelfable.com
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaPhone className="text-white" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaMapMarkerAlt className="text-white" />
              Hyderabad, India
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaClock className="text-white" />
              Mon–Fri, 10AM–6PM
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-gray-200">Connect With Us</h3>
          <div className="flex flex-col items-center md:items-start space-y-3">
            <a
              href="https://instagram.com/pixelfable"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 flex items-center gap-2"
            >
              <FaInstagram className="text-xl" /> Instagram
            </a>
            <a
              href="https://youtube.com/pixelfable"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 flex items-center gap-2"
            >
              <FaYoutube className="text-xl" /> YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Pixelfable. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;