import React from "react";
import Image from "next/image";

import Text from "../ui/Text";

import logo from "@/public/logo-innate.png";
import insta from "@/public/insta.svg";
import fb from "@/public/fb.svg";
import linkedin from "@/public/ln.svg";

const Footer = () => {
  return (
    <div className=" pt-16 pb-12 mob:pt-12 px-5">
      <div className="mx-auto w-full max-w-[1140px] flex tab:flex-wrap tab:gap-[20px] justify-between ">
        <div className="">
          <Image src={logo} alt="" width={222.17} height={48} />
        </div>
        <div className="max-w-[160px] mob:max-w-full">
          <Text>Northwest</Text>
          <Text className="text-[#D9D9D9] mt-3">
            12819 SE 38th St #340 Bellevue, WA 98006 (425) 866-5206
          </Text>
        </div>
        <div className="max-w-[142px] mob:max-w-full">
          <Text>Vancouver</Text>
          <Text className="text-[#D9D9D9] mt-3">Appointment Only</Text>
        </div>
        <div className="">
          <div className="flex gap-4 ml-3">
            <a href="https://www.instagram.com/innate_aec/" target="_blank">
              <Image
                src={insta}
                alt="Instagram"
                width={32}
                height={32}
                className="transition-transform duration-300 hover:scale-[1.1] cursor-pointer"
                
              />
            </a>
            <a href="https://www.facebook.com/innateaec" target="_blank">
              <Image
                src={fb}
                alt="Facebook"
                width={32}
                height={32}
                className="transition-transform duration-300  hover:scale-[1.1] cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/company/innate-nw/" target="_blank">
              <Image
                src={linkedin}
                alt="LinkedIn"
                width={32}
                height={32}
                className="transition-transform duration-300 hover:scale-[1.1] cursor-pointer"
              />
            </a>
          </div>
          <Text className="text-[#D9D9D9] mt-3">© Innate NW, LLC</Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
