// Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Navigation = () => {
  const [isCartVisible, setCartVisibility] = useState(false);

  const handleCartIconClick = () => {
    setCartVisibility(!isCartVisible);
  };

  return (
    <div>
      {/* Other navigation elements */}
      <div onClick={handleCartIconClick}>
        <Link to="/cart">Cart</Link>
      </div>

      {isCartVisible && <Cart />}
    </div>
  );
};

export default Navigation;
