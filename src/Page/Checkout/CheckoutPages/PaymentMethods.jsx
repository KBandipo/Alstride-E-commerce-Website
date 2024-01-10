import React, { useState } from "react";

function PaymentMethods() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvvCode, setCvvCode] = useState("");
  const [paymentOption, setPaymentOption] = useState(null);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvCodeChange = (e) => {
    setCvvCode(e.target.value);
  };

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option === paymentOption ? null : option);
  };

  const handleProceedToPayment = () => {
    // Add logic for handling the payment (e.g., calling a payment API)
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV Code:", cvvCode);
    console.log("Selected Payment Option:", paymentOption);
  };

  return (
    <div className="w-full bg-[#FEFDFA] pb-[50px] shadow-[0_2px_20px_0px_rgba(0,0,0,0.15)] sm:w-[41%]">
      <h3 className="mb-[50px] pt-[30px] text-center text-[31px] font-bold leading-[24px] text-[#444]  ">
        Payment Methods
      </h3>
      {/* Bank Transfer */}
      <div className="flex items-center space-x-2 pl-[24px]">
        <span>
          <input
            type="checkbox"
            checked={paymentOption === "bankTransfer"}
            onChange={() => handlePaymentOptionChange("bankTransfer")}
            className={`h-4 w-4 rounded-[50%] focus:ring-2 focus:ring-[#686157] focus:ring-offset-2`}
          />
        </span>
        <label className="text-[18px] font-medium leading-[24px] text-[#444] ">
          Bank Transfer
        </label>
      </div>
      <p className="mb-[30px] pl-[48px] text-[14px] font-normal leading-[24px] text-[#44444480] ">
        If you choose a bank transfer, please make sure to use your Order ID as
        payment reference. Your order won’t be shipped until we have received
        the money in our account.
      </p>
      <div className="h-[1px] w-full bg-[#444444B3] "></div>

      {/* payment  */}
      {/* Credit/Debit Card */}
      <div className="my-[30px] w-full items-center justify-between pl-[24px] sm:flex">
        <div className="flex items-center space-x-2">
          <span>
            <input
              type="checkbox"
              checked={paymentOption === "CreditDebitCard"}
              onChange={() => handlePaymentOptionChange("CreditDebitCard")}
              className={`h-4 w-4 rounded-[50%] focus:ring-2 focus:ring-[#686157] focus:ring-offset-2`}
            />
          </span>
          <label className="text-[18px] font-medium leading-[24px] text-[#444] ">
            Credit/Debit Card
          </label>
        </div>
        <img
          src="/image/payment-methods.svg"
          alt="payment methods image"
          className="my-[30px] sm:my-0"
        />
      </div>

      {/* Card Number, Expiry Date and CVV Code */}
      {/* Card Number */}
      <div className=" w-[90%] pl-[48px]">
        <div className="flex  flex-col">
          <label
            htmlFor="cardNumber"
            className="text-[18px] font-normal leading-[24px] "
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="rounded-[4px] border-[0.5px] border-solid border-[#686157] bg-white"
            placeholder=""
          />
        </div>

        {/* Expiry Date */}
        <div className="mt-4 flex justify-between">
          <div className=" w-1/2">
            <label
              htmlFor="expiryDate"
              className="text-[18px] font-normal leading-[24px]"
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              className="rounded-[4px] border-[0.5px] border-solid border-[#686157] bg-white"
              placeholder="MM/YY"
            />
          </div>

          {/* CVV Code */}
          <div className=" w-1/2">
            <label
              htmlFor="cvvCode"
              className="text-[18px] font-normal leading-[24px]"
            >
              CVV Code
            </label>
            <input
              type="text"
              id="cvvCode"
              name="cvvCode"
              value={cvvCode}
              onChange={handleCvvCodeChange}
              className="rounded-[4px] border-[0.5px] border-solid border-[#686157] bg-white"
              placeholder=""
            />
          </div>
        </div>
      </div>

      <div className="my-[30px] h-[1px]  w-full bg-[#444444B3] "></div>
      {/* Cash on Delivery */}
      <div className="flex items-center space-x-2 pl-[24px]">
        <span>
          <input
            type="checkbox"
            checked={paymentOption === "CashOnDelivery"}
            onChange={() => handlePaymentOptionChange("CashOnDelivery")}
            className={`h-4 w-4 rounded-[50%] focus:ring-2 focus:ring-[#686157] focus:ring-offset-2`}
          />
        </span>
        <label className="text-[18px] font-medium leading-[24px] text-[#444] ">
          Cash on Delivery
        </label>
      </div>

      <div className="mt-[100px] text-center">
        <button
          type="button"
          onClick={handleProceedToPayment}
          className="cursor-pointer rounded-[4px] border-[1px] border-solid border-[#007074] bg-[#007074] px-[24px] py-[24px] text-[14px] font-medium leading-[24px] text-[#F7E7CE] shadow-[0_2px_20px_0px_rgba(0,0,0,0.15)] hover:text-white "
        >
          PROCEED TO PAYMENT
        </button>
      </div>
    </div>
  );
}

export default PaymentMethods;
