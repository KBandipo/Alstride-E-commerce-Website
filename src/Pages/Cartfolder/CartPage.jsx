import React from 'react';
import { useCart } from '../Cartfolder/CartContext';

const CartPage = () => {
  const { state } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            {/* Add other details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
