import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmailVerification() {
  const [verificationVisible, setVerificationVisible] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    setVerificationVisible(true);
  };

  
    const navigate = useNavigate();
  
    const handleContinue = () => {
      // Navigate to the product details page
      navigate('/product-details');
    };

  return (
    <>
      <div className="box-border flex overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:block w-[31%] bg-[url('public/image/emailVerificationBackgroudImage.svg')] bg-cover bg-center bg-no-repeat">
          {/* Left Section Content */}
          <div className="w-[90%] pl-[32px] pt-[38px] text-white">
            <img
              src="public/image/alstrideVector.svg"
              alt="alstrideVector"
              className="h-[24px] w-[164px] object-cover"
            />
            <p className="w-[78%] h-[96px] mt-[44px] text-[20px] font-normal leading-8">
              Looks like you're almost there! Just enter your email for a quick verification link.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-[69%]">
          <div className="md:hidden">
            <img src="public/image/alstrideVector2.svg" alt="alstrideVector2" />
          </div>
          <div className="md:w-[56%] mx-auto">
            <h3 className="text-center mt-[30px] lg:text-[39px] lg:font-bold lg:leading-[48px] text-[#444] font-bold text-xl leading-8">
              Check your inbox
            </h3>
            <p className="text-center text-sm sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] font-normal leading-6 text-[#444]">
              We’ve sent you a temporary 4-digit login code at myemail@gmail.com. Please enter this code to verify your account.
            </p>

            <form onSubmit={handleSignUp}>
                <div className="flex gap-10 mt-[45px] justify-center items-center">
                        <input
                        type="password"
                        pattern="[0-9]"
                        maxLength="1"
                        className="w-[63.111px] h-[70px] md:w-[72px] md:h-[86px] p-4  border border-solid border-1 border-black rounded-md"
                        />
                        < input
                        type="password"
                        pattern="[0-9]"
                         maxLength="1"
                        className="w-[63.111px] h-[70px] md:w-[72px] md:h-[86px] p-4  border border-solid border-1 border-black rounded-md"
                         />
                        <input
                        type="password"
                        pattern="[0-9]"
                        maxLength="1"
                        className="w-[63.111px] h-[70px] md:w-[72px] md:h-[86px] p-4  border border-solid border-1 border-black rounded-md"
                        />
                        <input
                        type="password"
                        pattern="[0-9]"
                        maxLength="1"
                        className="w-[63.111px] h-[70px] md:w-[72px] md:h-[86px] p-4  border border-solid border-1 border-black rounded-md"
                        />
                    </div>
                    
                    <button
                    type="submit"
                    className="bg-[#007074] mx-auto text-[#fff] mt-[50px] flex flex-col justify-center items-center w-[222px] sm:w-[137px] h-[56px] flex-shrink-0 rounded-md"
                         >
                        SignUp
                    </button>
            
                   <div className="flex items-center justify-center mt-[25px] ">
                       <button>
                          &larr; Back
                        </button>
                         </div>
                <div className="flex items-center justify-center  mt-[20px] ">
                <p className="w-[220px] h-[22px] flex-shrink-0 text-[18px] font-normal leading-[24px] text-[#000]">
                        Didn’t receive the code?
                    </p>
                         <button type="button"className="w-[114px] h-[24px] text-[18px] flex items-center text-[#007074] justify-center flex-shrink-0">
                             Resend Code
                        </button>
              </div>

               {/* Social Login Section ( */}
            
               <div className='flex  mt-[35px] space-x-8 justify-center items-center'>
            <img className='w-[106px] md:w-[165px] h-[10px] flex-shrink-0' src="public/image/OrSigninwithelement.svg" alt="" />
              <p className='text-[#444] text-[16px] font-normal leading-[24px] w-[102] md:w-[116px] h-[18px] flex-col justify-center flex-shrink-0'>
              Or Sign in with
              </p>
              <img className='w-[106px] lg:w-[165px] h-[10px] flex-shrink-0' src="public/image/OrSigninwithelement.svg" alt="" />
              </div>
              <div className='flex mt-[33px] space-x-[100px] justify-center items-center '>

            <div className=''>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img src="public/image/gmail icon.svg"alt="google login"/></a>
                </div>
                <div>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img src="public/image/fb icon.svg"alt="facebook login"/></a>
                </div>
                <div className=''>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img src="public/image/x icon.svg" alt="X login"/></a>
                </div>
          </div>


           
            </form>
             {/* Footer Section  */}
        
            <div className="flex text-[#444] text-[10px] mt-[45px]  space-x-[260px] ">
              <p>All rights reserved © 2023 Alstride</p>
              <div className="">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Privacy | Terms
                </a>
              </div>
            </div>

                </div>
                {verificationVisible && (
      <div className="bg-[#FEFDFA] w-[462px] h-[608px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-blur">
        <div className="text-center">
          <img className="mx-auto mt-[103px]" src="public/image/Group 11771.svg" alt="" />
          <p className='text-[#444] text-[21.257px] font-medium mt-[12px]'>Great news!</p>
          <p className='w-[311px] text-[16px] font-normal leading-[24px] mt-[22px]'>Your email has been successfully verified. Welcome aboard!</p>
          <button
            type="button"
            className="bg-[#007074] mx-auto mt-[25px] text-[#fff]  flex flex-col justify-center items-center w-[222px] sm:w-[137px] h-[56px] flex-shrink-0 rounded-md "
            onClick={() => setVerificationVisible(false)}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    )}

          </div>
          </div>

    </>
  )
}

export default EmailVerification