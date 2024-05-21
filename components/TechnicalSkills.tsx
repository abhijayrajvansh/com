import { technicalSkills } from "@/config/site";
import NotesCard from "./NotesCard";


const TechnicalSkills = () => {
  return (
    <div>
      <NotesCard title="Technical Skills" elements={technicalSkills} />
    </div>
  )
}

export default TechnicalSkills;