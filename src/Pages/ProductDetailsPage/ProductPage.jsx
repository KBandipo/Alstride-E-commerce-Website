import React from "react";
import Footer from "../../Page/homePageFolder/Footer";
import ProductHome from "./ProductHome";
import AccountHeader from "../AccountPagedetails/AccountHeader";

function ProductPage() {
  return (
    <section className="max-w-[100vw] bg-[#F6F8F9]">
      <AccountHeader />
      <div className="mt-[45px] w-[100wv]">
        <ProductHome />
      </div>
      <Footer />
    </section>
  );
}

export default ProductPage;
