import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  // Conversion function (dummy example, replace with your logic)
  const convertPrice = (price) => {
    switch (selectedCurrency) {
      case "euro":
        return price * 0.9; // Replace with your Euro conversion rate
      case "naira":
        return price * 900; // Replace with your Naira conversion rate
      default:
        return price; // Default to USD
    }
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className=" w-full ">
      {/* top */}
      <div className="flex items-center justify-center bg-[#007074] py-1 sm:py-2 ">
        <div className="flex w-[90%] items-center justify-between">
          {/* Social media */}
          <ul className="flex items-center justify-between">
            <li>
              <a href="#">
                <img
                  src="/homePageImages/Pro-Pinterest-Icon.svg"
                  alt="Pro- Pinterest Icon"
                  className="h-[20px] w-[20px]"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/homePageImages/Instagram-Icon.svg"
                  alt="Instagram Icon"
                  className="h-[20px] w-[20px]"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/homePageImages/Pro-Facebook-Icon.svg"
                  alt="Pro-Facebook-Icon"
                  className="h-[20px] w-[20px]"
                />
              </a>
            </li>
          </ul>
          {/* Hotline Number */}
          <span>
            <img
              src="/homePageImages/Hotline-Number.svg"
              alt="Hotline-Number"
              className="h-[24px]"
            />
          </span>

          {/* Form */}
          <div className="">
            <div className="hidden items-center justify-center text-[14px] font-normal leading-[32px] text-[#007074] sm:flex ">
              {/* Currency converter */}
              <select
                name="currency"
                id="currency"
                className=" appearance-none border-none bg-[#007074] fill-white text-[#F6F8F9]"
                onChange={handleCurrencyChange}
                value={selectedCurrency}
              >
                <option value="usd">$ Dollars (USD)</option>
                <option value="euro">€ EU (Euro)</option>
                <option value="naira">₦ Naira (NGN)</option>
              </select>
              <img
                src="/homePageImages/Line-12.svg"
                alt="Division Line"
                className="h-[18px] w-[2px] bg-[#F6F8F9] "
              />
              {/* Change Language */}
              <select className="appearance-none border-none bg-[#007074] text-[#F6F8F9]">
                <option value="us" selected>
                  <img
                    src="/homePageImages/American-flag.svg"
                    alt="US flag"
                    className="h-[16px] w-[16px]"
                  />
                  US English
                </option>

                <option value="uk">
                  <img
                    src="/homePageImages/British-flag.svg"
                    alt="UK flag"
                    className="h-[16px] w-[16px] "
                  />
                  UK English
                </option>
              </select>
            </div>
            <img
              src="/homePageImages/u_globe.svg"
              alt="u_globe"
              className="sm:hidden"
            />
          </div>
        </div>
      </div>

      {/* buttom */}
      <div className="flex justify-center bg-[#F6F8F9] py-1 sm:py-2">
        <div className="flex w-[90%] items-center justify-between">
          <nav className=" w-[40%]">
            <ul
              className={` hidden items-center space-x-[5px] text-sm font-normal leading-[24px] text-[#444] sm:flex sm:text-base lg:text-[18px] ${
                showLinks ? "flex" : ""
              }`}
            >
              <li className="text-[#007074]">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product-home">Shop</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>

            <img
              src="/image/blueLogo.svg"
              alt="blueLogo"
              className="h-[16px] w-[110px] sm:hidden sm:h-[24px] sm:w-[164px]"
            />
          </nav>

          <img
            src="/image/blueLogo.svg"
            alt="blueLogo"
            className="hidden h-full w-[10%] sm:block  sm:w-[10%]"
          />

          <div className="flex items-center space-x-[30px]">
            <ul className="text-small flex items-center space-x-[15px] font-normal leading-[24px] sm:text-base lg:text-[18px] ">
              {/* Search Bar */}
              <li className="sm:flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-24 rounded border border-gray-300 px-2 py-1 sm:w-32 md:w-40 lg:w-48"
                />
              </li>

              {/* Favorites Items */}
              <li className="hidden sm:block">
                <Link to="/favorites" className="">
                  <img
                    src="/homePageImages/Favourite-Icon.svg"
                    alt="Favourite-Icon"
                  />
                </Link>
              </li>
              {/* Cart Link */}
              <li>
                <Link to="/cart" className="">
                  <img
                    src="/homePageImages/Shopping-bag-Icon.svg"
                    alt="Shopping-bag-Icon"
                  />
                </Link>
              </li>
            </ul>

            {/* Sign-in and Sign-up link */}
            <ul className="hidden  items-center justify-between space-x-[10px] sm:flex">
              <li>
                <Link to="/sign-in">Sign In</Link>
              </li>
              <img
                src="/homePageImages/Line-13.svg"
                alt="Division Line"
                className="h-[24px] w-[1px] bg-[#000] "
              />
              <li>
                <Link to="/sign-up">Register</Link>
              </li>
            </ul>

            <button onClick={toggleLinks} className="sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M1.2 4H22.8C23.1183 4 23.4235 3.78929 23.6485 3.41421C23.8736 3.03914 24 2.53043 24 2C24 1.46957 23.8736 0.96086 23.6485 0.585787C23.4235 0.210714 23.1183 0 22.8 0H1.2C0.88174 0 0.576515 0.210714 0.351472 0.585787C0.126428 0.96086 0 1.46957 0 2C0 2.53043 0.126428 3.03914 0.351472 3.41421C0.576515 3.78929 0.88174 4 1.2 4ZM22.8 20H1.2C0.88174 20 0.576515 20.2107 0.351472 20.5858C0.126428 20.9609 0 21.4696 0 22C0 22.5304 0.126428 23.0391 0.351472 23.4142C0.576515 23.7893 0.88174 24 1.2 24H22.8C23.1183 24 23.4235 23.7893 23.6485 23.4142C23.8736 23.0391 24 22.5304 24 22C24 21.4696 23.8736 20.9609 23.6485 20.5858C23.4235 20.2107 23.1183 20 22.8 20ZM22.8 10H1.2C0.88174 10 0.576515 10.2107 0.351472 10.5858C0.126428 10.9609 0 11.4696 0 12C0 12.5304 0.126428 13.0391 0.351472 13.4142C0.576515 13.7893 0.88174 14 1.2 14H22.8C23.1183 14 23.4235 13.7893 23.6485 13.4142C23.8736 13.0391 24 12.5304 24 12C24 11.4696 23.8736 10.9609 23.6485 10.5858C23.4235 10.2107 23.1183 10 22.8 10Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showLinks && (
        <ul className="mt-0 flex flex-col space-y-0  text-base sm:hidden sm:text-lg">
          <li className="text-[#007074]">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Register</Link>
          </li>
          <li>
            <Link to="/product-home">Shop</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
