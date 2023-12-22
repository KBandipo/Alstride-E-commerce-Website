import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ id, name, image, price, discountPrice }) {
  const hasDiscount = discountPrice && discountPrice < price;

  return (
    <div className='bg-[#FDF8F0] w-full border '>
      <Link to={`/product/${id}`}>
        <div className=' '>
          <img className='w-[220px] mx-auto' src={image} alt={name} />
          <div>
            <h2>{name}</h2>
            <div>
              {hasDiscount && (
                <>
                  <span>${price}</span>
                  <span>${discountPrice}</span>
                </>
              )}
              {!hasDiscount && <span>${price}</span>}
            </div>
          </div>
        </div>
      </Link>
      <div>
        <Link to="/cart">
          <img src="public/image/Carticon.svg" alt="Cart Icon" />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
