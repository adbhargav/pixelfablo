import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ✅ Correct way
import Footer from './Footer';

const PresetCard = ({ preset }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-900 text-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <img
        src={preset.image}
        alt={preset.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{preset.title}</h2>
      <p className="text-sm text-gray-400 mb-2">{preset.description}</p>
      <p className="text-blue-400 font-bold mb-3">₹{preset.price}</p>
      <div className="flex justify-between">
        <Link
          to={`/presets/${preset.id}`}
          className="text-sm bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
        >
          View Details
        </Link>
        <button
          onClick={() => addToCart(preset)}
          className="text-sm bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
        >
          Add to Cart
        </button>
      </div>
      
    </div>
  );
};

export default PresetCard;
