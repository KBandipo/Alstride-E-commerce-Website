import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  // Separate state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  
    

  const validateForm = () => {
    // Example: Add your form validation logic here
    if (firstName.trim() === '' || lastName.trim() === '' || phoneNumber.trim() === '' || email.trim() === '') {
      return false;
    }
    return true;
  };

  const getPasswordStrength = () => {
    // Define your criteria for password strength
    const minLength = 8;

    // Check the length of the password
    if (password.length < minLength) {
      return 'Weak';
    }

    // Additional checks for complexity can be added here

    // If the password meets the criteria, consider it strong
    return 'Strong';
  };

  const passwordStrength = getPasswordStrength();
  const [showPassword, setShowPassword] = useState(false);


 
  const handleSignUp = (e) => {
    e.preventDefault();

    // Example: Add your signup logic here
    if (validateForm()) {
      // Call an API or perform form submission
      console.log('Form submitted successfully!');
      // Redirect to email verification page
      navigate('/email-verification');
    } else {
      console.log('Form validation failed!');
    }
  };
  

  return (
    <>
      <div className="box-border flex overflow-hidden">
      <div className="hidden md:block w-[31%] bg-[url('public/image/signupBackgroundImage.svg')] bg-cover bg-center bg-no-repeat">
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

```

        {/* Right Section */}
        <div className=" md:w-[69%]">
          <div className=" flex justify-between items-center">
             {/* Show this only on screens >= 768px */}
             <div>
               <img className=" md:hidden" src="public/image/alstrideVector2.svg" alt="alstrideVector2" />
                </div>
                
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                   <img  src="/image/PREVIOUS ICON.svg" alt="previous link" />
              </a>
           
        </div>
         
          <div className="  md:w-[56%] mx-auto ">
               <h3 className=" max-w-full text-[31px] text-center leading-[48px] md:text-[39px] font-bold  text-[#444]  ">
                   Create your account
               </h3>
               <p className="text-center text-sm sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] font-normal leading-6 text-[#444]">
                  We need this information in order to complete your request...
                </p>
                 {/* Form Section  */}

            <form className="mt-[48px] w-full " onSubmit={handleSignUp}>
              {/* First Name Input  */}
              <div>
                <label htmlFor="firstname" className="text-[18px] font-normal leading-normal text-[#444]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  value={firstName}
                  onChange={(e) => handleChange(e, setFirstName)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className=" w-full md:w-full  h-[60px] flex-shrink-0 border border-solid border-[#9B9B9B66] bg-[#E4E8EBBF] rounded transition-colors duration-300 hover:border-[#00666A]"
/>
                {!firstName && !isFocused && <p className="text-red-500 mt-2">Enter your First name</p>}
              </div>

              {/* Last Name Input  */}
              <div className="mt-[36px]">
                <label htmlFor="lastname" className="text-[18px] font-normal leading-normal text-[#444]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  value={lastName}
                  onChange={(e) => handleChange(e, setLastName)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full md:w-full  h-[60px] flex-shrink-0 border border-solid border-[#9B9B9B66] bg-[#E4E8EBBF]  rounded transition-colors duration-300 hover:border-[#00666A]"
                  />
                {!lastName && !isFocused && <p className="text-red-500 mt-2">Enter your Last name</p>}
              </div>

              {/* Phone Number Input  */}
              <div className="mt-[36px]">
                <label htmlFor="phoneNumber" className="text-[18px] font-normal leading-normal text-[#444]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => handleChange(e, setPhoneNumber)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className=" w-full md:w-full h-[60px] flex-shrink-0 border border-solid border-[#9B9B9B66] bg-[#E4E8EBBF]  rounded transition-colors duration-300 hover:border-[#00666A]"
                  />
                {!phoneNumber && !isFocused && <p className="text-red-500 mt-2">Enter your Phone Number</p>}
              </div>

              {/* Email Input  */}
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

              {/* Password Input  */}
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
                  {showPassword ? (
                <span className="text-[#444]">Hide</span>
                   ) : (
                <span className="text-[#444]">Show</span>
                  )}
            </span>
          </div>
                <p className={`mt-2 ${passwordStrength === 'Weak' ? 'text-red-500' : 'text-green-500'}`}>
                   Password Strength: {passwordStrength}
                 </p>
        </div>

              {/* Sign In and Sign Up Buttons  */}
              <div className="flex flex-col md:space-x-[100px] sm:flex-row space-y-8  justify-center items-center">
                <div className="flex space-x-1 mt-[55px]  order-2 sm:order-1">
                      <p className="w-[220px] h-[22px] flex-shrink-0 text-[18px] font-normal leading-[24px] text-[#000]">
                          Already have an account?
                        </p>
                <button type="button"className="w-[60px] h-[22px] flex items-center text-[#007074] justify-center flex-shrink-0">
                       SignIn
                      </button>
                  </div>
              
                 <button type="submit"
                  className="bg-[#007074] text-[#fff] md:flex flex-col justify-center items-center w-[222px] sm:w-[137px] h-[56px]   flex-shrink-0 rounded-md  order-1 sm:order-2">
                 SignUp
                     </button>
              </div>
               {/* Social Login Section ( */}

              <div className='flex  mt-[41px] space-x-8 justify-center items-center'>
            <img className='w-[106px] md:w-[165px] h-[10px] flex-shrink-0' src="public/image/OrSigninwithelement.svg" alt="" />
              <p className='text-[#444] text-[16px] font-normal leading-[24px] w-[102] md:w-[116px] h-[18px] flex-col justify-center flex-shrink-0'>
              Or Sign in with
              </p>
              <img className='w-[106px] md:w-[165px] h-[10px] flex-shrink-0' src="public/image/OrSigninwithelement.svg" alt="" />
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
           <div className="flex text-[#444] text-[10px] mt-[51px] mb-[30px] space-x-[260px] justify-center items-center ">
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

export default SignUp;
