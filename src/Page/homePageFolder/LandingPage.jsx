import React from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";

function LandingPage() {
  return (
    <>
      <Header />
      <div className="mx-auto w-[90%]">
        <HeroSection />
      </div>
    </>
  );
}

export default LandingPage;
