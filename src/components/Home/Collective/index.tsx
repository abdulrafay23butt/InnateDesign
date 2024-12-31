import React from "react";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

import rightimg from "@/public/images/home/collective.png";
import Image from "next/image";
const Collective = () => {
  return (
    <>
      <div className="lowergradient h-10 border-none"></div>
      <div className="flex justify-center items-center  py-20 mob:my-12 px-5">
        <div className="w-full flex mob:flex-wrap items-center justify-around">
          <div className="flex-grow px-44 mob:px-0 w-3/4">
            <Text className="text-[24px] font-medium leading-[31.2px] mb-4">
              We are a collective of architects, engineers and craftsmen
              collaborating to create beautiful spaces and structures that meet
              the unique needs of our clients.
            </Text>
            <Text>
              Innate is an architecture, engineering and construction firm capable
              of handling the entire project from permit to build. Our approach
              focuses on quality design and construction that will stand the test
              of time. In order to do this, we handpick craftsman and
              subcontractors who share our values. Detailed, beautiful work is
              often expensive, and so we are typically not the cheapest bid.
            </Text>
            <Button className="max-w-[137px] h-[50px] text-[16px] font-normal mt-7">
              Learn More
            </Button>
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


export default Collective;
