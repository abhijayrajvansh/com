'use client';

import { Tooltip } from "@nextui-org/react";
import LazyLoadImage from "./LazyloadImage";
import Image from "next/image";

const Banner = () => {
  return (
      <>
        <LazyLoadImage 
          blurredImageSrc="/images/ar-sign-no-bg.png" 
          src="/images/abhijay-rajvansh-in-cyberworld-mobile.png" 
          alt="ai_generated_abhijay_in_cyberworld" 
          className='sm:hidden rounded-2xl w-full shadow-lg'
        />

        <Tooltip size={'sm'} 
          showArrow content={`AI generated myself in a cyberpunk world!`}
          placement="bottom" 
          color="foreground">
          
          <LazyLoadImage
            blurredImageSrc="/images/"
            className='hidden sm:block rounded-2xl w-full shadow-lg' 
            src="/images/abhijay-rajvansh-in-cyberworld.png" 
            alt="abhijay_as_curioustoddler_in_the_cyberworld"
          />

        </Tooltip>
      </>
  )
}

export default Banner;
