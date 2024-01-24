import React from 'react'
import { Link } from "react-router-dom";
import FreeShippingComponent from '../../Page/homePageFolder/HomeComponents/FreeShippingComponent';



function FreeShippingAccount() {
  return (
    <>
       <div className="mb-[33px] mt-[24px] grid gap-[10px] sm:grid-cols-[1fr_1fr_1fr]">
        <FreeShippingComponent
          imageSource="/homePageImages/delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package-isolated-grey-studio-background-copy-space.svg"
          imageAlt="delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package"
          textHeading="FREE SHIPPING"
          textdescription="Free shipping on all orders"
        />
        <FreeShippingComponent
          imageSource="/homePageImages/person-office-during-work-day.svg"
          imageAlt="person-office-during-work-day"
          textHeading="ONLINE SUPPORT"
          textdescription="24/7 customer support"
        />
        <FreeShippingComponent
          imageSource="/homePageImages/hands-putting-banknotes-envelope.svg"
          imageAlt="hands-putting-banknotes-envelope"
          textHeading="MONEY RETURN"
          textdescription="Back guarantee under 5 days"
        />
      </div>

      {/* Christmas sales */}
      <div className="flex justify-center bg-[#F7E7CE]">
        <div className=" grid w-[95%] sm:grid-cols-[1fr_1fr] ">
          <div className="self-center ">
            <h4 className="text-base font-medium text-[#444] sm:text-lg lg:text-[31px] lg:leading-[40px] ">
              Christmas and New Year Sales!
            </h4>
            <h6 className="mt-[16px] text-sm font-normal text-black sm:text-base lg:text-[20px] lg:leading-[24px] ">
              A whopping 40% off on some of our selected shoes! Offer ends in 48
              hours
            </h6>
          </div>
          <div className="flex h-full  justify-between">
            <div className="self-center pt-[40px] sm:pl-12 sm:pt-0">
              <Link to="/sign-in">
                <button className="cursor-pointer rounded-[4px] bg-[#00666A]   px-[10px] py-[5px] text-sm font-medium text-white  lg:px-[40px] lg:py-[16px] lg:text-[18px] lg:leading-[24px]">
                  Shop Now
                </button>
              </Link>
            </div>
            <div>
              <img
                src="/homePageImages/Christmass-tree.svg"
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

export default FreeShippingAccount