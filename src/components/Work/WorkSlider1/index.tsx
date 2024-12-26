"use client";
import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Autoplay,
  // Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../slider.css";
import First from "../Content/First";
import leftarrow from "@/public/images/work/Arrowleft.png"
import rightarrow from "@/public/images/work/Arrowright.png"

function WorkSlider1() {
    const swiper = useSwiper();

    const handleprevbtn = () => {
      swiper?.slidePrev();
      console.log("slidePrev");
    };
  
    const handleNextvbtn = () => {
      swiper?.slideNext();
      console.log("slideNext");
    };
  return (
    <div className=" w-full ">
      <div
      // className="overflow-hidden w-full "
      // data-aos="fade-up"
      // data-aos-delay="200"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      >
        <div className=" w-full  work1-slider-parent flex justify-center items-center relative border-b-2">
        <Image
          className="cards-custom-prev"
          onClick={handleprevbtn}
          src={leftarrow}
          alt="moveprevbtn"
        />
        <Image
          className="cards-custom-next"
          onClick={handleNextvbtn}
          src={rightarrow}
          alt="movenextbtn"
        />
          <Swiper
            
            slidesPerView={1}
            speed={2000}
            loop={true}
            navigation={{
                nextEl: ".cards-custom-next",
                prevEl: ".cards-custom-prev",
              }}
            modules={[Keyboard, Navigation, Scrollbar, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <First />
            </SwiperSlide>

            <SwiperSlide>
              <First />
            </SwiperSlide>

            <SwiperSlide>
              <First />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default WorkSlider1;
