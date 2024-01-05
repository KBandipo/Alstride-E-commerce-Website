import React from "react";
import { Link } from "react-router-dom";

import FreeShippingComponent from "./HomeComponents/FreeShippingComponent";

function FreeShipping() {
  return (
    <>
      <div className="mb-[33px] mt-[24px] grid gap-[10px] sm:grid-cols-[1fr_1fr_1fr]">
        <FreeShippingComponent
          imageSource="public/homePageImages/delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package-isolated-grey-studio-background-copy-space.svg"
          imageAlt="delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package"
          textHeading="FREE SHIPPING"
          textdescription="Free shipping on all orders"
        />
        <FreeShippingComponent
          imageSource="public/homePageImages/person-office-during-work-day.svg"
          imageAlt="person-office-during-work-day"
          textHeading="ONLINE SUPPORT"
          textdescription="24/7 customer support"
        />
        <FreeShippingComponent
          imageSource="public/homePageImages/hands-putting-banknotes-envelope.svg"
          imageAlt="hands-putting-banknotes-envelope"
          textHeading="MONEY RETURN"
          textdescription="Back guarantee under 5 days"
        />
      </div>

      {/* Christmas sales */}
      <div className="flex justify-center bg-[#F7E7CE]">
        <div className=" grid w-[95%] sm:grid-cols-[1fr_1fr] ">
          <div className="self-center ">
            <h4 className="text-[31px] font-medium leading-[40px] text-[#444] ">
              Christmas and New Year Sales!
            </h4>
            <h6 className="mt-[16px] text-[20px] font-normal leading-[24px] text-black ">
              A whopping 40% off on some of our selected shoes! Offer ends in 48
              hours
            </h6>
          </div>
          <div className="flex h-full  justify-between">
            <div className="self-center ">
              <Link to="/sign-in">
                <button className="cursor-pointer rounded-[4px] bg-[#00666A] bg-[18px] px-[40px] py-[16px] font-medium leading-[24px] text-white">
                  Shop Now
                </button>
              </Link>
            </div>
            <div>
              <img
                src="public/homePageImages/Christmass-tree.svg"
                alt="Christmass-tree"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeShipping;
