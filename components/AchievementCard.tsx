interface AchievementCardProps {
  tilt: string,
  title: string,
  thumbnail: string,
  position: string,
}

const AchievementCard:React.FC<AchievementCardProps> = ({thumbnail, tilt, position, title}) => {
  return (
    <div className={`border ${thumbnail} bg-cover bg-center border-default-200 w-full my-5 sm:w-[341px] rounded-xl ${tilt === 'right' ? 'hover:rotate-1' : 'hover:-rotate-1'} transition`}>
      
      <div className="bg-hoverdarkbg bg-opacity-50 hover:bg-opacity-40 transition w-full min-h-44 rounded-xl flex flex-col text-2xl font-medium justify-center px-4 shadow-xl text-white backdrop-blur-[2px]">
        
        <div className="font-semibold">{position}</div>
        
        <div className="text-lg">
          {title}
        </div>
      </div>
    </div>
  )
}

export default AchievementCard;