import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

const Banner = () => {
  return (
      <>
        <Image width={700} height={250} className=' sm:hidden rounded-2xl w-full shadow-lg' 
          src="/images/abhijay-rajvansh-in-cyberworld-mobile.png" 
          alt="abhijay_as_curioustoddler_in_the_cyberworld"
        />

        <Tooltip showArrow content="ai generated myself in futuristic city" placement="bottom" color="foreground">
          
          <Image width={700} height={250} className='hidden sm:block rounded-2xl w-full shadow-lg' 
            src="/images/abhijay-rajvansh-in-cyberworld.png" 
            alt="abhijay_as_curioustoddler_in_the_cyberworld"
          />

        </Tooltip>
      </>
  )
}

export default Banner;