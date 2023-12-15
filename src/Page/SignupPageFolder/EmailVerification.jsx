import React from 'react'

function EmailVerification() {
  return (
    <>
    <div className="box-border flex overflow-hidden">
        {/* Left Section  */}
        <div className="hidden lg:block  w-[31%] bg-[url('public/image/emailVerificationBackgroudImage.svg')] bg-cover bg-center bg-no-repeat">
          {/* Left Section Content  */}
          <div className="w-[90%] pl-[32px] pt-[38px] text-white">
            <img
              src="public/image/alstrideVector.svg"
              alt="alstrideVector"
              className="h-[24px] w-[164px] object-cover"
            />
            <p className="w-[78%] h-[96px] mt-[44px] text-[20px] font-normal leading-8">
            Looks like you're almost there! Just enter your email for a quick verification link.  </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[69%]">
        <div className=" lg:hidden">
               <img src="public/image/alstrideVector2.svg" alt="alstrideVector2" />
                </div>
            <div  className='mx-auto w-[46%] '>
            <h3 className="text-center lg:text-[39px] lg:font-bold lg:leading-[48px] text-[#444] font-bold text-xl leading-8">
                   Check your inbox
               </h3>
               <p className="text-center text-sm sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] font-normal leading-6 text-[#444]">
               We’ve sent you a temporary 4-digit login code at myemail@gmail.com. Please enter this code to verify your account.
                </p>
            
                <form action="">
                <div className="flex gap-10">
                        <input
                        type="password"
                        pattern="[0-9]"
                        maxLength="1"
                        className="w-[72px] h-[86px] p-4 flex-shrink-0 border border-solid border-1 border-black rounded-md"
                        />
                        < input
                        type="password"
                        pattern="[0-9]"
                         maxLength="1"
                        className="w-[72px] h-[86px] p-4 flex-shrink-0 border border-solid border-1 border-black rounded-md"
                         />
                        <input
                        type="password"
                        pattern="[0-9]"
                        maxLength="1"
                        className="w-[72px] h-[86px] p-4 flex-shrink-0 border border-solid border-1 border-black rounded-md"
                        />
                        <input
                        type="password"
                        pattern="[0-9]"
                        maxLength="1"
                        className="w-[72px] h-[86px] p-4 flex-shrink-0 border border-solid border-1 border-black rounded-md"
                        />
                    </div>
                    
                    <button
                    type="submit"
                    className="bg-[#007074] mx-auto text-[#fff] mt-[108px] flex flex-col justify-center items-center w-[222px] sm:w-[137px] h-[56px] p-4 gap-10 flex-shrink-0 rounded-md bg-primary-600 order-1 "
                         >
                        SignUp
                    </button>
            
                   <div className="flex items-center justify-center mt-[45px] ">
                       <button>
                          &larr; Back
                        </button>
                         </div>
            <div className="flex  mt-[55px] ">
                <p className="w-[220px] h-[22px] flex-shrink-0 text-[18px] font-normal leading-[24px] text-[#000]">
                        Didn’t receive the code?
                    </p>
                <button type="button"className="w-[114px] h-[24px] text-[18px] flex items-center text-[#007074] justify-center flex-shrink-0">
                     Resend Code
                        </button>
              </div>

               {/* Social Login Section ( */}
            
             <div className='flex mt-[38px] space-x-8'>
                    <img className='w-[165px] h-[10px] flex-shrink-0' src="public/image/OrSigninwithelement.svg" alt="" />
                        <p className='text-[#444] text-[16px] font-normal leading-[24px] w-[116px] h-[18px] flex-col justify-center flex-shrink-0'>
                        Or Sign in with
                        </p>
                    <img className='w-[165px] h-[10px] flex-shrink-0' src="public/image/OrSigninwithelement.svg" alt="" />
              </div>
            <div className='flex mt-[33px] ml-[60px]'>
                <div className='mr-[100px]'>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <img src="public/image/gmail icon.svg"alt="google login"/></a>
                        </div>
                <div>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <img src="public/image/fb icon.svg"alt="facebook login"/></a>
                </div>
                <div className='ml-[100px]'>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <img src="public/image/x icon.svg" alt="X login"/></a>
                </div>
          </div>

            {/* Footer Section  */}
            <div className="flex text-[#444] text-[10px] mt-[51px] mb-[30px]">
              <p>All rights reserved © 2023 Alstride</p>
              <div className="ml-[186px]">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Privacy | Terms
                </a>
              </div>
            </div>
            </form>

                </div>
         
          </div>
          </div>

    </>
  )
}

export default EmailVerification