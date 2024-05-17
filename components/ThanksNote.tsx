import { Button } from "@nextui-org/react";
import Link from "next/link";
import { BiSolidBookHeart } from "react-icons/bi";


interface ThanksNoteProps {
  tilt: string,
}

const ThanksNote: React.FC<ThanksNoteProps> = ({tilt}) => {
  return (
    <div className="w-full px-5 sm:ml-2 mb-24">
      <div className={`flex flex-col items-center gap-4 rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-default-200/50 mb-5 shadow-md bg-gradient-to-b from-projectCardTop to-projectCardBotttom ${tilt === 'left' ? 'hover:-rotate-1' : 'hover:rotate-1'} transition py-7`}>

        <p className="text-sm font-light text-default-600">Hey, thanks for visiting my website!</p>
        
        <h3 className="bg-gradient-to-r from-[#df9599] to-[#ef3740] dark:from-[#fdfc81] dark:to-[#fdfc81] py-1 bg-cover bg-clip-text text-transparent font-bold text-2xl sm:text-xl">Gald to have you here.</h3>

        <Button className="text-xs bg-primary-400 hover:bg-primary-300 font-medium text-white"
          href="/guestbook"
          as={Link}
          size="sm"
          variant="solid" >
          <BiSolidBookHeart size={21}/>Sign my guestbook!
        </Button>
      </div>

    </div>
  )
}

export default ThanksNote;
