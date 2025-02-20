import React, { useState, useEffect } from "react";
import Logo from "/img/startfai text 1.png";
import wallet from "/img/Wallet_alt_fill.png";
import bell from "/img/Bell_pin_fill.png";
import user from "/img/User_alt_fill.png";
import Hamburger from "hamburger-react"; // assuming you're using this package for the hamburger icon

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="flex items-center justify-between p-4">
      <img src={Logo} alt="Startfai Logo" className="h-[90px]" />

      {/* Hamburger Icon for small screens */}
      <div className="md:hidden">
        <Hamburger
          toggled={isMenuOpen}
          toggle={toggleMenu}
          color="#fff"
          size={25}
        />
      </div>

      {/* Menu items for large screens */}
      <div className="hidden md:flex gap-5">
        <img
          className="p-4 bg-[#212121] rounded-lg transition-transform duration-200 cursor-pointer hover:bg-[#6f7cd6]"
          src={wallet}
          alt="Wallet Icon"
        />
        <img
          className="p-4 bg-[#212121] rounded-lg transition-transform duration-200 cursor-pointer hover:bg-[#6f7cd6]"
          src={bell}
          alt="Notification Icon"
        />
        <div className="p-4 flex items-center gap-2 bg-[#212121] rounded-[15px] cursor-pointer transition-transform duration-200 hover:bg-[#6f7cd6]">
          <img src={user} alt="User Profile Icon" />
          <h1 className="text-white">Account</h1>
        </div>
      </div>

      {/* Mobile Menu (burger toggle) */}
      {isMenuOpen && (
        <div className="fixed z-10 top-[100px] right-0 w-[100%] h-screen bg-black bg-opacity-80 flex items-center justify-center flex-col gap-[20px] text-white p-8">
          <div className="flex items-center gap-4">
            <img
              className="p-4 bg-[#212121] rounded-lg transition-transform duration-200 cursor-pointer hover:bg-[#6f7cd6]"
              src={wallet}
              alt="Wallet Icon"
            />
            <img
              className="p-4 bg-[#212121] rounded-lg transition-transform duration-200 cursor-pointer hover:bg-[#6f7cd6]"
              src={bell}
              alt="Notification Icon"
            />
            <div className="flex items-center gap-2 p-4 bg-[#212121] rounded-[15px] cursor-pointer transition-transform duration-200 hover:bg-[#6f7cd6]">
              <img src={user} alt="User Profile Icon" />
              <h1 className="text-white">Account</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
