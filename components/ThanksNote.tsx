import GuestbookBtn from "./GuestbookBtn";

const ThanksNote = ({}) => {
  return (
    <div className="w-full px-5 sm:ml-2 mb-24">
      <div className={`flex flex-col items-center gap-4 rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-default-200/50 mb-5 shadow-md bg-gradient-to-b from-projectCardTop to-projectCardBotttom transition py-7`}>

        <p className="text-sm font-light text-default-600">Hey, thanks for visiting my website!</p>
        
        <h3 className="bg-gradient-to-r from-[#df9599] to-[#ef3740] dark:from-[#fdfc81] dark:to-[#fdfc81] py-1 bg-cover bg-clip-text text-transparent font-bold text-2xl sm:text-xl">Gald to have you here.</h3>

        <GuestbookBtn />

      </div>

    </div>
  )
}

export default ThanksNote;
