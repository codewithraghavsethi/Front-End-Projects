import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex text-white gap-7">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white py-2 px-8 rounded-full">
          Sign Up
        </button>
        <img
          onClick={() => {
            setShowMobileMenu(true);
          }}
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-7"
        />
      </div>

      {/* -------------mobile-menu---------------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt=""
            className="w-6"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium">
         
          <a  onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full inline-block">
            Home
          </a>
          
          <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full inline-block">
            About
          </a>
         
          <a  onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py-2 rounded-full inline-block">
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
