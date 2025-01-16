"use client";
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
          slidesPerView={1}
          speed={2000}
          autoplay={{
            delay: 5000, // Default delay
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
          onSlideChange={(swiper) => {
            // Ensure autoplay exists and is of type AutoplayOptions
            if (swiper.params.autoplay && typeof swiper.params.autoplay === "object") {
              const currentSlide = swiper.realIndex;
              swiper.params.autoplay.delay = slides[currentSlide]?.delay || 5000; // Fallback to default delay
              swiper.autoplay.start(); // Restart autoplay to apply the new delay
            }
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