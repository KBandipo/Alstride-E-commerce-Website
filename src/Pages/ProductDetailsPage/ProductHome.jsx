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

      {/* Pagination controls */}
      <div className="mt-4 flex">
        <button
          className="mx-2 px-4 py-2 border bg-white text-gray-600"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-2 text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="mx-2 px-4 py-2 border bg-white text-gray-600"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductHome;
