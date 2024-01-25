import React, { useState } from "react";
import ProductCardComp from "./HomeComponents/ProductCardComp";

function ShopCollection() {
  //List of products
  const products = [
    {
      id: 1,
      name: "Next Gen Heel",
      image:
        "/homePageImages/women-s-red-high-heel-shoes-formal-fashion (1) 2.svg",
      price: 130.0,
      discountPrice: 104.0,
    },
    {
      id: 2,
      name: "Shoebaru Max",
      image: "/homePageImages/one-black-sneaker-shoe-isolated-white 2.svg",
      price: 150.0,
      discountPrice: 120.0,
    },
    {
      id: 3,
      name: "Cloud Stride",
      image: "/homePageImages/one-white-sneaker-shoe-isolated-white 2.svg",
      price: 120.0,
      discountPrice: 96.0,
    },
    {
      id: 4,
      name: "Footsubishi Max",
      image: "/homePageImages/one-white-sneaker-shoe-isolated-white (1) 2.svg",
      price: 130.0,
      discountPrice: 104.0,
    },
    {
      id: 5,
      name: "Gladiator Pro",
      image: "/homePageImages/pair-black-classic-men-new 3.svg",
      price: 110.0,
      discountPrice: 88.0,
    },
    {
      id: 6,
      name: "Harmony Hops",
      image: "/homePageImages/white converse 1.svg",
      price: 140.0,
      discountPrice: 112.0,
    },
    {
      id: 7,
      name: "Infinity Walk",
      image: "/homePageImages/oswald-elsaboath-infinity-walk.svg",
      price: 150.0,
      discountPrice: 120.0,
    },
    {
      id: 8,
      name: "Nova Trek",
      image: "/homePageImages/Yellow_Shoes.svg",
      price: 170.0,
      discountPrice: 136.0,
    },
    {
      id: 9,
      name: "Mystic Journey",
      image: "/homePageImages/dress_shoes.svg",
      price: 150.0,
      discountPrice: 120.0,
    },
    {
      id: 10,
      name: "Urban Pulse",
      image: "/homePageImages/Black_Boots.svg",
      price: 180.0,
      discountPrice: 144.0,
    },
    {
      id: 11,
      name: "Eclipse Runner",
      image: "/homePageImages/Sandles_2.svg",
      price: 160.0,
      discountPrice: 128.0,
    },
    {
      id: 12,
      name: "Elemental Gait",
      image: "/homePageImages/Golden_heels.svg",
      price: 200.0,
      discountPrice: 160.0,
    },
  ];

  // Number of products per page
  const productsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first product on the current page
  const startIndex = (currentPage - 1) * productsPerPage;

  // Slice the products array to get the products for the current page
  const visibleProducts = products.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const colors = ["black", "red", "white", "yellow"];
  const [selectedColor, setSelectedColor] = useState("");

  // Dummy data for illustration
  const sizes = ["32", "34", "36", "38", "40", "42", "44", "46", "48"];

  // State to track the selected size
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className=" box-border ">
      <h3 className="py-[100px] text-center text-[31px] font-medium leading-[48px] text-[#007074] ">
        Shop our Collection
      </h3>
      <div className="flex flex-col-reverse justify-between overflow-hidden bg-[#F6F8F9]  md:flex-row">
        {/* Sidebar on the left */}
        <div className="w-full p-4  md:w-[22%] lg:w-[30%] ">
          {/* Categories section on the right */}
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
          <div className="mb-4">
            <h2 className="mb-2 text-2xl  font-semibold">Colour</h2>
            <div className="flex items-center ">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`color-box mr-4 overflow-hidden ${
                    selectedColor === color
                      ? "border-2 border-blue-500"
                      : "border-2 border-gray-300"
                  }`}
                  style={{
                    backgroundColor: color,
                    width: "67px",
                    height: "67px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="mb-[15px] font-bold">Sizes</h1>
            {/* First line */}
            <div className="mb-4 flex">
              {sizes.slice(0, 4).map((size) => (
                <div
                  key={size}
                  className={`size-box mr-4 ${
                    selectedSize === size
                      ? "border-[#F6F8F9]"
                      : "border-[#99A6AE]"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  <input
                    type="text"
                    value={size}
                    readOnly
                    className="h-[60px] w-[65px] rounded border bg-[#F6F8F9] p-2 text-center"
                    style={{
                      borderColor:
                        selectedSize === size ? "#3182CE" : "#99A6AE",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Second line */}
            <div className="mb-4 flex">
              {sizes.slice(4, 8).map((size) => (
                <div
                  key={size}
                  className={`size-box mr-4 ${
                    selectedSize === size
                      ? "border-[#F6F8F9]"
                      : "border-[#99A6AE]"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  <input
                    type="text"
                    value={size}
                    readOnly
                    className="h-[60px] w-[65px] rounded border bg-[#F6F8F9] p-2 text-center"
                    style={{
                      borderColor:
                        selectedSize === size ? "#3182CE" : "#99A6AE",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Third line */}
            <div className="flex">
              <div
                className={`size-box ${
                  selectedSize === sizes[8]
                    ? "border-[#F6F8F9]"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedSize(sizes[8])}
              >
                <input
                  type="text"
                  value={sizes[8]}
                  readOnly
                  className="h-[60px] w-[65px] rounded border bg-[#F6F8F9] p-2 text-center"
                  style={{
                    borderColor:
                      selectedSize === sizes[8] ? "#3182CE" : "#99A6AE",
                  }}
                />
              </div>
            </div>
          </div>

          <img
            className="mt-[47px]"
            src="/homePageImages/Category-Section-Image.svg"
            alt="Category-Section-Image"
          />
        </div>

        {/* Product Cards on the right */}
        <div className="w-full self-stretch p-4 md:w-[60%]">
          <div className="flex flex-wrap justify-between ">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="mb-4 w-full p-2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
              >
                <ProductCardComp
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
      <div className=" flex w-full justify-center rounded-[5px] border-[1px] border-solid border-[#A8B6BF] bg-[#F6F8F9] py-[35px] ">
        <button className="mx-2 border px-4 py-2" onClick={handlePrevPage}>
          &lt;
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            className={`mx-2 border px-4 py-2 ${
              page + 1 === currentPage
                ? "bg-[#007074] text-white"
                : "bg-white text-gray-600"
            }`}
            onClick={() => setCurrentPage(page + 1)}
          >
            {page + 1}
          </button>
        ))}
        <button className="mx-2 border px-4 py-2" onClick={handleNextPage}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default ShopCollection;
