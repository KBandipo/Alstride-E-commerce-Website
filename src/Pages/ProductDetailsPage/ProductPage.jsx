import React from "react";
import Footer from "../../Page/homePageFolder/Footer";
import ProductHome from "./ProductHome";
import AccountHeader from "../AccountPagedetails/AccountHeader";

function ProductPage() {
  
  const isHome = location.pathname === "/home";
  const isShop = location.pathname === "/";

  return (
    <section className="max-w-[100vw] bg-[#F6F8F9]">
      <AccountHeader />
      <div className="py-[12px] mt-[45px] w-full bg-[#F7E7CE] ">
        <h1 className="text-center text-[31px] font-bold leading-[40px]">
          Shop
        </h1>
        <p className="text-center">
          <a
            href="/account-home"
            className={isHome ? "text-[#007074]" : "text-black"}
          >
            Home
          </a>{" "}
          /{" "}
          <a
            href="/product-home"
            className={isShop ? "text-[#007074]" : "text-black"}
          >
            Shop
          </a>
        </p>
      </div>
      <div className="mt-[45px] w-[90%] mx-auto">
        <ProductHome />
      </div>
      <Footer />
    </section>
  );
}

export default ProductPage;
