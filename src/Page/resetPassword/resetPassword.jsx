function ResetPassword() {
  return (
    <>
      <main className="box-border flex">
        <div className=" hidden overflow-hidden md:block md:w-[31%]">
          <div className="h-screen w-full bg-[url('/image/passwordRecoveryImage.svg')] bg-cover bg-center bg-no-repeat">
            <div className="w-[90%] pl-[32px] pt-[38px] text-white">
              <img
                src="/public/image/alstrideVector.svg"
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
        <div className="grid grid-rows-[auto_1fr_auto] md:w-[69%]  ">
          <div className="flex items-center justify-between px-3 pt-3">
            <div>
              <img
                src="/public/image/blueLogo.svg"
                alt="blueLogo"
                className="h-[16px] w-[110px] sm:h-[24px] sm:w-[164px] md:hidden"
              />
            </div>
            <img src="/public/image/previousIcon.svg" alt="previousIcon" />
          </div>
          <div className="mx-auto mb-[100px] mt-[100px] w-[48%]">
            <div className="w-[100%]">
              <h2 className="text-center text-xl font-bold text-[#444] sm:text-3xl md:text-[33px] md:leading-10 lg:text-[42px] lg:leading-[50px] xl:text-[49px] xl:leading-[64px]">
                Reset Password
              </h2>
              <h6 className="text-14px text-center font-normal leading-4 text-[#043133] sm:text-[18px] sm:leading-6 md:text-[20px] md:leading-6">
                We know how hard it is to remember password sometimes let’s help
                you reset your password.
              </h6>

              <form className="mx-auto mt-8 w-full md:mt-12 md:w-[79%] lg:mt-16 xl:mt-[75px]">
                <div className="mb-6 w-full text-[#444] md:mb-[49px]">
                  <label className="block text-sm font-medium md:text-base lg:text-[18px] lg:leading-6">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="mt-1 h-12 w-full rounded border-[0.6px] border-solid border-[#9B9B9B66] bg-[#E4E8EBBF] py-3 pl-3 text-[12px] font-normal leading-6 sm:text-[14px] md:mt-2 md:h-14 md:py-[18px] md:pl-[17px] lg:mt-[3px] lg:h-[60px] lg:text-[16px]"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div className="text-center">
                  <button className="rounded bg-[#00666A] px-4 py-2 text-sm font-medium leading-6 text-white md:px-6 md:py-3 md:text-base lg:px-8 lg:py-[16px] lg:text-[18px] xl:px-[40px] ">
                    Reset Password
                  </button>
                </div>
                <div className="mt-4 text-center md:mt-6 lg:mt-8 xl:mt-[34px] ">
                  <p className="text-sm font-normal leading-6 md:text-base lg:text-[18px]">
                    Don’t have an account?
                    <a
                      id="sign-up"
                      className="text-[16px] font-medium leading-4 text-[#007074] hover:cursor-pointer md:text-[18px] md:leading-6"
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>

          <footer className="text-[#444 mx-auto w-[48%] text-center ">
            <div className="flex items-center justify-between py-5 text-[10px] font-normal leading-4 ">
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
