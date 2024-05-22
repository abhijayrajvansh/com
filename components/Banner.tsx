"use client";

import Image from "next/image";
import desktopBanner from "@/public/images/abhijay-rajvansh-in-cyberworld.png";
import mobileBanner from "@/public/images/abhijay-rajvansh-in-cyberworld-mobile.jpg";

const Banner = () => {
  return (
    <>
      <Image
        width={700}
        height={225}
        className="hidden sm:block rounded-2xl w-full shadow-md"
        placeholder="blur"
        src={desktopBanner}
        alt="abhijay_as_curioustoddler_in_the_cyberworld"
      />

      <Image
        width={382}
        height={150}
        src={mobileBanner}
        placeholder="blur"
        alt="ai_generated_abhijay_in_cyberworld"
        className="sm:hidden rounded-lg w-full shadow-md"
      />
    </>
  );
};

export default Banner;
