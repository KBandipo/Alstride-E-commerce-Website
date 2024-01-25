import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function LatestDropAccount() {
  const latestShoes = [
    {
      id: 1,
      name: "Men’s Shoes",
      image: "/homePageImages/latest-drop-1.svg",
      discount: "UP TO 20% OFF",
      description: "For every occasion",
    },
    {
      id: 2,
      name: "Women’s Shoes",
      image: "/homePageImages/latest-drop-2.svg",
      discount: "UP TO 20% OFF",
      description: "Everyday Comfort",
    },
    {
      id: 3,
      name: "Heels",
      image: "/homePageImages/new-heels-latest-drop-3.svg",
      discount: "UP TO 20% OFF",
      description: "Open-Air Elegance",
    },
    {
      id: 4,
      name: "Boots",
      image: "/homePageImages/latest-drop-boots.svg",
      discount: "UP TO 20% OFF",
      description: "Built for durability",
    },

    {
      id: 5,
      name: "Sneakers",
      image: "/homePageImages/discount-image-3.svg",
      discount: "UP TO 20% OFF",
      description: "Elegance Trek",
    },

    {
      id: 6,
      name: "Mens Shoes",
      image: "/homePageImages/discount-image-2.svg",
      discount: "UP TO 20% OFF",
      description: "Elegance Trek",
    },

    // {
    //   id: 7,
    //   name: "Flat forms",
    //   image: "/homePageImages/discount-image-1.svg",
    //   discount: "UP TO 20% OFF",
    //   description: "Elegance Trek",
    // },

    // {
    //   id: 8,
    //   name: "Sandals",
    //   image: "/homePageImages/latest-drop-sandals.svg",
    //   discount: "UP TO 20% OFF",
    //   description: "Elegance Trek",
    // },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(latestShoes.length / itemsPerPage);

  useEffect(() => {
    // carousel every 4000 milliseconds (4 seconds)
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 4000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentPage, totalPages]);

  return (
    <>
      <div className="">
        <h3 className="mb-[30px] text-center  text-xl font-medium text-[#007074] sm:text-2xl lg:text-[31px] lg:leading-[48px]">
          The Latest Drops
        </h3>

        <div className="flex justify-end">
          <img
            src="/homePageImages/slode-indicator.svg"
            alt="slide-indicator"
          />
        </div>
      </div>
      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      {/* Slides */}
      <div className="relative  mt-[30px] flex flex-col-reverse justify-between sm:flex-row  sm:flex-wrap ">
        {latestShoes
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((shoe) => (
            <div
              key={shoe.id}
              className="mb-[150px] h-[90vh] w-full px-2 sm:mt-0 sm:w-[50%] lg:w-[33%]"
            >
              {/* Product Image */}
              <div
                className="flex h-[84%] w-auto items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${shoe.image})` }}
              >
                <div className="text-[#FEFDFA]">
                  <h4 className="mb-[40px]  text-xl font-bold sm:text-2xl lg:text-[31px] lg:leading-[48px] ">
                    {shoe.discount}
                  </h4>
                  <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl  xl:text-[49px] xl:leading-[64px] ">
                    {shoe.name}
                  </h2>
                </div>
              </div>

              <div className="mb-[155px] mt-[32px] text-center">
                <h4 className="mb-[52px] text-lg font-bold leading-[40px] text-[#474C50] sm:text-xl md:text-2xl lg:text-3xl xl:text-[31px]">
                  {shoe.description}
                </h4>
                <button className="rounded-[5px] border-[1px] border-solid border-black bg-white px-[30px] py-[15px] text-lg font-medium text-[#474C50] sm:text-xl md:text-2xl lg:px-[80px]  lg:py-[25px] lg:text-3xl xl:text-[31px] xl:leading-[40px]">
                  <Link to="/sign-in">Shop Now</Link>
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default LatestDropAccount;
