import React from "react";
import GetInTouchMiddle from "../Assets/GetInTouchMiddle.svg";
import GetInTouchRight from "../Assets/GetInTouchRight.svg";
import GetInTouchLeft from "../Assets/GetInTouchLeft.svg";
import GetInTouchText from "../Assets/GetInTouchText.svg";

function GetInTouch() {
  return (
    <div>
      <div className="relative h-[800px]">
        <img src={GetInTouchLeft} alt="" className="absolute left-[253px]" />
        <img src={GetInTouchRight} alt="" className="absolute right-[303px]" />
        <img
          src={GetInTouchMiddle}
          alt=""
          className="absolute top-[50px] left-[439px]"
        />
      </div>
      <div className="relative bottom-0 m-10">
        <img src={GetInTouchText} alt="" />
      </div>
    </div>
  );
}

export default GetInTouch;
