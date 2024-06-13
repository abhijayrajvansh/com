import { experiencesData } from "@/config/experience.config";
import ExperienceCard from "./ExperienceCard";

const Timeline = () => {
  return (
    <>
      <ExperienceCard
        companyLogo={experiencesData.company.upwork.companyLogo}
        startDate={experiencesData.company.upwork.startDate}
        endDate={experiencesData.company.upwork.endDate}
        position={experiencesData.company.upwork.position}
        companyName={experiencesData.company.upwork.companyName}
        companyLocation={experiencesData.company.upwork.companyLocation}
        description={experiencesData.company.upwork.description}
      />

      <ExperienceCard
        companyLogo={experiencesData.company.bling.companyLogo}
        startDate={experiencesData.company.bling.startDate}
        endDate={experiencesData.company.bling.endDate}
        position={experiencesData.company.bling.position}
        companyName={experiencesData.company.bling.companyName}
        companyLocation={experiencesData.company.bling.companyLocation}
        description={experiencesData.company.bling.description}
      />

      <ExperienceCard
        companyLogo={experiencesData.company.appleDeveloperProgram.companyLogo}
        startDate={experiencesData.company.appleDeveloperProgram.startDate}
        endDate={experiencesData.company.appleDeveloperProgram.endDate}
        position={experiencesData.company.appleDeveloperProgram.position}
        companyName={experiencesData.company.appleDeveloperProgram.companyName}
        companyLocation={
          experiencesData.company.appleDeveloperProgram.companyLocation
        }
        description={experiencesData.company.appleDeveloperProgram.description}
      />

      <ExperienceCard
        companyLogo={experiencesData.company.nhs.companyLogo}
        startDate={experiencesData.company.nhs.startDate}
        endDate={experiencesData.company.nhs.endDate}
        position={experiencesData.company.nhs.position}
        companyName={experiencesData.company.nhs.companyName}
        companyLocation={experiencesData.company.nhs.companyLocation}
        description={experiencesData.company.nhs.description}
      />

      <ExperienceCard
        companyLogo={experiencesData.company.unacademy.companyLogo}
        startDate={experiencesData.company.unacademy.startDate}
        endDate={experiencesData.company.unacademy.endDate}
        position={experiencesData.company.unacademy.position}
        companyName={experiencesData.company.unacademy.companyName}
        companyLocation={experiencesData.company.unacademy.companyLocation}
        description={experiencesData.company.unacademy.description}
        showTimeline={false}
      />
    </>
  );
};

export default Timeline;
