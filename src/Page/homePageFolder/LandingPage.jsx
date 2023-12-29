import React from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <Header />
      <div className="mx-auto w-[90%]">
        <HeroSection />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
