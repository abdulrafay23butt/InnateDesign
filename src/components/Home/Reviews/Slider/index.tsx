"use client";
// import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./slider.css";
// import Hero from "../../Hero";
import Reviews from "../Index";



function ReviewsSlider() {
  return (
    <div className=" w-full overflow-hidden ">
      <div
      // className="overflow-hidden w-full "
      // data-aos="fade-up"
      // data-aos-delay="200"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      >
        <div className=" w-full overflow-hidden TestimonialSlider-slider-parent">
          <Swiper
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
              1180: {
                slidesPerView: 1,
              },
              1323: {
                slidesPerView: 1,
              },
            }}
            slidesPerView={1}
            speed={2000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Navigation, Scrollbar, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="mob:px-5">
            <Reviews />
            </SwiperSlide>

            <SwiperSlide className="mob:px-5">
              <Reviews />
            </SwiperSlide>

            <SwiperSlide className="mob:px-5">
            <Reviews />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ReviewsSlider;
