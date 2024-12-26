import React from "react";
import SliderFilter from "./SLiderFilter";

interface Step4Props {
  onChange: (data: { selectedOptions: string[] }) => void; // Adjusted data structure
}

const SlideBar: React.FC<Step4Props> = ({ onChange }) => {
  const [rangeStart, setRangeStart] = React.useState<number>(20);
  const [rangeEnd, setRangeEnd] = React.useState<number>(37);

  // Update local state and notify parent
  const handleSliderChange = (
    start: React.SetStateAction<number>,
    end: React.SetStateAction<number>
  ) => {
    const newStart = typeof start === "function" ? start(rangeStart) : start;
    const newEnd = typeof end === "function" ? end(rangeEnd) : end;

    setRangeStart(newStart);
    setRangeEnd(newEnd);

    // Format data to match `selectedOptions` structure
    onChange({
      selectedOptions: [`Range: ${newStart}K - ${newEnd}K`],
    });
  };

  return (
    <div>
      <SliderFilter
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        setRangeStart={(value) => handleSliderChange(value, rangeEnd)}
        setRangeEnd={(value) => handleSliderChange(rangeStart, value)}
        onChange={(data) => {
          onChange({
            selectedOptions: [`Range: ${data.rangeStart}K - ${data.rangeEnd}K`],
          });
        }}
      />
    </div>
  );
};

export default SlideBar;
