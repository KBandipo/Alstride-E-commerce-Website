import React from "react";
import FooterParagraph from "./HomeComponents/FooterParagraph";

function Footer() {
  return (
    <footer className="flex justify-center bg-black " id="footer">
      <div className="flex w-[90%] flex-col-reverse justify-between gap-4 pb-8 pt-8 sm:gap-[25px]  sm:pb-[35px] sm:pt-[62px]  md:flex-row lg:gap-[40px]">
        {/* Left container */}
        <div className="w-full text-[#F6F8F9]  md:w-[40%]">
          {/* top  container*/}
          <div className="grid grid-cols-[auto_1fr_auto] gap-5  sm:gap-[5%] ">
            {/* About Alstide */}
            <div>
              <h3 className="text-[20px] font-bold leading-normal ">
                About Alstride
              </h3>
              <FooterParagraph paragraphText="News" textLink="#" />
              <FooterParagraph paragraphText="Quick  Links" textLink="#" />
            </div>

            {/* Quick Links */}
            <div className=" order-3">
              <h3 className="text-[20px] font-bold leading-normal ">
                Quick Links
              </h3>
              <FooterParagraph paragraphText="Home" textLink="/" />
              <FooterParagraph paragraphText="Shops" textLink="/shop" />
              <FooterParagraph paragraphText="About Us" textLink="#" />
              <FooterParagraph paragraphText="Contact Us" textLink="#" />
            </div>

            {/*  Need Help*/}
            <div>
              <h3 className="text-[20px] font-bold leading-normal ">
                Need Help
              </h3>
              <FooterParagraph paragraphText="Contact Us" textLink="#" />
              <FooterParagraph paragraphText="Help Center" textLink="#" />
              <FooterParagraph paragraphText="Order Status" textLink="#" />
              <FooterParagraph paragraphText="How to Track" textLink="#" />
              <FooterParagraph paragraphText="Report a Product" textLink="#" />
              <FooterParagraph
                paragraphText="Shipping & Delivery"
                textLink="#"
              />
              <FooterParagraph
                paragraphText="Order Cancellation "
                textLink="#"
              />
              <FooterParagraph
                paragraphText="Refunds and Return Policy"
                textLink="#"
              />
              <FooterParagraph paragraphText="FAQs" textLink="#" />
            </div>
          </div>
          {/* buttom container*/}
          <div className="my-[50px]">
            <h3 className="mb-[20px] text-[16px] font-bold leading-[24px] ">
              Payment Methods
            </h3>
            <img
              src="/homePageImages/payment-methods.svg"
              alt="payment-methods"
              className="h-auto w-44 sm:w-[181px] "
            />
          </div>
          <div className="flex justify-between text-base font-normal leading-[24px] md:text-[18px]">
            <p>Copyright 2023-Alstride</p>
            <p>All Right Reserved</p>
          </div>
        </div>
        {/* Right container */}
        <div className="flex w-full justify-center bg-[#007074] text-white sm:self-center md:w-[40%]">
          <div className="w-[88%]  py-10 lg:py-[53px]">
            <h6 className="text-sm font-bold sm:text-base md:text-base lg:text-[20px] lg:leading-[24px] ">
              SIGN UP TO ALSTRIDE NEWSLETTER
            </h6>
            <p className="mb-8 mt-4 w-[76%] text-sm font-normal leading-[24px] md:mb-[42px] md:mt-[24px] md:text-[16px] ">
              Subscribe to our newsletter to get updates on our latest offers
            </p>

            <div>
              <p className="text-[16px]  font-normal leading-[24px] ">
                Email address
              </p>
              <div className="mb-[42px] h-[1px] w-[87%] bg-white"></div>
            </div>
            <button className="cursor-pointer rounded-[4px] bg-white px-[40px] py-[16px] text-[18px] font-medium leading-[24px] text-[#00666A]">
              Subscribe
            </button>

            <h6 className="mb-[31px] mt-[64px] text-base font-bold leading-[24px] md:text-[20px] ">
              Find Us
            </h6>

            {/* Social media */}
            <ul className="flex items-center space-x-[36px]">
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
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
