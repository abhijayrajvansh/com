import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

const CuriousChildinMe = () => {
  return (
    <Tooltip showArrow={true} content="AI Generated 'Curious Toddler version of Myself in a Cybeworld!'">
      <Image width={700} height={250} className='rounded-lg shadow-lg' src="/abhijayrajvansh-curiousToddler-in-cyberworld.webp" alt="abhijay_as_curioustoddler_in_the_cyberworld" />
    </Tooltip>
  )
}

export default CuriousChildinMe;