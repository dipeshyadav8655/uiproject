import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import SliderImage1 from '../Assets/SliderImage1.svg';
import SliderImage2 from '../Assets/SliderImage2.svg';
import SliderImage3 from '../Assets/SliderImage3.svg';
import SliderImage4 from '../Assets/SliderImage4.svg';

function Slider() {
  return (
    <div className="my-8">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={false}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={SliderImage1} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage2} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage3} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage4} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage1} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage2} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage3} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage4} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage1} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage2} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage3} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage4} alt="" className="h-[512px] w-[512px]" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
