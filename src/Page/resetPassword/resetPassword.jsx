function ResetPassword() {
  return (
    <>
      <main className="box-border flex">
        <div className=" w-[31%] overflow-hidden">
          <div className="h-screen w-full bg-[url('/image/passwordRecoveryImage.svg')] bg-cover bg-center bg-no-repeat">
            <div className="w-[90%] pl-[32px] pt-[38px] text-white">
              <img
                src="/public/image/alstrideVector.svg"
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
        <div className="grid w-[69%] grid-rows-[auto_1fr_auto] ">
          <div className="flex items-center justify-between px-3 pt-3">
            <img src="/public/image/blueLogo.svg" alt="blueLogo" />
            <img src="/public/image/previousIcon.svg" alt="previousIcon" />
          </div>
          <div className="mx-auto w-[48%] pt-[100px]">
            <div className="w-[100%]">
              <h2 className="text-center text-[49px] font-bold leading-[64px] text-[#444]">
                Reset Password
              </h2>
              <h6 className="text-center text-[20px] font-normal leading-6 text-[#043133]">
                We know how hard it is to remember password sometimes let’s help
                you reset your password.
              </h6>

              <form className="mx-auto mt-[75px] w-[79%]">
                <div className="mb-[49px] w-full text-[#444]">
                  <label className="block text-[18px] font-medium leading-6">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="mt-[3px] h-[60px] w-full rounded border-[0.6px] border-solid border-[#9B9B9B66] bg-[#E4E8EBBF] py-[18px] pl-[17px] text-[16px] font-normal leading-6"
                    placeholder="Enter a valid email address"
                  />
                </div>
                <div className="text-center">
                  <button className="rounded bg-[#00666A] px-[40px] py-[16px] text-[18px] font-medium leading-6 text-white ">
                    Reset Password
                  </button>
                </div>
                <div className="mt-[34px] text-center ">
                  <p className="text-[18px] font-normal leading-6">
                    Don’t have an account?
                    <a
                      id="sign-up"
                      className="text-[18px] font-medium leading-6 text-[#007074] hover:cursor-pointer"
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <footer className="text-[#444 mx-auto w-[48%] text-center">
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
