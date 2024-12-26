import React from "react";

import { cn } from "@/libs/utils/twMerge";
interface ButtonProps {
  text?: string;
  children?: React.ReactNode; // Add children prop
  className?: string;

}

const Button: React.FC<ButtonProps> = ({ text = "Explore Music", children, className }) => {
  return (
    <>
     
      <button className={cn(" border border-[#FFFFFF]    hover:bg-white hover:text-black hover:border-black transition duration-300 bg-transparent w-full  h-[50px] text-[16px] text-white leading-[22.4px]",  className)}>
        {children || text} {/* Use children if available, otherwise use text */}
      </button>
    </>
  );
};

export default Button;
