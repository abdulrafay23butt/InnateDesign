import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Keyboard, Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  const handleSlideChange = (swiper: SwiperType) => {
    const currentSlide = swiper.realIndex;
  
    // Pause all videos
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => video.pause());
  
    // Play the current slide's video
    const activeVideo = document.querySelector(
      `.swiper-slide:nth-child(${currentSlide + 1}) video`
    ) as HTMLVideoElement; // Type assertion
    if (activeVideo) {
      activeVideo.play();
    }
  
    // Update autoplay delay
    if (swiper.params.autoplay && typeof swiper.params.autoplay === "object") {
      swiper.params.autoplay.delay = slides[currentSlide]?.delay || 5000;
      swiper.autoplay.start();
    }
  };
  

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        speed={2000}
        autoplay={{
          delay: 5000,
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
        modules={[Keyboard, Navigation, Autoplay, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide.component}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeSlider;
