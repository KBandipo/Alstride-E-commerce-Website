// ProductDetailsPage.js

import React, { useState } from 'react';

// Sample product data
const productData = {
  id: 1,
  name: 'Sample Product',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price: 100,
  discountPrice: 80,
  colors: ['Red', 'Blue', 'Green'],
  sizes: ['S', 'M', 'L', 'XL'],
  deliveryInfo: 'Free shipping on orders over $50',
  returnsInfo: '30-day return policy',
  specifications: {
    weight: '1.5 kg',
    dimensions: '10 x 20 x 5 cm',
  },
  reviews: [
    { id: 1, user: 'User1', rating: 4, comment: 'Great product!' },
    { id: 2, user: 'User2', rating: 5, comment: 'Excellent quality.' },
    // ... more reviews
  ],
  relatedProducts: [
    { id: 2, name: 'Related Product 1', price: 120 },
    { id: 3, name: 'Related Product 2', price: 90 },
    // ... more related products
  ],
};

const ProductDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Add logic to add the product to the cart
    console.log(`Added ${quantity} ${selectedColor} ${selectedSize} to cart.`);
  };

  const handleBuyNow = () => {
    // Add logic for the buy now functionality
    console.log(`Buying ${quantity} ${selectedColor} ${selectedSize} now.`);
  };

  return (
    <div>
      <h1>{productData.name}</h1>
      <p>{productData.description}</p>
      <p>Price: ${productData.discountPrice} (Discounted from ${productData.price})</p>

      <div>
        <label htmlFor="color">Color:</label>
        <select id="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
          {productData.colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="size">Size:</label>
        <select id="size" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
          {productData.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleBuyNow}>Buy Now</button>

      <h2>Delivery Information</h2>
      <p>{productData.deliveryInfo}</p>

      <h2>Returns Information</h2>
      <p>{productData.returnsInfo}</p>

      <h2>Specifications</h2>
      <ul>
        {Object.entries(productData.specifications).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>

      <h2>Reviews</h2>
      <ul>
        {productData.reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.user}</strong> rated it {review.rating}/5 - {review.comment}
          </li>
        ))}
      </ul>

      <h2>Related Products</h2>
      <ul>
        {productData.relatedProducts.map((relatedProduct) => (
          <li key={relatedProduct.id}>
            <strong>{relatedProduct.name}</strong> - ${relatedProduct.price}
          </li>
        ))}
      </ul>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

const Footer = () => {
  return <footer>This is the footer content.</footer>;
};

export default ProductDetailsPage;
