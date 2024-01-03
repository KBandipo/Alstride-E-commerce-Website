// CartPage.js
import React from 'react';
import { useCart } from './cartContext';
import CartItem from './CartItem';  // Update the import statement
import cartData from './cartData';

const Cart = () => {
  const { cartState } = useCart();

  // Filter the products based on the items in the cart
  const cartProducts = cartState.cartItems.map((cartItem) => {
    const product = cartData.find((p) => p.id === cartItem.id);
    return { ...product, quantity: cartItem.quantity };
  });

  return (
    <div>
      <div className='bg-[#F7E7CE] w-full h-[80px] '></div>
      <h2>Shopping Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartProducts.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};


export default Cart;
