// ColorSelector.jsx

import React, { useState } from 'react';

function ColorSelector() {
  const colors = [ 'black', 'red', 'white', 'yellow'];
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-2">Color Selector</h2>
      <div className="flex items-center">
        {colors.map((color) => (
          <div
            key={color}
            className={`color-box mr-4 ${selectedColor === color ? 'border-2 border-blue-500' : 'border-2 border-gray-300'}`}
            style={{ backgroundColor: color, width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer' }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
