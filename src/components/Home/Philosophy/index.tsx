import React from "react";

import Text from "@/components/ui/Text";

import rightimg from "@/public/images/home/collective.png";
import Image from "next/image";
const Philosophy = () => {
  return (
    <>

      <div className="flex justify-center items-center  py-20 mob:my-12 px-14 mob:py-0 ">
        <div className="w-[90%] flex mob:flex-col items-center justify-center">
          <div className="w-4/5 mob:px-0 ">
            <Text className="text-[32px] text-white font-semibold leading-[41.2px] mt-3 mb-4">
              When design is both functional and beautiful, <br />it has the most impact
              on peoples lives.
            </Text>
          </div>
          <div className=" mob:px-0 justify-items-center aspect-[7/5] relative overflow-hidden w-1/5 mob:w-4/5">
            <Image
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="mr-24 mob:mr-0 object-cover"
              src={rightimg}
              alt="rightimg"
             fill
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Philosophy;
