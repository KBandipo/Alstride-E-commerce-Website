import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Update with your actual path
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';


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
    { id: 10, name: 'Product9', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 100, discountPrice: 80 },
    { id: 11, name: 'Product9', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 100, discountPrice: 80 },
    { id: 12, name: 'Product9', image: '/image/one-black-sneaker-shoe-isolated-white 2.svg', price: 100, discountPrice: 80 },
    // ... Add more products as needed
  ];


  

  // Dummy data for categories (replace with your actual data)
  const categories = [
    { name: 'Category 1', available: 10 },
    { name: 'Category 2', available: 8 },
    { name: 'Category 3', available: 15 },
    { name: 'Category 4', available: 5 },
    { name: 'Category 5', available: 12 },
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

  return (
    <div>
      <div className='bg-[#F7E7CE] w-full h-[80px] mt-[46px]'>
        <h1 className='text-center text-[31px] font-bold leading-[40px]'>Shop</h1>
        <p className='text-center'>
        <a href='home'>Home</a> / <a href='/'>Shop</a>
        </p>
      </div>

      
    <div className="flex">
      {/* Sidebar on the left */}
      <div className="w-[31%] bg-[#F6F8F9] p-4">
        {/* Your content for the sidebar goes here */}
        <h2 className="text-2xl font-semibold mb-4">Sidebar Section</h2>
        {/* Add other components/content for the sidebar */}
        {/* Categories section on the right */}
      <div className="ml-8">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{category.name}</td>
                <td>{category.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Available</th>
            </tr>
          </thead>
         
        </table>
      </div>
      <div className="">
      <ColorSelector />
        <SizeSelector />
      </div>
    </div>
     
      
      {/* Product Cards on the right */}
      <div className="w-[69%] bg-[#F6F8F9] p-4">
      <div className="flex items-center gap-[300px] mb-4">
        <div>
          <label htmlFor="sortBy">Sort By:</label>
          <select id="sortBy" value={sortBy} onChange={handleSortChange}>
            <option value="Relevance">Relevance</option>
            <option value="Color">Color</option>
            <option value="Price">Price</option>
          </select>
        </div>
        <div>
          Showing {startIndex + 1}-
          {startIndex + visibleProducts.length} of {products.length} results
        </div>
      </div>

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
                page + 1 === currentPage ? 'bg-[#007074] text-white' : 'bg-white text-gray-600'
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
