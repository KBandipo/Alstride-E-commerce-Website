function Button({ title, iconsrc, iconAlt, borderColor, textColor }) {
  return (
    <>
      <button
        className={`bg-[rgba(0, 148, 153, 0.65)] flex items-center justify-center space-x-[10px] rounded-[10px] border-[1px] border-solid ${borderColor} ${textColor} px-[28px] py-[10px] `}
      >
        <span className="text-[31px] font-bold leading-[40px]">{title}</span>
        <img src={iconsrc} alt={iconAlt} />
      </button>
    </>
  );
}

export default Button;
