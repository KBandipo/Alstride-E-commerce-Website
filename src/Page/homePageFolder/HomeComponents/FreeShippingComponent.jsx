import React from "react";

function FreeShippingComponent({
  imageSource,
  imageAlt,
  textHeading,
  textdescription,
}) {
  return (
    <>
      <div className="flex h-[100px]  rounded-[5px] bg-gradient-to-r from-[#007074] to-[#0091969F] text-[#F6F8F9]">
        <div className="w-[50%] grow ">
          <img src={imageSource} alt={imageAlt} className=" h-full w-[100%]" />
        </div>
        <div>
          <h3 className=" pr-[3px] text-[18px] font-medium leading-[50px] ">
            {textHeading}
          </h3>
          <p className=" pr-[3px] text-[16px] font-normal leading-[50px] ">
            {textdescription}
          </p>
        </div>
      </div>
    </>
  );
}

export default FreeShippingComponent;
