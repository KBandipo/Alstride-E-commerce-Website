import React, { useState } from "react";

function VoucherCode() {
  const [voucherCode, setVoucherCode] = useState("");

  const handleInputChange = (e) => {
    setVoucherCode(e.target.value);
  };

  const handleApplyClick = () => {
    // Here you can implement the logic to check the validity of the voucher code
    // and apply any discounts or perform other actions accordingly.
    console.log("Voucher code applied:", voucherCode);
  };

  return (
    <div className="bg-[#FEFDFA] py-[50px] pl-3  shadow-[0_2px_20px_0px_rgba(0,0,0,0.15)]">
      {/* Voucher code */}

      <label
        htmlFor="voucherCode"
        className="text-[31px] font-bold leading-[24px] text-[#444] "
      >
        Voucher Code
      </label>

      <div className="flex space-x-2">
        <input
          type="text"
          id="voucherCode"
          className="rounded-[4px] border-[1px] border-solid border-[#686157] text-center text-[17px] font-normal leading-[24px] text-[#444444CC] "
          placeholder="Enter your voucher code"
          value={voucherCode}
          onChange={handleInputChange}
        />

        <button
          type="button"
          onClick={handleApplyClick}
          className="rounded-[4px] border-[1px] border-solid border-[#007074] px-[24px] py-[8px] text-[14px] font-medium leading-[24px] text-[#696969] shadow-[0_2px_20px_0px_rgba(0,0,0,0.15)] hover:bg-[#007074] hover:text-white "
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default VoucherCode;
