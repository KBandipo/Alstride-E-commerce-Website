"use client";
import React from "react";

import { Carousel } from "flowbite-react";
import Button from "./HomeComponents/Button";

function HeroSection() {
  return (
    <>
      <div className="h-[95vh]">
        <Carousel slideInterval={2000}>
          {/* Carousel content 1 */}
          <div className="flex justify-between bg-gradient-to-l from-[#007074] to-[#000]">
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

          <div className=" flex justify-center bg-[#F7E7CE] text-[#444] ">
            {/* Main(center) content */}
            <div className="relative w-[65%] pt-[80px] text-center ">
              <h1 className="text-[61px] font-normal leading-[72px]">
                Step into style, <br />
                <span className="font-bold">STRIDE WITH CONFIDENCE!</span>
              </h1>

              <div className=" pb-[20px] pt-[150px] ">
                <h4 className="pb-[30px] text-[31px] font-normal leading-[40px] ">
                  Unique designs that blend fashion with functionality.
                </h4>
                <div className="flex justify-center">
                  <Button
                    title="Shop Now"
                    iconsrc="public/homePageImages/arrow-down-icons.svg"
                    iconAlt="arrow-down-icons"
                    borderColor="border-[#007074]"
                    textColor="text-[#007074]"
                  />
                </div>
              </div>
            </div>
            <img
              src="/homePageImages/man-wearing-brown-leather-loafer-shoes1.svg"
              alt="man-wearing-brown-leather-loafer-shoes1"
              className="absolute left-[5%] top-[0%] h-auto w-[43%]"
            />

            <img
              src="public/homePageImages/pexels-karolina-grabowska.svg"
              alt="pexels-karolina-grabowska"
              className="absolute right-[3%] top-[0%] h-auto w-[43%]"
            />
          </div>

          {/* Carousel content 3 */}
          <div className="box-border flex max-h-[90vh] overflow-hidden">
            <div className=" max-h-full max-w-[57%] ">
              <img
                src="public/homePageImages/alstride photo1.svg"
                alt="chtree1.svg"
                className=" h-full w-full"
              />
            </div>
            <div className="max-h-[90vh] w-[43%] bg-[#007074]">
              <img
                src="public/homePageImages/full-shot-smiley-man-with-shopping-bags1.svg"
                alt="pexels-karolina-grabowska"
                className=" h-full w-full"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default HeroSection;
