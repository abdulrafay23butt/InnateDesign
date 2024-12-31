import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

import phone from "@/public/images/onboarding/phone.png";
import hammer from "@/public/images/onboarding/hammer.png";
import Link from "next/link";
interface StartProps {
    onNext: () => void; // Function type indicating no parameters and no return value
  }
  const Start: React.FC<StartProps> = ({ onNext })  => {
  return (
    <div className="gradient min-h-screen flex items-center justify-center">
      <div className="">
        <Text
          as="h1"
          className="text-[40px] text-center font-firaSans font-normal mb-10"
        >
          How do you want to get started?
        </Text>
        <div className="flex flex-wrap gap-5 justify-center max-w-[100%]">
          <Link href="/#contactHome"  className="max-w-[45%] h-[245px]  flex justify-center items-center p-4 bg-transparent border border-[#FFFFFF3D] rounded-[10px] cursor-pointer ransition-all duration-300 hover:bg-[#141414] hover:backdrop-blur-md">
            <div className="">
              <Image src={phone} alt="" width={60} height={60} />
              <Text className="text-[24px] font-inter font-medium mt-3 mb-2">
                Talk to an expert
              </Text>
              <Text className="text-[#D9D9D9]">
                Schedule a call or free in-person project consultation{" "}
              </Text>
            </div>
          </Link>
          <div onClick={onNext} className="max-w-[45%] h-[245px] flex justify-center items-center p-4 bg-transparent border border-[#FFFFFF3D] rounded-[10px] cursor-pointer ransition-all duration-300 hover:bg-[#141414] hover:backdrop-blur-md">
            <div className="">
              <Image src={hammer} alt="" width={60} height={60} />
              <Text className="text-[24px] font-inter font-medium mt-3 mb-2">
                Start on my own
              </Text>
              <Text className="text-[#D9D9D9]">
                Schedule a call or free in-person project consultation
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
