import Image from "next/image";

interface ExperienceCardProps {
  logo: string, 
  startDate: string,
  endDate: string, 
  position: string,
  companyName: string,
  location: string,
  description: string,
  bottomSpace: string,
  // bottomSpace for 
  // mobile screens = (height of the rendered current border element)px - 60px
  // tablet landscape = mobile screen - 40px
  //
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({logo, startDate, endDate, position, companyName, location, description, bottomSpace}) => {
  
  return (
    <div className="flex min-w-[385px] gap-3">

      <div className="w-full max-w-[70px] flex justify-center">
        <Image width={56} height={56} className={`h-14 rounded-xl ${bottomSpace} z-10 border-2`} src={logo} alt="companyLogo" />
      </div>


      <div className="relative w-full">

        {/* border-l-2 border-default-300 */}
        <div className="flex flex-col gap-1 bred absolute -left-[47px] pl-[50px] w-[350px] md:w-[500px] lg:w-full">

          <p className="text-default-500">{startDate} - {endDate}</p>

          <h2 className="text-lg font-semibold">{position}</h2>

          <div className="flex items-center gap-2">
            <h3 className="font-medium">{companyName}</h3>
            <p className="text-default-500 text-sm">•</p>
            <p className="text-default-500 text-sm">{location}</p>
          </div>

          <p className="text-default-600 text-sm pt-2">{description}</p>

          <div className="min-h-7 lg:min-h-10"></div>

        </div>
      </div>

    </div>
  )
}

export default ExperienceCard;