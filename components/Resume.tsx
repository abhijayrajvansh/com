import Header from "./Header";
import NavigationTab from "./NavigationTab";
import NotesCard from "./NotesCard";
import { experiencesData, languages, technicalSkills, technicalTools } from "@/config/site";
import ThanksNote from "./ThanksNote";
import ExperienceCard from "./ExperienceCard";

const Resume = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">

        <main className="contentWrapper">
        
          <h1 className="text-5xl font-semibold mb-10">Resume</h1>

            <ExperienceCard 
              companyLogo={experiencesData.company.google.companyLogo}
              startDate={experiencesData.company.google.startDate}
              endDate={experiencesData.company.google.endDate}
              position={experiencesData.company.google.position}
              companyName={experiencesData.company.google.companyName}
              companyLocation={experiencesData.company.google.companyLocation}
              description={experiencesData.company.google.description}
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

export default Resume;