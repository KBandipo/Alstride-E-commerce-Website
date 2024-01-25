import React, { useState } from "react";
import { Link } from "react-router-dom";

function EmailVerification() {
  const [verificationVisible, setVerificationVisible] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setVerificationVisible(true);
  };

  return (
    <>
      <div className="box-border flex overflow-hidden">
        {/* Left Section */}
        <div className="hidden w-[31%] bg-[url('/image/emailVerificationBackgroudImage.svg')] bg-cover bg-center bg-no-repeat md:block">
          <div className="w-[90%] pl-[32px] pt-[38px] text-white">
            <img
              src="/image/alstrideVector.svg"
              alt="alstrideVector"
              className="h-[24px] w-[164px] object-cover"
            />
            <p className="mt-[44px] h-[96px] w-[78%] text-[20px] font-normal leading-8">
              Looks like you're almost there! Just enter your email for a quick
              verification link.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative md:w-[69%]">
          <div className="md:hidden">
            <img src="/image/alstrideVector2.svg" alt="alstrideVector2" />
          </div>
          <div className="mx-auto md:w-[56%]">
            <h3 className="mt-[30px] text-center text-xl font-bold leading-8 text-[#444] lg:text-[39px] lg:font-bold lg:leading-[48px]">
              Check your inbox
            </h3>
            <p className="text-center text-sm font-normal leading-6 text-[#444] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px]">
              We’ve sent you a temporary 4-digit login code at
              myemail@gmail.com. Please enter this code to verify your account.
            </p>

            <form onSubmit={handleSignUp}>
              <div className="mt-[45px] flex items-center justify-center gap-10">
                <input
                  type="password"
                  pattern="[0-9]"
                  maxLength="1"
                  className="border-1 h-[70px] w-[63.111px] rounded-md border  border-solid border-black p-4 md:h-[86px] md:w-[72px]"
                />
                <input
                  type="password"
                  pattern="[0-9]"
                  maxLength="1"
                  className="border-1 h-[70px] w-[63.111px] rounded-md border  border-solid border-black p-4 md:h-[86px] md:w-[72px]"
                />
                <input
                  type="password"
                  pattern="[0-9]"
                  maxLength="1"
                  className="border-1 h-[70px] w-[63.111px] rounded-md border  border-solid border-black p-4 md:h-[86px] md:w-[72px]"
                />
                <input
                  type="password"
                  pattern="[0-9]"
                  maxLength="1"
                  className="border-1 h-[70px] w-[63.111px] rounded-md border  border-solid border-black p-4 md:h-[86px] md:w-[72px]"
                />
              </div>

              <button
                type="submit"
                className="mx-auto mt-[50px] flex h-[56px] w-[222px] flex-shrink-0 flex-col items-center justify-center rounded-md bg-[#007074] text-[#fff] sm:w-[137px]"
              >
                Sign Up
              </button>

              <div className="mt-[25px] flex items-center justify-center ">
                <button>&larr; Back</button>
              </div>
              <div className="mt-[20px] flex items-center  justify-center ">
                <p className="h-[22px] w-[220px] flex-shrink-0 text-[18px] font-normal leading-[24px] text-[#000]">
                  Didn’t receive the code?
                </p>
                <button
                  type="button"
                  className="flex h-[24px] w-[114px] flex-shrink-0 items-center justify-center text-[18px] text-[#007074]"
                >
                  Resend Code
                </button>
              </div>
              {/* Social Login Section ( */}
              <div className="mt-[35px]  flex items-center justify-center space-x-8">
                <img
                  className="h-[10px] w-[106px] flex-shrink-0 md:w-[165px]"
                  src="/image/OrSigninwithelement.svg"
                  alt=""
                />
                <p className="h-[18px] w-[102] flex-shrink-0 flex-col justify-center text-[16px] font-normal leading-[24px] text-[#444] md:w-[116px]">
                  Or Sign in with
                </p>
                <img
                  className="h-[10px] w-[106px] flex-shrink-0 lg:w-[165px]"
                  src="public/image/OrSigninwithelement.svg"
                  alt=""
                />
              </div>
              <div className="mt-[33px] flex items-center justify-center space-x-[100px] ">
                <div className="">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/image/gmail icon.svg" alt="google login" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/image/fb icon.svg" alt="facebook login" />
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/image/x icon.svg" alt="X login" />
                  </a>
                </div>
              </div>
            </form>
          </div>
          {/* Footer Section  */}
          <div className="mt-[45px] flex items-center justify-center  space-x-[260px] text-[10px] text-[#444] ">
            <p>All rights reserved © 2023 Alstride</p>
            <div className="">
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy | Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      {verificationVisible && (
        <div className=" fixed inset-0 flex items-center  justify-center bg-black/30 backdrop-blur-[1px] backdrop-filter">
          <div className="absolute left-1/2  top-1/2 flex h-full w-[274px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-md bg-[#FEFDFA] shadow-md  md:h-full md:w-[35%]">
            <img
              className="mx-auto mt-[103px]"
              src="public/image/Group 11771.svg"
              alt=""
            />
            <p className="mt-[12px] text-[21.257px] font-medium text-[#444]">
              Great news!
            </p>
            <p className="mt-[22px] w-[265px] text-center text-[16px] font-normal leading-[24px] md:w-[311px]">
              Your email has been successfully verified. Welcome aboard!
            </p>

            <button
              type="button"
              className="mx-auto mt-[71px] flex h-[56px] w-[178px] flex-shrink-0  flex-col items-center justify-center rounded-md  bg-[#007074] text-[#fff] md:mt-[26px] "
              onClick={() => setVerificationVisible(false)}
            >
              <Link to="/product-home"> Continue</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default EmailVerification;
