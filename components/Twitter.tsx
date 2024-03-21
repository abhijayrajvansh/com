interface twitterProps {
  tilt: string,
}

const Twitter: React.FC<twitterProps> = ({tilt}) => {
  return (
    <div className="w-full px-5 sm:ml-2">
      <div className={`flex flex-col items-center gap-4 rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[700px] lg:max-w-[300px] border border-default-200/50 mb-5 shadow-xl bg-gradient-to-b from-projectCardTop to-projectCardBotttom ${tilt === 'left' ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition py-7`}>
        twitter
      </div>
    </div>
  )
}

export default Twitter;