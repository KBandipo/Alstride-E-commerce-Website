import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ id, name, image, price, discountPrice }) {
  const hasDiscount = discountPrice && discountPrice < price;

  return (
    <div className=" mx-4 my-4 relative w-[300px] h-[400px] bg-[#FDF8F0] border " >
    <Link to={`/product/${id}`}>
      <div className=" p-6 rounded-lg shadow-md h-full">
        <img className="w-[330px]  object-cover mb-6" src={image} alt={name} />
        <div className="text-center">
          <h2 className="text-xl font-semibold">{name}</h2>
          <div className="flex justify-center items-center">
            {hasDiscount && (
              <>
                <span className="text-gray-500 line-through mr-2">${price}</span>
                <span className="text-red-500">${discountPrice}</span>
              </>
            )}
            {!hasDiscount && <span className="text-gray-600">${price}</span>}
          </div>
        </div>
      </div>
    </Link>
    <div className='absolute bottom-0 left-0 right-0 p-4  flex justify-center items-center'>
      <Link to="/cart">
        <img 
          src="public/image/Carticon.svg" 
          alt="Cart Icon"
          className="w-[82px] h-[82px]  cursor-pointer"
        />
      </Link>
    </div>
  </div>
  );
}

export default ProductCard;
