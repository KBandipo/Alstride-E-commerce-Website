import React from "react";
import { Link } from "react-router-dom";

function ProductCardComp({ id, name, image, price, discountPrice }) {
  const hasDiscount = discountPrice && discountPrice < price;

  return (
    <div className="relative w-full border bg-[#FDF8F0] hover:scale-105 hover:transform  md:h-[350px] ">
      <Link to={`/product/${id}`}>
        <div className="h-full rounded-lg p-6 shadow-md">
          <img className="mb-4 object-cover" src={image} alt={name} />
          <div className="text-center">
            <h2 className="text-xl font-semibold">{name}</h2>
            <div className="flex items-center justify-center">
              {hasDiscount && (
                <>
                  <span className="mr-2 text-gray-500 line-through">
                    ${price}
                  </span>
                  <span className="text-[#007074]">${discountPrice}</span>
                </>
              )}
              {!hasDiscount && <span className="text-gray-600">${price}</span>}
            </div>
          </div>
        </div>
      </Link>

      <Link to={`/product/${id}`}>
        {/* Ensure the to prop includes the correct product ID */}
        <img
          src="/homePageImages/cartIcon.svg"
          alt="Cart Icon"
          className="absolute bottom-[-15%] right-[42%] h-[82px] w-[82px] cursor-pointer"
        />
      </Link>
    </div>
  );
}

export default ProductCardComp;
