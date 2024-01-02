import React from 'react';

const CartCard = ({ id, name, price, quantity, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="border p-4 mb-4">
      <p>{name}</p>
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={onIncrease}>Increase Quantity</button>
      <button onClick={onDecrease}>Decrease Quantity</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default CartCard;
