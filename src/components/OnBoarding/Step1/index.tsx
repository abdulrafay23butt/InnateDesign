import React, { useState } from "react";
import Text from "@/components/ui/Text";
import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import Image from "next/image";

interface Step1Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { selectedOptions: string[]; comment: string }) => void; // Updated data structure
}

const Step1: React.FC<Step1Props> = ({ onNext, onPrevious, onChange }) => {
  const options = [
    "Accessory Dwelling Unit (ADU)",
    "Kitchen Remodel",
    "Bathroom Remodel",
    "Addition",
    "New Construction",
    "General Remodel",
    "Other",
  ];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  const handleCheckboxChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    onChange({ selectedOptions: updatedOptions, comment }); // Pass updated state
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedComment = e.target.value;
    setComment(updatedComment);
    onChange({ selectedOptions, comment: updatedComment }); // Pass updated state
  };

  const handleNextClick = () => {
    if (selectedOptions.length === 0) {
      alert("Please select at least one option to proceed.");
      return;
    }
    onNext();
  };

  return (
    <div className="gradient flex items-center justify-center py-20">
      <div className="w-full max-w-[1180px]">
        <Text as="h1" className="text-[40px] font-firaSans font-normal mb-10">
          How do you want to get started?
        </Text>

        <div className="flex flex-col gap-3">
          {options.map((option, index) => (
            <label key={index} className="flex items-center gap-[14px]">
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                className="h-5 w-5 accent-blue-500"
              />
              <span className="text-[20px] text-[#D9D9D9]">{option}</span>
            </label>
          ))}
        </div>

        {/* Input Field */}
        <div className="">
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder="For Other add here"
            className="text-white/60 tab:w-full w-[490px] mt-5 bg-transparent border-b border-white/30 p-2 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex mob:flex-wrap justify-between">
          <div className="flex gap-5 mt-6">
            <button
              onClick={onPrevious}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px] bg-transparent h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              <Image
                className="rotate-180"
                src={arrow}
                alt=""
                width={24}
                height={24}
              />
              Previous
            </button>
            <button
              onClick={handleNextClick}
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

export default Step1;
