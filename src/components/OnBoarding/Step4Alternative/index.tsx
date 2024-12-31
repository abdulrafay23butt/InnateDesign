import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import ADU from "@/public/images/onboarding/ADU.png"

interface Step5Props {
    onNext: () => void;
    onPrevious: () => void;
    onChange: (data: { selectedOptions: { id: number | null; title: string; description: string } }) => void;
}

const Step4Alternative: React.FC<Step5Props> = ({ onNext, onPrevious, onChange }) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const styles = useMemo(() => [
        { id: 1, imageSrc: ADU, title: "Detached ADU", description: "Streamlined, functional spaces with sleek materials" },
        { id: 2, imageSrc: ADU, title: "Attached ADU", description: "Streamlined, functional spaces with sleek materials" },
        { id: 3, imageSrc: ADU, title: "Conversion", description: "Streamlined, functional spaces with sleek materials" },
    ], []);


    useEffect(() => {
        if (selectedId !== null) {
            const selectedOptions = styles.find((style) => style.id === selectedId);
            if (selectedOptions) {
                onChange({ selectedOptions }); // Pass the selected style to the parent
            }
        }
    }, [selectedId, onChange, styles]);

    const handleNextClick = () => {
        if (selectedId === null) {
            alert("Please select a style before proceeding.");
            return;
        }
        onNext();
    };

    return (
        <div className="gradient flex items-center justify-center px-5 min-h-[858px]">
            <div className="max-w-[90%] w-full py-20">
                <Text as="h1" className="text-[40px] font-firaSans font-normal mb-8">
                    What type of Accessory Dwelling Unit (ADU) are you planning to build?
                </Text>
                
                <div className="flex flex-wrap gap-5">
                    {styles.map(({ id, imageSrc, title, description }) => (
                        <button
                            key={id}
                            onClick={() => setSelectedId(id)}
                            className={`flex flex-col items-center justify-start gap-5 mx-auto w-[30%] rounded-[10px] p-[16px] 
                            ${selectedId === id ? "border border-white bg-[#1F1F1F]" : "border border-[#FFFFFF3D] bg-transparent"}`}
                        >
                            <div className="w-[100%] relative aspect-[10/5]">
                                <Image src={imageSrc} alt=""  className="rounded-[4px] " fill/>
                            </div>
                            <div className="text-center">
                                <Text className="text-[20px] leading-[28px] mb-1 text-left">{title}</Text>
                                <Text className="text-left text-gray-400 text-sm">{description}</Text>
                            </div>
                        </button>


                    ))}
                </div>

                <div className="flex mob:flex-wrap justify-end mt-10">
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
                            onClick={handleNextClick} // Validation on Next button
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

export default Step4Alternative;
