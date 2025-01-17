import React,{useEffect} from "react";
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

    const selectedOptions = [`Range: ${start}K - ${end}K`];
    
    // Save to localStorage
    sessionStorage.setItem("step4", JSON.stringify(selectedOptions));
    
    // Notify parent
    onChange({ selectedOptions });
  };

  useEffect(() => {
    const savedData = sessionStorage.getItem("step4");
    if (savedData) {
      const selectedOptions = JSON.parse(savedData);
      
      // Assuming savedData is an array like ["Range: 20K - 37K"]
      if (selectedOptions && selectedOptions.length > 0) {
        const rangeMatch = selectedOptions[0].match(/(\d+)K - (\d+)K/);
        if (rangeMatch) {
          const start = parseInt(rangeMatch[1], 10);
          const end = parseInt(rangeMatch[2], 10);
          setRangeStart(start);
          setRangeEnd(end);
        }
      }
    }
  }, []);
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
