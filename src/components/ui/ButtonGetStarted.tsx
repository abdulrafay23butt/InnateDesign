import React from "react";
import Image from "next/image";

import rightarrow from "@/public/images/press/RightArrowblue.png";

import { cn } from "@/libs/utils/twMerge";
interface ButtonProps {
  text?: string;
  children?: React.ReactNode; // Add children prop
  className?: string;

}

const ButtonGetStarted: React.FC<ButtonProps> = ({ text = "Get Started", children, className }) => {
  return (
    <>
     
      <button className={cn("w-[166.63px] h-[50px] gap-2 hover:bg-white hover:text-black hover:border-black transition duration-300 border border-white text-white text-[16px] font-medium flex items-center justify-center ",  className)}>
        {children || text}  {/* Use children if available, otherwise use text */}
        <Image src={rightarrow} alt="" width={18} height={18} />

      </button>
    </>
  );
};

export default ButtonGetStarted;
 