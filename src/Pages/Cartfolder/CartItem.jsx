// CartItem.js
import React, { useState } from 'react';
import QuantityButton from '../ProductDetailsPage/QuantityButton';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex border-b border-gray-200 p-4 ml-[100px] mt-[100px] gap-6">
      <div className="w-[600px] h-[650px] bg-[#FDF8F0] rounded-lg shadow-md">
        <img src={item.image} alt={item.name} className="w-full object-cover rounded" />
      </div>
      <div className="ml-4 mt-4"> {/* Add margin top to align with the image container */}
        <p className="font-semibold text-lg mb-2">{item.name}</p>
        <p className="text-gray-600 w-[400px]">{item.description}</p>
        <div className="flex items-center w-[128px] h-[50px] rounded-full border border-[#444444]">
          <div className="text-white">{item.selectedColor}</div>
          <div className="w-128px h-50px bg-[sizeColor] text-white flex items-center justify-center">
            {item.selectedSize}
          </div>
        </div>
        <div className="flex items-center mb-4 gap-3">
          {/* Prices outside the flex container */}
          {item.discountPrice < item.price && (
            <div className="mb-2">
              <span className="text-[#000] font-medium text-[20px] line-through">
                ${item.price}
              </span>
            </div>
          )}
          <div className="mb-2">
            <span className="text-[25px] text-[#007074] font-medium leading-8">
              ${item.discountPrice}
            </span>
          </div>
        </div>
        <div className="flex items-center mt-2"> {/* Add margin top for the QuantityButton */}
          <div className="mb-4">
            <label htmlFor="quantity" className="mr-2 font-semibold">
              Quantity:
            </label>
            <QuantityButton
              quantity={quantity}
              onIncrease={() => handleQuantityChange(quantity + 1)}
              onDecrease={() => handleQuantityChange(quantity > 1 ? quantity - 1 : 1)}
            />
          </div>
          <button onClick={() => onRemove(item.id)} className="text-red-500">
            Remove
          </button>
        </div>
        {/* Add more details as needed (color, size, etc.) */}
      </div>
    </div>
  );
};

export default CartItem;
