// SizeSelector.jsx

import React, { useState } from 'react';

function SizeSelector() {
  // Dummy data for illustration
  const sizes = ['32', '34', '36', '38', '40', '42', '44', '46', '48'];

  // State to track the selected size
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <div>
        <h1>Sizes</h1>
      {/* First line */}
      <div className="flex mb-4">
        {sizes.slice(0, 4).map((size) => (
          <div
            key={size}
            className={`size-box mr-4 ${selectedSize === size ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => setSelectedSize(size)}
          >
            <input type="text" value={size} readOnly className="w-full h-full p-2" />
          </div>
        ))}
      </div>

      {/* Second line */}
      <div className="flex mb-4">
        {sizes.slice(4, 8).map((size) => (
          <div
            key={size}
            className={`size-box mr-4 ${selectedSize === size ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => setSelectedSize(size)}
          >
            <input type="text" value={size} readOnly className="w-full h-full p-2" />
          </div>
        ))}
      </div>

      {/* Third line */}
      <div className="flex">
        <div
          className={`size-box ${selectedSize === sizes[8] ? 'border-blue-500' : 'border-gray-300'}`}
          onClick={() => setSelectedSize(sizes[8])}
        >
          <input type="text" value={sizes[8]} readOnly className="w-full h-full p-2" />
        </div>
      </div>
    </div>
  );
}

export default SizeSelector;
