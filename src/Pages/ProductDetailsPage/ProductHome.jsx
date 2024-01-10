import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Update with your actual path
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';


function ProductHome() {
  // Assume you have a list of products
  const products = [
    { id: 1, name: 'Next Gen Heel', image: '/image/women-s-red-high-heel-shoes-formal-fashion (1) 2.svg', price: 130.00, discountPrice: 104.00 },
    { id: 2, name: 'Shoebaru Max', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 150.00, discountPrice: 120.00 },
    { id: 3, name: 'Cloud Stride', image: '/image/one-white-sneaker-shoe-isolated-white 2.svg', price: 120.00, discountPrice: 96.00 },
    { id: 4, name: 'Footsubishi Max', image: '/image/one-white-sneaker-shoe-isolated-white (1) 2.svg', price: 130.00, discountPrice: 104.00 },
    { id: 5, name: 'Mystic Journey', image: '/image/dress shoes 2.svg', price: 150.00, discountPrice: 120.00 },
    { id: 6, name: 'Eclipse Runner', image: '/image/Sandles 2.svg', price: 160.00, discountPrice: 128.00 },
    { id: 7, name: 'Urban Pulse', image: '/image/Black Boots.svg', price: 180.00, discountPrice: 144.00 },
    { id: 8, name: 'Elemental Gait', image: '/image/Golden heels.svg', price: 200.00, discountPrice: 160.00 },
    { id: 9, name: 'Gladiator Pro', image: '/image/pair-black-classic-men-new 3.svg', price: 110.00, discountPrice: 88.00 },
    { id: 10, name: 'Infinity Walk', image: '/image/oswald-elsaboath-_bHENmPJrTA-unsplash 1.svg', price: 150.00, discountPrice: 120.00 },
    { id: 11, name: 'Next Gen Heel', image: '/image/women-s-red-high-heel-shoes-formal-fashion (1) 2.svg', price: 130.00, discountPrice: 104.00 },
    { id: 12, name: 'Harmony Hops', image: '/image/white converse 1.svg', price: 140.00, discountPrice: 112.00 },
    // ... Add more products as needed
  ];


  

  

  
  const [sortBy, setSortBy] = useState('Relevance');
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // Perform sorting logic based on the selected option (you need to implement this)
    // For example, you can update the products array based on the selected sorting option
  };


  // Number of products per page
  const productsPerPage = 8;

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first product on the current page
  const startIndex = (currentPage - 1) * productsPerPage;

  // Slice the products array to get the products for the current page
  const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);

 

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const isHome = location.pathname === '/home';
  const isShop = location.pathname === '/';

  return (
    <div className='bg-[#F6F8F9] max-w-[100vw]'>
       <div className="bg-[#F7E7CE] w-full h-[80px] ">
      <h1 className="text-center text-[31px] font-bold leading-[40px]">Shop</h1>
      <p className="text-center">
        <a href="/account-home" className={isHome ? 'text-[#007074]' : 'text-black'}>
          Home
        </a>{' '}
        /{' '}
        <a href="/" className={isShop ? 'text-[#007074]' : 'text-black'}>
          Shop
        </a>
      </p>
    </div>

      
    <div className="flex flex-col-reverse justify-between bg-[#F6F8F9]  md:flex-row">
        
        <div className="w-full p-4 md:w-[28%]">
          
          <div className="">
            <h2 className="mb-4 text-xl font-semibold">Categories</h2>
            <div className="mt-10  w-full">
              <div className="flex gap-[240px]">
                <p className="">Men</p>
                <p className="">(4)</p>
              </div>
              <div className="flex gap-[210px]">
                <p className="">Women</p>
                <p className="">(4)</p>
              </div>
              <div className="flex gap-[220px]">
                <p className="">Unisex</p>

                <p className="">(4)</p>
              </div>
              <div className="flex gap-[220px]">
                <p className="">Sporty</p>

                <p className="">(5)</p>
              </div>
              <div className="flex gap-[220px]">
                <p className="">Official</p>

                <p className="">(5)</p>
              </div>
            </div>
          </div>
          <div className="mt-[68px]">
            <h1>FILTER BY PRICE</h1>
            <div className="mt-[20px] h-[21px] w-[336px] bg-[#D9D9D9]"></div>
            <div className="mt-[13px] flex gap-[262px]">
              <p>$70</p>
              <p>$250</p>
            </div>
          </div>
      <div className=" mt-[105px]">
      <ColorSelector />
      </div>
      <div className=" mt-[105px]">
        <SizeSelector />
      </div>
      <img className='hidden sm:block mt-[47px]' src="public/image/HOMEPAGE/Rectangle 166.svg" alt="" />

    </div>
     
      
      {/* Product Cards on the right */}
      <div className="w-full md:w-[69%] bg-[#F6F8F9] ">
      <div className="flex ml-[20px] md:ml-[110px] gap-[80px] md:gap-[300px] mt-[62px] mb-4 ">
        <div className=''>
          <label htmlFor="sortBy" className='text-[#444] text-[15px] md:text-[20px] font-normal'>Sort By:</label>
          <select id="sortBy" value={sortBy} onChange={handleSortChange} className='text-[#444] md:text-[20px]'>
            <option value="Relevance">Relevance</option>
            <option value="Color">Color</option>
            <option value="Price">Price</option>
          </select>
        </div>
        <div className='text-[#444] text-[15px] md:text-[20px]'>
          Showing {startIndex + 1}-
          {startIndex + visibleProducts.length} of {products.length} results
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
          {visibleProducts.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 p-2">
          <ProductCard
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          discountPrice={product.discountPrice}
      />
    </div>
  ))}
</div>


       
      </div>
    </div>
     {/* Pagination controls */}
     <div className='w-[90%] mb-[108px] mt-[83px] mx-auto h-[80px] justify-center  items-center border border-[#A8B6BF] border-solid'>
     <div className=" flex mt-[10px] md:ml-[500px] w-full  ">
          <button className="mx-2 px-4 py-2 border" onClick={handlePrevPage}>
          &lt; 
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              className={`mx-2 px-4 py-2 border ${
                page + 1 === currentPage ? 'bg-[#007074] text-white' : 'bg-white text-gray-600'
              }`}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          ))}
          <button className="mx-2 px-4 py-2 border" onClick={handleNextPage}>
          &gt;
          </button>
        </div>
    </div>
    </div>
    
     
  );
}

export default ProductHome;
