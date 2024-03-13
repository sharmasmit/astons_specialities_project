import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FreeMode, Pagination } from "swiper/modules";

function AddSlider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="AddSlide">
          <div className="left-card card">
            <img src={require("../Images/IcedLemonTea.png")} />
            <div className="card-head">
              <h4>New York Strip</h4>
              <Link style={{}} className="viewMore">
                <h3>$2.90</h3>
                <img src={require("../Images/Add-Plus.png")} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="AddSlide">
          <div className="card">
            <img src={require("../Images/FrenchFries.png")} />
            <div className="card-head">
              <h4>French Fries</h4>
              <Link style={{}} className="viewMore">
                <h3>$4.90</h3>
                <img src={require("../Images/Add-Plus.png")} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="AddSlide">
          <div className="left-card card">
            <img src={require("../Images/ClassicCheeseburger.png")} />
            <div className="card-head">
              <h4>Burger</h4>
              <Link style={{}} className="viewMore">
                <h3>$7.90</h3>
                <img src={require("../Images/Add-Plus.png")} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default AddSlider;
