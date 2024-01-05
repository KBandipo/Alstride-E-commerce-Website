import React, { useState, useEffect } from "react";

import Button from "./HomeComponents/Button";

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevClick = () => {
    setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    // Automatically change the slide every 2000ms (2 seconds)
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 2000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const slides = [
    // Carousel content 1
    <div
      key={1}
      className="h-full w-full justify-between bg-gradient-to-l from-[#007074] to-[#000] sm:flex"
    >
      {/* Text(left) Section  */}
      <div className="sm:w-40% w-full pt-[30px] text-white sm:pl-[80px] sm:pt-[40px] md:pl-[109px] md:pt-[60px]">
        <div className="text-center sm:text-left">
          <h1 className=" text-3xl font-normal sm:text-4xl md:text-5xl lg:text-[61px] lg:leading-[72px] ">
            Every little step
            <br className="hidden sm:inline" />
            <span className="font-bold "> leads to success</span>
          </h1>

          <h2 className="lg:[leading-64px] mt-2  text-2xl font-bold sm:mt-3 md:text-3xl lg:mt-[42px] lg:text-[40px] ">
            FOOTSUBISHI MAX
          </h2>
          <p className="mb-4  mt-2  text-xl font-normal sm:text-2xl md:mb-[83px]  md:mt-[28px] md:text-[31px] md:leading-[40px] lg:mt-[35px] ">
            Unique designs that blend fashion with functionality.
          </p>

          <div className="flex justify-center sm:block">
            <Button
              title="Shop Now"
              iconsrc="public/homePageImages/arrow-right-icons.svg"
              iconAlt="arrow-right-icons"
              borderColor="[#FEFDFA]"
            />
          </div>
          <div className=" h hidden w-full overflow-hidden">
            <img
              src="/homePageImages/one-white-sneaker-shoe-isolated-white.svg"
              alt="one-white-sneaker-shoe-isolated-white"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/*(right) section */}
      <div className=" mt-[30px] flex w-full shrink-0 justify-center sm:mt-0 sm:block sm:w-[60%]">
        <div className=" mx-auto hidden h-[73%] max-w-full overflow-hidden sm:block">
          <img
            src="/homePageImages/one-white-sneaker-shoe-isolated-white.svg"
            alt="one-white-sneaker-shoe-isolated-white"
            className=" h-full max-w-full object-cover"
          />
        </div>

        <div className="flex w-[60%] flex-col pr-[25px] sm:w-full sm:flex-row sm:justify-between">
          <div className="relative mb-6 flex sm:mb-0 sm:w-[45%]">
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
              className="absolute bottom-[-40%] right-[55%] h-auto  w-[208px] sm:bottom-[-24%] sm:right-[55%] md:bottom-[-36%] md:right-[56%] lg:bottom-[-40%]  lg:right-[60%] xl:bottom-[-52%]  xl:right-[63%]"
            />
          </div>

          <div className="relative mb-6 flex  sm:mb-0 sm:w-[45%]">
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
              className="absolute bottom-[-40%] right-[55%] h-auto  w-[208px] sm:bottom-[-24%] sm:right-[55%] md:bottom-[-36%] md:right-[56%] lg:bottom-[-40%]  lg:right-[60%] xl:bottom-[-52%]  xl:right-[63%]"
            />
          </div>
        </div>
      </div>
    </div>,

    // Carousel content 2
    <div
      key={2}
      className="flex h-full justify-center bg-[#F7E7CE]  text-[#444]"
    >
      {/* Main(center) content */}
      <div className="relative z-[5] w-[65%]  pt-[80px] text-center">
        <h1 className="mb-[65px] bg-[#f7e7ce17] pt-[55px] text-3xl font-normal md:pt-0 lg:text-5xl xl:text-[61px]  xl:leading-[72px]">
          Step into style, <br />
          <span className="font-bold ">STRIDE WITH CONFIDENCE!</span>
        </h1>

        <div className="  ">
          <h4 className="mb-[50px] bg-[#f7e7ce17] text-2xl font-normal leading-[40px] lg:text-[31px] ">
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
        className="absolute left-[1%] top-[0%] h-auto w-[43%]"
      />

      <img
        src="public/homePageImages/pexels-karolina-grabowska.svg"
        alt="pexels-karolina-grabowska"
        className="absolute right-[3%] top-[0%] h-auto w-[43%]"
      />
    </div>,

    // Carousel content 3
    <div
      key={3}
      className="box-border grid max-h-full grid-rows-[auto_1fr] overflow-hidden sm:grid-cols-[auto_auto]"
    >
      <div className=" h-full  ">
        <img
          src="public/homePageImages/alstride photo1.svg"
          alt="chtree1.svg"
          className=" h-full w-full object-cover sm:max-w-[90vh]"
        />
      </div>
      <div className="max-h-full bg-[#007074]">
        <img
          src="public/homePageImages/full-shot-smiley-man-with-shopping-bags1.svg"
          alt="pexels-karolina-grabowska"
          className=" h-full w-full object-cover"
        />
      </div>
    </div>,
  ];

  return (
    <>
      <div className="relative h-[95vh]">
        {slides[activeSlide]}
        {/* Previous button */}
        <button
          type="button"
          className="group absolute start-[-3%] top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          onClick={handlePrevClick}
        >
          {/* ... Previous button SVG and styling */}
          {/* Use your previous button SVG here */}
          <svg
            width="8"
            height="14"
            fill="none"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-black"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        {/* Next button */}
        <button
          type="button"
          className="group absolute end-[-3%] top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          onClick={handleNextClick}
        >
          {/* ... Next button SVG and styling */}
          {/* Use your next button SVG here */}
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-black"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-[2%] left-1/2 flex -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`h-2 w-8 cursor-pointer  ${
                index === activeSlide ? "bg-[#549FA2]" : "bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
