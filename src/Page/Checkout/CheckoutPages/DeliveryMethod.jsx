import React, { useState } from "react";

import { AsYouType } from "libphonenumber-js";

function DeliveryMethod() {
  const [deliveryMethods, setDeliveryMethods] = useState({
    deliveryAddress: false,
    doorDelivery: false,
    pickUpInStore: false,
  });

  const stateOptions = [
    { value: "", label: "Select State" },
    { value: "NY", label: "New York" },
    { value: "CA", label: "California" },
    // Add more states as needed
  ];

  const countryOptions = [
    { value: "", label: "Select Country" },
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "KE", label: "Kenya" },
    { value: "GH", label: "Ghana" },
    { value: "ZW", label: "Zimbabwe" },
    { value: "DZ", label: "Algeria" },
    { value: "AO", label: "Angola" },
    { value: "BJ", label: "Benin" },
    { value: "ZA", label: "South Africa" },
    { value: "NG", label: "Nigeria" },
    // More countries
  ];

  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleCheckboxChange = (method) => {
    setDeliveryMethods((prevMethods) => ({
      ...prevMethods,
      [method]: !prevMethods[method],
    }));
  };

  const handleInputChange = (e) => {
    let value = e.target.value;

    // If the input is for phoneNumber, format it as you type
    if (e.target.name === "phoneNumber") {
      const asYouType = new AsYouType(formInputs.country);
      value = asYouType.input(value);
    }

    setFormInputs({
      ...formInputs,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the form data here
    console.log("Form Data:", {
      ...formInputs,
      deliveryMethods,
    });
  };

  return (
    <div className="w-full bg-[#FEFDFA] pb-[30px] shadow-[0_2px_20px_0px_rgba(0,0,0,0.15)] sm:w-[56%] ">
      <h2 className="pt-[30px] text-center text-[31px] font-bold leading-[40px] text-[#444] ">
        Delivery Methods
      </h2>
      {/* Form */}
      <form className="mt-[50px] pl-[8%]" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-[4%] ">
          <span>
            <input
              type="checkbox"
              checked={deliveryMethods.deliveryAddress}
              onChange={() => handleCheckboxChange("deliveryAddress")}
              className="h-4 w-4 rounded-[50%]"
            />
          </span>
          <label className="text-[25px] font-medium leading-[24px] text-[#444] ">
            Delivery Address (Shipping)
          </label>
        </div>
        {/* First,Last Name and other details */}
        <div className="ml-[6.5%] mt-[30px] w-[70%]">
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formInputs.firstName}
            onChange={handleInputChange}
            className="text- w-full rounded-[4px] border-[1px] border-solid border-[#686157] text-[18px] font-normal leading-[24px] "
            required
          />
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={formInputs.lastName}
            onChange={handleInputChange}
            className="mt-[12px] w-full rounded-[4px] border-[1px] border-solid border-[#686157] text-[18px] font-normal leading-[24px]"
            required
          />
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            // pattern="[0-9]{10}"
            placeholder="Phone Number*"
            value={formInputs.phoneNumber}
            onChange={handleInputChange}
            className="mt-[12px] w-full rounded-[4px] border-[1px] border-solid border-[#686157] text-[18px] font-normal leading-[24px] "
            required
          />
          <p className="mt-[4px] text-[16px] font-normal leading-[24px] text-[#A9A9A9] ">
            Please provide correct phone number for delivery.
          </p>
        </div>
        {/* City, State/Region and Zip/Postal*/}
        <div className="ml-[6.5%] mt-[30px] grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col ">
            <label
              htmlFor="city"
              className="text-[18px] font-normal leading-[24px] text-[#444]"
            >
              City*
            </label>
            <input
              id="city"
              type="text"
              name="city"
              value={formInputs.city}
              onChange={handleInputChange}
              className="rounded-[4px] border-[1px] border-solid border-[#686157]"
              required
            />
          </div>
          {/* State/Region */}
          <div className="flex flex-col">
            <label
              htmlFor="state"
              className="text-[18px] font-normal leading-[24px] text-[#444]"
            >
              State / Region*
            </label>
            <select
              name="state"
              id="state"
              value={formInputs.state}
              onChange={handleInputChange}
              className="rounded-[4px] border-[1px] border-solid border-[#686157]"
              required
            >
              {stateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Zip/Postal Code */}
          <div className="flex flex-col">
            <label
              htmlFor="zipCode"
              className="text-[18px] font-normal leading-[24px] text-[#444]"
            >
              Zip/Postal Code*
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formInputs.zipCode}
              onChange={handleInputChange}
              className="rounded-[4px] border-[1px] border-solid border-[#686157]"
              required
            />
          </div>
        </div>
        <div className="ml-[6.5%] mt-[20px] flex w-[70%] flex-col">
          <label
            className="text-[18px] font-normal leading-[24px] text-[#444] "
            htmlFor="country"
          >
            Country*
          </label>
          <select
            id="country"
            name="country"
            value={formInputs.country}
            onChange={handleInputChange}
            className="rounded-[4px] border-[1px] border-solid border-[#686157]"
            required
          >
            {countryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Door Delivery and Pick-up in Store */}
        {/* Door Delivery */}

        <div className="mt-[30px] grid grid-rows-2 sm:grid-cols-2 ">
          <div className=" flex items-center space-x-[4%]">
            <span>
              <input
                type="checkbox"
                checked={deliveryMethods.doorDelivery}
                onChange={() => handleCheckboxChange("doorDelivery")}
                className="h-4 w-4 rounded-[50%]"
              />
            </span>
            <label className="text-[25px] font-medium leading-[24px] text-[#444] ">
              Door Delivery
            </label>
          </div>
          {/* Pick-up in Store */}
          <div className="flex items-center space-x-[4%]">
            <span>
              <input
                type="checkbox"
                checked={deliveryMethods.pickUpInStore}
                onChange={() => handleCheckboxChange("pickUpInStore")}
                className="h-4 w-4 rounded-[50%]"
              />
            </span>
            <label className="text-[25px] font-medium leading-[24px] text-[#444] ">
              Pick-up in Store
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DeliveryMethod;
