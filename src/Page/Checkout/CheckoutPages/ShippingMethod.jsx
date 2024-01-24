import React, { useState } from "react";

function ShippingMethod() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      // If the option is already selected, remove it
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((selectedOption) => selectedOption !== option),
      );
    } else {
      // If the option is not selected, add it
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
    console.log("Selected Options:", selectedOptions);
  };

  const shippingOptions = [
    {
      option: "Standard shipping",
      price: 25,
      description: "Standard Flat-rate on all orders below $50",
    },
    {
      option: "Expedited shipping",
      price: 40,
      description: "Expedited shipping to get item in a day or two",
    },
    {
      option: "Overnight Shipping",
      price: 77,
      description: "Express shipping to get item on the next day",
    },
    {
      option: "Free Shipping",
      price: 0,
      description: "On orders above $50",
    },
  ];

  return (
    <div className="w-full bg-[#FEFDFA] pb-[50px] shadow-[0_2px_20px_0px_rgba(0,0,0,0.15)]">
      <h3 className="mb-[30px] pt-[72px] text-center text-[31px] font-bold leading-[24px] ">
        Shipping Options
      </h3>

      {shippingOptions.map(({ option, price, description }, index) => (
        <div key={index}>
          <div className="flex w-full items-center justify-between px-[24px]">
            <div className="flex items-center space-x-2">
              <span>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="h-4 w-4 rounded-[50%]"
                />
              </span>
              <label className="text-[18px] font-medium leading-[24px] text-[#444] ">
                {option}
              </label>
            </div>
            <p className="text-[18px] font-bold leading-[24px] text-[#444] ">{`$${price}`}</p>
          </div>
          <p className="pl-[48px] text-[16px] font-normal leading-[24px] text-[#A9A9A9] ">
            {description}
          </p>
          {index !== shippingOptions.length - 1 && (
            <div className="my-[15px] h-[1px] w-full bg-[#444444B3] "></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ShippingMethod;
