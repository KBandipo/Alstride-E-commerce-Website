import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" w-full">
      {/* top */}
      <div className=" flex justify-center bg-[#007074]">
        <div className="flex w-[90%] items-center justify-between ">
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
          <div className="flex items-center justify-center text-[14px] font-normal leading-[32px] text-[#007074] ">
            {/* Currency converter */}
            <select
              name="currency"
              id="currency"
              className="appearance-none border-none bg-[#007074] fill-white text-[#F6F8F9]"
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
        </div>
      </div>

      {/* buttom */}
      <div className="flex justify-center bg-[#F6F8F9]">
        <div className="flex w-[90%] items-center justify-between">
          <nav className="w-[24%]">
            <ul className="flex  items-center justify-between text-[18px] font-normal leading-[24px] text-[#444] ">
              <li className="text-[#007074]">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Shop</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>

          <div>
            <img src="/public/image/blueLogo.svg" alt="blueLogo" className="" />
          </div>

          <div className="flex items-center justify-between space-x-[30px]">
            <ul className="flex items-center justify-between space-x-[30px] text-[18px] font-normal leading-[24px] ">
              {/* Search Bar */}
              <li>
                <input type="text" placeholder="Search" className="" />
              </li>

              {/* Favorites Items */}
              <li>
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
            <ul className="flex  items-center justify-between space-x-[10px]">
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
