import React from "react";
// import Image from "next/image";
import Text from "@/components/ui/Text";

// import bath from "@/public/images/services/bathroom.png";
import Projects from "./Projects";
const LatestProjects = () => {
  return (
    <div className="w-full max-w-[1203px] min-h-[700px] py-16 flex flex-wrap lg:justify-center lg:gap-[50px] items-center justify-between mx-auto lg:px-5">
      <div className="w-full max-w-[504px]">
        <Text className="text-[40px] font-medium text-white leading-[52px]">
          Check Out Some of Our Latest Bathroom & Kitchen Projects
        </Text>
        <Text className="text-white mt-4">
          This gallery showcases some of the projects we have done for clients
          in both Colorado and Washington.
        </Text>
      </div>
      {/*  */}
      <div className="max-w-[558px] w-full">
        <Projects/>
      </div>
    </div>
  );
};

export default LatestProjects;
