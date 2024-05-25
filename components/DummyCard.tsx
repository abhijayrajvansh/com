import React from "react";

interface DummyCardProps {
    show?: boolean;
}

const DummyCard: React.FC<DummyCardProps> = ({show=false}) => {
  return (
    <div className={`hidden sm:block relative w-full sm:w-[336px] h-48 mb-7 overflow-hidden ${show && 'bg-green-500'} bg-background rounded-xl`}>
      <div className="flex items-center justify-center h-full">
        {show && <p>[sample service thubnail space]</p>}
      </div>
    </div>
  );
};

export default DummyCard;
