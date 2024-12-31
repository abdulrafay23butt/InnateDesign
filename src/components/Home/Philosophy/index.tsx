import React from "react";

import Text from "@/components/ui/Text";

import rightimg from "@/public/images/home/collective.png";
import Image from "next/image";
const Philosophy = () => {
  return (
    <>

      <div className="flex justify-center items-center  py-20 mob:my-12 px-5">
        <div className="w-full flex mob:flex-wrap items-center justify-around">
          <div className="flex-grow px-44 mob:px-0 w-3/4">
            <Text className="text-[32px] text-white  font-semibold leading-[41.2px] mt-3 mb-4">
              When design is both functional and beautiful, it has the most impact
              on peoples lives.
            </Text>
          </div>
          <div className=" flex-grow mob:px-0 justify-items-center  w-1/4">
            <Image
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="mr-24 mob:mr-0"
              src={rightimg}
              alt="rightimg"
              width={339}
              height={222}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Philosophy;
