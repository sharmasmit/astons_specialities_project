import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
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
