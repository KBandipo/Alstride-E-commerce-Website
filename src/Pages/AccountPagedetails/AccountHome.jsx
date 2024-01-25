import React from "react";
import HeroSection from "../../Page/homePageFolder/HeroSection";
import Footer from "../../Page/homePageFolder/Footer";
// import DiscountSection from "../../Page/homePageFolder/DiscountSection";
import TestimonialSection from "../../Page/homePageFolder/TestimonialSection";
import AccountHeader from "./AccountHeader";
import FreeShippingAccount from "./FreeShippingAccount";
import ShopCollectionAccount from "./ShopCollectionAccount";
import LatestDropAccount from "./LastestDropAccount";
import AccountDiscountSection from "./AccountDiscountSection";

function AccountHome() {
  return (
    <section className="max-w-[100vw]">
      <AccountHeader />
      <div className="mx-auto w-[90%]">
        <HeroSection />
        <FreeShippingAccount />
        {/* <DiscountSection /> */}
        <AccountDiscountSection />
        <LatestDropAccount />
        <ShopCollectionAccount />
        <TestimonialSection />
      </div>
      <Footer />
    </section>
  );
}

export default AccountHome;
