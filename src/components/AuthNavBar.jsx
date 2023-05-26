/* eslint-disable react/prop-types */
// BiArrowBack ,AiOutlineGoogle,BsFacebook
import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from "react-router-dom";

const AuthNavBar = ({ name,page }) => {

  return (
    <div className="gradient-bg-welcome">
      <div className="w-full flex md:justify-between justify-between items-center p-4">
        <div>
        <NavLink to={page}><BiArrowBack size={40} className="cursor-pointer text-white inline" /></NavLink>
          
          <span className='text-white mx-10'>{name}</span>
        </div>
        <div className="top-bubbles"></div>
        <div className="top-bubbles-2"></div>
      </div>
    </div>
  );
};

export default AuthNavBar;
