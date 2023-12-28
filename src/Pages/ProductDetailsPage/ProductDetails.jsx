import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import QuantityButton from './QuantityButton';
import ProductCard from './ProductCard'; // Import the ProductCard component

const existingProducts = [
  {
    id: 3,
    name: 'Shoebaru Max',
    price: 120,
    discountPrice: 100,
    colors: ['Black', 'White', 'Red'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
    image: '/image/one-white-sneaker-shoe-isolated-white 2.svg',
  },
  {
    id: 6,
    name: 'Shoebaru Max',
    price: 120,
    discountPrice: 100,
    colors: ['Black', 'White', 'Red'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
    image: '/image/Sandles 2.svg',
  },
  {
    id: 8,
    name: 'Shoebaru Max',
    price: 120,
    discountPrice: 100,
    colors: ['Black', 'White', 'Red'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
    image: '/image/Golden heels.svg',
  },
  // Add more products as needed
];
function duplicateProduct(originalProduct, newId) {
  return {
    ...originalProduct,
    id: newId,
    // ... (add more details as needed)
  };
}

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();

  // Define the conditions for each link to be active
  const isHome = location.pathname === '/home';
  const isShop = location.pathname === '/';
  const isProduct = location.pathname === `/product/${id}`;

  // Fetch product details based on the id (you need to implement this)
  const productDetails = getProductDetailsById(id);
  const [activePages, setActivePages] = useState({
    part1: 'Description',
    part2: 'Delivery',
  });

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  const [currentImage, setCurrentImage] = useState(productDetails.image);
  const image1 = '/image/women-s-red-high-heel-shoes-formal-fashion (1) 2.svg';
  const image2 = '/image/portrait-woman-s-legs-with-stylish-high-heels-pantyhose (2) 1.svg';

  const handleSwitchImage = (newImage) => {
    setCurrentImage(newImage);
  };

  const colors = ['red', 'black', 'gray'];
  const [selectedColor, setSelectedColor] = useState('');

  // Dummy data for illustration
  const sizes = ['32', '34', '36', '38', '40', '42', '44', '46', '48'];
  const [selectedSize, setSelectedSize] = useState('');
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

  // Create related products using the duplicateProduct function
  const relatedProducts = [
    duplicateProduct(existingProducts.find(product => product.id === 3), 13),
    duplicateProduct(existingProducts.find(product => product.id === 6), 14),
    duplicateProduct(existingProducts.find(product => product.id === 8), 15),
  ];

  return (
   
    <div className=" w-full bg-[#F6F8F9]">
       <div className='bg-[#F7E7CE] w-full h-[80px] '>
        <h1 className='text-center text-[31px] font-bold leading-[40px]'>Shop</h1>
        <p className='text-center'>
        <Link to='/home' className={isHome ? 'text-[#007074]' : 'text-black'}>
            Home
          </Link>{' '}
          /{' '}
          <Link to='/' className={isShop ? 'text-[#007074]' : 'text-black'}>
            Shop
          </Link>{' '}
          /{' '}
          {/* Conditionally set the color for the product name */}
          <span className={isProduct ? 'text-[#007074]' : 'text-black'}>
            {productDetails.name}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className=' relative mx-auto md:ml-[100px] w-[500px]  mt-[80px] max-h-96 object-cover mb-6 p-6 rounded-lg shadow-md  bg-[#FDF8F0]'>
      {/* Main Image */}
      <img
        className="mx-auto mb- w-[340px] "
        src={currentImage}
        alt={productDetails.name}
      />

      {/* Smaller Containers */}
      <div className="flex absolute bottom-[-150px] gap-6 justify-between ">
        <div
          className="w-[150px] h-[100px] border border-[#007074] border-soli cursor-pointer"
          onClick={() => handleSwitchImage(image1)}
        >
          <img
            className="w-full h-full object-cover rounded-md"
            src={image1}
            alt="Image 1"
          />
        </div>

        <div
          className="w-[100px] h-[100px] border border-[#007074] border-soli cursor-pointer "
          onClick={() => handleSwitchImage(image2)}
        >
          <img
            className="w-full h-full object-cover rounded-md"
            src={image2}
            alt="Image 2"
          />
        </div>
      </div>
    </div>
      <div className='w-[500px] mx-auto md:ml-[100px]'>
        <div className='mt-[80px]'>
          <h2 className="text-3xl font-semibold mb-2">{productDetails.name}</h2>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold mr-2">
              ${productDetails.discountPrice}
            </span>
            {productDetails.discountPrice < productDetails.price && (
              <span className="text-gray-500 line-through">${productDetails.price}</span>
            )}
          </div>
          <div>
        <h1 className='mb-[15px] font-bold'>Sizes</h1>
      {/* First line */}
      <div className="flex mb-4">
        {sizes.slice(0, 4).map((size) => (
          <div
          key={size}
          className={`size-box mr-4 ${selectedSize === size ? 'border-blue-500' : 'border-[#99A6AE]'}`}
          onClick={() => setSelectedSize(size)}
        >
          <input
            type="text"
            value={size}
            readOnly
            className="w-[65px] h-[60px] bg-[#F6F8F9] rounded border p-2"
            style={{ borderColor: selectedSize === size ? '#3182CE' : '#99A6AE' }}
          />
        </div>
        ))}
      </div>

      {/* Second line */}
      <div className="flex mb-4">
        {sizes.slice(4, 8).map((size) => (
          <div
          key={size}
          className={`size-box mr-4 ${selectedSize === size ? 'border-blue-500' : 'border-[#99A6AE]'}`}
          onClick={() => setSelectedSize(size)}
        >
          <input
            type="text"
            value={size}
            readOnly
            className="w-[65px] h-[60px] bg-[#F6F8F9] rounded border p-2"
            style={{ borderColor: selectedSize === size ? '#3182CE' : '#99A6AE' }}
          />
        </div>
        ))}
      </div>

      {/* Third line */}
      <div className="flex">
        <div
          className={`size-box ${selectedSize === sizes[8] ? 'border-blue-500' : 'border-gray-300'}`}
           onClick={() => setSelectedSize(sizes[8])}
          >
          <input
            type="text"
            value={sizes[8]}
            readOnly
            className="w-[65px] h-[60px] bg-[#F6F8F9] border rounded p-2"
            style={{ borderColor: selectedSize === sizes[8] ? '#3182CE' : '#99A6AE' }}
            />
          </div>
          </div>
           </div>

          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Colour</h2>
            <div className="flex items-center gap-[20px] ">
              {colors.map((color) => (
              <div
               key={color}
                className={`color-box mr-4 ${selectedColor === color ? 'border-2 border-blue-500' : 'border-2 border-gray-300'}`}
                style={{ backgroundColor: color, width: '67px', height: '67px', borderRadius: '50%', cursor: 'pointer' }}
                onClick={() => setSelectedColor(color)}
            
                />
                ))}
              </div>
              </div>

   
            <div className='flex gap-[60px]'>
              <div className="mb-4">
                <label htmlFor="quantity" className="mr-2 font-semibold">
                Quantity:
              </label>
                <QuantityButton
               quantity={quantity}
              onIncrease={() => setQuantity(quantity + 1)}
              onDecrease={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              />
              </div>
              <div className='mt-[23px]'>
                <button  className="bg-[#F6F8F9] w-[150px] h-[45px] justify-center  text-[#007074]  rounded inline-flex items-center  border border-[#007074] border-solid "
                  onClick={handleAddToCart}>Add to Cart</button>
              </div>
              </div>
              <button
              className="bg-[#007074] w-[310px] h-[56px] text-white px-4 py-2 rounded "
              onClick={handleBuyNow}>
              Buy Now
            </button>

              <div className='flex mt-[30px] gap-4'>
            <p > Avaliable: </p> <p>  In stock</p>
          </div>
          <div className='flex gap-4 mt-[30px]'>
            <p className=''>Share:</p>
            <img src="/image/Group.svg" alt="pin" />
            <img src="/image/Facebook Icon.svg" alt="facebook" />
            <img src="/image/Instagram Icon.svg" alt="instagram" />
          </div>
          <div className='flex bg-[#F6F8F9] mt-[40px] w-[150px] h-[25px] justify-center items-center border border-[#C5CED4] border-solid rounded-full'>
            <img src="/image/LocationMarkerOutline.svg" alt="" className="w-4 h-4 mr-2" />
            <p>Ship to Nigeria</p>
            </div>
              <div>

              </div>
              </div>
              </div>
              </div>

       <div className="mt-8 flex ml-[100px]">
       {/* First Part: Description and Review */}
       <div className="flex-1 pr-4">
         <div className="flex space-x-4">
           <div
             onClick={() => setActivePages({ ...activePages, part1: 'Description' })}
             className={`cursor-pointer ${activePages.part1 === 'Description' ? ' border-b-2 border-[#00666A]' : ''}`}
           >
             <span className="pb-2 inline-block">Description</span>
           </div>
           <div
             onClick={() => setActivePages({ ...activePages, part1: 'Review' })}
             className={`cursor-pointer ${activePages.part1 === 'Review' ? ' border-b-2 border-[#00666A]' : ''}`}
           >
              <div className="flex items-center">
  <span className="pb-2">Review</span>
  <img src="/image/Star 1.svg" alt="Review Icon" className="w-4 h-4 mr-2" />
  <span className="pb-2">4.00</span>
</div>
           </div>
         </div>
         {/* Content for the Description and Review pages */}
         <div>
           {/* Content for the Description page */}
           {activePages.part1 === 'Description' && (
             <div>
               <p className='mt-4'>The "Red Prada Heel" blends timeless elegance with modern flair, perfect for the trendsetting woman. Crafted from premium red leather, it exudes style and confidence. Its pointed toe design adds sophistication, ideal for various outfits. </p>

               <p className='mt-4'>Perched on a 4-inch stiletto, these heels enhance your stature, offering a graceful profile. The slim, robust heel makes an impactful statement. Comfort is key, with a cushioned insole for extended wearability. The interior is smooth for comfort, preventing abrasion.</p>

               <p className='mt-4'>The durable synthetic sole ensures stability and traction. These versatile heels suit formal events and casual outings alike, complementing dresses and business wear seamlessly. Packaged in a branded box with a dust bag, these heels are more than footwear; they're an investment in enduring style and quality.</p>
             </div>
           )}
           {/* Content for the Review page */}
           {activePages.part1 === 'Review' && (
              <div className="flex-1">
               <p>Review Content...</p>
             </div>
           )}
         </div>
       </div>
 
       {/* Vertical Line Separator */}
       <div className="border-l border-gray-300 h-auto"></div>
 
       {/* Second Part: Delivery, Returns, and Warranty */}
       <div className="flex-1 pl-4">
         <div className="flex space-x-4">
           <div
             onClick={() => setActivePages({ ...activePages, part2: 'Delivery' })}
             className={`cursor-pointer ${activePages.part2 === 'Delivery' ? ' border-b-2 border-[#00666A]' : ''}`}
           >
             <span className="pb-2 inline-block">Delivery</span>
           </div>
           <div
             onClick={() => setActivePages({ ...activePages, part2: 'Returns' })}
             className={`cursor-pointer ${activePages.part2 === 'Returns' ? ' border-b-2 border-[#00666A]' : ''}`}
           >
             <span className="pb-2 inline-block">Returns</span>
           </div>
           <div
             onClick={() => setActivePages({ ...activePages, part2: 'Warranty' })}
             className={`cursor-pointer ${activePages.part2 === 'Warranty' ? ' border-b-2 border-[#00666A]' : ''}`}
           >
             <span className="pb-2 inline-block">Warranty</span>
           </div>
         </div>
         {/* Content for the Delivery, Returns, and Warranty pages */}
         <div>
           {/* Content for the Delivery page */}
           {activePages.part2 === 'Delivery' && (
             <div>
               <p className='mt-4'>Fast & Reliable Shipping
                  Standard Delivery: Estimated 3-5 business days. Shipping cost: $4.99.
                  Express Delivery: Estimated 1-2 business days. Shipping cost: $9.99.
                  Free Standard Shipping on orders over $50.</p>


                <p className='mt-8'>Tracking Your Order
                  Receive a tracking number via email once your order is dispatched.</p>
                  </div>
           )}
           {/* Content for the Returns page */}
           {activePages.part2 === 'Returns' && (
             <div>
               <p>Returns Content...</p>
             </div>
           )}
           {/* Content for the Warranty page */}
           {activePages.part2 === 'Warranty' && (
             <div>
               <p>Warranty Content...</p>
             </div>
           )}
         </div>
       </div>
     </div>
      <div className="mt-8">
  <h2 className="text-2xl font-semibold mb-4 text-center">Related Products</h2>
  <div className="flex ml-[100px]">
    {relatedProducts.slice(0, 3).map(product => (
      <ProductCard
        key={product.id}  
        id={product.id}
        name={product.name}
        image={product.image}
        price={product.price}
        discountPrice={product.discountPrice}
      />
    ))}
  </div>
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
