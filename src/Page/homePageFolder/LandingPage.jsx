import React from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Footer from "./Footer";
import FreeShipping from "./FreeShipping";
import DiscountSection from "./DiscountSection";
import LatestDrop from "./LatestDrop";

function LandingPage() {
  return (
    <>
      <Header />
      <div className="mx-auto w-[90%]">
        <HeroSection />
        <FreeShipping />
        <DiscountSection />
        <LatestDrop />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
