// BiArrowBack ,AiOutlineGoogle,BsFacebook
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AuthFooter, AuthNavBar } from '../components';
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <AuthNavBar/>
      </div>
      <div className="flex w-full justify-center items-center 2xl:px-20 pt-5">
        <div className="flex flex-col md:p-12 py-12 px-4">
          <h3 className="text-[#4B16C7] text-3xl  my-5">Log in</h3>
          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm pl-3 font-medium text-gray-900 dark:text-[#C4AFEB]"
            >
              Email
            </label>
            <div className="relative mb-6 w-72">
              <input
                type="text"
                id="input-group-1"
                className="bg-[#C4AFEB] border border-[#C4AFEB] text-gray-900 text-sm rounded-[50px] focus:ring-none focus:border-none block w-full  px-5 py-4  dark:bg-[#C4AFEB] dark:border-[#C4AFEB] dark:placeholder-gray-600 dark:text-gray-900 dark:focus:ring-[#C4AFEB] dark:focus:border-[#C4AFEB]"
                placeholder="Email"
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
                placeholder="Password"
              />
            </div>
          </div>
          <button className="bg-[#4B16C7] text-white mt-10 py-3 text-center px-7 mx-4 rounded-[50px] cursor-pointer hover:bg-[#4B16C7] uppercase text-lg font-bold">
            <NavLink to="/personal">Login</NavLink>
          </button>
          <p className="text-center text-gray-500">
            Forgot Password? <span className="text-[#4B16C7]">reset</span>
          </p>
          <div className="flex items-center justify-center m-3">
            <BsFacebook className="cursor-pointer  inline" />
            <AiOutlineGoogle className="cursor-pointer  inline" />
          </div>
        </div>
          </div>
          <AuthFooter/>
    </div>
  );
};

export default Login;
