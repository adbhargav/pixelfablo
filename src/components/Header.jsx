import { useState } from "react";
import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 px-4 py-3 flex items-center justify-between z-50 shadow">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide text-white">
        PIXELFABLE
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="hover:underline text-white">Home</Link>
        <Link to="/presets" className="hover:underline text-white">Presets</Link>
        <Link to="/grading/default/submit" className="hover:underline text-white">Grading</Link>
        <Link to="/cart" className="relative flex items-center hover:underline text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13a1 1 0 001-1V7a1 1 0 00-1-1H6.4M7 13H5.4M16 16a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          Cart
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-95 flex flex-col items-end md:hidden">
          <button
            className="p-4 text-white focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full flex flex-col items-center space-y-6 mt-8">
            <Link to="/" className="text-white text-lg font-medium" onClick={handleLinkClick}>Home</Link>
            <Link to="/presets" className="text-white text-lg font-medium" onClick={handleLinkClick}>Presets</Link>
            <Link to="/grading/default/submit" className="text-white text-lg font-medium" onClick={handleLinkClick}>Grading</Link>
            <Link to="/cart" className="text-white text-lg font-medium flex items-center" onClick={handleLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13a1 1 0 001-1V7a1 1 0 00-1-1H6.4M7 13H5.4M16 16a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
