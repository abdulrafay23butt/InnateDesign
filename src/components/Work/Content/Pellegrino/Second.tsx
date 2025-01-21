import React from "react";
const Second = () => {
  return (
    <div className="relative w-full z-10  mob:h-full h-screen min-h-[700px] flex justify-center items-center px-20 mob:px-5">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      ><source src="https://res.cloudinary.com/dpibcz7ui/video/upload/q_auto,f_auto/v1737004017/PR_tpkn5z.mp4" type="video/mp4"/></video>

      
    </div>
  );
};

export default Second;
