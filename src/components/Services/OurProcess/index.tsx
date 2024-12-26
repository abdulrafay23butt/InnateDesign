import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import bgleft from "@/public/images/services/leftbgsection.png";
import centerline from "@/public/images/services/centerline.png";
import bgright from "@/public/images/services/rightbgsection.png";
import estimate from "@/public/images/services/freeestimate.png";
import design from "@/public/images/services/design.png";
import material from "@/public/images/services/material.png";
import job from "@/public/images/services/job.png";
import demolition from "@/public/images/services/demolition.png";
import instalation from "@/public/images/services/installation.png";
import cleanup from "@/public/images/services/cleanup.png";
import point from "@/public/images/services/point.png";

const data = [
  {
    id: 1,
    bgImage: bgleft,
    icon: estimate,
    title: "Free Estimate",
    description:
      "In our initial inspection we take measurements of your kitchen or bathroom, determine the scope of work, the budget of different materials and whether a permit is necessary.",
  },
  {
    id: 3,
    bgImage: bgleft,
    icon: material,
    title: "Material Selection",
    description:
      "We help you select materials that match your vision, considering factors like durability, aesthetics, and cost. We ensure all necessary materials and supplies are ordered and delivered on time. We can meet you at Floor and Decor to go over tile choices together.",
  },
  {
    id: 5,
    bgImage: bgleft,
    icon: demolition,
    title: "Demolition",
    description:
      "We strip the old kitchen or bathroom, removing the old flooring, fixtures, trim, cabinets and appliances. We then haul away all the debris. Now we have a blank canvas in which to build your dream kitchen or bathroom.",
  },
  {
    id: 7,
    bgImage: bgleft,
    icon: cleanup,
    title: "Clean Up",
    description:
      "We carefully remove all debris and excess materials from the site. Our team does a detailed construction cleaning to remove all dust. We perform a final walkthrough with the client to address any concerns or touch-ups.",
  },
];
const data2 = [
  {
    id: 4,
    bgImage: bgright,
    icon: job,
    title: "Job Site Protection",
    description:
      "We section off the area of work from the rest of the house ensuring that dust and debris do not circulate throughout the house. We lay down construction paper to protect the floor from foot traffic.",
  },
  {
    id: 6,
    bgImage: bgright,
    icon: instalation,
    title: "Installation",
    description:
      "Our licensed tradesmen adjust the framing, plumbing and electrical to match your new plan. From there our skilled artisans install the drywall, tile, cabinets, countertops, fixtures, trim and paint.",
  },
];
const OurProcess = () => {
  return (
    <div className="bg-black">
      <div className="min-h-screen lg:hidden w-full gradient pt-16 pb-20 px-5">
        <Text
          as="h1"
          className="text-[53px] font-semibold mb-16 text-center leading-[68.9px] "
        >
          Our Process
        </Text>

        <div className="flex gap-[10px] justify-center mx-auto">
          {/* left */}
          <div className="max-w-[504px] w-full flex flex-wrap gap-[150px]">
            {data.map((item) => (
              <div
                key={item.id}
                className="relative w-[504px] h-[444px] "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image
                  className="absolute z-0  w-full h-full "
                  src={item.bgImage}
                  alt=""
                  width={504}
                  height={434}
                />
                <div className="relative z-10 pl-8  pr-14 max-w-[516px]">
                  <div className="flex w-full justify-between items-center">
                    <Image
                      className="w-[79px] h-[79px] transition-transform duration-300 hover:scale-[1.1] cursor-pointer "
                      src={item.icon}
                      alt=""
                      width={79.52}
                      height={79.52}
                    />
                    <Text className="text-[138.01px] leading-[183.22px] text-[#FFFFFF1A] font-bold">
                      {item.id}
                    </Text>
                  </div>
                  <Text className="text-[33.43px] leading-[46.8px] text-white">
                    {item.title}
                  </Text>
                  <Text className="text-[19.96px] leading-[27.14px] text-white/60 mt-2">
                    {item.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
          {/* center */}
          <div className=" relative w-[29px] flex justify-center">
            <Image
              className=" z-0 w-[5px] h-full max-h-[2315px]"
              src={centerline}
              alt=""
              width={5}
              height={2215}
            />
            <Image
              className="w-[29px] absolute z-10 top-[8.7%]"
              src={point}
              alt="point1"
              width={29}
              height={26}
            />
            <Image
              className="w-[29px] absolute z-10 top-[22.7%]"
              src={point}
              alt="point2"
              width={29}
              height={26}
            />
            <Image
              className="w-[29px] absolute z-10 top-[35.3%]"
              src={point}
              alt="point3"
              width={29}
              height={26}
            />
            <Image
              className="w-[29px] absolute z-10 top-[50.1%]"
              src={point}
              alt="point4"
              width={29}
              height={26}
            />
            <Image
              className="w-[29px] absolute z-10 top-[62%]"
              src={point}
              alt="point5"
              width={29}
              height={26}
            />
            <Image
              className="w-[29px] absolute z-10 top-[76.2%]"
              src={point}
              alt="point6"
              width={29}
              height={26}
            />
            <Image
              className="w-[29px] absolute z-10 top-[88.6%]"
              src={point}
              alt="point6"
              width={29}
              height={26}
            />
          </div>
          {/* right */}
          <div className=" mt-[100px]">
            <div
              className="relative w-[504px] min-h-[494px] mt-[200px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <Image
                className="absolute z-0 w-full h-full"
                src={bgright}
                alt=""
                width={504}
                height={434}
              />
              <div className="relative z-10 pl-16 pr-5 max-w-[516px]">
                <div className="flex w-full justify-between items-center">
                  <Image
                    className="w-[79px] h-[79px] transition-transform duration-300 hover:scale-[1.1] cursor-pointer"
                    src={design}
                    alt=""
                    width={79.52}
                    height={79.52}
                  />
                  <Text className="text-[138.01px] leading-[183.22px] text-[#FFFFFF1A] font-bold">
                    2
                  </Text>
                </div>
                <Text className="text-[33.43px] leading-[46.8px] text-white">
                  Design
                </Text>
                <Text className="text-[19.96px] leading-[27.14px] text-white/60 mt-2">
                  Architectural design is crucial for bathroom and kitchen
                  remodeling as it ensures optimal space utilization and
                  enhances functionality. We have architects and interior
                  designers on our team in order to improve the aesthetic appeal
                  and add value to your home by integrating modern trends and
                  personalized touches.
                </Text>
              </div>
            </div>
            {data2.map((item) => (
              <div
                key={item.id}
                className="relative w-[504px] h-[434px] mt-[170px]"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image
                  className="absolute z-0 w-full h-full"
                  src={item.bgImage}
                  alt=""
                  width={504}
                  height={434}
                />
                <div className="relative z-10 pl-16 pr-5 max-w-[516px]">
                  <div className="flex w-full justify-between items-center">
                    <Image
                      className="w-[79px] h-[79px] transition-transform duration-300 hover:scale-[1.1] cursor-pointer"
                      src={item.icon}
                      alt=""
                      width={79.52}
                      height={79.52}
                    />
                    <Text className="text-[138.01px] leading-[183.22px] text-[#FFFFFF1A] font-bold">
                      {item.id}
                    </Text>
                  </div>
                  <Text className="text-[33.43px] leading-[46.8px] text-white">
                    {item.title}
                  </Text>
                  <Text className="text-[19.96px] leading-[27.14px] text-white/60 mt-2">
                    {item.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
