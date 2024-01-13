import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LatestDrop() {
  const latestShoes = [
    {
      id: 1,
      name: "Men’s Shoes",
      image: "/homePageImages/latest-drop-1.svg",
      discount: "UP TO 20% OFF",
      description: "Shoes for every occasion",
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
      image: "/homePageImages/latest-drop-3.svg",
      discount: "UP TO 20% OFF",
      description: "Open-Air Elegance",
    },
    {
      id: 4,
      name: "Sandals",
      image: "public/homePageImages/latest-drop-boots.svg",
      discount: "UP TO 20% OFF",
      description: "Elegance Trek",
    },
    {
      id: 5,
      name: "Shoes",
      image: "public/homePageImages/latest-drop-sandals.svg",
      discount: "UP TO 20% OFF",
      description: "Elegance Trek",
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(latestShoes.length / itemsPerPage);

  useEffect(() => {
    // Auto-advance the carousel every 2000 milliseconds (2 seconds)
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 4000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentPage, totalPages]);

  return (
    <>
      <div className="">
        <h3 className="text-center text-[31px] font-medium leading-[48px] text-[#007074]">
          The Latest Drops
        </h3>

        <div className="flex justify-end">
          <img
            src="/homePageImages/slode-indicator.svg"
            alt="slide-indicator"
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mb-[155px] mt-[30px] flex h-[1000px] overflow-hidden">
        {latestShoes
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((shoe) => (
            <div key={shoe.id} className="h-[90%] w-[33%] px-2">
              {/* Product Image */}
              <div
                className="flex h-[84%] w-auto items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${shoe.image})` }}
              >
                <div className="text-[#FEFDFA]">
                  <h4 className="mb-[40px] text-[31px] font-bold leading-[40px] ">
                    {shoe.discount}
                  </h4>
                  <h2 className="text-[49px] font-bold leading-[64px] ">
                    {shoe.name}
                  </h2>
                </div>
              </div>

              <div className="mt-[32px] pb-[155px] text-center">
                <h4 className="mb-[52px] text-[31px] font-bold leading-[40px] text-[#474C50]">
                  {shoe.description}
                </h4>
                <button className="rounded-[5px] border-[1px] border-solid border-black bg-white px-[80px] py-[25px] text-[31px] font-medium leading-[40px] text-[#474C50]">
                  <Link to="/sign-in">Shop Now</Link>
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default LatestDrop;
