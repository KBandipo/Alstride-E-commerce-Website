import React from "react";

function DiscountSection() {
  // discount Products
  const discountedProducts = [
    {
      id: 1,
      name: "Flat forms",
      image: "public/homePageImages/discount-image-1.svg",
      text: "Up to 20% off  Flat forms",
    },
    {
      id: 2,
      name: "Mens Shoes",
      image: "public/homePageImages/discount-image-2.svg",
      text: "Up to 40% off Mens Shoes",
    },
    {
      id: 3,
      name: "Sneakers",
      image: "public/homePageImages/discount-image-3.svg",
      text: "Up to 20% off Sneakers",
    },
  ];

  return (
    <>
      <div className="mt-[30px]  grid grid-cols-1 gap-6 overflow-hidden sm:grid-cols-3">
        {discountedProducts.map((product) => (
          <div
            key={product.id}
            className=" grid h-auto w-full grid-rows-[auto_auto] overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />

            {/* Add to Cart Button */}

            <div className="bg-[#1D1D1DE6] text-center">
              <button className="py-[40px]  text-[20px] font-bold leading-[40px] text-white ">
                {product.text}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DiscountSection;
