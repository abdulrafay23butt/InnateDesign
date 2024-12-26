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
import Second from "../Content/Second";
import leftarrow from "@/public/images/work/Arrowleftblue.png"
import rightarrow from "@/public/images/work/Arrowrightblue.png"

function WorkSlider2() {
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
    <div className=" w-full overflow-hidden">
      <div
      // className="overflow-hidden w-full "
      // data-aos="fade-up"
      // data-aos-delay="200"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      >
        <div className=" w-full overflow-hidden work1-slider-parent flex justify-center items-center relative border-b-2">
        <Image
          className="cards-custom-prev2"
          onClick={handleprevbtn}
          src={leftarrow}
          alt="moveprevbtn"
        />
        <Image
          className="cards-custom-next2"
          onClick={handleNextvbtn}
          src={rightarrow}
          alt="movenextbtn"
        />
          <Swiper
           
            slidesPerView={1}
            speed={2000}
            loop={true}
            navigation={{
                nextEl: ".cards-custom-next2",
                prevEl: ".cards-custom-prev2",
              }}
            modules={[Keyboard, Navigation, Scrollbar, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Second />
            </SwiperSlide>

            <SwiperSlide>
              <Second />
            </SwiperSlide>

            <SwiperSlide>
              <Second />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default WorkSlider2;
