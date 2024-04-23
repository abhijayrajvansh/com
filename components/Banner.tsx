'use client';

import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import desktopBanner from "@/public/images/abhijay-rajvansh-in-cyberworld.png";
import mobileBanner from "@/public/images/abhijay-rajvansh-in-cyberworld-mobile.jpg";

const Banner = () => {
  return (
      <>
        <Tooltip size={'sm'} 
          showArrow content={`AI generated myself in a cyberpunk world!`}
          placement="bottom" 
          color="foreground">
          
          <Image
            width={700} height={225}
            className='hidden sm:block rounded-2xl w-full shadow-lg'
            placeholder="blur"
            src={desktopBanner}
            alt="abhijay_as_curioustoddler_in_the_cyberworld"
          />

        </Tooltip>

        <Image 
          width={382} height={150}
          src={mobileBanner}
          placeholder="blur"
          alt="ai_generated_abhijay_in_cyberworld" 
          className='sm:hidden rounded-lg w-full shadow-lg'
        />

      </>
  )
}

export default Banner;
