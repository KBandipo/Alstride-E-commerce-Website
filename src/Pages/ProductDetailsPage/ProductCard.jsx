// Original ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Cartfolder/CartContext';

const ProductCard = ({ id, name, image, price, discountPrice }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id,
        name,
        image,
        price,
        quantity: 1, // You can set the initial quantity as needed
      },
    });
  };

  const hasDiscount = discountPrice && discountPrice < price;

  return (
    <div className="mx-4 my-4 relative h-[259px] w-[200px] lg:w-[300px] lg:h-[350px] bg-[#FDF8F0] border  hover:transform hover:scale-105">
      <Link to={`/product/${id}`}>
        <div className="p-6 rounded-lg shadow-md h-full">
          <img className="object-cover mb-4" src={image} alt={name} />
          <div className="text-center">
            <h2 className="text-xl font-semibold">{name}</h2>
            <div className="flex justify-center items-center">
              {hasDiscount && (
                <>
                  <span className="text-gray-500 line-through mr-2">${price}</span>
                  <span className="text-[#007074]">${discountPrice}</span>
                </>
              )}
              {!hasDiscount && <span className="text-gray-600">${price}</span>}
            </div>
          </div>
        </div>
      </Link>

      <button onClick={handleAddToCart} className="absolute bottom-[-40px] ml-[110px] w-[82px] h-[82px] cursor-pointer">
        <img src="/image/Carticon.svg" alt="Cart Icon" />
      </button>
    </div>
  );
};

export default ProductCard;
