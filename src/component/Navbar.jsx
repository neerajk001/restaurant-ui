import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
 import {MdOutlineRestaurantMenu } from 'react-icons/md';



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex justify-between h-20 px-6 items-center bg-black ">
      <div>
        <h1 className="text-4xl text-red-600">Foodie</h1>
      </div>
      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-white">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#menu" className="hover:text-gray-300">Menu</a></li>
        <li><a href="#awards" className="hover:text-gray-300">Awards</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
      <div className="flex gap-2">
        <div>
        <a className="text-white hover:text-gray-400" href="#login">Login/registration</a>
        </div>
        <div className="w-1 h-6"></div>
        <div className="text-white hover:text-gray-400">
            <a href="#book">book table</a>
        </div>
          
      </div>
      {/* applying the hamburger  menu */}
        
      <div className="md:hidden">
        <GiHamburgerMenu 
          className="text-white" 
          size={27} 
          onClick={() => setToggleMenu(true)} 
        />
      </div>
       {/* Mobile Overlay Menu */}
       {toggleMenu && (
        <div className="fixed inset-0 bg-white  bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-50">
          <MdOutlineRestaurantMenu 
            className="text-gold absolute top-6 right-6 cursor-pointer" 
            size={30} 
            onClick={() => setToggleMenu(false)} 
          />
          <ul className="space-y-6 text-2xl text-yellow-500">
            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
            <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
            <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
