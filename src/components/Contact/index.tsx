import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import rightarrow from "@/public/images/press/RightArrowblue.png";
import Form from "./Form";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="gradient min-h-screen py-32 flex flex-col justify-center px-5">
        <div className="mx-auto w-full max-w-[90%] flex flex-wrap justify-around lg:gap-[50px] gap-10">
          <div className="flex-1 max-w-[40%] mob:max-w-[100%] ">
            <Text as="h1" className="text-[3rem] text-white font-medium">
              Contact Us
            </Text>
            <Text className="mt-4 text-[#D9D9D9] ">
              If you’re looking for an architect, engineer, or builder to help with
              your project, this form is the best way to reach us. We are based in
              Bellevue, Washington, but are open to working with clients both near
              and far.
            </Text>
            <Text className="mt-4 text-[#D9D9D9]">
              To determine whether your project might be a good fit for us, please
              briefly describe the scope, timing, location, and other relevant
              details in the form, and we’ll be in touch shortly to review your
              project in detail.
            </Text>
            <Text className="mt-4 text-[#D9D9D9]">
              Alternatively, if you are only interested in getting a rough
              estimate, follow the link below and fill in your project details to
              receive a rough AI-generated estimate.
            </Text>
            <Link href="/onboarding">
              <button
                type="submit"
                className="w-[172.63px] h-[50px] mt-8 border border-white text-white hover:bg-white hover:text-black hover:border-black text-[16px] font-medium flex items-center justify-center gap-1"
              >
                Start project
                <Image src={rightarrow} alt="" width={18} height={18} />
              </button>
            </Link>
          </div>
          {/* right form */}
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
