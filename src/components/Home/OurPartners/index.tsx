import React from "react";

import Text from "@/components/ui/Text";

import Marquee from "./Marquee";

const OurPartners = () => {
  return (
    <div className="px-5 py-16">
      <Text className="text-[24px] font-medium mb-8 text-center">Loved by Our Partners at</Text>
      <div className="w-full max-w-[1140px] mx-auto flex lg:flex-wrap lg:justify-center lg:gap-[40px] justify-between items-center">
        {/* <div className="max-w-[45px] mob:max-w-full mob:w-full ">
        <Image className="mob:mx-auto" src={p1} alt="" width={45} height={53} />
        </div>
        <Image src={p2} alt="" width={226} height={53} />
        <Image src={p3} alt="" width={143} height={49} />
        <Image src={p4} alt="" width={268} height={45} /> */}
        <Marquee/>
      </div>
    </div>
  );
};

export default OurPartners;
