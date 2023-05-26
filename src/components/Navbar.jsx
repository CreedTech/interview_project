import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { SlEarphones } from 'react-icons/sl';
import { NavLink } from "react-router-dom";

// import logo from '../../images/logo.png';

// eslint-disable-next-line react/prop-types
const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-8 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <div className="md:flex-[0.5] flex-initial justify-start items-start pt-8 pb-2">
          <div className='text-white'>
            <span>
              <span>
                <SlEarphones className="cursor-pointer text-white inline font-bold" />
              </span>{' '}
              <span className='text-xs'>Support</span>
            </span>
            <span>
              <span>
                <AiOutlineMail className="cursor-pointer text-white inline" />
              </span>{' '}
              <span className='text-xs'>clad12@gmail.com</span>
            </span>
          </div>
        </div>
      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-[#FC840C]" />
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.2] flex-initial justify-center items-center">
          {/* <img src={ logo} alt={logo} className='w-32 cursor-pointer' /> */}
        </div>
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial uppercase mx-10">
          {['Home', 'About', 'Invest', 'Pac11', 'Blog', 'Contact'].map(
            (item, index) => (
              <NavbarItem key={item + index} title={item} />
            )
          )}
          <li className="bg-[#FC840C] py-4 px-7 mx-4 rounded-[10px] cursor-pointer hover:bg-[#FC840C] uppercase text-sm font-bold">
             <NavLink to="/login">Join Us</NavLink>
          </li>
        </ul>
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
            "
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose
                  className="cursor-pointer"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                />
              </li>
              {['Home', 'About', 'Invest', 'Pac11', 'Blog', 'Contact'].map(
                (item, index) => (
                  <NavbarItem
                    key={item + index}
                    title={item}
                    classProps="my-2 text-lg uppercase"
                  />
                )
              )}
              <li className="bg-[#FC840C] py-4 px-7 mx-4 rounded-[10px] cursor-pointer hover:bg-[#FC840C] uppercase text-sm font-bold">
             <NavLink to="/login">Join Us</NavLink>
          </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
