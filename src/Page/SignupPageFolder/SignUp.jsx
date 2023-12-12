import React from 'react'

function SignUp() {
  return (
    <>
    <div className="box-border flex">
        <div className=" w-[31%] overflow-hidden ">
          <div className="h-screen w-full  bg-[url('public/image/signupBackgroundImage.svg')] bg-cover bg-center bg-no-repeat">
            <div className="w-[90%] pl-[32px] pt-[38px] text-white">
              <img
                src="public/image/alstrideVector.svg"
                alt="alstrideVector"
                className=" h-[24px] w-[164px] object-cover"
              />
              <h5 className="mt-[44px] text-[25px] font-medium leading-8">
                Don’t worry! It happens. Please enter your email address to
                reset your password
              </h5>
            </div>
          </div>
        </div>
         {/* Right Section */}
         <div className="w-[69%]">
         <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
         <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      <img
        src="public/image/PREVIOUS ICON.svg"
        alt="previous link"/>
    </a>
    </div>
          <div className="mx-auto w-[46%] pt-[]">
            <h2 className="text-center text-[49px] font-bold leading-[64px] text-[#444]">
              Create your account
            </h2>
            <h6 className="text-center text-[20px] font-normal leading-6 text-[#043133]">
              We need this information in order to complete your request...
            </h6>
            
          <div className='mt-[36px]'>
            <label htmlFor="FristName">First Name</label></div>
            <div>
            <input type="text"  placeholder="Enter your first name" className='w-full bg-gray-200 mt-1 p-2  border rounded-md' />
          </div>

          <div className='mt-[36px]'>
            <label htmlFor="LastName" className='text-[18px]'>Last Name</label></div>
            <div>
            <input type="text" placeholder="Enter your last name" className='w-full  bg-gray-200 mt-1 p-2  border rounded-md ' />
          </div>

          <div className='mt-[36px]'>
            <label htmlFor="PhoneNumber">Phone Number</label></div>
            <div>
            <input type="tel" placeholder="Enter your phone number" className='w-full bg-gray-200 mt-1 p-2  border rounded-md'/>
          </div>

          <div className='mt-[36px]'>
            <label htmlFor="Emailaddress">Email address</label></div>
            <div>
            <input type="email" placeholder="Enter a valid email address" className='w-full  bg-gray-200 mt-1 p-2  border rounded-md' />
          </div>

          <div className='mt-[36px]'>
            <label htmlFor="Password">Password</label></div>
            <div>
            <input type="password" placeholder="Enter password"  className='w-full  bg-gray-200 mt-1 p-2  border rounded-md' />
          </div>
          <div className='flex mt-[7px]'>
          <img
                src="public/image/Rectangle 7.svg"
                alt="alstrideVector"
              />
              <img
                src="public/image/Rectangle 7.svg"
                alt="alstrideVector"
              />
              <img
                src="public/image/Rectangle 7.svg"
                alt="alstrideVector"
              />
              <img
                src="public/image/Rectangle 7.svg"
                alt="alstrideVector"
              />
              <img
                src="public/image/Rectangle 7.svg"
                alt="alstrideVector"
              />
              <img
                src="public/image/Rectangle 7.svg"
                alt="alstrideVector"
              />
          </div>
          <div className='flex'>
            <div className='flex mt-[55px] ml-3 mr-6'>
            <p> Already have an account?</p>
          <button type="submit" className=" text-[#007074] mr[7px]">
            Sign in
          </button> </div>
          <div>
          <button type="submit" className="bg-[#00666A] text-white px-4 py-2 rounded-md hover:bg-[#00666A] w-[137px]  mt-[38px]">
            Sign Up
          </button></div>
          </div>

          <div className='flex mt-[38px]'>
            <img className='w-[165px]'  src="public/image/OrSigninwithelement.svg" alt="" />
            <p>Or Sign in with</p>
            <img src="public/image/OrSigninwithelement.svg" alt="" />
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
          <div className='flex text-[#444] text-[10px] mt-[51px] mb-[30px]'>
            <p>All rights reserved © 2023 Alstride</p>
            <div className='ml-[186px]'>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">Privacy | Terms
                </a></div>
          </div>
          </div>
        </div>
        
      </div>

    </>
  )
}

export default SignUp