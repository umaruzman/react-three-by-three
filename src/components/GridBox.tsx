import React, { useCallback, useState } from "react";
import GridItem from "./GridItem";

const GridBox: React.FC = () => {
  const [clickedIndices, setClickedIndices] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (!clickedIndices.includes(index)) {
      setClickedIndices((prev) => [...prev, index]);
    }
  };

  const handleReset = useCallback(() => {
    let index = 0;
    const interval = setInterval(() => {
      setClickedIndices((prev) => prev.slice(1)); 
      index++;
      if (index >= clickedIndices.length) clearInterval(interval);
    }, 300); 
  }, [clickedIndices]);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-[600px] p-7 bg-white rounded-md shadow-md">
      <div className="grid grid-cols-3 gap-2 w-full">
        {[...Array(9)].map((_, index) => (
          <GridItem key={index} active={clickedIndices.includes(index)} handleClick={() => handleClick(index)} />
        ))}
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default GridBox;
