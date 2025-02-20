import React from "react";
import Logo from "/img/startfai text 1.png";
import wallet from "/img/Wallet_alt_fill.png";
import bell from "/img/Bell_pin_fill.png";
import user from "/img/User_alt_fill.png";

export default function Navbar() {
  return (
    <div className="flex  items-center justify-evenly p-4">
      <img src={Logo} alt="Startfai Logo" className="h-[90px]" />
      <div className="flex gap-5">
        <img
          className="p-4 bg-[#212121] rounded-lg transition-transform duration-200 cursor-pointer hover:scale-110"
          src={wallet}
          alt="Wallet Icon"
        />
        <img
          className="p-4 bg-[#212121] rounded-lg transition-transform duration-200 cursor-pointer hover:scale-110"
          src={bell}
          alt="Notification Icon"
        />
        <div className="p-4 flex items-center gap-2 bg-[#212121] rounded-[15px] cursor-pointer transition-transform duration-200 hover:scale-110">
          <img src={user} alt="User Profile Icon" />
          <h1 className="text-white">Account</h1>
        </div>
      </div>
    </div>
  );
}
