import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
    const [isFocused, setIsFocused] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e, setter) => {
      setter(e.target.value);
    };
  
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
  
    const validateField = (field) => {
      return field.trim() === '' && !isFocused;
    };
    
    const getPasswordStrength = () => {
      const length = password.length;
      if (length === 0) {
        return (
          <div className="mt-[8px] flex justify-between">
            <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
            <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
            <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
            <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
            <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
            <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
          </div>
        );
      } else if (length <= 5) {
        return (
          <div>
            <div className="mt-[8px] flex justify-between">
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#BB0C0C] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#BB0C0C] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
            </div>
            <span></span>
          </div>
        );
      } else if (length <= 8) {
        return (
          <div>
            <div className="mt-[8px] flex justify-between">
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#FF7F00] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#FF7F00] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#FF7F00] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#FF7F00] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#D7DDE2] "></div>
            </div>
  
  
            <span className="text-[10px] leading-[16px] text-[#2C2C2C] sm:text-[12px]">
              You’re almost at a strong password, try adding characters.
            </span>
          </div>
        );
      } else {
        return (
          <div>
            <div className="mt-[8px] flex justify-between">
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#04971C] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#04971C] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#04971C] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#04971C] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#04971C] "></div>
              <div className="h-[4px] w-[15%] rounded-[55px] bg-[#04971C] "></div>
            </div>
            <span className="text-[10px] leading-[16px] text-[#2C2C2C] sm:text-[12px]">
              You now have a strong password
            </span>
          </div>
        );
      }
    };
  
    const passwordStrength = getPasswordStrength();
  
   
    const handleRememberMeChange = () => {
      setRememberMe(!rememberMe);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted with:', email, password, 'Remember Me:', rememberMe);
  };
  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <div className="box-border flex overflow-hidden">
      <div className="hidden md:block w-[31%] bg-[url('/image/signInBackgroundImage.svg')] bg-cover bg-center bg-no-repeat">
          {/* Left Section Content */}
          <div className="w-full pl-[32px] pt-[38px] text-white">
          <img
              src="/image/alstrideVector.svg"
            alt="alstrideVector"
            className="h-[24px] w-[164px] object-cover"
            />
          <p className="w-[78%] h-[96px] mt-[44px] text-[20px] text-[#FFF] font-normal leading-8">
           Walk the talk of style in comfort and confidence. Let our shoes take you to places you have never been before.
          </p>
      </div>
    </div>

     {/* Right Section */}
    <div className="w-full md:w-[69%]">
    <nav className=" flex justify-between items-center">
             <div>
               <img className=" md:hidden" src="public/image/alstrideVector2.svg" alt="alstrideVector2" />
                </div>
                
                  <Link to="/">
                   <img  src="/image/PREVIOUS ICON.svg" alt="previous link" />
                   </Link>
        </nav>
    <div className="md:w-[56%] mx-auto ">
      <h3 className=" max-w-full text-[31px] text-center leading-[48px] md:text-[39px] font-bold  text-[#444]  ">
      Welcome Back!
               </h3>
               <p className="text-center text-sm sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] font-normal leading-6 text-[#444]">
               We are thrilled to see you again. Your shoe style journey continues
                </p>

                <form className="mt-[48px] w-full" onSubmit={handleSubmit}>
                <div className={`mt-[36px] ${validateField(email) ? 'border-red-500' : ''}`}>
            <label htmlFor="email" className="text-[18px] font-normal leading-normal text-[#444]">
            Email address
            </label>
            <input
            type="email"
            placeholder="Enter a valid email address"
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`w-full md:w-full h-[60px] flex-shrink-0 border border-solid border-[#9B9B9B66] bg-[#E4E8EBBF] rounded transition-colors duration-300 hover:border-[#00666A] ${validateField(email) ? 'border-red-500' : ''}`}
            />
            {!email && !isFocused && (
            <div className="flex items-center mt-2">
            <span className="text-red-500">&#9888;</span>
            <p className="text-red-500  ml-2">Email address is not valid</p>
            </div>
            )}
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
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? <span className="text-[#444]">Hide</span> : <span className="text-[#444]">Show</span>}
          </span>
        </div>
        <div className="mt-2">{passwordStrength}</div>
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
    <Link to="/reset-password">
    <button type="button"className="text-[#444] text-[16px] font-medium leading-[24px]">
      Forgot Password?
    </button></Link>
  </div>

           {/* Sign In and Sign Up Buttons  */}
           <div className="flex flex-col md:space-x-[100px] sm:flex-row space-y-8  justify-center items-center">
                <div className="flex space-x-1 mt-[55px]  order-2 sm:order-1">
                      <p className="w-[220px] h-[22px] flex-shrink-0 text-[18px] font-normal leading-[24px] text-[#000]">
                      Don’t have an account?
                        </p>
                <Link to="/sign-up" > 
                <button type="button"className="w-[60px] h-[22px] flex items-center text-[#007074] justify-center flex-shrink-0">
                       Sign Up
                      </button></Link>
                  </div>
                  
                 <button type="submit"
                  className="bg-[#007074] text-[#fff] md:flex flex-col justify-center items-center w-[222px] sm:w-[137px] h-[56px]   flex-shrink-0 rounded-md  order-1 sm:order-2">
                 Sign In
                     </button>
              </div>
               {/* Social Login Section ( */}
              <div className='flex  mt-[41px] space-x-8 justify-center items-center'>
            <img className='w-[106px] md:w-[165px] h-[10px] flex-shrink-0' src="/image/OrSigninwithelement.svg" alt="" />
              <p className='text-[#444] text-[16px] font-normal leading-[24px] w-[102] md:w-[116px] h-[18px] flex-col justify-center flex-shrink-0'>
              Or Sign in with
              </p>
              <img className='w-[106px] md:w-[165px] h-[10px] flex-shrink-0' src="/image/OrSigninwithelement.svg" alt="" />
              </div>
              <div className='flex mt-[33px] space-x-[100px] justify-center items-center '>
            <div className=''>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img src="public/image/gmail icon.svg"alt="google login"/></a>
                </div>
                <div>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img src="/image/fb icon.svg"alt="facebook login"/></a>
                </div>
                <div className=''>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img src="/image/x icon.svg" alt="X login"/></a>
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
