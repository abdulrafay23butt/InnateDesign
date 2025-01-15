import React from "react";
import Image from "next/image";

import frame1 from "@/public/images/home/Frame1.png";
import frame2 from "@/public/images/home/Frame2.png";
import frame3 from "@/public/images/home/Frame3.png";
import frame4 from "@/public/images/home/Frame4.png";
import frame5 from "@/public/images/home/Frame5.png";
import frame6 from "@/public/images/home/Frame6.png";
import frame7 from "@/public/images/home/Frame7.png";
import frame8 from "@/public/images/home/natural Disaster.jpg";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import roof1 from "@/public/images/home/Roof 1.png";
import roof2 from "@/public/images/home/roof2.png";
import roof3 from "@/public/images/home/roof3.png";
import roof4 from "@/public/images/home/roof4.png";
import roof5 from "@/public/images/home/roof5.png";
import roof6 from "@/public/images/home/roof6.png";
import roof7 from "@/public/images/home/roof7.png";
import roof8 from "@/public/images/home/natural Disaster Logo.png";

const Services = () => {
  return (
    <div className="py-32">
      <div className="flex flex-wrap justify-center w-full mx-auto">
        <div className="w-[33.3%] tab:w-full group relative overflow-hidden aspect-[5/5]" style={{border:"1px solid rgba(255, 255, 255, 0.6)",borderBottom:"none"}}>
          <div className="overflow-hidden h-full flex justify-center items-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            {/* Background Image */}
            <Image
              src={frame1}
              alt="Roofing Service"
              fill
              className="transition-transform absolute z-0 top-0 h-full w-full object-cover duration-300 ease-in-out transform group-hover:scale-105"
            />

            {/* Content */}
            <div className="relative z-10">
              <Image className="mx-auto" src={roof1} alt="" width={95} height={95} />
              <Text className="text-[24px] font-light text-center my-4">Roofing</Text>
              <div className="flex justify-center w-full">
                <Button className="w-[136px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the same for other items */}
        <div className="w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden" style={{borderTop:"1px solid rgba(255, 255, 255, 0.6)"}}>
          <div className="overflow-hidden h-full flex justify-center items-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame2}
              alt="Decks Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full w-full object-cover duration-300 ease-in-out transform group-hover:scale-105"
            />

            <div className="relative z-10">
              <Image
                className="mx-auto"
                src={roof2}
                alt=""
                width={95}
                height={95}
              />
              <Text className="text-[24px] font-light text-center my-4">Decks</Text>
              <div className="flex justify-center w-full">
                <Button className="w-[136px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[33.4%] min-h-[484px] tab:w-full group relative overflow-hidden" style={{border:"1px solid rgba(255, 255, 255, 0.6)",borderBottom:"none"}}>
          <div className="overflow-hidden h-full flex justify-center items-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame3}
              alt="Kitchens & Bathrooms Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full w-full object-cover duration-300 ease-in-out transform group-hover:scale-105"
            />

            <div className="relative z-10">
              <Image
                className="mx-auto"
                src={roof3}
                alt=""
                width={95}
                height={95}
              />
              <Text className="text-[24px] font-light text-center my-4">
                Kitchens & Bathrooms
              </Text>
              <div className="flex justify-center w-full">
                <Button className="w-[136px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-wrap justify-center w-full min-h-[484px]  overflow-hidden   mx-auto">
        <div className="w-[50%] tab:w-full relative group min-h-[484px]  overflow-hidden" style={{border:"1px solid rgba(255, 255, 255, 0.6)"}} >
          <div className="overflow-hidden h-full flex justify-center items-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame4}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full  duration-300 ease-in-out transform group-hover:scale-105 w-full object-cover"
            />
            <div className="relative z-10">
              <Image
                className="mx-auto"
                src={roof4}
                alt=""
                width={95}
                height={95}
              />
              <Text className="text-[24px] font-light text-center my-4">
              Architectural Services
              </Text>
              <div className="flex justify-center">
                <Button className="w-[136px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300">
                  Learn More
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] border-none tab:w-full relative group min-h-[484px]  overflow-hidden" style={{border:"1px solid rgba(255, 255, 255, 0.6)", borderLeft:"none"}}>
          <div className="overflow-hidden h-full flex justify-center items-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame5}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full  duration-300 ease-in-out transform group-hover:scale-105 w-full object-cover"
            />
            <div className="relative z-10">
              <Image
                className="mx-auto"
                src={roof5}
                alt=""
                width={95}
                height={95}
              />
              <Text className="text-[24px] font-light text-center my-4">
                New Construction & ADU
              </Text>
              <div className="flex justify-center">
                <Button className="w-[136px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300">
                  Learn More
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-wrap justify-center w-full   mx-auto">
        <div className="w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden aspect-[5/5]" style={{border:"1px solid rgba(255, 255, 255, 0.6)", borderTop:"none", borderRight:"none"}}>
          <div className="overflow-hidden h-full flex justify-center items-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame6}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full duration-300 ease-in-out transform group-hover:scale-105 w-full object-cover"
            />
            <div className="relative z-10">
              <Image
                className="mx-auto"
                src={roof6}
                alt=""
                width={95}
                height={95}
              />
              <Text className="text-[24px] font-light text-center my-4">
                Siding
              </Text>
              <div className="flex justify-center w-full">
                <Button className="w-[136px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300">
                  Learn More
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden " style={{border:"1px solid rgba(255, 255, 255, 0.6)", borderTop:"none"}}>
          <div className="overflow-hidden h-full flex justify-center items-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame7}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full duration-300 ease-in-out transform group-hover:scale-105 w-full object-cover"
            />
            <div className="relative z-10">
              <Image
                className="mx-auto"
                src={roof7}
                alt=""
                width={95}
                height={95}
              />
              <Text className="text-[24px] font-light text-center my-4">
                Windows & Doors
              </Text>
              <div className="flex justify-center w-full">
                <Button className="w-[136px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300">
                  Learn More
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[33.4%] min-h-[484px] tab:w-full group relative overflow-hidden " style={{border:"1px solid rgba(255, 255, 255, 0.6)" , borderTop:"none", borderLeft:"none"}}>
          <div className="overflow-hidden h-full flex justify-center items-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame8}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full duration-300 ease-in-out transform group-hover:scale-105 w-full object-cover"
            />
            <div className="relative z-10">
              <Image
                className="mx-auto"
                src={roof8}
                alt=""
                width={95}
                height={95}
              />
              <Text className="text-[24px] font-light text-center my-4">
                Natural Disaster Migitation
              </Text>
              <div className="flex justify-center w-full">
                <Button className="w-[136px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300">
                  Learn More
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
