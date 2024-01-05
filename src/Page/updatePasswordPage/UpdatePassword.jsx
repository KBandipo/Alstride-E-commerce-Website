import { Link } from "react-router-dom";
import { useState } from "react";

function UpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const passwordStrengthIndicator = () => {
    const length = newPassword.length;
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

  const passwordStrengthIndicatorConfirmNewPassword = () => {
    const lengthConfirm = confirmPassword.length;
    if (lengthConfirm === 0) {
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
    } else if (lengthConfirm <= 5) {
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
    } else if (lengthConfirm <= 8) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password update logic
    if (newPassword === confirmPassword) {
      // Passwords match, proceed with updating the password
      console.log("Password updated successfully!");
      setSuccessMessageVisible(true);

      // reset the form after a successful update
      setNewPassword("");
      setConfirmPassword("");
    } else {
      // Passwords don't match is consoled for now
      console.error("Passwords do not match");
    }
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
          {/* Navigtion section */}
          <div className="flex w-full items-center justify-between px-3 pt-3">
            <div>
              <img
                src="/public/image/blueLogo.svg"
                alt="blueLogo"
                className="h-[16px] w-[110px] sm:h-[24px] sm:w-[164px] md:hidden"
              />
            </div>

            {/* previous button */}
            <button>
              <img src="/image/previousIcon.svg" alt="previousIcon" />
            </button>
          </div>

          {/* Inner Container */}
          <div className="relative mx-auto mt-[28px] md:w-[48%]">
            <div className="w-[100%]">
              <h2 className="text-center text-xl font-bold text-[#444] sm:text-3xl md:text-[33px] md:leading-10 lg:text-[42px] lg:leading-[50px] xl:text-[49px] xl:leading-[64px]">
                Update Password
              </h2>
              <h6 className="text-14px mt-2 text-center font-normal leading-4 text-[#043133] sm:text-[18px] sm:leading-6 md:text-[20px] md:leading-6">
                Enter a great password you can remember
              </h6>
              {/* Form */}
              <form
                className="mb-[145px] mt-4 w-full sm:mb-[50px] md:mb-0 "
                onSubmit={handleSubmit}
              >
                <div className="relative mb-5 w-full text-[#444] md:mb-[30px]">
                  <label
                    htmlFor="New Password"
                    className="block text-sm font-medium md:text-base lg:text-[18px] lg:leading-6"
                  >
                    New Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    id="New Password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    className=" mt-1 h-12 w-full rounded border-[0.6px] border-solid border-[#9B9B9B66] bg-[#E4E8EBBF] py-3 pl-3 text-[12px] font-normal leading-6 sm:text-[14px] md:mt-2 md:h-14 md:py-[18px] md:pl-[17px] lg:mt-[3px] lg:h-[60px] lg:text-[16px]"
                    placeholder="Enter password"
                  />
                  <span
                    className="absolute right-[5%] top-[30%] cursor-pointer py-3 text-[12px] font-normal leading-6 text-[#444] sm:text-[14px] md:py-[18px] lg:top-[28%] lg:text-[16px] xl:top-[30%]"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                  <div className="mt-2">{passwordStrengthIndicator()}</div>
                </div>

                <div className="relative mb-6 w-full text-[#444] md:mb-[49px]">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium md:text-base lg:text-[18px] lg:leading-6"
                  >
                    Confirm New Password
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="Password"
                    className=" mt-1 h-12 w-full rounded border-[0.6px] border-solid border-[#9B9B9B66] bg-[#E4E8EBBF] py-3 pl-3 text-[12px] font-normal leading-6 sm:text-[14px] md:mt-2 md:h-14 md:py-[18px] md:pl-[17px] lg:mt-[3px] lg:h-[60px] lg:text-[16px]"
                    placeholder="Enter password"
                  />

                  <span
                    className="absolute right-[5%] top-[30%] cursor-pointer py-3 text-[12px] font-normal leading-6 text-[#444] sm:text-[14px] md:py-[18px] lg:top-[28%] lg:text-[16px] xl:top-[30%]"
                    onClick={handleShowConfirmPassword}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </span>
                  <div className="mt-2">
                    {passwordStrengthIndicatorConfirmNewPassword()}
                  </div>
                </div>
                {/* button */}
                <div className="text-center">
                  <Link to="reset-Password">
                    <button
                      type="submit"
                      className="cursor-pointer rounded bg-[#00666A] px-4 py-2 text-sm font-medium leading-6 text-white md:px-6 md:py-3 md:text-base lg:px-8 lg:py-[16px] lg:text-[18px] xl:px-[40px] "
                    >
                      Update Password
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <footer className="mx-auto w-[48%] text-center text-[#444] sm:mt-10 md:mt-0 ">
            <div className="flex items-center justify-between py-3 text-[10px] font-normal leading-4 ">
              <p>All rights reserved &copy; 2023 Alstride</p>
              <p>Privacy | Terms</p>
            </div>
          </footer>
        </div>

        {/* Success Message Overlay */}
        {successMessageVisible && (
          <div className="fixed inset-0 flex items-center  justify-center bg-black/30 backdrop-blur-[1px] backdrop-filter">
            <div className=" absolute h-full w-full rounded bg-white px-6 py-[40px] text-center shadow-md sm:right-[22%] sm:h-auto sm:w-[62%] md:right-[22%] md:w-[24%]">
              <div className="flex w-full items-center justify-between px-3 pt-3">
                {/* I created an empty div here */}
                <div></div>
                {/* previous button */}
                <button className="hidden">
                  <img src="/image/previousIcon.svg" alt="previousIcon" />
                </button>
              </div>

              <img
                src="/image/resetPasswordSuccessIcon.svg"
                alt="resetPasswordSuccessIcon"
                className="mx-auto h-[100px] w-[100px]"
              />
              <h2 className="mt-3 text-[21px] font-medium leading-normal text-[#444] ">
                Password Reset!
              </h2>
              <p className="mb-[27px] mt-[22px] text-[16px] font-normal leading-6 text-[#444] ">
                Your password has been successfully reset, click below to
                continue your access
              </p>

              <Link to="/sign-in">
                <button
                  className="cursor-pointer rounded bg-[#00666A] px-4 py-2 text-sm font-medium leading-6 text-white md:px-6 md:py-3 md:text-base lg:px-8 lg:py-[16px] lg:text-[18px] xl:px-[40px]"
                  onClick={() => setSuccessMessageVisible(false)}
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default UpdatePassword;
