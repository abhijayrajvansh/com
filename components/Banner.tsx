import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

const Banner = () => {
  return (
    <Tooltip showArrow={true} content="that's me in the cyberworld!" placement={'bottom'} color="foreground">
      <Image width={700} height={250} className='rounded-lg shadow-lg' src="/abhijayrajvansh-in-the-cyberworld.webp" alt="abhijay_as_curioustoddler_in_the_cyberworld" />
    </Tooltip>
  )
}

export default Banner;