import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

const AbhijayatWork = () => {
  return (
    <Tooltip
      showArrow
      content="one can envision me like this, lol :P"
      placement="top-end"
      color="secondary"
    >
      <Image
        unoptimized
        width={700}
        height={200}
        // max-h-[150px] sm:max-h-[200px] for some old banner
        className="mb-5 max-h-[200px] sm:max-h-[350px] shadow-lg object-cover object-center rounded-lg border-2 border-default-200"
        src="/abhijayatwork.gif"
        alt="abhijay@work-pixelAnimated"
      />
    </Tooltip>
  );
};

export default AbhijayatWork;
