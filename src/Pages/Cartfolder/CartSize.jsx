import React from 'react';
import { useCart } from './cartContext';

function CartSize({ selectedSize, onSelectSize, productDetails }) {
  const { selectSize } = useCart();

  const sizes = ['38'];

  return (
    <div>
      <div className="flex">
        {sizes.map((size) => (
          <div
            key={size}
            className={`size-box`}
            onClick={() => {
              onSelectSize(size);
              // Call selectSize with the selected size
              selectSize(productDetails.id, size);
            }}
          >
            <input
              type="text"
              value={size}
              readOnly
              className="w-[40px] h-[40px] rounded p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartSize;
