// CartItem.js
import React, { useState } from 'react';
import QuantityButton from '../ProductDetailsPage/QuantityButton';
import { useCart } from './cartContext';
import CartColor from './CartColor'; // Replace with the correct path
import CartSize from './CartSize'; // Replace with the correct path


const CartItem = ({ item, onUpdateQuantity, onSelect }) => {
  const { removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);
  const [selectedColor, setSelectedColor] = useState(item.selectedColor);
  const [selectedSize, setSelectedSize] = useState(item.selectedSize);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    onUpdateQuantity(item.id, newQuantity);
  };

  const handleSelectChange = () => {
    onSelect(item.id, !item.selected);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    // You can add additional logic if needed
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    // You can add additional logic if needed
  };

  return (
    <div className="flex  lg:ml-[100px] mt-[100px] gap-6">
      <input
        type="checkbox"
        id={`select-${item.id}`}
        checked={item.selected}
        onChange={handleSelectChange}
        className='rounded-lg'
      />

      <div className=" h-full lg:w-[600px] lg:h-[650px] bg-[#FDF8F0] rounded-lg shadow-md">
        <div className='bg-[#AFA492] h-[40px] w-[55px] md:w-[126px] md:h-[55px] md:mt-[56px]'>
          <p className='text-center text-[24px] text-[#fff]'>-20%</p>
        </div>
        <img src={item.image} alt={item.name} className="w-full object-cover rounded" />
      </div>

      <div className="md:ml-4 mt-4">
        <div className='flex gap-4 md:gap-[150px]'>
          <p className="text-[18px] md:w-[300px] md:text-[25px] text-[#444] font-bold mb-2">{item.name}</p>
          <button
            onClick={handleRemove} // Updated to use handleRemove directly
            className="text-[#444] font-normal hidden md:inline-block"
          >
            Remove
          </button>
          <span
            onClick={handleRemove} // Updated to use handleRemove directly
            className="text-[#444] font-normal inline-block md:hidden"
          >
            &#x2715;
          </span>
        </div>
        <p className="text-[#444] text-[15px] w-[450px] hidden md:block">{item.description}</p>

        
        <div className=" flex md:block items-center mt-[30px]  mb-4 gap-3">
          {/* Prices outside the flex container */}
          {item.discountPrice < item.price && (
            <div className="mb-2">
              <span className="text-[#000] font-medium text-[25px] line-through">
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
              <div className=''>
              <div className="flex md:mt-[30px] justify-center items-center w-[128px] h-[50px] rounded-full border border-[#444444]">
        {/* Color Box */}
        <CartColor selectedColor={selectedColor} onSelectColor={handleColorSelect} />

        {/* You can add an icon or text inside the color box if needed */}
        <img className="" src="public/image/Line 16.svg" alt="" />

        {/* Size Label */}
        <CartSize selectedSize={selectedSize} onSelectSize={handleSizeSelect} />
      </div>

        <div className="flex md:mt-[30px] items-center mt-2">
          
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