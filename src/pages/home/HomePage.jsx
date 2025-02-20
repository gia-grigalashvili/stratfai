import React from "react";
import Navbar from "../../components/Home/Header/Navbar";
import Text from "../../components/Home/Main/Text";
import frame2 from "/public/img/Frame 2.png";
import Frame1 from "/public/img/Frame 1.png";
export default function HomePage() {
  return (
    <div className=" px-[10px] ">
      <Navbar />
      <Text />
      <div className="flex  justify-evenly items-center">
        <img className="hidden lg:block" src={Frame1} alt="" />
        <img src={frame2} alt="" />
      </div>
    </div>
  );
}
