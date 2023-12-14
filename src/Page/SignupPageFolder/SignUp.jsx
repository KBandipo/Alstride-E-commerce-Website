import React, { useState } from 'react';

function SignUp() {
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

  const handleSignUp = (e) => {
    e.preventDefault();
    // Example: Add your signup logic here
    if (validateForm()) {
      // Call an API or perform form submission
      console.log('Form submitted successfully!');
    } else {
      console.log('Form validation failed!');
    }
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

  return (
    <>
      <div className="box-border flex overflow-hidden">
        {/* Left Section (Assumed styling) */}
        <div className="w-[31%] bg-[url('public/image/signupBackgroundImage.svg')] bg-cover bg-center bg-no-repeat">
          {/* Left Section Content (Assumed styling) */}
          <div className="w-[90%] pl-[32px] pt-[38px] text-white">
            <img
              src="public/image/alstrideVector.svg"
              alt="alstrideVector"
              className="h-[24px] w-[164px] object-cover"
            />
            <p className="w-[78%] h-[96px] mt-[44px] text-[20px] font-normal leading-8">
              Walk the talk of style in comfort and confidence. Let our shoes take you to places you have never been before.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[69%]">
          {/* Previous Link (Assumed styling) */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img src="public/image/arrow-back-ios.svg" alt="previous link" />
            </a>
          </div>

          {/* Form Section (Assumed styling) */}
          <div className="mx-auto w-[46%]">
            <h3 className="text-center text-[39px] font-bold leading-[48px] text-[#444]">
              Create your account
            </h3>
            <p className="text-[15px] font-normal leading-6 text-[#444]">
              We need this information in order to complete your request...
            </p>
            <form className="mt-[48px]" onSubmit={handleSignUp}>
              {/* First Name Input (Assumed styling) */}
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
                  className="w-full h-[60px] flex-shrink-0 border border-solid border-[rgba(155, 155, 155, 0.40)] bg-[rgba(228, 232, 235, 0.75)] rounded transition-colors duration-300 hover:border-[#00666A]"
                />
                {!firstName && !isFocused && <p className="text-red-500 mt-2">Enter your First name</p>}
              </div>

              {/* Last Name Input (Assumed styling) */}
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
                  className="w-full h-[60px] flex-shrink-0 border border-solid border-[rgba(155, 155, 155, 0.40)] bg-[rgba(228, 232, 235, 0.75)] rounded transition-colors duration-300 hover:border-[#00666A]"
                />
                {!lastName && !isFocused && <p className="text-red-500 mt-2">Enter your Last name</p>}
              </div>

              {/* Phone Number Input (Assumed styling) */}
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
                  className="w-full h-[60px] flex-shrink-0 border border-solid border-[rgba(155, 155, 155, 0.40)] bg-[rgba(228, 232, 235, 0.75)] rounded transition-colors duration-300 hover:border-[#00666A]"
                />
                {!phoneNumber && !isFocused && <p className="text-red-500 mt-2">Enter your Phone Number</p>}
              </div>

              {/* Email Input (Assumed styling) */}
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
                  className="w-full h-[60px] flex-shrink-0 border border-solid border-[rgba(155, 155, 155, 0.40)] bg-[rgba(228, 232, 235, 0.75)] rounded transition-colors duration-300 hover:border-[#00666A]"
                />
                {!email && !isFocused && <p className="text-red-500 mt-2">Enter a valid Email</p>}
              </div>

              {/* Password Input (Assumed styling) */}
              <div className="mt-[36px]">
                <label htmlFor="password" className="text-[18px] font-normal leading-normal text-[#444]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => handleChange(e, setPassword)}
                  className="w-full h-[60px] flex-shrink-0 border border-solid border-[rgba(155, 155, 155, 0.40)] bg-[rgba(228, 232, 235, 0.75)] rounded transition-colors duration-300 hover:border-[#00666A]"
                />
                <p className={`mt-2 ${passwordStrength === 'Weak' ? 'text-red-500' : 'text-green-500'}`}>
                  Password Strength: {passwordStrength}
                </p>
              </div>

              {/* Sign In and Sign Up Buttons (Assumed styling) */}
              <div className="flex">
                <p>Already have an account?</p>
                <button type="button">SignIn</button>
                <button type="submit">SignUp</button>
              </div>

              {/* Social Login Section (Assumed styling) */}
              <div className="flex mt-[38px]">
                {/* ... */}
              </div>
            </form>

            {/* Footer Section (Assumed styling) */}
            <div className="flex text-[#444] text-[10px] mt-[51px] mb-[30px]">
              <p>All rights reserved © 2023 Alstride</p>
              <div className="ml-[186px]">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Privacy | Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Component (Assumed usage) */}
      {/* <Verification /> */}
    </>
  );
}

export default SignUp;
