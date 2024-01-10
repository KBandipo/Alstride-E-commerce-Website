import React from 'react';
import { useCart } from './cartContext';

function CartColor({ selectedColor, onSelectColor, productDetails }) {
  const { selectColor } = useCart(); 

  const colors = ['red', ];

  return (
    <div className="">
    
      <div className="flex items-center">
        {colors.map((color) => (
          <div
            key={color}
            className={`color-box  ${selectedColor === color ? 'border-2 border-blue-500' : 'border-2 border-gray-300'}`}
            style={{ backgroundColor: color, width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
            onClick={() => {
              onSelectColor(color);
              // Call selectColor with the selected color
              selectColor(productDetails.id, color);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CartColor;