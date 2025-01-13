import React from "react";
import Text from "@/components/ui/Text";
const Slide4 = () => {
    return (
        <div className="relative h-screen mob:h-full min-h-[784px] flex justify-center items-center">
            <video
                className="fixed top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
            ><source src="https://res.cloudinary.com/dpibcz7ui/video/upload/v1736517831/NB5_m3ekwu.mp4" /></video>


            <div className="w-full px-20 mob:px-5 relative z-10  mt-[140px]">
                <Text as="h2" className="my-3 ">
                    Design+ Build <br />
                    It’s Innate
                </Text>
                <a href="#contactHome">
                    <button className="mt-[20px] border border-[#FFFFFF]  font-medium font-inter backdrop-blur-[15px] bg-opacity-5  w-full max-w-[208px] h-[50px] text-[16px] leading-[22.4px] hover:bg-white hover:text-black hover:border-black transition duration-300">
                        Book Consultation
                    </button>
                </a>

                <Text className="text-[20px] leading-[28px] text-[#FFFFFF] mt-20">Project</Text>
                <Text className="text-[28px] leading-[36.4px] text-[#FFFFFF]">Palm Springs ADU</Text>
            </div>
        </div>
    );
};

export default Slide4;