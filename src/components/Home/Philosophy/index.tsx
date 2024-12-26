import React from "react";

import Text from "@/components/ui/Text";

import rightimg from "@/public/images/home/collective.png";
import Image from "next/image";
const Philosophy = () => {
  return (
    <div className="flex  justify-center items-center py-20 mob:py-12 mob:px-5">
      <div className="w-full max-w-[1203px] flex mob:flex-wrap items-center justify-between">
        <div className="max-w-[586px]">
          <Text className="text-[32px] text-white  font-semibold leading-[41.2px] mt-3 mb-4">
            When design is both functional and beautiful, it has the most impact
            on peoples lives.
          </Text>
        </div>
        <div className="mob:mt-5">
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mr-8 mob:mr-0"
            src={rightimg}
            alt="rightimg"
            width={398}
            height={261}
          />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
