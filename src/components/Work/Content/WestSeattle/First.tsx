import React from "react";
import Image from "next/image";
import slide from "@/public/images/work/WSD1.jpg";
const First = () => {
  return (
    <>
      <div className="relative w-full z-10 h-screen m-0 p-0 flex justify-center items-center">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={slide}
          alt=""
          width={1440}
          height={757}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-black"></div> */}

      
      </div>

      {/* <div className="lowergradient h-10 border-none"></div> */}
    </>
  );
};

export default First;
