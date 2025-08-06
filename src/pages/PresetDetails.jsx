import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { presetSections } from "../data/presetsData";
import { useCart } from "../context/CartContext"; // <-- Import the useCart hook

export default function PresetDetails() {
  const { section, preset } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // <-- Use CartContext's addToCart

  // Find section and preset
  const foundSection = presetSections.find(
    s => s.title.toLowerCase().replace(/[^a-z]+/g, '-') === section
  );
  const foundPreset = foundSection?.presets.find(
    p => p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === preset
  );

  // Updated product details
  const productDetails = {
    style: "Cinematic Teal & Orange",     // Visual tone or color grading style
    resolution: "4K",                     // Image resolution
    format: "JPEG",                       // File format
    category: "Urban Presets",            // Type or genre of the preset
    compatibleWith: "Lightroom, Photoshop", // Supported software
    inStock: true,                        // Availability
    author: "Pixelfable",                 // Creator or brand
  };

  function handleAddToCart() {
    if (!foundPreset || !foundSection) return;
    addToCart({
      id: foundPreset.id || `${foundSection.title}-${foundPreset.name}`,
      name: foundPreset.name,
      image: foundPreset.image,
      price: typeof foundPreset.price === "string"
        ? parseFloat(foundPreset.price.replace(/[^0-9.]/g, ""))
        : foundPreset.price,
      section: foundSection.title,
    });
    navigate("/cart");
  }

  if (!foundPreset || !foundSection) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <div>
          <h2 className="text-2xl font-bold mb-4">Preset not found</h2>
          <Link to="/presets" className="underline text-blue-400">Go back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-24 flex flex-col items-center pt-10">
      <div className="max-w-4xl w-full bg-gray-900 shadow-lg overflow-hidden">
        {/* Side-by-side section */}
        <div className="flex flex-col md:flex-row">
          {/* Product Image - left */}
          <div className="md:w-1/2 w-full flex items-center justify-center p-6">
            {/* Remove all gap between border and image by using object-cover */}
            <div className="w-[320px] h-[520px] bg-black flex items-center justify-center  ">
              <img
                src={foundPreset.image}
                alt={foundPreset.name}
                className="w-full h-full object-cover m-0 p-0 block"
                style={{ display: "block" }}
              />
            </div>
          </div>
          {/* Product Details - right */}
          <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-1">{foundPreset.name}</h1>
            <div className="text-gray-400 text-sm mb-2">{foundSection.title}</div>
            {/* Price */}
            <div className="flex items-center mb-2">
              <div className="text-yellow-400 font-bold text-xl mr-3">{foundPreset.price}</div>
            </div>
            {/* Product Details */}
            <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-gray-300">
              <div>Style: <span className="text-white">{productDetails.style}</span></div>
              <div>Resolution: <span className="text-white">{productDetails.resolution}</span></div>
              <div>Format: <span className="text-white">{productDetails.format}</span></div>
              <div>Category: <span className="text-white">{productDetails.category}</span></div>
              <div>Compatible With: <span className="text-white">{productDetails.compatibleWith}</span></div>
              <div>Author: <span className="text-white">{productDetails.author}</span></div>
              <div className="col-span-2">
                {productDetails.inStock ? (
                  <span className="text-green-400 font-semibold">In Stock</span>
                ) : (
                  <span className="text-red-400 font-semibold">Out of Stock</span>
                )}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex gap-4 mt-2">
              <Link
                to="/presets"
                className="inline-block bg-white text-black px-4 py-2 shadow font-bold  transition"
              >
                Back to Presets
              </Link>
              <button
                onClick={handleAddToCart}
                className="inline-block bg-white text-black px-4 py-2 shadow font-bold  transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* Description below image/details */}
        <div className="p-6">
          {/* Description */}
          <div>
            <h2 className="text-lg font-bold mb-2">Description</h2>
            <p className="text-gray-300 text-base">
              This is a sample product description. It should provide extensive details about the product, covering its features, materials, and any other relevant information a customer might want to know before making a purchase. It is designed to give a comprehensive overview. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}