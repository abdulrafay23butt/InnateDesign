import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";

import arrowwhite from "@/public/images/work/Arrowwhite.png";
const First = () => {
  return (
    <div className="relative w-full z-10  mob:h-full h-screen min-h-[700px] flex justify-center items-center px-20 mob:px-5">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      ><source src="/images/home/VB.mp4" type="video/mp4"/></video>

      <div className="w-full  relative z-10 min-h-[350px] flex items-center justify-center">
        <div className="text-center">
          <Text as="h1" className="text-[64px] mob:text-[48px] leading-[28px] text-[#FFFFFF] mob:leading-[56px] mt-24">
            Victoria Bathroom
          </Text>
          <Text className="text-[28px] mob:mt-3 mob:text-[20px] leading-[36.4px] text-[#FFFFFF] mb-3 flex items-center gap-1 mt-5 text-center justify-center">
            Littleton, Colorado
          </Text>
          <Link
            href=""
            className="max-w-[126px] mob:text-[14px] mx-auto flex items-center justify-center text-center gap-1 text-[16px] font-inter text-white "
          >
            LEARN MORE <Image src={arrowwhite} alt="" width={18} height={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
