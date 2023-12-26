import React from "react";
import Button from "./HomeComponents/Button";

function HeroSection() {
  return (
    <>
      {/* Carousel content 1 */}
      <div className="flex hidden justify-between bg-gradient-to-l from-[#007074] to-[#000]">
        {/* Text(left) Section */}
        <div className="40% pl-[109px] pt-[141px] text-white">
          <h1 className="text-[61px] font-normal leading-[72px] ">
            Every little step
            <br />
            <span className="font-bold "> leads to success</span>
          </h1>

          <h2 className="[leading-64px] mt-[42px] text-[40px] font-bold ">
            FOOTSUBISHI MAX
          </h2>
          <p className="mb-[83px] mt-[35px] text-[31px] font-normal leading-[40px] ">
            Unique designs that blend fashion with functionality.
          </p>
          <Button
            title="Shop Now"
            iconsrc="public/homePageImages/arrow-right-icons.svg"
            iconAlt="arrow-right-icons"
            borderColor="[#FEFDFA]"
          />
        </div>
        {/* Image(right) section */}
        <div className="w-[60%]">
          <div className=" h w-full overflow-hidden">
            <img
              src="/homePageImages/one-white-sneaker-shoe-isolated-white.svg"
              alt="one-white-sneaker-shoe-isolated-white"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex justify-between pr-[25px]">
            <div className="relative flex w-[45%]">
              <div className=" w-[36%]  bg-[#F7E7CE]"></div>
              <div className="w-[64%] bg-[#FEFDFA] px-[7px] text-[20px] font-bold leading-[24px] ">
                <h6 className=" pt-[8px]">NEXTGEN HEEL</h6>
                <h6 className="font-medium ">Ladie’s Shoes</h6>
                <img src="public/homePageImages/stars.svg" alt="stars" />
                <h6>$130</h6>
              </div>
              <img
                src="/homePageImages/women-s-red-high-heel-shoes-formal-fashion1.svg"
                alt="women-s-red-high-heel-shoes-formal-fashion1"
                className="absolute bottom-[-55%] right-[67%] h-auto w-[208px]"
              />
            </div>

            <div className="relative flex w-[45%]">
              <div className=" w-[36%]  bg-[#F7E7CE]"></div>
              <div className="w-[64%] bg-[#FEFDFA] px-[7px] text-[20px] font-bold leading-[24px] ">
                <h6 className=" pt-[8px]">GLADIATOR PRO</h6>
                <h6 className="font-medium ">Men’s Shoes</h6>
                <img src="public/homePageImages/stars.svg" alt="stars" />
                <h6>$110</h6>
              </div>
              <img
                src="/homePageImages/pair-black-classic-men-new1.svg"
                alt="pair-black-classic-men-new1"
                className="absolute bottom-[-55%] right-[63%] h-auto w-[208px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  Carousel content 2*/}
    </>
  );
}

export default HeroSection;
