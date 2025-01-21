import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import firm from "@/public/images/about/firm.png";
import michel from "@/public/images/about/michel.png";
import gelberg from "@/public/images/about/gelberg.png";
import amin from "@/public/images/about/amin.png";
import sophia from "@/public/images/about/sophia.png";
import mridul from "@/public/images/about/mridul.png";
import arrow from "@/public/images/about/arrow.png";
const HeroAbout = () => {
  return (
    <div className="min-h-screen pt-32 px-5">
      <Text
        as="h1"
        className="max-w-[971px] text-center text-[2.71vw] mob:text-[42px] leading-[70px] mob:leading-[60px] pt-20 pb-32 mx-auto font-light font-serif"
      >
        “Architecture and craftsmanship is in our DNA”
      </Text>
      <div className="w-full max-w-full px-16 mob:px-0 flex lg:flex-wrap justify-around mob:justify-center lg:gap-10 items-center " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <Image src={firm} alt="" className="w-1/2 mob:w-full" height={598} />
        <div className="w-full max-w-1/2 ms-10 mob:ms-0">
          <Text as="h1" className="font-inter font-light">The Firm</Text>
          <Text className="text-[28px] font-medium leading-[31.2px] my-5">
            Culture
          </Text>
          <Text className="">
            At Innate, We believe every client and every project have unique
            needs that require unique solutions. Whether it is a small
            residential remodel or a large commercial project, effective
            construction begins with good architecture, and this process is a
            participatory one where the clients individual needs, and wishes are
            heard and respected.
          </Text>
        </div>
      </div>
      <div className="w-full max-w-full px-16 mob:px-0 flex lg:flex-wrap justify-between mob:justify-center lg:gap-10 items-center py-16 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div className="w-full max-w-1/3 me-10 mob:order-2 mob:me-0">
          <Text as="h1" className="font-inter font-light">Michael Wishart</Text>
          <Text className="text-[28px] font-medium leading-[31.2px] my-5">
            Founder
          </Text>
          <Text>
            My love of architecture began at a very young age. As a child
            growing up in Australia I would create structures with blocks and
            sketch my dream house. Many years later I found myself studying
            architecture at the Community College of Denver where I discovered
            the timeless art of hand drafting. Although we fully embrace the
            capabilities of modern technology at Innate, I believe something
            profound occurs when you put pencil to paper. It’s a tactile
            connection that brings a unique authenticity to every project we do.
          </Text>
          <Text className="my-4">
            Since our inception, our philosophy has always been to enhance the
            quality of life of our clients. By collaborating with architects,
            engineers and craftsmen that share our values, I have formed a
            multi-disciplinary firm capable of handling the entire project from
            initial concept to finished construction. I believe that when design
            is both functional and beautiful, it can have the most impact on
            peoples lives.
          </Text>
        </div>
        <Image src={michel} alt="" className="w-2/3 mob:w-full mob:order-1" height={357} />
      </div>
      <Text as="h2" className="text-center text-[40px] mt-8 font-inter font-light" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Our Team</Text>

      <div className="w-full max-w-full px-16 mob:px-0 flex lg:flex-wrap gap-[25px] justify-center  items-center py-16 ">
        <div className="w-full max-w-[25%] mob:max-w-full">
          <div className="aspect-[2/2] relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <Image className="w-1/4 object-cover mob:w-full" src={gelberg} alt="" fill />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5">
              Ran Gelberg
            </Text>
          </div>
          <div className="flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <Text className="text-[18px] leading-[24px]">Project Manager</Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-[25%] mob:max-w-full">
          <div className="aspect-[2/2] relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <Image className="w-1/4 object-cover" src={sophia} alt="" fill />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5">
              Sophia Assis
            </Text>
          </div>
          <div className="flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <Text className="text-[18px] leading-[24px]">Office Manager</Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-[25%] mob:max-w-full">
          <div className="aspect-[2/2] relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <Image className="w-1/4 object-cover" src={mridul} alt="" fill />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5">
              Mridul Alif
            </Text>
          </div>
          <div className="flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <Text className="text-[18px] leading-[24px]">Architect</Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-[25%] mob:max-w-full">
          <div className="aspect-[2/2] relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
            <Image className="object-cover" src={amin} alt="" fill />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5">
              Amin Foysal
            </Text>
          </div>
          <div className="flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <Text className="text-[18px] leading-[24px]">Web Design</Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
