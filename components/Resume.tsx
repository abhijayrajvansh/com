import Header from "./Header";
import NavigationTab from "./NavigationTab";
import NotesCard from "./NotesCard";
import { languages, technicalSkills, technicalTools } from "@/config/site";
import ThanksNote from "./ThanksNote";
const Resume = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">

        <main className="contentWrapper">
        
          <h1 className="text-5xl font-semibold mb-10">Resume</h1>

          ExperienceCard Component beta changes

        </main>

        <div className="flex flex-col mt-10">
          {/* engagement section */}
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