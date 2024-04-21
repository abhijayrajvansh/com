import Image from 'next/image';
import React, { useState } from 'react';

interface VideoComponentProps {
  videosrc: string,
  imgsrc: string,
  title: string,
}

const VideoComponent: React.FC<VideoComponentProps> = ({ title, videosrc, imgsrc }) => {
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
      className="relative w-full sm:w-[336px] h-48 mb-7">
      
      <h1 className='absolute w-full h-full text-3xl text-white font-bold rounded-xl flex items-center justify-center bg-black/50'>
        {title}
      </h1>

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