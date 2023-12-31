// SizeSelector.jsx

import React, { useState } from 'react';

function SizeSelector() {
  // Dummy data for illustration
  const sizes = ['32', '34', '36', '38', '40', '42', '44', '46', '48'];

  // State to track the selected size
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <div>
        <h1 className='mb-[15px] font-bold'>Sizes</h1>
      {/* First line */}
      <div className="flex mb-4">
        {sizes.slice(0, 4).map((size) => (
          <div
          key={size}
          className={`size-box mr-4 ${selectedSize === size ? 'border-[#F6F8F9]' : 'border-[#99A6AE]'}`}
          onClick={() => setSelectedSize(size)}
        >
          <input
            type="text"
            value={size}
            readOnly
            className="w-[65px] h-[60px] bg-[#F6F8F9] rounded border p-2"
            style={{ borderColor: selectedSize === size ? '#3182CE' : '#99A6AE' }}
          />
        </div>
        ))}
      </div>

      {/* Second line */}
      <div className="flex mb-4">
        {sizes.slice(4, 8).map((size) => (
          <div
          key={size}
          className={`size-box mr-4 ${selectedSize === size ? 'border-[#F6F8F9]' : 'border-[#99A6AE]'}`}
          onClick={() => setSelectedSize(size)}
        >
          <input
            type="text"
            value={size}
            readOnly
            className="w-[65px] h-[60px] bg-[#F6F8F9] rounded border p-2"
            style={{ borderColor: selectedSize === size ? '#3182CE' : '#99A6AE' }}
          />
        </div>
        ))}
      </div>

      {/* Third line */}
      <div className="flex">
  <div
    className={`size-box ${selectedSize === sizes[8] ? 'border-[#F6F8F9]' : 'border-gray-300'}`}
    onClick={() => setSelectedSize(sizes[8])}
  >
    <input
      type="text"
      value={sizes[8]}
      readOnly
      className="w-[65px] h-[60px] bg-[#F6F8F9] border rounded p-2"
      style={{ borderColor: selectedSize === sizes[8] ? '#3182CE' : '#99A6AE' }}
    />
  </div>
</div>
    </div>
    
  );
}

export default SizeSelector;
