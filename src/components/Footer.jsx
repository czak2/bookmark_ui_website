import React from "react";
import { logo2 } from "../assets/images";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center py-3 px-6 sm:px-10 bg-bookmark-blue justify-between gap-3 md:flex-row container">
        <div className="flex items-center justify-center gap-16 py-9 max-sm:flex-col">
          <div>
            <img src={logo2} alt="" className="w-[148px] h-[25px]" />
          </div>
          <div className="items-center justify-center gap-10">
            <ul className="flex flex-col gap-8 md:gap-14 font-semibold font-montserrat text-xs items-center justify-center text-white sm:flex-row">
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
          </div>
        </div>
        <div className="flex justify-between items-center gap-6 pb-2">
          <FaTwitter className="text-white text-2xl"></FaTwitter>
          <CiFacebook className="text-white text-2xl"></CiFacebook>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
