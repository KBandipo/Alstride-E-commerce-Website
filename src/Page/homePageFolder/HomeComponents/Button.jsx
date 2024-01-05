function Button({ title, iconsrc, iconAlt, borderColor, textColor }) {
  return (
    <>
      <button
        className={`bg-[rgba(0, 148, 153, 0.65)] flex items-center justify-center space-x-2 rounded-[10px] border-[1px] border-solid md:space-x-[10px] ${borderColor} ${textColor} px-4 py-2 md:px-6 md:py-[10px] lg:px-[28px] `}
      >
        <span className="text-xl font-bold md:text-2xl lg:text-[31px] lg:leading-[40px]">
          {title}
        </span>
        <img src={iconsrc} alt={iconAlt} className="h-6 w-6 md:h-8 md:w-8" />
      </button>
    </>
  );
}

export default Button;
