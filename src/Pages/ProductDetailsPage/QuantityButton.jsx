import React from 'react';

const QuantityButton = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center rounded-full border border-[#444444]">
      <button
        onClick={onDecrease}
        className="border-r border-[#444444] text-black px-4 py-2 rounded-l "
      >
        -
      </button>
      <span className="mx-2 font-semibold">{quantity}</span>
      <button
        onClick={onIncrease}
        className="border-l border-[#444444] text-black px-4 py-2 rounded-r "
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
