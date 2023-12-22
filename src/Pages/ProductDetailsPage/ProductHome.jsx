import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Update with your actual path

function ProductHome() {
  // Assume you have a list of products
  const products = [
    { id: 1, name: 'Next Gen Heel', image: '/image/women-s-red-high-heel-shoes-formal-fashion (1) 2.svg', price: 100, discountPrice: 80 },
    { id: 2, name: 'Shoebaru Max', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 100, discountPrice: 80 },
    { id: 3, name: 'Product3', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 100, discountPrice: 80 },
    { id: 4, name: 'product4', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 100, discountPrice: 80 },
    { id: 5, name: 'product5', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 100, discountPrice: 80 },
    { id: 6, name: 'Product6', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 100, discountPrice: 80 },
    { id: 7, name: 'product7', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 100, discountPrice: 80 },
    { id: 8, name: 'Product8', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 100, discountPrice: 80 },
    { id: 9, name: 'Product9', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 100, discountPrice: 80 },
    // ... Add more products as needed
  ];

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

  return (
    <div>
      <div className='bg-[#F7E7CE] w-full h-[90px] mt-[46px]'>
        <h1 className='text-center text-[31px] font-bold leading-[40px]'>Shop</h1>
        <p className='text-center'>
        <a href='home'>Home</a> / <a href='/'>Shop</a>
        </p>
      </div>
      
    <div className="flex">
      {/* Sidebar on the left */}
      <div className="w-1/3 bg-[#F6F8F9] p-4">
        {/* Your content for the sidebar goes here */}
        <h2 className="text-2xl font-semibold mb-4">Sidebar Section</h2>
        {/* Add other components/content for the sidebar */}
      </div>

      {/* Product Cards on the right */}
      <div className="w-2/3 bg-[#F6F8F9] p-4">
        <div className="flex flex-wrap justify-center">
          {visibleProducts.map((product) => (
            <div key={product.id} className=" max-w-[calc(50% - 1rem)] mx-4 my-4">
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

        {/* Pagination controls */}
        <div className="mt-4 flex justify-center w-full">
          <button className="mx-2 px-4 py-2 border" onClick={handlePrevPage}>
            Previous
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              className={`mx-2 px-4 py-2 border ${
                page + 1 === currentPage ? 'bg-gray-500 text-white' : 'bg-white text-gray-600'
              }`}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          ))}
          <button className="mx-2 px-4 py-2 border" onClick={handleNextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductHome;
