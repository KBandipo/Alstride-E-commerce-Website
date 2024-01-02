import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Navigation = () => {
    const { state } = useCart();
    const totalItems = state.totalItems;

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link to="/">Home</Link>
      <Link to="/cart">
        <div className="relative">
          <img src="/path/to/cart-icon.png" alt="Cart" />
          {state.cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 rounded-full p-1 text-xs">
              {state.cartItems.length}
              
            </span>
          )}
        </div>
      </Link>
    </nav>
  );
};

export default Navigation;
