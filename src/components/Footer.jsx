// import logo from "../../images/logo.png";
import { AiOutlineMail, AiOutlineClose } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types

const Footer = () => (
  <div className="w-full flex md:justify-center justify-center items-center flex-col gradient-bg-footer">
    <div className="flex w-full justify-center items-center 2xl:px-20 pt-[25rem]">
      <div className="flex flex-col md:p-12 py-12 px-4">
        <h3 className="text-[#FC840C] text-3xl text-center my-2 uppercase">
          Subscribe Us
        </h3>
        <h2 className="text-white text-4xl text-center my-2 uppercase">
          For Newsletter
        </h2>
        <p className="text-white text-xl text-center my-2">
          mollitia quis est <span className="text-[#FC840C]">mollitia</span>{' '}
          quae. Qui inventore perspiciatis et galisum
        </p>
      </div>
    </div>
    <div className="flex flex-row justify-evenly items-center white-glassmorphism p-3 m-2  cursor-pointer hover:shadow-xl mf:w-2/6 w-full mb-[20rem]">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <AiOutlineMail className="cursor-pointer text-white inline" />
        </div>
        <input
          type="text"
          id="input-group-1"
          className=" border-b-2 mx-1  text-xl  block w-full pl-10  bg-transparent placeholder-white "
          placeholder="Your email address"
        />
      </div>
      <p className="bg-[#FC840C] text-white py-4 px-7 mx-4 rounded-[50px] cursor-pointer hover:bg-[#FC840C] uppercase text-sm font-bold">
        Subscribe{' '}
        <span className="pl-3  rounded-full">
          <AiOutlineClose className="cursor-pointer text-white inline" />
        </span>
      </p>

      {/* <div className="ml-5 flex flex-col flex-1">
        <h1 className="mt-3 text-white text-lg"></h1>
        <p className="mt-3 text-white text-sm md:w-9/12"></p>
      </div> */}
    </div>
    <div className="w-1/4 flex sm:flex-row flex-col justify-center items-center mt-4">
      <div className="flex flex-1 justify-center items-center flex-wrap sm:mt-0 mt-0 w-1/4">
        <p className="text-white text-2xl text-center  cursor-pointer">
          About Us
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center flex-wrap sm:mt-0 mt-0">
        <p className="text-white text-2xl text-center  cursor-pointer">
          Careers
        </p>
      </div>
    </div>
    <div className="w-1/4 flex sm:flex-row flex-col justify-center items-center mt-4">
      <div className="flex flex-1 justify-center items-center flex-wrap sm:mt-0 mt-0">
        <p className="text-white text-2xl text-center  cursor-pointer">
          Contact
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center flex-wrap sm:mt-0 mt-0">
        <p className="text-white text-2xl text-center  cursor-pointer">
          Support
        </p>
      </div>
    </div>
    <div className="w-1/4 flex sm:flex-row flex-col justify-center items-center mt-4">
      <div className="flex flex-1 justify-center items-center flex-wrap sm:mt-0 mt-0">
        {/* <p className="text-white text-2xl text-center  cursor-pointer">
          Contact
        </p> */}
      </div>
      <div className="flex flex-1 justify-center items-center flex-wrap sm:mt-0 mt-0 pb-10">
        <p className="text-white text-2xl text-center  cursor-pointer">
          Privacy policy
        </p>
      </div>
    </div>

  </div>
);

export default Footer;
