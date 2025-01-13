import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";
import slide from "@/public/images/work/WSD1.jpg";
import arrowwhite from "@/public/images/work/Arrowwhite.png";
const First = () => {
  return (
    <>
      <div className="relative w-full z-10 h-screen m-0 p-0 flex justify-center items-center">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={slide}
          alt=""
          width={1440}
          height={757}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-black"></div>

        <div className="w-full relative z-10 min-h-[350px] flex items-center justify-center">
          <div className="text-center">
            <Text as="h1" className="text-[64px] leading-[28px] text-[#FFFFFF] mob:leading-[56px] mt-24">
              West Seattle Duplex
            </Text>
            <Text className="text-[28px] leading-[36.4px] text-[#FFFFFF] mb-3 flex items-center gap-1 mt-5 text-center justify-center">
              West Seattle, Washington
            </Text>
            <Link
              href=""
              className="max-w-[126px] mx-auto flex items-center justify-center text-center gap-1 text-[16px] font-inter text-white"
            >
              LEARN MORE <Image src={arrowwhite} alt="" width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="lowergradient h-10 border-none"></div>
    </>
  );
};

export default First;
