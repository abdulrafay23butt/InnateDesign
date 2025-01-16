import React from "react";
// import Image from "next/image";

import Text from "@/components/ui/Text";

// import rightarrow from "@/public/images/press/RightArrowbue.png";
import Form from "@/components/Contact/Form";

const ContactHome = () => {
  return (
    <div className="py-36 px-32 xl:px-24 mob:px-5" id="contactHome">
      <div className="mx-auto w-full max-w-full flex justify-bewteen lg:flex-wrap gap-[200px] lg:gap-[50px] ">
        <div className="max-w-[40%] mob:max-w-[90%]">
          <Text as="h1" className="text-[40px] text-white font-medium ">
            Book a free consultation
          </Text>
          <Text className=" mt-4 text-[#D9D9D9]">
            Schedule a complimentary consultation to discuss your architecture
            or construction project. Our project managers will work closely with
            you to bring your vision to life.
          </Text>
        </div>
        {/* right form */}
        <Form />
      </div>
    </div>
  );
};

export default ContactHome;
