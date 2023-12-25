import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  // Fetch product details based on the id (you need to implement this)
  // For simplicity, let's assume you have a function to get product details
  const productDetails = getProductDetailsById(id);

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  const [selectedColor, setSelectedColor] = useState(productDetails.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productDetails.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Add logic to add the product to the cart
    console.log(`Added ${quantity} ${selectedColor} ${selectedSize} to cart.`);
  };

  const handleAddToWishlist = () => {
    // Add logic to add the product to the wishlist
    console.log(`Added ${productDetails.name} to wishlist.`);
  };

  const handleBuyNow = () => {
    // Add logic for the buy now functionality
    console.log(`Buying ${quantity} ${selectedColor} ${selectedSize} now.`);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            className="w-full h-auto max-h-96 object-cover mb-6"
            src={productDetails.image}
            alt={productDetails.name}
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">{productDetails.name}</h2>
          <p className="text-gray-600 mb-4">{productDetails.description}</p>

          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold mr-2">
              ${productDetails.discountPrice}
            </span>
            {productDetails.discountPrice < productDetails.price && (
              <span className="text-gray-500 line-through">${productDetails.price}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="color" className="mr-2 font-semibold">
              Color:
            </label>
            <select
              id="color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {productDetails.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="size" className="mr-2 font-semibold">
              Size:
            </label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {productDetails.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="mr-2 font-semibold">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex space-x-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300"
              onClick={handleAddToWishlist}
            >
              Add to Wishlist
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        {/* Add your review section here */}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        {/* Display related products here */}
      </div>
    </div>
  );
}

// Fetch product details function (replace with your actual implementation)
function getProductDetailsById(id) {
  // Assume you have a list of products and you want to find the one with the given id
  const products = [
    {
      id: 1,
      name: 'Next Gen Heel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/women-s-red-high-heel-shoes-formal-fashion (1) 2.svg',
      // ... (add more details as needed)
    },
    // ... (list of other products)
    {
      id: 2,
      name: 'Shoebaru Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/one-black-sneaker-shoe-isolated-white 2.svg',
      // ... (add more details as needed)
    },
    {
      id: 3,
      name: 'Shoebaru Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/one-white-sneaker-shoe-isolated-white 2.svg',
      // ... (add more details as needed)
    },
    {
      id: 4,
      name: 'Shoebaru Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/one-white-sneaker-shoe-isolated-white (1) 2.svg',
      // ... (add more details as needed)
    },
    {
      id: 5,
      name: 'Shoebaru Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/dress shoes 2.svg',
      // ... (add more details as needed)
    },
    {
      id: 6,
      name: 'Shoebaru Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/Sandles 2.svg',
      // ... (add more details as needed)
    },
    {
      id: 7,
      name: 'Shoebaru Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/Black Boots.svg',
      // ... (add more details as needed)
    },
    {
      id: 8,
      name: 'Shoebaru Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/Golden heels.svg',
      // ... (add more details as needed)
    },
    {
      id: 9,
      name: 'Shoebaru Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/pair-black-classic-men-new 3.svg',
      // ... (add more details as needed)
    },
    {
      id: 10,
      name: 'Shoebaru Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/oswald-elsaboath-_bHENmPJrTA-unsplash 1.svg',
      // ... (add more details as needed)
    },
    {
      id: 11,
      name: 'Shoebaru Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/Yellow Shoes.svg',
      // ... (add more details as needed)
    },
    {
      id: 12,
      name: 'Shoebaru Max',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 120,
      discountPrice: 100,
      colors: ['Black', 'White', 'Red'],
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      image: '/image/white converse 1.svg',
      // ... (add more details as needed)
    },
  ];
  return products.find((product) => product.id === parseInt(id, 10));
}

export default ProductDetails;
