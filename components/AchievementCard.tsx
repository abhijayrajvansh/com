interface AchievementCardProps {
  title: string;
  thumbnail: string;
  position: string;
  tilt: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  thumbnail,
  tilt,
  position,
  title,
}) => {
  return (
    <div
      className={`border ${thumbnail} bg-cover bg-center border-border w-full my-5 sm:w-1/2 rounded-xl ${
        tilt === "right" ? "hover:rotate-1" : "hover:-rotate-1"
      } transition`}
    >
      <div className="dark:bg-black/40  bg-black/20 hover:dark:bg-black/30  hover:bg-black/10 transition w-full min-h-44 rounded-xl flex flex-col text-2xl font-medium justify-center px-4 shadow-xl text-white backdrop-blur-[2px]">
        <div className="font-semibold">{position}</div>

        <div className="text-lg">{title}</div>
      </div>
    </div>
  );
};

export default AchievementCard;
