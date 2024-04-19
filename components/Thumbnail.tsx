import Image from 'next/image';
import React, { useState } from 'react';

interface VideoComponentProps {
  videosrc: string,
  imgsrc: string,
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videosrc, imgsrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative w-full sm:w-[336px] h-48 mb-7">

      <Image 
        width={300} 
        height={176}  
        src={imgsrc} 
        alt='service-thumbnail' 
        className='w-full h-full object-cover rounded-xl' 
      />
      
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white rounded-xl">
          <video
            src={videosrc}
            autoPlay={isHovered}
            loop
            muted
            playsInline
            webkit-playsinline
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
    
    </div>
  );
};

export default VideoComponent;