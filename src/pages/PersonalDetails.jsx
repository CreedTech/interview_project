import { AuthFooter, AuthNavBar } from '../components';
// BsEyeSlash,IoMdArrowDropdown
import { BsEyeSlash } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { NavLink } from "react-router-dom";
const PersonalDetails = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <AuthNavBar name={'Personal Details'} page={'/login'} />
      </div>
      <div className="flex w-full justify-center items-center 2xl:px-20 pt-5">
        <div className="flex flex-col md:p-12 py-12 px-4">
          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm pl-3 font-medium text-gray-900 dark:text-[#C4AFEB]"
            >
              Full Name
            </label>
            <div className="relative mb-6 w-72">
              <input
                type="text"
                id="input-group-1"
                className="bg-[#C4AFEB] border border-[#C4AFEB] text-gray-900 text-sm rounded-[50px] focus:ring-none focus:border-none block w-full  px-5 py-4  dark:bg-[#C4AFEB] dark:border-[#C4AFEB] dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-[#C4AFEB] dark:focus:border-[#C4AFEB]"
                placeholder="Surname"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 pl-3 text-sm font-medium text-gray-900 dark:text-[#C4AFEB]"
            >
              Mobile Number
            </label>
            <div className="relative mb-6 w-72">
              <input
                type="text"
                id="input-group-1"
                className="bg-[#C4AFEB] border border-[#C4AFEB] text-gray-900 text-sm rounded-[50px] focus:ring-none focus:border-none block w-full  px-5 py-4  dark:bg-[#C4AFEB] dark:border-[#C4AFEB] dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-[#C4AFEB] dark:focus:border-[#C4AFEB]"
                placeholder="Enter your Mobile Number"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 pl-3 text-sm font-medium text-gray-900 dark:text-[#C4AFEB]"
            >
              Email
            </label>
            <div className="relative mb-6 w-72">
              <input
                type="text"
                id="input-group-1"
                className="bg-[#C4AFEB] border border-[#C4AFEB] text-gray-900 text-sm rounded-[50px] focus:ring-none focus:border-none block w-full  px-5 py-4  dark:bg-[#C4AFEB] dark:border-[#C4AFEB] dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-[#C4AFEB] dark:focus:border-[#C4AFEB]"
                placeholder="Enter your Email Address"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 pl-3 text-sm font-medium text-gray-900 dark:text-[#C4AFEB]"
            >
              Password
            </label>
            <div className="relative mb-6 w-72">
              <input
                type="text"
                id="input-group-1"
                className="bg-[#C4AFEB] border border-[#C4AFEB] text-gray-900 text-sm rounded-[50px] focus:ring-none focus:border-none block w-full  px-5 py-4  dark:bg-[#C4AFEB] dark:border-[#C4AFEB] dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-[#C4AFEB] dark:focus:border-[#C4AFEB]"
                placeholder="Chose Secure Password"
              />
              <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                <BsEyeSlash className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 pl-3 text-sm font-medium text-gray-900 dark:text-[#C4AFEB]"
            >
              Gender
            </label>
            <div className="relative mb-6 w-72">
              <input
                type="text"
                id="input-group-1"
                className="bg-[#C4AFEB] border border-[#C4AFEB] text-gray-900 text-sm rounded-[50px] focus:ring-none focus:border-none block w-full  px-5 py-4  dark:bg-[#C4AFEB] dark:border-[#C4AFEB] dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-[#C4AFEB] dark:focus:border-[#C4AFEB]"
                placeholder="Select Gender"
              />
              <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                <IoMdArrowDropdown className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 pl-3 text-sm font-medium text-gray-900 dark:text-[#C4AFEB]"
            >
              Age
            </label>
            <div className="relative mb-6 w-72">
              <input
                type="text"
                id="input-group-1"
                className="bg-[#C4AFEB] border border-[#C4AFEB] text-gray-900 text-sm rounded-[50px] focus:ring-none focus:border-none block w-full  px-5 py-4  dark:bg-[#C4AFEB] dark:border-[#C4AFEB] dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-[#C4AFEB] dark:focus:border-[#C4AFEB]"
                placeholder="Select your Age"
              />
              <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                <IoMdArrowDropdown className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-1 py-3 items-center justify-center mx-4">
            <div className="w-3 h-1 rounded-[50px]  text-center bg-[#4B16C7]"></div>
            <div className="w-1 h-1 rounded-[50px]  bg-[#4B16C7]"></div>
            <div className="w-1 h-1 rounded-[50px]  bg-[#4B16C7]"></div>
          </div>
          <button className="bg-[#4B16C7] text-white  text-center px-7 mb-4 mx-4 py-3 rounded-[50px] cursor-pointer hover:bg-[#4B16C7] uppercase text-lg font-bold">
            <NavLink to="/resident">Next</NavLink>
          </button>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
};

export default PersonalDetails;
