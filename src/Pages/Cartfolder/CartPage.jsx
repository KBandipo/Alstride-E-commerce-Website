// CartPage.jsx
import React from 'react';
import { useCart } from '../Cartfolder/CartContext';
import CartCard from './CartCard'; // Adjust the path as needed

const CartPage = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
  };

  const handleChangeQuantity = (productId, newQuantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity: newQuantity } });
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            <CartCard
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onIncrease={() => handleChangeQuantity(item.id, item.quantity + 1)}
              onDecrease={() => handleChangeQuantity(item.id, Math.max(1, item.quantity - 1))}
              onRemove={() => handleRemoveFromCart(item.id)}
            />
          </li>
        ))}
      </ul>
      <p>Total: ${state.totalAmount}</p>
    </div>
  );
};

export default CartPage;
