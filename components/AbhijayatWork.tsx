import Image from "next/image";

const AbhijayatWork = () => {
  return (
    <Image
      unoptimized
      width={700}
      height={200}
      // max-h-[150px] sm:max-h-[200px] for some old banner
      className="mb-5 max-h-[200px] sm:max-h-[350px] shadow-lg object-cover object-center rounded-lg border-2 border-default-200"
      src="/abhijayatwork.gif"
      alt="abhijay@work-pixelAnimated"
    />
  );
};

export default AbhijayatWork;
