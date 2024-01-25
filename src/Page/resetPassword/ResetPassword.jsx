import { useState } from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Update email validity state
    setIsEmailValid(validateEmail(inputEmail));
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (isEmailValid) {
      console.log("Reset password request sent for email:", email);
      // Reset email validity state after successful submission
      setIsEmailValid(true);
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <main className="box-border flex">
        {/* Left Container */}
        <div className=" hidden overflow-hidden md:block md:w-[31%]">
          <div className="h-screen w-full bg-[url('/image/passwordRecoveryImage.svg')] bg-cover bg-center bg-no-repeat">
            <div className="w-[90%] pl-[32px] pt-[38px] text-white">
              <img
                src="/image/alstrideVector.svg"
                alt="alstrideVector"
                className=" h-[24px] w-[164px] object-cover"
              />
              <h5 className="mt-8 text-[25px] font-medium leading-8 lg:mt-[44px]">
                Don’t worry! It happens. Please enter your email address to
                reset your password
              </h5>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="grid w-[100%] grid-rows-[auto_1fr_auto] md:w-[69%]  ">
          {/* Navigation */}
          <div className="flex items-center justify-between px-3 pt-3">
            <div>
              <img
                src="/image/blueLogo.svg"
                alt="blueLogo"
                className="h-[16px] w-[110px] sm:h-[24px] sm:w-[164px] md:hidden"
              />
            </div>

            {/* Previous button */}
            <Link to="/sign-in">
              <img src="/image/previousIcon.svg" alt="previousIcon" />
            </Link>
          </div>

          {/* Inner Container */}
          <div className="mx-auto mb-[100px] mt-[28px] w-[48%]">
            <div className="w-[100%]">
              <h2 className="text-center text-xl font-bold text-[#444] sm:text-3xl md:text-[33px] md:leading-10 lg:text-[42px] lg:leading-[50px] xl:text-[49px] xl:leading-[64px]">
                Reset Password
              </h2>
              <h6 className="text-14px mt-2 text-center font-normal leading-4 text-[#043133] sm:text-[18px] sm:leading-6 md:text-[20px] md:leading-6">
                We know how hard it is to remember password sometimes let’s help
                you reset your password.
              </h6>

              {/*Form */}
              <form
                className="mx-auto mt-6 w-full md:mt-6 md:w-[79%] lg:mt-8 xl:mt-[20px]"
                onSubmit={handleResetPassword}
              >
                <div className="mb-6 w-full text-[#444] md:mb-[34px]">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium md:text-base lg:text-[18px] lg:leading-6"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={handleEmailChange}
                    className={`mt-1 h-12 w-full rounded border-[0.6px] border-solid border-[#9B9B9B66] bg-[#E4E8EBBF] py-3 pl-3 text-[12px] font-normal leading-6 sm:text-[14px] md:mt-2 md:h-14 md:py-[18px] md:pl-[17px] lg:mt-[3px] lg:h-[60px] lg:text-[16px] ${
                      !isEmailValid && "border-red-500"
                    }`}
                    placeholder="Enter a valid email address"
                    required
                  />
                  {!isEmailValid && (
                    <div className="flex items-center gap-[10px] ">
                      <img
                        src="/image/iconWarning.svg"
                        alt="iconWarning.svg"
                        className=" h-[18px] w-[20px] object-cover"
                      />
                      <span className="mt-1 text-sm text-red-500">
                        Email address is not valid
                      </span>
                    </div>
                  )}
                </div>
                {/* button */}
                <div className="text-center">
                  <Link to="/update-password">
                    <button
                      type="submit"
                      className="rounded bg-[#00666A] px-4 py-2 text-sm font-medium leading-6 text-white md:px-6 md:py-3 md:text-base lg:px-8 lg:py-[16px] lg:text-[18px] xl:px-[40px] "
                    >
                      Reset Password
                    </button>
                  </Link>
                </div>

                {/* To sign up */}
                <div className="mt-4 text-center md:mt-4 lg:mt-8 xl:mt-[34px] ">
                  <p className="text-sm font-normal leading-6 md:text-base lg:text-[18px]">
                    Don’t have an account?
                    <Link
                      to="/sign-in"
                      className="text-[16px] font-medium leading-4 text-[#007074] hover:cursor-pointer md:text-[18px] md:leading-6"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          {/* Footer */}
          <footer className="text-[#444 mx-auto w-[48%] text-center ">
            <div className="flex items-center justify-between py-0 text-[10px] font-normal leading-4 ">
              <p>All rights reserved &copy; 2023 Alstride</p>
              <p>Privacy | Terms</p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default ResetPassword;
