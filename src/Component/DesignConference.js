import React from "react";
import MaskGroups from "../Assets/MaskGroups.svg";
import ConferenceImage from "../Assets/ConferenceImage.svg";
import Twenty from "../Assets/Twenty.svg";
function DesignConference() {
  return (
    <div>
      {/* Jesse Rayman */}
      <div className="w-full mt-10 relative">
        <div className="w-full h-[520px] bg-black flex justify-center items-center">
          <img src={MaskGroups} alt="" />
        </div>
        <div className="absolute top-[44px] left-[366px] text-white text-[150px] leading-[150px]">
          <p>
            Jess<span className="text-amber-200/[0.7]">e</span>
          </p>
          <p>
            Ray<span className="text-amber-700/[0.7]">ma</span>n
          </p>
        </div>
        <div className="w-[383px] absolute bg-black text-white top-[205px] right-[70px] flex flex-col gap-[30px]">
          <p>IT’S . TALK AVAILABLE FOR WORK . LR</p>

          <p>
            Hi, I’m Jesse Rayman. UIUX Designer based in California. I
            specialize in creating stunning and intutive design that provide
            seamless user experiences.
          </p>

          <div className="flex justify-between">
            <p>INSTAGRAM</p>
            <p>BEHANCE</p>
            <p>DRIBBLE</p>
          </div>
        </div>
      </div>

      {/* Design Conference */}

      <div className="w-full relative h-[1355px]">
        <div className="absolute right-0">
          <img src={ConferenceImage} alt="" />
        </div>
        <div className="text-[48px] text-[#300153] w-[189px] ml-[130px] mb-[41px]">
          <p>Zli cultural center</p>
        </div>
        <div className="text-[48px] text-[#300153] w-[343px] ml-[130px]">
          <p>October 10-12</p>
        </div>
        <div className="absolute left-[131px] top-[395px] text-[132px] font-extrabold">
          <p className="text-[#3624A4]">
            DESIG<span className="conference">N</span>
          </p>
        </div>
        <div className="absolute left-[337px] top-[495px] text-[132px] font-extrabold">
          <p className="text-[#3624A4]">
            CO<span className="conference">N</span>
            <span className="text-white">FERENCE</span>
          </p>
        </div>
        <div className="absolute top-[333px] left-[712px]">
          <img src={Twenty} alt="" />
        </div>
        <div className="absolute top-[680px] left-[735px]">
          <img src={Twenty} alt="" />
        </div>
        <div className="w-[306px] text-[36px] font-bold absolute top-[865px] left-[110px]">
          <p>major design event and architecture for professionals </p>
          <div className="bg-gradient-to-r from-[#74008C] to-[#301BA0] rounded-full px-24 text-white text-[24px] font-normal mt-[100px]">
            <p>Participate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignConference;
