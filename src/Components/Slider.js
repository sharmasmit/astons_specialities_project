import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider() {
  return (
    <>
      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="Slide">
          <img src={require("../Images/SliderBG1.png")} alt="Slider-bg" />
        </SwiperSlide>
        <SwiperSlide className="Slide">
          <img src={require("../Images/SliderBG1.png")} alt="Slider-bg" />
        </SwiperSlide>
        <SwiperSlide className="Slide">
          <img src={require("../Images/SliderBG1.png")} alt="Slider-bg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
