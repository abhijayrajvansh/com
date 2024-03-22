import Image from "next/image";

interface ExperienceCardProps {
  companyLogo: string,
  startDate: string,
  endDate: string,
  position: string,
  companyName: string,
  companyLocation: string,
  description: string[],
}

const ExperienceCard:React.FC<ExperienceCardProps> = ({companyLogo, startDate, endDate, position, companyName, companyLocation, description}) => {
  return (
    <div className="flex gap-3 sm:gap-5">

      {/* verticle timeline border */}
      <div className="border border-default-400 relative left-10 sm:left-12"></div>
      
      
      <div className="min-w-[56px] z-10">
        <Image height={56} width={56} 
          className={`h-14 rounded-xl ${endDate === 'Present' ? 'border-4 border-warning-400' : 'border-4 border-default-300'}`} src={companyLogo} alt="companyLogo" />
      </div>
      
      
      <div className="flex flex-col gap-1 pl-1 pb-7 sm:pb-10">
        <p className="text-default-500 text-sm">{startDate} - {endDate}</p>
        <h2 className="text-2xl font-medium">{position}</h2>
        <div className="flex items-center gap-2 pb-1">
          <h3 className="text-md font-medium">{companyName}</h3>
          <p className="text-default-500">•</p>
          <p className="">{companyLocation}</p>
        </div>
          {
            description.map((keyPoint, index) => (
              <div className="text-default-600 text-sm" key={index}>
                  <p className="pt-1"><span className="text-primary-600"> — </span>{keyPoint}</p>
              </div>
            ))
          }
      </div>
    
    </div>
  )
}

export default ExperienceCard;