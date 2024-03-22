import Link from "next/link";

interface ThanksNoteProps {
  tilt: string,
}

const ThanksNote: React.FC<ThanksNoteProps> = ({tilt}) => {
  return (
    <div className="w-full px-5 sm:ml-2 mb-24">
      <div className={`flex flex-col items-center gap-4 rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-default-200/50 mb-5 shadow-xl bg-gradient-to-b from-projectCardTop to-projectCardBotttom ${tilt === 'left' ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition py-7`}>

        <p className="text-sm font-light text-default-600">Hey, thanks for visiting my website!</p>
        
        <h3 className="text-warning-500 font-bold text-2xl sm:text-xl">Gald to have you here.</h3>

        <Link className="text-sm" href={'/guestbook'}>Don&apos;t forget to sign my guestbook</Link>
      </div>

    </div>
  )
}

export default ThanksNote;