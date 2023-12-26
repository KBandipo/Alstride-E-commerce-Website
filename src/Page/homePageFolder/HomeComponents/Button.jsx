import React from "react";

function Button({ title, iconsrc, iconAlt, borderColor }) {
  return (
    <>
      <button
        className={`bg-[rgba(0, 148, 153, 0.65)] flex items-center justify-center space-x-1 rounded-[10px] border-[1px] border-solid ${borderColor} px-[28px] py-[10px] `}
      >
        <span>{title}</span>
        <img src={iconsrc} alt={iconAlt} />
      </button>
    </>
  );
}

export default Button;
