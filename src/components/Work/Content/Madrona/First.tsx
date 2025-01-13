import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";
import slide from "@/public/images/work/MR1.png";
import arrowwhite from "@/public/images/work/Arrowwhite.png";
const First = () => {
  return (
    <div className="relative w-full z-10  mob:h-full h-screen min-h-[700px] flex justify-center items-center px-20 mob:px-5">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={slide}
        alt=""
        width={1440}
        height={757}
      />

      <div className="w-full  relative z-10 min-h-[350px] flex items-center justify-center">
        <div className="text-center">
          <Text as="h1" className="text-[64px] leading-[28px] mob:leading-[56px] text-[#FFFFFF] mt-24">
          Madrona Remodel
          </Text>
          <Text className="text-[28px] leading-[36.4px] text-[#FFFFFF] mb-3 flex items-center gap-1 mt-5 text-center justify-center">
          Seattle, Colorado
          </Text>
          <Link
            href=""
            className="max-w-[126px] mx-auto flex items-center justify-center text-center gap-1 text-[16px] font-inter text-white "
          >
            LEARN MORE <Image src={arrowwhite} alt="" width={18} height={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
