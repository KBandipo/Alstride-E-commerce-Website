import React from "react";
import DeliveryMethod from "./CheckoutPages/DeliveryMethod";
import VoucherCode from "./CheckoutPages/VoucherCode";
import ShippingMethod from "./CheckoutPages/ShippingMethod";
import OrderSummary from "./CheckoutPages/OrderSummary";
import PaymentMethods from "./CheckoutPages/PaymentMethods";

function Checkout() {
  return (
    <section>
      <div className="mx-auto mb-[100px] w-[90%]">
        <div className=" ">
          <div className="flex w-full justify-end ">
            <p className=" text-[18px] font-normal leading-[24px] text-[#BB0C0C] ">
              Required *
            </p>
          </div>
          <h4 className="text-[31px] font-bold leading-[40px] text-[#444] ">
            Checkout
          </h4>

          <div className="my-[30px] h-[1px] w-full bg-[#444444B3] "></div>
        </div>

        {/* Upper Section: */}
        <div className=" flex flex-col items-center justify-between sm:flex-row">
          {/*  Delivery method (Right)  */}
          <DeliveryMethod />
          {/* Left */}
          <div className="flex flex-col justify-between self-stretch sm:w-[41%] ">
            {/* Voucher code and Shipping method  */}
            <VoucherCode />
            <ShippingMethod />
          </div>
        </div>

        {/* Down Section: */}
        <div className="my-[100px] flex flex-col justify-between sm:flex-row">
          {/* Right Order summary*/}
          <OrderSummary />
          {/* Left Payment Method */}
          <PaymentMethods />
        </div>

        <div className=" w-full text-[#444] sm:w-[60%] lg:w-[31%]">
          <h4 className="text-[16px] font-medium leading-[24px] text-[#007074] ">
            Security and Privacy
          </h4>
          <p className="text-[16px] font-normal leading-[24px] ">
            We maintain industry standard physical, technical, and
            administrative measures to safeguard your personal information. Our
            online payments are 3D secured. Please ensure your credit card is
            secured before you make any online payment.
          </p>
          <a
            href="#"
            className="text-[16px] font-normal leading-normal underline "
          >
            Read more about 3D secured online payments
          </a>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
