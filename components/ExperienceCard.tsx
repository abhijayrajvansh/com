import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
              ? "border-[3px] border-yellow-300 glow-bg-gold"
              : "border-4 border-border"
          }`}
          src={companyLogo}
          alt="companyLogo"
        />
      </div>

      <div className="flex flex-col gap-1 pl-1 pb-7 sm:pb-10 w-full">
        {startDate && (
          <p className="text-paragraph text-sm">
            {startDate} - {endDate}
          </p>
        )}
        <h2 className="text-xl sm:text-2xl font-medium">{position}</h2>
        <div className="flex items-center gap-2 pb-1">
          <div className="text-sm font-medium text-default-600">
            <h3 className="">{companyName}</h3>
            <p className="text-color-text mt-1">{companyLocation}</p>
          </div>
        </div>

        {/* defaultValue={content} - content will decide wheather to open and in this scenario if we map then all the content value are same, thus here the values must be pass through prop drilling and api must be in JSON format, on the experience.tsx page the full JSON will be mapped and then here we can decide what to have in accordian and skills out of accordion for more appealing. */}

        <Accordion
          type="single"
          defaultValue="description"
          collapsible
          className="w-full"
        >
          <AccordionItem value="description">
            <AccordionTrigger className="text-color-text max-w-fit gap-2 font-normal text-sm">
              See Details
            </AccordionTrigger>

            <AccordionContent>
              {description?.map((keyPoint, index) => (
                <div
                  className="text-color-text text-[13px] sm:text-sm"
                  key={index}
                >
                  <p className="pt-1">
                    <span className="primary-text"> — </span>
                    <span className="font-light">{keyPoint}</span>
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ExperienceCard;
