import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Text from "@/components/ui/Text";

function valuetext(value: number) {
  return `${value}°C`;
}

const CustomSlider = styled(Slider)({
  color: "#434343",
  "& .MuiSlider-thumb": {
    width: 20,
    height: 20,
    color: "#FFFFFF",
    "&:hover, &.Mui-focusVisible, &.Mui-active": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-track": {
    height: 14,
    color: "#0B44A0",
  },
  "& .MuiSlider-rail": {
    height: 14,
  },
});

interface SliderFilterProps {
  rangeStart: number;
  rangeEnd: number;
  setRangeStart: React.Dispatch<React.SetStateAction<number>>;
  setRangeEnd: React.Dispatch<React.SetStateAction<number>>;
  onChange: (data: { rangeStart: number; rangeEnd: number }) => void; // Notify parent about changes
}

const SliderFilter: React.FC<SliderFilterProps> = ({
  rangeStart,
  rangeEnd,
  setRangeStart,
  setRangeEnd,
  onChange,
}) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    const [start, end] = newValue as number[];
    setRangeStart(start);
    setRangeEnd(end);
    onChange({ rangeStart: start, rangeEnd: end }); // Notify parent
  };
  return (
    <>
<div className="flex justify-center bg-[#141414] py-10">
<div className="w-full">

<div className="flex flex-wrap mb-14 items-center justify-center gap-6">
    <div className="px-4 py-2 border border-[#FFFFFF3D]">
        <Text className="text-center text-[20px]"> {"<"}${rangeStart}K</Text>
        <Text className="text-center">Target budget</Text>
    </div>
    <div className="h-[1px] w-[24px] bg-white"></div>
    <div className="px-4 py-2 border border-[#FFFFFF3D]">
        <Text className="text-center text-[20px]">${rangeEnd}K+</Text>
        <Text className="text-center">Target budget</Text>
    </div>
</div>

    <div className="w-full ">
    <Box   sx={{
        width: "100%", // Full width of the parent container
        maxWidth: "653px", // Max width of 653px
        margin: "0 auto", // Centers the box horizontally
      }}>
      <CustomSlider
            getAriaLabel={() => "Budget range"}
            value={[rangeStart, rangeEnd]}
            onChange={handleChange}
            getAriaValueText={valuetext}
            max={70}
          />
      </Box>
    </div>
      <div className="mx-auto flex justify-between max-w-[653px] w-full mt-[-8px]">
        <Text
          as="p"
          className="text-[16px] text-white  font-arial font-normal  my-2 "
        >
          {"<"}${rangeStart}K
        </Text>
        <Text
          as="p"
          className="text-[16px]  text-white  font-arial font-normal  my-2 "
        >
          ${rangeEnd}K+
        </Text>
      </div>
    </div>
</div>
    </>
  );
};

export default SliderFilter;
