import React, { useState, useEffect } from "react";

function OrderSummary() {
  // State variables for amounts
  const [subtotal, setSubtotal] = useState(512);
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(8);
  const [total, setTotal] = useState(subtotal + shipping + tax);

  // Function to update amounts based on user selections (you may need to adapt this based on your logic)
  const updateAmounts = () => {
    // For demonstration purposes, let's assume user selections affect the amounts
    // You should replace this with your actual logic
    // For example, you can use useEffect to watch for changes in user selections

    // Calculate new amounts based on user selections
    const newSubtotal = 512; // Replace this with your actual subtotal calculation logic
    const newShipping = 0; // Replace this with your actual shipping calculation logic
    const newTax = 8; // Replace this with your actual tax calculation logic

    // Update state variables
    setSubtotal(newSubtotal);
    setShipping(newShipping);
    setTax(newTax);
  };

  // Update amounts when component mounts (you may need to adapt this based on your logic)
  useEffect(() => {
    updateAmounts();
  }, []);

  // Update total whenever subtotal, shipping, or tax changes
  useEffect(() => {
    setTotal(subtotal + shipping + tax);
  }, [subtotal, shipping, tax]);

  return (
    <div className="sm:w-[56%] w-full bg-[#FEFDFA] pb-[50px] shadow-[0_2px_20px_0px_rgba(0,0,0,0.15)]">
      <h3 className="mb-[50px] pt-[30px] text-center text-[31px] font-bold leading-[24px] text-[#444] ">
        Order Summary
      </h3>

      {/* Subtotal */}
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <p className="text-[31px] font-bold leading-[24px] text-black ">
          Subtotal (4 items)
        </p>
        <p className="text-[18px] font-bold leading-[24px] ">{`$${subtotal}.00`}</p>
      </div>
      <div className="my-[30px] h-[1px] w-full bg-[#444444B3] "></div>

      {/* Shipping */}
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <p className="text-[31px] font-bold leading-[24px] text-black ">
          Shipping
        </p>
        <p className="text-[18px] font-bold leading-[24px] ">{`$${shipping}.00`}</p>
      </div>
      <div className="my-[30px] h-[1px] w-full bg-[#444444B3] "></div>

      {/* Tax */}
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <p className="text-[31px] font-bold leading-[24px] text-black ">Tax</p>
        <p className="text-[18px] font-bold leading-[24px] ">{`$${tax}.00`}</p>
      </div>
      <div className="my-[30px] h-[1px] w-full bg-[#444444B3] "></div>

      {/* Total */}
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <p className="text-[31px] font-bold leading-[24px] text-black ">
          Total
        </p>
        <p className="text-[18px] font-bold leading-[24px] ">{`$${total}.00`}</p>
      </div>
    </div>
  );
}

export default OrderSummary;
