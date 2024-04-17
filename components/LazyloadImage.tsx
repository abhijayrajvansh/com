import React, { useState, useEffect } from 'react';

interface LazyLoadImageProps {
  src: string;
  alt: string;
  blurredImageSrc: string,
  className?: string;
}

const LazyLoadImage: React.FC<LazyLoadImageProps> = ({ src, alt, className='w-full', blurredImageSrc }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };

    return () => {
      img.onload = null;
    };
    
  }, [src]);

  return (
    <img
      src={imageSrc ? imageSrc : blurredImageSrc}
      alt={alt}
      className={className}
      loading='lazy'
    />
  );
};

export default LazyLoadImage;
