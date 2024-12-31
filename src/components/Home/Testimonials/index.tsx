import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import profile1 from "@/public/images/home/profile.png";
import profile2 from "@/public/images/home/profile (1).png";
import profile3 from "@/public/images/home/profile (2).png";

const Testimonials = () => {
  return (
    <div className=" w-full mx-auto py-32 tab:px-5">
      <div
        className="flex flex-wrap justify-center gap-[20px]">
        <div className="w-full max-w-[25%] border border-black rounded-[10px] aspect-[6/5]">
          <iframe
            src="https://www.youtube.com/embed/RdjFPFmJqmw?start=6
"
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[60%] rounded-xl"
          ></iframe>
          <div className="p-4 ">
            <div className="flex gap-[11px] items-center  0">
              <Image src={profile1} alt="" width={48} height={48} />
              <div className="">
                <Text className=" text-[20px]  leading-[28px] text-white ">
                  Pellegrino Remodel
                </Text>
                <Text className="mt-1 text-gray-400 ">CEO at TechCorp</Text>
              </div>
            </div>
            <Text className="text-gray-400  text-sm  mt-3 ">This service is amazing!</Text>
          </div>
        </div>
        <div className="w-full max-w-[25%] border border-[#0000001A] rounded-[10px]">
          <iframe
            src="https://www.youtube.com/embed/RdjFPFmJqmw?start=6
"
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[60%] rounded-xl"
          ></iframe>
          <div className="p-4 ">
            <div className="flex gap-[11px] items-center  0">
              <Image src={profile2} alt="" width={48} height={48} />
              <div className="">
                <Text className=" text-[20px]  leading-[28px] text-white ">
                  Norman Remodel
                </Text>
                <Text className="mt-1 text-gray-400 ">CEO at TechCorp</Text>
              </div>
            </div>
            <Text className="text-gray-400  text-sm  mt-3 ">This service is amazing!</Text>
          </div>
        </div>
        <div className="w-full max-w-[25%] border border-[#0000001A] rounded-[10px]">
          <iframe
            src="https://www.youtube.com/embed/RdjFPFmJqmw?start=6
"
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[60%] rounded-lg"
          ></iframe>
          <div className="p-4 ">
            <div className="flex gap-[11px] items-center  0">
              <Image src={profile3} alt="" width={48} height={48} />
              <div className="">
                <Text className=" text-[20px]  leading-[28px] text-white ">
                  Eleanor Pena
                </Text>
                <Text className="mt-1 text-gray-400 ">CEO at TechCorp</Text>
              </div>
            </div>
            <Text className="text-gray-400  text-sm  mt-3 ">This service is amazing!</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
