import HeroSection from "./HeroSection";
import Header from "./Header";
import Footer from "./Footer";
import FreeShipping from "./FreeShipping";
import DiscountSection from "./DiscountSection";
import LatestDrop from "./LatestDrop";
import ShopCollection from "./ShopCollection";
import TestimonialSection from "./TestimonialSection";

function LandingPage() {
  return (
    <section className="max-w-[100vw]">
      <Header />
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
  );
}

export default LandingPage;
