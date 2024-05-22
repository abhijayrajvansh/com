interface NotesCardProps {
  title: string,
  elements: string[],
  element?: string,
  index?: number,
}

const NotesCard:React.FC<NotesCardProps> = ({title, elements }) => {
  return (
    <div className="w-full px-5 sm:mt-0 sm:ml-2">
      <div className={`rounded-xl p-4 sm:mb-5 mb-3 font-medium sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-border shadow-md cardTop-BottomGradient`}>
        
        <h1 className="text-xl font-medium">{title}</h1>

        {
          elements.map((element, index) => (
            <p key={index} className="text-sm space-x-3 mt-4"><span className="text-primary-500">—</span><span>{element}</span></p>
          ))
        }

      </div>
    </div>
  )
}

export default NotesCard;