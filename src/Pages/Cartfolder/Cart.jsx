import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cartState } = useCart();
  const { cartItems } = cartState;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              {/* Add other product details */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
