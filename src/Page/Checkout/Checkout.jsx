import React from "react";
import DeliveryMethod from "./CheckoutPages/DeliveryMethod";
import VoucherCode from "./CheckoutPages/VoucherCode";
import ShippingMethod from "./CheckoutPages/ShippingMethod";
import OrderSummary from "./CheckoutPages/OrderSummary";
function Checkout() {
  return (
    <section>
      {/* Upper Section: */}
      <div className="flex  items-center justify-between">
        {/*  Delivery method (Right)  */}
        <DeliveryMethod />
        {/* Left */}
        <div className="flex w-[41%] flex-col justify-between self-stretch ">
          {/* Voucher code and Shipping method  */}
          <VoucherCode />
          <ShippingMethod />
        </div>
      </div>

      {/* Down Section: */}
      <div className="my-[100px]">
        {/* Right Order summary*/}
        <OrderSummary />
        {/* Left Payment Method */}
        <div className="w-[41%]"></div>
      </div>
    </section>
  );
}

export default Checkout;
