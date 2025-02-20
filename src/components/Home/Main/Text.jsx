import React from "react";
import startap from "/img/STARTAP.png";
import InputGo from "./InputGo";
export default function Text() {
  return (
    <div className="flex  flex-col  items-center justify-center p-10">
      <h1 className="text-[32px] text-[#C6DDFF] font-bold leading-tight">
        Dream Your Dream Team For Your
      </h1>
      <img src={startap} alt="Startup Logo" className="  my-8 w-[400px]" />
      <h1 className="text-[29px]  text-[#C6DDFF] font-semibold">
        In Just One Click
      </h1>
      <InputGo />
    </div>
  );
}
