import React from "react";
import About1 from "../Assets/About1.svg";
import About2 from "../Assets/About2.svg";
import About3 from "../Assets/About3.svg";
import TeamsButton from '../Assets/TeamsButton.svg';

function About() {
  return (
    <div className="bg-[#EDEDEB] h-[1280px] relative">
      <img src={About3} alt="" className="absolute top-[253px] left-[145px] h-[834px]" />
      <img src={About2} alt="" className="absolute top-[250px] left-[141px] h-[833px]" />
      <img src={About1} alt="" className="absolute top-[268px] left-[185px] h-[795px]" />
      <div className="flex flex-col absolute right-0 top-[430px] gap-8">
        <div className="w-[700px] text-[24px] break-words font-[500px]">
          This is a example of a summary description for this item
          <br />
          This is a example of a summary description
          <br />
          This is a example text.
          <br />
        </div>
        <div className="w-[600px] text-[24px] break-words font-[500px]">
          Lorem ipsum dolor sit amet, consect adipise elit. Suspend varius enim
          in eros tristique. Duis crusus, mi quis viverra ornare. Lorem ipsum
          dolor sit amet, consect adipise elit.
        </div>
        <div className="w-[600px] text-[24px] break-words font-[500px]">
          Lorem ipsum dolor sit amet, consect adipise elit. Suspend varius enim
          in eros tristique. Duis crusus, mi quis viverra ornare. Lorem ipsum
          dolor sit amet, consect adipise elit. Lorem ipsum dolor sit amet ,
          consect.
        </div>
        <div>
            <img src={TeamsButton} alt="" />
        </div>
      </div>
      <div className="absolute top-[320px] left-[574px] text-[84px] font-semibold">
      I’M JESSICA MOUND
      </div>
    </div>
  );
}

export default About;
