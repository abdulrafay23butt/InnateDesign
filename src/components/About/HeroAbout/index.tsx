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
        className="max-w-[871px] text-center text-[64px] mob:text-[42px] leading-[70px] mob:leading-[60px] font-bold pt-20 pb-32 mx-auto"
      >
        “Architecture and craftsmanship is in our DNA”
      </Text>
      <div className="w-full max-w-[90%] mx-auto flex lg:flex-wrap justify-around lg:gap-10 items-center ">
        <Image src={firm} alt="" className="w-1/2" height={598} />
        <div className="w-full max-w-1/2 ms-10">
          <Text as="h1" className="font-inter font-light">The Firm</Text>
          <Text className="text-[24px] font-medium leading-[31.2px] my-5">
            Culture
          </Text>
          <Text>
            At Innate, We believe every client and every project have unique
            needs that require unique solutions. Whether it is a small
            residential remodel or a large commercial project, effective
            construction begins with good architecture, and this process is a
            participatory one where the clients individual needs, and wishes are
            heard and respected.
          </Text>
        </div>
      </div>
      <div className="w-full max-w-[90%] mx-auto flex lg:flex-wrap justify-between lg:gap-10 items-center py-16 ">
        <div className="w-full max-w-1/3 me-10">
          <Text as="h1" className="font-inter font-light">Michael Wishart</Text>
          <Text className="text-[24px] font-medium leading-[31.2px] my-5">
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
        <Image src={michel} alt="" className="w-2/3" height={357} />
      </div>
      <Text as="h2" className="text-center text-[40px] mt-8 font-inter font-light">Our Team</Text>

      <div className="w-full max-w-[90%] mx-auto flex lg:flex-wrap gap-[25px] justify-center  items-center py-16 ">
        <div className="w-full max-w-[25%] ">
          <div className="aspect-[2/2] relative overflow-hidden">
            <Image className="w-1/4 object-cover" src={gelberg} alt="" fill />
          </div>
          <Text className="text-[30px] font-semibold leading-[39px] mt-5">
            Ran Gelberg
          </Text>
          <div className="flex items-center">
            <Text className="text-[18px] leading-[24px]">Project Manager</Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-[25%] ">
          <div className="aspect-[2/2] relative overflow-hidden">
            <Image className="w-1/4 object-cover" src={sophia} alt="" fill />
          </div>
          <Text className="text-[30px] font-semibold leading-[39px] mt-5">
          Sophia Assis
          </Text>
          <div className="flex items-center">
            <Text className="text-[18px] leading-[24px]">Office Manager</Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-[25%] ">
          <div className="aspect-[2/2] relative overflow-hidden">
            <Image className="w-1/4 object-cover" src={mridul} alt="" fill />
          </div>
          <Text className="text-[30px] font-semibold leading-[39px] mt-5">
          Mridul Alif
          </Text>
          <div className="flex items-center">
            <Text className="text-[18px] leading-[24px]">Architect</Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-[25%] ">
          <div className="aspect-[2/2] relative overflow-hidden">
            <Image className="object-cover" src={amin} alt="" fill />
          </div>
          <Text className="text-[30px] font-semibold leading-[39px] mt-5">
          Amin Foysal
          </Text>
          <div className="flex items-center">
            <Text className="text-[18px] leading-[24px]">Web Design</Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
