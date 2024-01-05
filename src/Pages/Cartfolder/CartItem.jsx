// CartItem.js
import React, { useState } from 'react';
import QuantityButton from '../ProductDetailsPage/QuantityButton';
import { useCart } from './cartContext';

const CartItem = ({ item, onUpdateQuantity, onSelect, selectedColor, selectedSize }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { removeFromCart } = useCart(); // Use the useCart hook here

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    onUpdateQuantity(item.id, newQuantity);
  };

  const handleSelectChange = () => {
    onSelect(item.id, !item.selected);
  };

  return (
    <div className="flex border-b border-gray-200 p-4 ml-[100px] mt-[100px] gap-6">
      <input
        type="checkbox"
        id={`select-${item.id}`}
        checked={item.selected}
        onChange={handleSelectChange}
        className='rounded-lg'
      />

      <div className="w-[600px] h-[650px] bg-[#FDF8F0] rounded-lg shadow-md">
        <div className='bg-[#AFA492] w-[126px] h-[55px] mt-[56px]'>
          <p className='text-center text-[24px] text-[#fff]'>-20%</p>
        </div>
        <img src={item.image} alt={item.name} className="w-full object-cover rounded" />
      </div>

      <div className="ml-4 mt-4">
        <div className='flex gap-[300px]'>
          <p className="text-[25px] text-[#444] font-bold mb-2">{item.name}</p>
          <button onClick={() => handleRemove(item.id)} className="text-[#444]  font-normal border ">
            Remove
          </button>
        </div>
        <p className="text-[#444] text-[15px] w-[450px]">{item.description}</p>

        <div className="flex mt-[40px] justify-center items-center w-[128px] h-[50px] rounded-full border border-[#444444]">
          {/* Color Box */}
        <p>Color: {item.selectedColor}</p>
      {/* You can add an icon or text inside the color box if needed */}
    <img src="public/image/Line 16.svg" alt="" />
    {/* Size Label */}
    <p>Size: {item.selectedSize}</p>
  </div>
        <div className=" items-center mb-4 gap-3">
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

        <div className="flex items-center mt-2">
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
        </div>
        {/* Add more details as needed (color, size, etc.) */}
      </div>
    </div>
  );
};

export default CartItem;