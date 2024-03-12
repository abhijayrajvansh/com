interface AchievementCardProps {
  tilt: string,
  title: string,
  thumbnail: string,
  position: string,
}

const AchievementCard:React.FC<AchievementCardProps> = ({thumbnail, tilt, position, title}) => {
  return (
    <div className={`border ${thumbnail} bg-cover bg-center border-default-200 min-h-52 w-full my-5 sm:w-[341px] rounded-xl ${tilt === 'right' ? 'rotate-1' : '-rotate-1'} transition hover:rotate-0`}>
      
      {/* bg-background - seperate color banan hai kyunki light theme blending not good */}
      <div className="bg-background bg-opacity-60 hover:bg-opacity-40 transition w-full min-h-52 rounded-xl flex flex-col text-2xl font-medium justify-center px-4 shadow-xl text-white">
        <div className="font-semibold">{position}</div>
        <div className="text-lg">
          {title}
        </div>
      </div>

    </div>
  )
}

export default AchievementCard;