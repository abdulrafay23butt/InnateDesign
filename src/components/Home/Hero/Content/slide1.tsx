import React from "react";

// import Text from "@/components/ui/Text";
const Slide1 = () => {
    
    return (
        <div className="relative h-screen mob:h-full min-h-[784px] flex justify-center items-center">
            <video
                preload="none"
                className="fixed top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            ><source src="https://res.cloudinary.com/dpibcz7ui/video/upload/q_auto,f_auto/v1737004016/website-homepage_lja4bt.mp4" type="video/mp4" /></video>


            
        </div>
    );
};

export default Slide1;
