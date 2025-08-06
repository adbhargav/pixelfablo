import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../CartContext'; // Update path if CartContext is in 'context' folder
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { cart } = useCart();

  return (
    <Link to="/cart" className="relative">
      <FiShoppingCart className="text-xl text-white" />
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
          {cart.length}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;