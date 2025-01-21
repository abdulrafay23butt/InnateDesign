import React from "react";
import Image from "next/image";
import slide from "@/public/images/work/DS6.png";
const Sixth = () => {
  return (
    <div className="relative w-full z-10 px-20 mob:px-5 mob:h-full h-screen min-h-[700px] flex justify-center items-center">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={slide}
        alt=""
        width={1440}
        height={757}
      />

      

    </div>
  );
};

export default Sixth;
