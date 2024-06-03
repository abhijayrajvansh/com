import Header from "./Header";
import NavigationTab from "./NavigationTab";
import NotesCard from "./NotesCard";
import ThanksNote from "./ThanksNote";
import ExperienceCard from "./ExperienceCard";
import SocialConnections from "./SocialConnections";
import { experiencesData } from "@/config/experience.config";
import {
  technicalSkills,
  languages,
  technicalTools,
} from "@/config/skills.config";

const Resume = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">
        <main className="contentWrapper mb-20">
          <h1 className="text-4xl font-bold mb-10 blue-text-bg-gradient">
            Career & Expertise.
          </h1>

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
            companyLogo={
              experiencesData.company.appleDeveloperProgram.companyLogo
            }
            startDate={experiencesData.company.appleDeveloperProgram.startDate}
            endDate={experiencesData.company.appleDeveloperProgram.endDate}
            position={experiencesData.company.appleDeveloperProgram.position}
            companyName={
              experiencesData.company.appleDeveloperProgram.companyName
            }
            companyLocation={
              experiencesData.company.appleDeveloperProgram.companyLocation
            }
            description={
              experiencesData.company.appleDeveloperProgram.description
            }
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

          <h1 className="text-3xl font-semibold my-10 yellow-text-bg-gradient">
            Relevant Coursework
          </h1>

          <ExperienceCard
            companyLogo={experiencesData.company.metaCourse.InstituteLogo}
            position={experiencesData.company.metaCourse.course}
            companyName={experiencesData.company.metaCourse.companyName}
            description={experiencesData.company.metaCourse.description}
            showTimeline={false}
          />

          <ExperienceCard
            companyLogo={experiencesData.company.CS50Course.InstituteLogo}
            position={experiencesData.company.CS50Course.course}
            companyName={experiencesData.company.CS50Course.companyName}
            description={experiencesData.company.CS50Course.description}
            showTimeline={false}
          />

          <ExperienceCard
            companyLogo={experiencesData.company.redhatCourse.InstituteLogo}
            position={experiencesData.company.redhatCourse.course}
            companyName={experiencesData.company.redhatCourse.companyName}
            description={experiencesData.company.redhatCourse.description}
            showTimeline={false}
          />
        </main>

        <section>
          <div className="my-10 md:hidden"></div>
          <NotesCard title="Technical Skills" elements={technicalSkills} />
          <NotesCard title=" Microservices & Tools" elements={technicalTools} />
          <NotesCard title="Languages" elements={languages} />
          <SocialConnections />
          <ThanksNote />
        </section>
      </div>
    </section>
  );
};

export default Resume;
