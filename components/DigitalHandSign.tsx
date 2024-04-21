import Image from "next/image";

const DigitalHandSign = () => {
  return (
    <div className="my-3 flex justify-center sm:block">
      <Image width={350} height={92} className="dark:invert"
        src="/images/ar-sign-no-bg.png" alt="abhijay-rajvansh-digital-signature" />
    </div>
  )
}

export default DigitalHandSign;