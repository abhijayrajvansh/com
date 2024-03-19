import Header from "./Header";
import NavigationTab from "./NavigationTab";
import NotesCard from "./NotesCard";
import { languages, technicalSkills, technicalTools } from "@/config/site";

const Resume = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper">

        <main className="contentWrapper">
        
          <h1 className="text-5xl font-semibold mb-10">Resume</h1>
          <p>data</p>

        </main>

        <div className="flex flex-col">

          {/* engagement section */}
          <NotesCard title="Technical Skills" elements={technicalSkills} tilt="right"/>
          <NotesCard title="Tools" elements={technicalTools} tilt="left"/>
          <NotesCard title="Languages" elements={languages} tilt="right"/>
        </div>
      </div>
      
    </section>
  )
}

export default Resume;