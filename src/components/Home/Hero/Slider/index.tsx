'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Autoplay,
  Pagination,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './slider.css'
import Slide1 from '../Content/slide1'
import Slide2 from '../Content/slide2'
import Slide3 from '../Content/slide3'
import Slide4 from '../Content/slide4'
import Text from '@/components/ui/Text'

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { component: <Slide1 />, delay: 36000, projectName: 'Bosma-ADU' },
    { component: <Slide2 />, delay: 26000, projectName: 'Norman-bath' },
    { component: <Slide3 />, delay: 42000, projectName: 'pellegrino' },
    { component: <Slide4 />, delay: 14000, projectName: 'website-homepage' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full overflow-hidden home-slider-parent">
        <div className="absolute bottom-0 left-16 p-5 z-10 bg-opacity-50 mob:left-0">
          <Text as="h2" className="my-3 text-white leading-[44px]">
            <span className="text-[40px] font-light">Design+ Build</span>
            <br />
            <span className="text-[40px] font-light">It’s</span>{' '}
            <span className="italic text-[40px]">Innate</span>
          </Text>

          <button
            className="mt-[20px] mb-[160px] border border-[#FFFFFF] font-medium font-inter w-full max-w-[208px] h-[50px] text-[16px] leading-[22.4px] hover:bg-white hover:text-black hover:border-black transition duration-300 bg-transparent"
            onClick={() => scrollToSection('contactHome')}
          >
            Book Consultation
          </button>

          <Text className="text-[20px] leading-[28px] text-[#FFFFFF] mt-5">
            Project
          </Text>
          <Text className="text-[28px] leading-[36.4px] text-[#FFFFFF] mb-[60px]">
            {slides[currentSlide]?.projectName}
          </Text>
        </div>

        <Swiper
          slidesPerView={1}
          speed={2000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation, Scrollbar, Autoplay, Pagination]}
          className="mySwiper swiper-backface-hidden"
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex)

            if (
              swiper.params.autoplay &&
              typeof swiper.params.autoplay === 'object'
            ) {
              const currentSlide = swiper.realIndex
              swiper.params.autoplay.delay = slides[currentSlide]?.delay || 5000
              swiper.autoplay.start()
            }
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide.component}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default HomeSlider
