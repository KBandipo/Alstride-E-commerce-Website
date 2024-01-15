import React, { useState, useEffect } from "react";

function TestimonialSection() {
  const imagePaths = [
    "/homePageImages/Customer Review 1.svg",
    "/homePageImages/Customer Review 2.svg",
    "/homePageImages/Customer Review 3.svg",
    "/homePageImages/Customer Review 4.svg",
    "/homePageImages/Customer Review Comment 5.svg",
    "/homePageImages/Customer Review Comment 6.svg",
    "/homePageImages/Customer Review Comment 7.svg",
    "/homePageImages/Customer Review Comment 8.svg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + imagePaths.length) % imagePaths.length,
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imagePaths.length);
  };

  useEffect(() => {
    // Automatically change the slide every 3000ms (3 seconds)
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imagePaths.length);
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [imagePaths.length]);

  return (
    <>
      <div className="mt-[60px] text-center">
        <h3 className="text-2xl font-medium text-[#007074] sm:text-3xl lg:text-[31px] lg:leading-[48px] ">
          Wondering whether to go ahead with your purchase?
        </h3>
        <h5 className="text-base font-normal text-[#444] sm:text-lg lg:text-xl xl:text-[25px] xl:leading-[32px] ">
          Browse through our customer reviews
        </h5>
      </div>

      {/* Carousel */}

      <div className="relative mb-[50px] flex w-full items-center justify-center ">
        <button
          aria-label="Slide back"
          type="button"
          className="focus:ri focus:ri focus:ri absolute left-0 z-30 ml-10 rounded-full bg-opacity-50 p-2 focus:outline-none dark:bg-gray-900 focus:dark:bg-gray-400"
          onClick={handlePrevSlide}
        >
          <svg
            width="8"
            height="14"
            fill="none"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white sm:text-[#549FA2]"
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
        <div className="mx-auto h-full w-full items-center justify-start gap-6 space-y-[30px] overflow-hidden py-4 sm:flex lg:gap-8">
          {/* Map over a range of three indices based on the currentSlide */}
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="relative flex h-full w-auto flex-shrink-0 sm:h-[500px] sm:w-[34%]"
            >
              <img
                className="aspect-square h-full object-cover object-center "
                src={imagePaths[(currentSlide + index) % imagePaths.length]}
                alt={`Image ${
                  ((currentSlide + index) % imagePaths.length) + 1
                }`}
              />
            </div>
          ))}
        </div>
        <button
          aria-label="Slide forward"
          id="next"
          className="focus:ri focus:ri focus:ri absolute right-0 z-30 mr-10 rounded-full bg-opacity-50 p-2 focus:outline-none dark:bg-gray-900 focus:dark:bg-gray-400"
          onClick={handleNextSlide}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white sm:text-[#549FA2]"
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
      </div>
    </>
  );
}

export default TestimonialSection;
