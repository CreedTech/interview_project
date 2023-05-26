import { AuthFooter, AuthNavBar } from '../components';
import mobileEncryptionImage from '../assets/undraw_mobile_encryption_re_yw3o.svg';
import { NavLink } from "react-router-dom";

const Otp = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <AuthNavBar name={'Resident Address'} />
      </div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden ">
        <div className="relative  px-6  pb-9  mx-auto w-full max-w-lg ">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16 mb-8">
            <div className="flex flex-col items-center justify-center text-center space-y-2 -mt-12">
              <div>
                <img
                  src={mobileEncryptionImage}
                  alt={mobileEncryptionImage}
                  className="w-[1000px] h-48 mb-4 cursor-pointer"
                />
              </div>
              <div className="font-semibold text-3xl text-[#5615C6]">
                <p>OTP Verification</p>
              </div>
              <div className="flex flex-row text-xs font-medium text-[#5615C6]">
                <p>Code will be sent to 0705563254</p>
              </div>
            </div>
          </div>
          <div>
            <form action="" method="post">
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs px-4 mb-2">
                  <div className="w-6 h-6 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none   border-b-2 border-gray-700 text-lg bg-white "
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="w-6 h-6 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none   border-b-2 border-gray-700 text-lg bg-white "
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="w-6 h-6 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none   border-b-2 border-gray-700 text-lg bg-white "
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="w-6 h-6 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none   border-b-2 border-gray-700 text-lg bg-white "
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="w-6 h-6 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none   border-b-2 border-gray-700 text-lg bg-white "
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-center text-xs font-medium space-x-1 text-gray-500">
                  <p>Didn&lsquo;t recieve code?</p>{' '}
                  <a
                    className="flex flex-row items-center text-blue-600"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend
                  </a>
                </div>

                <div className="flex flex-col  mt-12">
                  <div className="flex flex-row mt-1 py-3 items-center justify-center mx-4">
                    <div className="w-1 h-1 rounded-[50px]  text-center bg-[#4B16C7]"></div>
                    <div className="w-1 h-1 rounded-[50px]  bg-[#4B16C7]"></div>
                    <div className="w-3 h-1 rounded-[50px]  bg-[#4B16C7]"></div>
                  </div>
                  <button className="bg-[#4B16C7] text-white  text-center px-7 mb-4 mx-4 py-3 rounded-[50px] cursor-pointer hover:bg-[#4B16C7] uppercase text-lg font-bold">
                  <NavLink to="/">Send Code</NavLink> 
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="flex w-full justify-center items-center 2xl:px-20 pt-5"> */}
      {/* <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email ba**@dipainhouse.com</p>
            </div>
          </div>
        </div>
        <div>
          <form action="" method="post">
            <div className="flex flex-col space-y-16">
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                <div className="w-16 h-16 ">
                  <input
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="w-16 h-16 ">
                  <input
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="w-16 h-16 ">
                  <input
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="w-16 h-16 ">
                  <input
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div>
                  <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                    Verify Account
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't recieve code?</p>{' '}
                  <a
                    className="flex flex-row items-center text-blue-600"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div> */}
      {/* <div className="flex flex-col md:p-12 py-12 px-4">
        
          <div className="flex flex-row mt-1 py-3 items-center justify-center mx-4">
            <div className="w-1 h-1 rounded-[50px]  text-center bg-[#4B16C7]"></div>
            <div className="w-3 h-1 rounded-[50px]  bg-[#4B16C7]"></div>
            <div className="w-1 h-1 rounded-[50px]  bg-[#4B16C7]"></div>
          </div>
          <button className="bg-[#4B16C7] text-white  text-center px-7 mb-4 mx-4 py-3 rounded-[50px] cursor-pointer hover:bg-[#4B16C7] uppercase text-lg font-bold">
            Next
          </button>
        </div> */}
      {/* </div> */}
      <AuthFooter />
    </div>
  );
};

export default Otp;
