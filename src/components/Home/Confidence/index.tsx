import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import leftbg from "@/public/images/home/logo-text-sin-texto 1.png";
import rightbg from "@/public/images/home/logo-text-sin-texto 2.png";
import ButtonGetStarted from "@/components/ui/ButtonGetStarted";

const Confidence = () => {
  return (
    <div className="pb-16 px-5">
      <div className="w-full max-w-[1140px] mx-auto  h-[300px] rounded-[10px] relative flex items-center justify-center">
        <Image
          className="bottom-0 left-0 absolute"
          src={leftbg}
          alt=""
          width={308}
          height={328}
        />
        <Image
          className="top-36 right-0 absolute"
          src={rightbg}
          alt=""
          width={308}
          height={328}
        />
        <div className=" pt-72">
          <Text as="h1" className="text-[40px] text-center font-medium">
            Design and Build with confidence
          </Text>
          <div className="flex justify-center mt-8">
         <ButtonGetStarted/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confidence;
