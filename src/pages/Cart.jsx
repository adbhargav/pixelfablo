import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-24 pt-20 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center my-20">
            <p className="text-gray-300 text-lg mb-6">Your cart is empty.</p>
            <Link
              to="/presets"
              className="bg-white text-black px-6 py-2 rounded shadow font-bold hover:bg-gray-200 transition"
            >
              Browse Presets
            </Link>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-700">
              {cart.map(item => (
                <div key={item.id} className="flex items-center py-5 gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-20 object-cover border-2 border-white rounded"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-lg">{item.name}</div>
                    <div className="text-sm text-gray-400 mb-2">{item.section}</div>
                    <div className="text-white">Quantity: {item.quantity}</div>
                  </div>
                  <div className="font-bold text-white text-lg mr-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-white hover:text-red-400 text-xl border border-white rounded px-2 py-1 transition"
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-8">
              <div className="text-xl font-bold">Total:</div>
              <div className="text-2xl font-extrabold text-white">
                ${total.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="bg-white text-black px-6 py-2 rounded font-bold shadow hover:bg-gray-200 transition"
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
            <div className="mt-4">
              <Link
                to="/presets"
                className="text-white underline"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}