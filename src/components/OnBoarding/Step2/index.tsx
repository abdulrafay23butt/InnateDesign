import React, { useState } from "react";
import Text from "@/components/ui/Text";
import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import Image from "next/image";

interface Step2Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { selectedOptions: string[] }) => void; // Data structure
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrevious, onChange }) => {
  const options = [
    "Designer",
    "Engineer",
    "General Contractor",
    "Surveyor",
    "Not sure yet",
  ];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    onChange({ selectedOptions: updatedOptions }); // Pass updated data
  };

  const handleNextClick = () => {
    if (selectedOptions.length === 0) {
      alert("Please select at least one option to proceed.");
      return;
    }
    onNext();
  };

  return (
    <div className="py-20 gradient flex items-center justify-center">
      <div className="w-full max-w-[1180px] ">
        <Text as="h1" className="text-[40px] font-firaSans font-normal mb-10">
          Got it! What professional do you need help finding?
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

        <div className="flex mob:flex-wrap justify-end mt-20">
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
              onClick={handleNextClick} // Updated handler for validation
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

export default Step2;
