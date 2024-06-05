import Image from "next/image";

interface ExperienceCardProps {
  companyLogo: string;
  startDate?: string;
  endDate?: string;
  position: string;
  companyName: string;
  companyLocation?: string;
  description?: string[];
  showTimeline?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyLogo,
  startDate,
  endDate,
  position,
  companyName,
  companyLocation,
  description,
  showTimeline = true,
}) => {
  return (
    <div className="flex gap-3 sm:gap-5">
      {showTimeline && (
        <div
          className={`border-l border-zinc-500 relative left-10 sm:left-12`}
        ></div>
      )}
      {!showTimeline && (
        <div
          className={`border-l border-background relative left-10 sm:left-12`}
        ></div>
      )}

      <div className="min-w-[56px] z-10">
        <Image
          height={56}
          width={56}
          className={`h-14 rounded-xl ${
            endDate === "Present"
              ? "border-2 border-yellow-300 glow-bg-gold"
              : "border-2 border-zinc-500"
          }`}
          src={companyLogo}
          alt="companyLogo"
        />
      </div>

      <div className="flex flex-col gap-1 pl-1 pb-7 sm:pb-10">
        {startDate && (
          <p className="text-default-500 text-sm">
            {startDate} - {endDate}
          </p>
        )}
        <h2 className="text-xl sm:text-2xl font-semibold">{position}</h2>
        <div className="flex items-center gap-2 pb-1">
          <div className="text-sm font-medium text-default-600">
            <h3 className="">{companyName}</h3>
            <p className="text-color-text">{companyLocation}</p>
          </div>
        </div>
        {description?.map((keyPoint, index) => (
          <div className="text-color-text text-[13px] sm:text-sm" key={index}>
            <p className="pt-1">
              <span className="primary-text"> — </span>
              <span className="font-normal">{keyPoint}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
