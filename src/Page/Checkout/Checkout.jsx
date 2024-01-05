import React from "react";

function Checkout() {
  return (
    <section>
      {/* Upper Section: */}
      <div>
        {/*  Delivery method (Right)  */}
        <div className="bg-#FEFDFA) w-[56%] shadow-[0_2px_20px_0px_rgba(0,0,0,0.15)] "></div>
        {/* Left */}
        <div className="w-[41%]">
          {/* Voucher code */}
          <div></div>
          {/* Shipping method  */}
          <div></div>
        </div>
      </div>

      {/* Down Section: */}
      <div>
        {/* Right Order summary*/}
        <div className="w-[56%]"></div>
        {/* Left Payment Method */}
        <div className="w-[41%]"></div>
      </div>
    </section>
  );
}

export default Checkout;
