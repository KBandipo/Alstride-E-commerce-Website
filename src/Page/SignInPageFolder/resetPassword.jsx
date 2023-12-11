function ResetPassword() {
  return (
    <>
      <div>
        <div className="grid w-[31%] grid-cols-[auto_auto] overflow-hidden">
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
        <div className="w-[69%]">
          <h1>Jesus is Lord</h1>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
