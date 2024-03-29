import { Slider } from "@nextui-org/react";
import Image from "next/image";

interface twitterProps {
  tilt: string,
}

const Twitter: React.FC<twitterProps> = ({tilt}) => {
  return (
    <div className={`ml-7 mb-7 shadow-xl rounded-xl mr-5 transition ${tilt === 'left' ? 'hover:-rotate-1' : 'hover:rotate-1'}  relative sm:ml-[116px] lg:ml-7 sm:w-[650px] lg:max-w-[300px] flex items-center justify-center border border-default-200/50`}>
    

        <div className="w-full rounded-xl backdrop-blur-2xl flex flex-col items-center justify-start p-3 bred">

         <div className="flex items-center">
          <Image className="rounded-full" width={50} height={50} src="/abhijay-rajvansh-software-best-software-engineer.png" alt="/twitterpfp" />

          <div className="flex flex-col">
            <p className="font-semibold">Abhijay Rajvansh</p>
            <p className="text-color-text">@rajvanshtwt</p>
          </div>
         </div>

         <p>
          {/* Random thing I wish I could do: be able to use the laptop's trackpad for  */}
          hours without my hand hetting tired
         </p>

         <div className="flex items-center justify-start text-sm text-color-text">
          <p>11:27</p>
          <p>· Mar 29, 2024</p>
          <p>· 31 Views</p>
         </div>

      </div>
    </div>
  )
}

export default Twitter;