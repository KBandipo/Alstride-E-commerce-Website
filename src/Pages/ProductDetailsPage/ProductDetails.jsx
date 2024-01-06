import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import QuantityButton from "./QuantityButton";
import ProductCard from "./ProductCard"; // Import the ProductCard component
import { useCart } from "../Cartfolder/cartContext";

const existingProducts = [
  {
    id: 3,
    name: "Shoebaru Max",
    price: 120,
    discountPrice: 100,
    colors: ["Black", "White", "Red"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    image: "/image/one-white-sneaker-shoe-isolated-white 2.svg",
  },
  {
    id: 6,
    name: "Shoebaru Max",
    price: 120,
    discountPrice: 100,
    colors: ["Black", "White", "Red"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    image: "/image/Sandles 2.svg",
  },
  {
    id: 8,
    name: "Shoebaru Max",
    price: 120,
    discountPrice: 100,
    colors: ["Black", "White", "Red"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    image: "/image/Golden heels.svg",
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
  const { dispatch } = useCart();

  // Define the conditions for each link to be active
  const isHome = location.pathname === "/home";
  const isShop = location.pathname === "/";
  const isProduct = location.pathname === `/product/${id}`;

  // Fetch product details based on the id (you need to implement this)
  const productDetails = getProductDetailsById(id);
  const [activePages, setActivePages] = useState({
    part1: "Description",
    part2: "Delivery",
  });

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  const [currentImage, setCurrentImage] = useState(productDetails.image);
  const image1 = "/image/women-s-red-high-heel-shoes-formal-fashion (1) 2.svg";
  const image2 =
    "/image/portrait-woman-s-legs-with-stylish-high-heels-pantyhose (2) 1.svg";

  const handleSwitchImage = (newImage) => {
    setCurrentImage(newImage);
  };

  const colors = ["red", "black", "gray"];
  const [selectedColor, setSelectedColor] = useState("");

  // Dummy data for illustration
  const sizes = ["32", "34", "36", "38", "40", "42", "44", "46", "48"];
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      // Dispatch an action to add the product to the cart with selected size and color
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: productDetails.id,
          name: productDetails.name,
          quantity,
          selectedSize,
          selectedColor,
          // Add other product details as needed
        },
      });
      console.log(
        `Added ${productDetails.name} to the cart with size ${selectedSize} and color ${selectedColor}.`,
      );
    } else {
      // Handle case where size or color is not selected
      alert("Please select size and color before adding to cart.");
    }
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
    duplicateProduct(
      existingProducts.find((product) => product.id === 3),
      13,
    ),
    duplicateProduct(
      existingProducts.find((product) => product.id === 6),
      14,
    ),
    duplicateProduct(
      existingProducts.find((product) => product.id === 8),
      15,
    ),
  ];

  return (
    <div className=" w-full bg-[#F6F8F9]">
      <div className="h-[80px] w-full bg-[#F7E7CE] ">
        <h1 className="text-center text-[31px] font-bold leading-[40px]">
          Shop
        </h1>
        <p className="text-center">
          <Link to="/home" className={isHome ? "text-[#007074]" : "text-black"}>
            Home
          </Link>{" "}
          /{" "}
          <Link to="/" className={isShop ? "text-[#007074]" : "text-black"}>
            Shop
          </Link>{" "}
          / {/* Conditionally set the color for the product name */}
          <span className={isProduct ? "text-[#007074]" : "text-black"}>
            {productDetails.name}
          </span>
        </p>
      </div>

      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img src="public/image/iconamoon_heart-thin.svg" alt="wishlist" />
      </a>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative mx-auto mb-6 mt-[80px]  h-[300px] w-[400px] rounded-lg bg-[#FDF8F0] object-cover p-6 shadow-md md:h-[500px] md:w-[500px] lg:ml-[100px]">
          {/* Main Image */}
          <img
            className="mb- mx-auto w-[500px] "
            src={currentImage}
            alt={productDetails.name}
          />
          {productDetails.id === 1 && (
            <div>
              {/* Smaller Containers */}
              <div className="absolute bottom-[-110px] flex justify-between gap-6 ">
                <div
                  className="border-soli h-[100px] w-[150px] cursor-pointer rounded-lg border border-[#007074] shadow-md"
                  onClick={() => handleSwitchImage(image1)}
                >
                  <img
                    className="h-full w-full rounded-md object-cover"
                    src={image1}
                    alt="Image 1"
                  />
                </div>

                <div
                  className="border-soli h-[100px] w-[100px] cursor-pointer rounded-lg border border-[#007074] shadow-md "
                  onClick={() => handleSwitchImage(image2)}
                >
                  <img
                    className="h-full w-full rounded-md object-cover"
                    src={image2}
                    alt="Image 2"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mx-auto w-[500px] md:ml-[100px]">
          <div className="mt-[80px]">
            <h2 className="mb-2 text-[32px] font-bold leading-10 text-[#444]">
              {productDetails.name}
            </h2>
            <div className="mb-4 flex items-center gap-3">
              {productDetails.discountPrice < productDetails.price && (
                <span className="text-[20px] font-medium leading-8 text-[#000] line-through">
                  ${productDetails.price}
                </span>
              )}
              <span className="mr-2 text-[25px] font-medium leading-8 text-[#007074]">
                ${productDetails.discountPrice}
              </span>
            </div>
            <div className=" h-[1px] w-[350px] bg-[#99A6AE]"></div>
            <div>
              <h1 className="mb-[15px] mt-[29px] text-[16px] font-medium leading-6 text-[#000]">
                Sizes
              </h1>
              {/* First line */}
              <div className="mb-4 flex">
                {sizes.slice(0, 5).map((size) => (
                  <div
                    key={size}
                    className={`size-box mr-4 ${
                      selectedSize === size
                        ? "border-blue-500"
                        : "border-[#99A6AE]"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <input
                      type="text"
                      value={size}
                      readOnly
                      className="h-[40px] w-[40px] rounded border bg-[#F6F8F9] p-2"
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
                {sizes.slice(5, 9).map((size) => (
                  <div
                    key={size}
                    className={`size-box mr-4 ${
                      selectedSize === size
                        ? "border-blue-500"
                        : "border-[#99A6AE]"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <input
                      type="text"
                      value={size}
                      readOnly
                      className="h-[40px] w-[40px] rounded border bg-[#F6F8F9] p-2"
                      style={{
                        borderColor:
                          selectedSize === size ? "#3182CE" : "#99A6AE",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h2 className=" mb-2 mt-[29px] text-[16px] font-medium leading-6 text-[#000]">
                Colour:
              </h2>
              <div className="flex items-center gap-[20px] ">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`color-box mr-4 ${
                      selectedColor === color
                        ? "border-2 border-blue-500"
                        : "border-2 border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color,
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-[58px] flex gap-[60px]">
              <div className="mb-4">
                <label htmlFor="quantity" className="mr-2 font-semibold">
                  Quantity:
                </label>
                <QuantityButton
                  quantity={quantity}
                  onIncrease={() => setQuantity(quantity + 1)}
                  onDecrease={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : 1)
                  }
                />
              </div>
              <div className="mt-[23px]">
                <button
                  className="inline-flex h-[45px] w-[150px] items-center justify-center rounded border border-solid border-[#007074] bg-[#F6F8F9] text-[#007074]"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <button
              className="mt-[45px] h-[40px] w-[350px] rounded bg-[#007074] px-4 py-2 text-white "
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

            <div className="mt-[30px] flex gap-4">
              <p className="text-[18px] font-medium leading-6 text-[#000]">
                {" "}
                Avaliable:{" "}
              </p>{" "}
              <p className="text-[18px] font-medium leading-6 text-[#000]">
                {" "}
                In stock
              </p>
            </div>
            <div className="mt-[30px] flex gap-4">
              <p className="text-[18px] font-medium leading-6 text-[#000]">
                Share:
              </p>
              <img className="" src="/image/Group.svg" alt="pin" />
              <img src="/image/Facebook Icon.svg" alt="facebook" />
              <img src="/image/Instagram Icon.svg" alt="instagram" />
            </div>
            <div className="mt-[40px] flex h-[30px] w-[175px] items-center justify-center rounded-full border border-solid border-[#C5CED4] bg-[#F6F8F9]">
              <img
                src="/image/LocationMarkerOutline.svg"
                alt=""
                className="mr-2 h-4 w-4"
              />
              <p className="left-6 text-[18px] font-normal text-[#444]">
                Ship to Nigeria
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:ml-[100px] md:flex-row">
        {/* First Part: Description and Review */}
        <div className="mr-[50px] mt-[86px] flex-1 pl-4  pr-4 md:pr-0">
          <div className="flex space-x-4">
            <div
              onClick={() =>
                setActivePages({ ...activePages, part1: "Description" })
              }
              className={`mb-4 cursor-pointer md:mb-0 ${
                activePages.part1 === "Description"
                  ? "border-b-2 border-[#00666A]"
                  : ""
              }`}
            >
              <span className="inline-block pb-2 text-[16px] font-medium leading-[24px] text-[#444]">
                Description
              </span>
            </div>
            <div
              onClick={() =>
                setActivePages({ ...activePages, part1: "Review" })
              }
              className={`cursor-pointer ${
                activePages.part1 === "Review"
                  ? "border-b-2 border-[#00666A]"
                  : ""
              }`}
            >
              <div className="flex items-center">
                <span className="pb-2 text-[16px] font-medium leading-[24px] text-[#444]">
                  Review
                </span>
                <img
                  src="/image/Star 1.svg"
                  alt="Review Icon"
                  className="mr-2 h-4 w-4"
                />
                <span className="pb-2 text-[16px] font-medium leading-[24px] text-[#444]">
                  4.00
                </span>
              </div>
            </div>
          </div>
          <div className=" h-[1px] w-[full] bg-[#99A6AE]"></div>
          {/* Content for the Description and Review pages */}
          <div>
            {/* Content for the Description page */}
            {activePages.part1 === "Description" && (
              <div>
                {productDetails.description
                  .split("\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="mr-4 mt-4 text-[16px] font-normal leading-[24px] text-[#444]"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            )}

            {/* Content for the Review page */}
            {activePages.part1 === "Review" && (
              <div className="flex-1">
                <p>Review Content...</p>
              </div>
            )}
          </div>
        </div>

        {/* Vertical Line Separator */}
        <div className="mt-[86px] hidden h-auto border-l border-gray-300 md:block"></div>

        {/* Second Part: Delivery, Returns, and Warranty */}
        <div className="mt-[86px] flex-1 pl-4">
          <div className="flex space-x-4">
            <div
              onClick={() =>
                setActivePages({ ...activePages, part2: "Delivery" })
              }
              className={`cursor-pointer ${
                activePages.part2 === "Delivery"
                  ? "border-b-2 border-[#00666A]"
                  : ""
              }`}
            >
              <span className="inline-block pb-2 text-[16px] font-medium leading-[24px] text-[#444]">
                Delivery
              </span>
            </div>
            <div
              onClick={() =>
                setActivePages({ ...activePages, part2: "Returns" })
              }
              className={`cursor-pointer ${
                activePages.part2 === "Returns"
                  ? "border-b-2 border-[#00666A]"
                  : ""
              }`}
            >
              <span className="inline-block pb-2 text-[16px] font-medium leading-[24px] text-[#444]">
                Returns
              </span>
            </div>
            <div
              onClick={() =>
                setActivePages({ ...activePages, part2: "Warranty" })
              }
              className={`cursor-pointer ${
                activePages.part2 === "Warranty"
                  ? "border-b-2 border-[#00666A]"
                  : ""
              }`}
            >
              <span className="inline-block pb-2 text-[16px] font-medium leading-[24px] text-[#444]">
                Warranty
              </span>
            </div>
          </div>
          <div className=" h-[1px] w-[full] bg-[#99A6AE]"></div>
          {/* Content for the Delivery, Returns, and Warranty pages */}
          <div>
            {/* Content for the Delivery page */}
            {activePages.part2 === "Delivery" && (
              <div>
                <p className="mt-4 text-[16px] font-normal leading-[24px] text-[#444]">
                  Fast & Reliable Shipping Standard Delivery: Estimated 3-5
                  business days. Shipping cost: $4.99. Express Delivery:
                  Estimated 1-2 business days. Shipping cost: $9.99. Free
                  Standard Shipping on orders over $50.
                </p>

                <p className="mt-8 text-[16px] font-normal leading-[24px] text-[#444]">
                  Tracking Your Order Receive a tracking number via email once
                  your order is dispatched.
                </p>
              </div>
            )}
            {/* Content for the Returns page */}
            {activePages.part2 === "Returns" && (
              <div>
                <p>Returns Content...</p>
              </div>
            )}
            {/* Content for the Warranty page */}
            {activePages.part2 === "Warranty" && (
              <div>
                <p>Warranty Content...</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Related Products
        </h2>
        <div className="flex flex-col items-center gap-[140px] md:flex-row md:flex-wrap md:justify-center md:gap-8 lg:gap-12 xl:gap-16">
          {relatedProducts.slice(0, 3).map((product) => (
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
      name: "Next Gen Heel",
      description:
        'The "Red Prada Heel" blends timeless elegance with modern flair, perfect for the trendsetting woman. Crafted from premium red leather, it exudes style and confidence. Its pointed toe design adds sophistication, ideal for various outfits.\n\nPerched on a 4-inch stiletto, these heels enhance your stature, offering a graceful profile. The slim, robust heel makes an impactful statement. Comfort is key, with a cushioned insole for extended wearability. The interior is smooth for comfort, preventing abrasion.\n\nThe durable synthetic sole ensures stability and traction. These versatile heels suit formal events and casual outings alike, complementing dresses and business wear seamlessly. Packaged in a branded box with a dust bag, these heels are more than footwear; they\'re an investment in enduring style and quality.',
      price: 130.0,
      discountPrice: 104.0,
      image: "/image/women-s-red-high-heel-shoes-formal-fashion (1) 2.svg",
      // ... (add more details as needed)
    },
    // ... (list of other products)
    {
      id: 2,
      name: "Shoebaru Max",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 150.0,
      discountPrice: 120.0,

      image: "/image/one-black-sneaker-shoe-isolated-white 2.svg",
      // ... (add more details as needed)
    },
    {
      id: 3,
      name: "Cloud Stride",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120.0,
      discountPrice: 96.0,
      image: "/image/one-white-sneaker-shoe-isolated-white 2.svg",
      // ... (add more details as needed)
    },
    {
      id: 4,
      name: "Footsubishi Max",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 130.0,
      discountPrice: 104.0,

      image: "/image/one-white-sneaker-shoe-isolated-white (1) 2.svg",
      // ... (add more details as needed)
    },
    {
      id: 5,
      name: "Mystic Journey",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      discountPrice: 100,

      image: "/image/dress shoes 2.svg",
      // ... (add more details as needed)
    },
    {
      id: 6,
      name: "Eclipse Runner",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 150.0,
      discountPrice: 120.0,

      image: "/image/Sandles 2.svg",
      // ... (add more details as needed)
    },
    {
      id: 7,
      name: "Urban Pulse",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 160.0,
      discountPrice: 128.0,

      image: "/image/Black Boots.svg",
      // ... (add more details as needed)
    },
    {
      id: 8,
      name: "Elemental Gait",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      discountPrice: 100,

      image: "/image/Golden heels.svg",
      // ... (add more details as needed)
    },
    {
      id: 9,
      name: "Gladiator Pro",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      discountPrice: 100,

      image: "/image/pair-black-classic-men-new 3.svg",
      // ... (add more details as needed)
    },
    {
      id: 10,
      name: "Infinity Walk",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      discountPrice: 100,

      image: "/image/oswald-elsaboath-_bHENmPJrTA-unsplash 1.svg",
      // ... (add more details as needed)
    },
    {
      id: 11,
      name: "Next Gen Heel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      discountPrice: 100,

      image: "/image/Yellow Shoes.svg",
      // ... (add more details as needed)
    },
    {
      id: 12,
      name: "Harmony Hops",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      discountPrice: 100,

      image: "/image/white converse 1.svg",
      // ... (add more details as needed)
    },
  ];
  return products.find((product) => product.id === parseInt(id, 10));
}

export default ProductDetails;
