import { FC } from "react";

interface GridItemProps {
  active: boolean;
  handleClick: () => void;
}

const GridItem: FC<GridItemProps> = ({ active, handleClick }) => {
  return (
    <div
      className={`aspect-square w-full h-auto border border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-300 ${
        active ? "bg-black" : "bg-white"
      }`}
      onClick={() => {
        if (handleClick) handleClick();
      }}
    ></div>
  );
};

export default GridItem;
