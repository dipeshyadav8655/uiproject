import React from "react";
import GuideImage from "../Assets/GuideImage.svg";
import BestDesignGuide from '../Assets/BestDesignGuide.svg'

function Guide() {
  return (
    <div className="px-[264px] mt-10 relative">
      <img src={GuideImage} alt="" className="w-[1322px]"/>
      <div className="absolute top-[135px] left-[364px] text-center w-[821px]">
        <p className="text-7xl mb-[30px]">
          ULTIMATE Guide to designing a high- conerting landing page
        </p>
        <mark className="bg-yellow-400 text-[36px]">
          Learn how to design a conversation- effective landing page
        </mark>
      </div>
      <div className="w-[250px] h-[250px] top-[250px] left-[150px] rounded-full bg-black text-white absolute">
      </div>
      <img src={BestDesignGuide} alt="" className="absolute top-[300px] left-[200px]" />
    </div>
  );
}

export default Guide;
