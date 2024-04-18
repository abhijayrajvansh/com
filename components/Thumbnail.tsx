import React, { useState } from 'react';

interface VideoComponentProps {
  src: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full sm:w-1/2 h-48"
    >
      <video
        src={src}
        autoPlay={isHovered}
        loop
        muted
        className="w-full h-full object-cover rounded-xl"
      />
      {isHovered && (
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white rounded-xl"
        >
          <video
            src={src}
            autoPlay={isHovered}
            loop
            muted
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default VideoComponent;