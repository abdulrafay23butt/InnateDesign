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

import Link from "next/link";

import Text from "@/components/ui/Text";

import arrowwhite from "@/public/images/work/Arrowwhite.png";
import "../slider.css";
import First from "../Content/Solar/First";
import Second from "../Content/Solar/Second";
import leftarrow from "@/public/images/work/Arrowleftblue.png"
import rightarrow from "@/public/images/work/Arrowrightblue.png"

function WorkSlider3() {
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
        <div className="absolute bottom-40 left-0 p-5 mob:p-10 w-full z-10 bg-opacity-50 ">
          <div className="text-center">
            <Text as="h1" className="text-[64px] mob:text-[48px] leading-[28px] mob:leading-[56px] text-[#FFFFFF] mt-24 mob:mt-0">
              Solar Retreat
            </Text>
            <Text className="text-[28px] mob:mt-3 mob:text-[20px] leading-[36.4px] text-[#FFFFFF] mb-3 flex items-center gap-1 mt-5 text-center justify-center">
              Rainier, Washington
            </Text>
            <Link
              href=""
              className="max-w-[126px] mob:text-[14px] mx-auto flex items-center justify-center text-center gap-1 text-[16px] font-inter text-white "
            >
              LEARN MORE <Image src={arrowwhite} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className=" w-full overflow-hidden work1-slider-parent flex justify-center items-center relative">
          <Image
            className="cards-custom-prev12"
            onClick={handleprevbtn}
            src={leftarrow}
            alt="moveprevbtn"
          />
          <Image
            className="cards-custom-next12"
            onClick={handleNextvbtn}
            src={rightarrow}
            alt="movenextbtn"
          />
          <Swiper

            slidesPerView={1}
            speed={2000}
            loop={true}
            navigation={{
              nextEl: ".cards-custom-next12",
              prevEl: ".cards-custom-prev12",
            }}
            modules={[Keyboard, Navigation, Scrollbar, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <First />
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

export default WorkSlider3;
