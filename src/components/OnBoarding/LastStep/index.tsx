import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import Link from "next/link";

interface LastStepProps {
  onPrevious: () => void;
}

const LastStep: React.FC<LastStepProps> = ({  onPrevious }) => {
  return (
    <div className="gradient flex items-center justify-center px-5">
      <div className="max-w-[1140px] w-full py-20">
        <div className="">
          <Text
            as="h1"
            className="text-[40px]  font-firaSans font-normal mb-3 max-w-[446px] "
          >
            Thanks for telling us about your project!
          </Text>
          <Text>We’ll be in touch soon to schedule a consultation.</Text>
          <Link
            href="/"
            className="mt-16 flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px]      bg-transparent   h-[50px] text-[16px] text-white leading-[22.4px]"
          >
            Home
            <Image src={arrow} alt="" width={24} height={24} />
          </Link>
        </div>

        <div className="flex mob:flex-wrap justify-end mt-5">
          <div className="flex gap-5 mt-6">
            <button
              onClick={onPrevious}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px]      bg-transparent   h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              <Image
                className="rotate-180"
                src={arrow}
                alt=""
                width={24}
                height={24}
              />
              Previous
            </button>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[116px]     bg-transparent   h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              Next
              <Image src={arrow} alt="" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastStep;
