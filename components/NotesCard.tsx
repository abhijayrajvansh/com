interface NotesCardProps {
  title: string,
  elements: string[],
  tilt: string,
  element?: string,
  index?: number,
}

const NotesCard:React.FC<NotesCardProps> = ({title, elements, tilt}) => {
  return (
    <div className="w-full px-5 sm:mt-0 sm:ml-2">
      <div className={`rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-default-200/50 mb-7 shadow-xl bg-gradient-to-b from-projectCardTop to-projectCardBotttom ${tilt === 'left' ? 'hover:-rotate-1' : 'hover:rotate-1'} transition`}>
        
        <h1 className="text-lg sm:text-[base] font-medium">{title}</h1>

        {
          elements.map((element, index) => (
            <p key={index} className="text-base sm:text-[14px] space-x-3 mt-4"><span className="text-primary-500">—</span><span>{element}</span></p>
          ))
        }

      </div>
    </div>
  )
}

export default NotesCard;