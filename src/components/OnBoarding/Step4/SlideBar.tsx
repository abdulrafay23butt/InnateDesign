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
    end: React.SetStateAction<number>) => {
    setRangeStart(start);
    setRangeEnd(end);

    // Format data to match `selectedOptions` structure
    onChange({
      selectedOptions: [`Range: ${start}K - ${end}K`],
    });
  };

  return (
    <div>
      <SliderFilter
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        setRangeStart={(value) => handleSliderChange(value, rangeEnd)} // Updates rangeStart
        setRangeEnd={(value) => handleSliderChange(rangeStart, value)} // Updates rangeEnd
        onChange={(data) => {
          handleSliderChange(data.rangeStart, data.rangeEnd); // Ensure synchronization
        }}
      />
    </div>
  );
};

export default SlideBar;
