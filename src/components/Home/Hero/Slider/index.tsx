"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Keyboard,
//   Navigation,
//   Scrollbar,
//   Autoplay,
//   Pagination,
// } from "swiper/modules";
import "swiper/css";

import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css";
import Slide1 from "../Content/slide1";
import Slide2 from "../Content/slide2";
import Slide3 from "../Content/slide3";
import Slide4 from "../Content/slide4";

function HomeSlider() {
  const slides = [
    { component: <Slide1 />, delay: 36000 },
    { component: <Slide2 />, delay: 26000 },
    { component: <Slide3 />, delay: 42000 },
    { component: <Slide4 />, delay: 14000 },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full overflow-hidden home-slider-parent">
        <Swiper
          onSlideChange={(swiper) => {
            const currentSlideIndex = swiper.realIndex;
            const videoElements = document.querySelectorAll('video');
            videoElements.forEach((video, index) => {
              if (index === currentSlideIndex) {
                video.play();
              } else {
                video.pause();
                video.currentTime = 0; // Reset video when not active
              }
            });
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.component}
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </div>
  );
}

export default HomeSlider;
