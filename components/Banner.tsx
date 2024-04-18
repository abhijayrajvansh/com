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
            width={500} height={16}
            className='hidden sm:block rounded-2xl w-full shadow-lg' 
            src="/images/abhijay-rajvansh-in-cyberworld.png"
            alt="abhijay_as_curioustoddler_in_the_cyberworld"
          />
        </Tooltip>

        <Image 
          width={100} height={100}
          src="/images/abhijay-rajvansh-in-cyberworld-mobile.jpg" 
          alt="ai_generated_abhijay_in_cyberworld" 
          className='sm:hidden rounded-lg w-full shadow-lg'
        />

      </>
  )
}

export default Banner;
