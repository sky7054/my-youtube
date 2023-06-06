import React from "react";
import Hamburger from "../assets/img/menu.png";
import youtubeLogo from "../assets/img/youtubeLogo.jpg";
import userLogo from "../assets/img/userLogo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
          dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img 
        className ="h-8 cursor-pointer" alt="menu"
        onClick={()=>toggleMenuHandler()}
         src={Hamburger} 
        />
        <a href="/">
        <img className="h-8 mx-3 cursor-pointer" alt="youtube-logo" src={youtubeLogo} />
        </a>
      </div>
      <div className="col-span-10 px-16">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 p-2 rounded-r-full hover:bg-gray-100">Search</button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src={userLogo}></img>
      </div>
    </div>
  );
};

export default Header;
