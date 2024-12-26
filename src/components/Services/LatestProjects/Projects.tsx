"use client";
import Image from "next/image";
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

import "./slider.css";
import bath from "@/public/images/services/bathroom.png";

function Projects() {
  return (
    <div className=" w-full ">
      <div
      // className="overflow-hidden w-full "
      // data-aos="fade-up"
      // data-aos-delay="200"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      >
        <div className=" w-full  project-slider-parent flex justify-center items-center relative">
          <Swiper
            slidesPerView={1}
            speed={2000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Navigation, Scrollbar, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="px-2">
              <div className="">
                <Image src={bath} alt="" width={558} height={412} />
                <div className="h-[20px]"></div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-2">
              <div className="">
                <Image src={bath} alt="" width={558} height={412} />
                <div className="h-[20px]"></div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-2">
              <div className="">
                <Image src={bath} alt="" width={558} height={412} />
                <div className="h-[20px]"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Projects;
