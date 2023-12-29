import React from "react";
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
      <div></div>
    </>
  );
}

export default FreeShipping;
