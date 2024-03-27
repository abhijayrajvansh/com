import Header from "./Header";
import NavigationTab from "./NavigationTab";
import NotesCard from "./NotesCard";
import { experiencesData, languages, technicalSkills, technicalTools } from "@/config/site";
import ThanksNote from "./ThanksNote";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">

        <main className="contentWrapper mb-20">
        
          <h1 className="text-4xl sm:text-5xl font-semibold mb-10">Work Experience</h1>

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
              companyLocation={experiencesData.company.appleDeveloperProgram.companyLocation}
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
            />

        </main>


        {/* engagement section */}
        <div className="flex flex-col mt-10">
          <NotesCard title="Technical Skills" elements={technicalSkills} tilt="right"/>
          <NotesCard title="Tools" elements={technicalTools} tilt="left"/>
          <NotesCard title="Languages" elements={languages} tilt="right"/>
          <ThanksNote tilt="left" />
        </div>
      </div>
      
    </section>
  )
}

export default Experience;