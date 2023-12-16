import React, { useState } from 'react';
 // Assuming you are using react-router-dom

function SignIn() {
    const [isFocused, setIsFocused] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleForgotPassword = () => {
      // Add logic for handling forgot password here
      console.log('Forgot Password clicked');
    };
  
    
  
    const handleRememberMeChange = () => {
      setRememberMe(!rememberMe);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add logic to handle form submission with email, password, and rememberMe
      console.log('Form submitted with:', email, password, 'Remember Me:', rememberMe);
  };
  const handleChange = (e, setState) => {
    setState(e.target.value);
  };
  
  const [showPassword, setShowPassword] = useState(false);

  



const handleFocus = () => {
  // Add logic for focus event if needed
};

const handleBlur = () => {
  // Add logic for blur event if needed
};



  return (
    <>
    <div className="box-border flex overflow-hidden">
      <div className="hidden md:block w-[31%] bg-[url('public/image/signInBackgroundImage.svg')] bg-cover bg-center bg-no-repeat">
          {/* Left Section Content */}
          <div className="w-full pl-[32px] pt-[38px] text-white">
          <img
              src="public/image/alstrideVector.svg"
            alt="alstrideVector"
            className="h-[24px] w-[164px] object-cover"
            />
          <p className="w-[78%] h-[96px] mt-[44px] text-[20px] font-normal leading-8">
            Walk the talk of style in comfort and confidence. Let our
            shoes take you to places you have never been before.
          </p>
      </div>
    </div>

     {/* Right Section */}
    <div className="w-full md:w-[69%]">
    <nav className=" flex justify-between items-center">
             {/* Show this only on screens >= 	768px */}
             <div>
               <img className=" md:hidden" src="public/image/alstrideVector2.svg" alt="alstrideVector2" />
                </div>
                
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                   <img  src="public/image/PREVIOUS ICON.svg" alt="previous link" />
              </a>
           
        </nav>
    <div className="md:w-[56%] mx-auto ">
      <h3 className=" max-w-full text-[31px] text-center leading-[48px] md:text-[39px] font-bold  text-[#444]  ">
                   Create your account
               </h3>
               <p className="text-center text-sm sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] font-normal leading-6 text-[#444]">
                  We need this information in order to complete your request...
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
  <div className="mt-[36px]">
    <label htmlFor="email" className="text-[18px] font-normal leading-normal text-[#444]">
      Email
    </label>
    <input
      type="email"
      placeholder="Enter a valid email address"
      value={email}
      onChange={(e) => handleChange(e, setEmail)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="w-full md:w-full h-[60px] flex-shrink-0 border border-solid border-[#9B9B9B66] bg-[#E4E8EBBF]  rounded transition-colors duration-300 hover:border-[#00666A]"
    />
    {!email && !isFocused && <p className="text-red-500 mt-2">Enter a valid Email</p>}
  </div>

  <div className="mt-[36px] relative">
    <label htmlFor="password" className="text-[18px] font-normal leading-normal text-[#444]">
      Password
    </label>
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
        value={password}
        onChange={(e) => handleChange(e, setPassword)}
        className="w-full md:w-full h-[60px] flex-shrink-0 border border-solid border-[#9B9B9B66] bg-[#E4E8EBBF]  rounded transition-colors duration-300 hover:border-[#00666A]"
      />
      <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer "
      >
        {showPassword ? <span className="text-[#444]">Hide</span> : <span className="text-[#444]">Show</span>}
      </span>
    </div>
  </div>

  <div className="flex justify-between items-center">
    <div className="flex items-center mt-[45px]">
      <input
        type="checkbox"
        id="rememberMe"
        checked={rememberMe}
        onChange={handleRememberMeChange}
        className="mr-2"
      />
      <label htmlFor="rememberMe" className="text-sm text-gray-600 ">
        Remember Me
      </label>
    </div>
    <button type="button" onClick={handleForgotPassword} className="text-[#444] text-[16px] font-medium leading-[24px]">
      Forgot Password?
    </button>
  </div>

           {/* Sign In and Sign Up Buttons  */}
           <div className="flex flex-col md:space-x-[100px] sm:flex-row space-y-8  justify-center items-center">
                <div className="flex space-x-1 mt-[55px]  order-2 sm:order-1">
                      <p className="w-[220px] h-[22px] flex-shrink-0 text-[18px] font-normal leading-[24px] text-[#000]">
                          Already have an account?
                        </p>
                <button type="button"className="w-[60px] h-[22px] flex items-center text-[#007074] justify-center flex-shrink-0">
                       SignUp
                      </button>
                  </div>
              
                 <button type="submit"
                  className="bg-[#007074] text-[#fff] md:flex flex-col justify-center items-center w-[222px] sm:w-[137px] h-[56px]   flex-shrink-0 rounded-md  order-1 sm:order-2">
                 SignIn
                     </button>
              </div>
               {/* Social Login Section ( */}

               <div className='flex  mt-[41px] space-x-8'>
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

      </div>

      {/* Footer Section  */}
      <div className="flex text-[#444] text-[10px] mt-[90px] space-x-[260px] justify-center items-center ">
              <p>All rights reserved © 2023 Alstride</p>
              <div className="">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Privacy | Terms
                </a>
              </div>
            </div>
    </div>
    </div>
   

    </>
  );
}

export default SignIn;
