import Image from 'next/image';
import React, { useState } from 'react';

interface ServiceThumbnailProps {
  videosrc: string;
  imgsrc: string;
  title: string;
  description: string;
}

const ServiceThumbnail: React.FC<ServiceThumbnailProps> = ({ title, description, videosrc, imgsrc }) => {
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
      className="relative w-full sm:w-[336px] h-48 mb-7 overflow-hidden shadow-xl rounded-xl"
    >
      <div className="absolute flex-col w-full h-full text-3xl text-white font-bold rounded-xl flex items-center justify-center dark:bg-black/60 bg-black/50">
        <h1>{title}</h1>
        <p className='text-base font-light'>{description}</p>
      </div>

      <Image
        width={300}
        height={176}
        src={imgsrc}
        alt="service-thumbnail"
        className="w-full h-full object-cover rounded-xl"
      />

      <video
        src={videosrc}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline='true'
        className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default ServiceThumbnail;
