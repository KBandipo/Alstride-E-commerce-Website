import React from "react";
import HeroSection from "../../Page/homePageFolder/HeroSection";
import Footer from "../../Page/homePageFolder/Footer";
import FreeShipping from "../../Page/homePageFolder/FreeShipping";
import DiscountSection from "../../Page/homePageFolder/DiscountSection";
import LatestDrop from "../../Page/homePageFolder/LatestDrop";
import ShopCollection from "../../Page/homePageFolder/ShopCollection";
import TestimonialSection from "../../Page/homePageFolder/TestimonialSection";
import AccountHeader from "./AccountHeader";

function AccountHome() {
  return (
    <section className="max-w-[100vw]">
      <AccountHeader />
      <div className="mx-auto w-[90%]">
        <HeroSection />
        <FreeShipping />
        <DiscountSection />
        <LatestDrop />
        <ShopCollection />
        <TestimonialSection />
      </div>
      <Footer />
    </section>
  )
}

export default AccountHome;