import React from "react";
import { logo } from "../assets/images";
import { FaBars } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-30 bg-white shadow-md">
      <div className="flex items-center justify-between py-8 px-6 sm:px-10">
        <div>
          <img src={logo} alt="" className="w-[148px] h-[25px]" />
        </div>
        <div className="items-center justify-center gap-10 hidden sm:flex">
          <ul className="flex gap-8 md:gap-10 font-semibold font-montserrat text-xs sm:text-sm items-center justify-center">
            <li>
              <a href="#features">FEATURES</a>
            </li>
            <li>
              <a href="#pricing">PRICING</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
          <button className="bg-red-500 text-white py-3 px-7 rounded-md text-xs">
            LOGIN
          </button>
        </div>
        <div className="sm:hidden flex items-center justify-center">
          <FaBars className="text-2xl"></FaBars>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
