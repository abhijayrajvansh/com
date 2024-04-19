'use client';

import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

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
            src="/images/abhijay-rajvansh-in-cyberworld.png"
            alt="abhijay_as_curioustoddler_in_the_cyberworld"
          />
        </Tooltip>

        <Image 
          width={382} height={150}
          src="/images/abhijay-rajvansh-in-cyberworld-mobile.jpg" 
          alt="ai_generated_abhijay_in_cyberworld" 
          className='sm:hidden rounded-lg w-full shadow-lg'
        />

      </>
  )
}

export default Banner;
