import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";

interface Step8Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { name: string; phone: string }) => void; // Add onChange prop to handle name and phone
}

const Step8: React.FC<Step8Props> = ({ onNext, onPrevious, onChange }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    onChange({ name: e.target.value, phone }); // Send name and phone data to parent
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    onChange({ name, phone: e.target.value }); // Send name and phone data to parent
  };

  const handleNextClick = () => {
    if (!name.trim() || !phone.trim()) {
      alert("Please fill in both your name and phone number before proceeding.");
      return;
    }
    onNext();
  };

  return (
    <div className="gradient flex items-center justify-center px-5">
      <div className="max-w-[1140px] w-full py-20">
        <div>
          <Text as="h1" className="text-[40px] font-firaSans font-normal mb-3">
            Almost Done!
          </Text>
          <Text>
            We’ll use this info to get in touch with you to schedule a
            consultation or send a rough bid.
          </Text>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={handleNameChange} // Handle name change
            className="pl-4 mt-7 w-full max-w-[900px] h-[60px] border border-[#FFFFFF3D] bg-transparent outline-none text-white text-[16px] placeholder:text-[16px] placeholder:text-white"
          />
          <input
            placeholder="Phone"
            type="number"
            value={phone}
            onChange={handlePhoneChange} // Handle phone change
            className="pl-4 mt-3 w-full max-w-[900px] h-[60px] border border-[#FFFFFF3D] bg-transparent outline-none text-white text-[16px] placeholder:text-[16px] placeholder:text-white"
          />
        </div>

        <div className="flex mob:flex-wrap justify-end mt-5">
          <div className="flex gap-5 mt-6">
            <button
              onClick={onPrevious}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px] bg-transparent h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              <Image className="rotate-180" src={arrow} alt="" width={24} height={24} />
              Previous
            </button>
            <button
              onClick={handleNextClick} // Validate inputs on Next button click
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[116px] bg-transparent h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              Next
              <Image src={arrow} alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step8;
