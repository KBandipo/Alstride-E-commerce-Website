import React from "react";
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
      name: "Running Shoes",
      image: "/image/passwordRecoveryImage.svg",
      discount: "UP TO 20% OFF",
      description: "Nice shoe",
    },
  ];

  return (
    <>
      <div className="">
        <h3 className="text-center text-[31px] font-medium leading-[48px] text-[#007074] ">
          The Latest Drops
        </h3>

        <div className="flex justify-end">
          <img
            src="/homePageImages/slode-indicator.svg"
            alt="slode-indicator"
          />
        </div>
      </div>
      <div className="mb-[155px] mt-[30px] flex h-[1000px] flex-nowrap space-x-[50px] overflow-hidden">
        {latestShoes.map((shoe) => (
          <div key={shoe.id} className="h-[90%] w-[41%] shrink-0">
            {/* Product Image */}

            <div
              className="flex h-[84%] w-auto items-center justify-center bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${shoe.image})` }}
            >
              <div className="text-[#FEFDFA]  ">
                <h4 className="mb-[40px] text-[31px] font-bold leading-[40px] ">
                  {shoe.discount}
                </h4>
                <h2 className="text-[49px] font-bold leading-[64px] ">
                  {shoe.name}
                </h2>
              </div>
            </div>

            <div className="mt-[32px] pb-[155px] text-center">
              <h4 className="mb-[52px] text-[31px] font-bold leading-[40px] text-[#474C50] ">
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
