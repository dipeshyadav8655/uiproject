import React from "react";
import CTOorVPImage from '../Assets/CTOorVPImage.svg';
import Correct from '../Assets/Correct.svg'

function CTOorVP() {
  return (
    <div className="flex flex-1 mx-[130px]">
      <div className="leftDive gap-y-16">
        <div className="w-[505px] ">
          <p className="break-words text-[48px] font-bold">
            You’re a CTO or a VP of Engineering and you have a problem.
          </p>
        </div>
        <div className="break-words leading-8">
            <ul className="text-[18px] font-[600px]">
                <li className="flex items-center gap-1">
                <span><img src={Correct} alt="" className="h-[20px]"/></span>
                <span>Development isn’t moving fast enough</span>
                </li>
                <li className="flex items-center gap-1">
                <span><img src={Correct} alt="" className="h-[20px]"/></span>
               <span>You don’t have the right developers</span> 
                </li>
                <li className="flex items-center gap-1">
                <span><img src={Correct} alt="" className="h-[20px]"/></span>
                <span>You need additional engineering capacity</span>
                </li>
                <li className="break-words flex items-start gap-1 mt-[6px]">
                <span><img src={Correct} alt="" className="h-[20px]"/></span>
                <span>Recruiting, hiring, and onboarding developers
takes too much time and bandwidth</span>
                </li>
                <li className="flex items-center gap-1">
                <span><img src={Correct} alt="" className="h-[20px]"/></span>
                <span>You’ve lost key developers through attrition</span>
                </li>
            </ul>
        </div>
      </div>
      <div className="rightDiv w-[874px] h-[435px]">
        <img src={CTOorVPImage} alt="" />
      </div>
    </div>
  );
}

export default CTOorVP;
