import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { presetSections } from "../data/presetsData";

// HERO SECTION IMAGE (only one image)
const HERO_IMAGE = "/assets/hero3.png";

const SORT_OPTIONS = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "price-asc", label: "Price (Low to High)" },
  { value: "price-desc", label: "Price (High to Low)" },
];

function sortPresets(presets, sortBy) {
  const presetsCopy = [...presets];
  if (sortBy === "name-asc") {
    presetsCopy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    presetsCopy.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === "price-asc") {
    presetsCopy.sort((a, b) => {
      const pa = parseFloat(a.price.replace(/[^\d.]/g, ""));
      const pb = parseFloat(b.price.replace(/[^\d.]/g, ""));
      return pa - pb;
    });
  } else if (sortBy === "price-desc") {
    presetsCopy.sort((a, b) => {
      const pa = parseFloat(a.price.replace(/[^\d.]/g, ""));
      const pb = parseFloat(b.price.replace(/[^\d.]/g, ""));
      return pb - pa;
    });
  }
  return presetsCopy;
}

export default function Presets() {
  const [sortBy, setSortBy] = useState("name-asc");
  const navigate = useNavigate();

  // Helper for route
  const getPresetLink = (section, preset) => {
    return `/presets/${section.title.toLowerCase().replace(/[^a-z]+/g, '-')}/${preset.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-24 pt-20">
      {/* HERO SECTION */}
      <section className="relative w-full h-[38vh] min-h-[220px] flex items-center justify-center overflow-hidden mb-4">
        {/* Background image */}
        <img
          src={HERO_IMAGE}
          alt="Presets Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        {/* Hero Content */}
        <div className="relative z-20 text-center text-white w-full px-3 flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">Presets & LUTs</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-8 max-w-xl">
            Explore our premium color grading presets and LUTs, designed for every creative style. Instantly elevate your photos and videos with professional-grade looks.
          </p>
        </div>
      </section>

      {/* SORT BUTTON */}
      <div className="max-w-6xl mx-auto px-4 mt-6 flex justify-end items-center">
        <label htmlFor="sortPresets" className="mr-2 font-semibold text-gray-200">
          Sort by:
        </label>
        <select
          id="sortPresets"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-700 font-semibold"
        >
          {SORT_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Sectioned Preset Categories */}
      <section className="max-w-6xl mx-auto px-4 mt-4">
        {presetSections.map((section, idx) => (
          <div
            key={section.title}
            className={`mb-4 ${idx === presetSections.length - 1 ? "mb-0" : ""}`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-1">{section.title}</h2>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">{section.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {sortPresets(section.presets, sortBy).map((preset) => {
                const presetLink = getPresetLink(section, preset);
                return (
                  <div
                    key={preset.name}
                    className="bg-gray-900 bg-opacity-80 shadow-lg overflow-hidden flex flex-col transition hover:scale-105 duration-300 cursor-pointer"
                    onClick={() => navigate(presetLink)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View details for ${preset.name}`}
                  >
                    {/* Full image, no border-radius, no cropping, white border (thin) */}
                    <div className="w-full aspect-[4/3] bg-black flex items-center justify-center">
                      <img
                        src={preset.image}
                        alt={preset.name}
                        className="w-full h-full object-contain "
                        style={{ display: "block" }}
                      />
                    </div>
                    <div className="p-3 flex flex-col flex-1">
                      <h3 className="text-base font-bold mb-1">{preset.name}</h3>
                      <p className="text-gray-300 text-xs mb-1 flex-1">{preset.description}</p>
                      <span className="text-white font-bold text-sm mt-1">{preset.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}