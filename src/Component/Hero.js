import React from "react";
import Rectangle from "../Assets/Rectangle.svg";
import Star from "../Assets/Star 30.svg";

function Hero() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative mt-10">
      <div className="flex text-[84px] text-2xl items-center font-bold">
        <p>Take It </p>
        <span className="ml-4">t</span>
        <img src={Star} alt="" className="h-12" />
      </div>
      <div className="flex items-center font-bold text-2xl text-[84px] mt-5">
        the creative
        <span>
          <img src={Rectangle} alt="" className="h-12 mx-2 mt-4" />
        </span>
        level
      </div>
      <div className="w-[446px] text-center break-words text-[#575757] text-sm mt-16">
        Specialized in user interface design. We consider to be an integral part
        of the best user experience.
      </div>
      <div className="bg-black text-white px-4 py-2 rounded-full mt-4">
        Say Hello ----
      </div>
    </div>
  );
}

export default Hero;
