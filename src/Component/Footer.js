import React from "react";
import SocialIcon from "../Assets/SocialIcons.svg";

function Footer() {
  return (
    <div className="bg-black text-white p-10 h-[821px]">
      <div className="flex flex-col items-center justify-between h-[330px] mt-[150px]">
        <div className="leading-[35px] text-center">
          <p className="text-[24px] mb-[30px]">
            Have a great idea you wanna like to work on?
          </p>
          <p className="text-[72px]">LET’S TALK</p>
        </div>
        <div className="">
          <img src={SocialIcon} alt="" />
          <p>info@officina.com</p>
        </div>
      </div>
      <div className="mx-5 mt-20 border-t-2 border-white p-5">
        <ul className="flex items-center gap-10 text-[48px] font-semibold">
            <li>
                about
            </li>
            <li>
                work
            </li>
            <li>
                blog
            </li>
            <li>
                content
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
