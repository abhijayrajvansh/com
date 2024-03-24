import { Chip } from "@nextui-org/react";
import { TbBrandNextjs } from "react-icons/tb";
import ProjectTags from "./ProjectTags";
import { FaReact } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";

const NewProjectCard = () => {
  return (
    <div className={`bg-[url('/t3.webp')] my-5 sm:w-[341px] rounded-xl shadow-lg  transition w-full flex flex-col justify-end`}>

          <div className="bottomContainer flex flex-col">
        
            <div className="min-h-[90px] bg-gradient-to-t from-black pb-3 px-4 flex flex-col justify-end">
              <img className="h-14 w-14 rounded-xl border-2 border-default-300" src="/xLogo.jpeg" alt="projectLogo" />
            </div>

          <div className="transition flex flex-col text-2xl font-medium justify-end bg-black px-4 rounded-b-xl">
              
            <h1 className="font-semibold text-white pb-1">Twitter Clone</h1>
            <p className="text-xs text-white pb-3">description about the project, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam tempore dolorum itaque.</p>

              <div className="text-sm pb-4">
                <ProjectTags icon={TbBrandNextjs} technologyName="Next.js"/>
                <ProjectTags icon={FaReact} technologyName="React.js"/>
                <ProjectTags icon={RiSupabaseFill} technologyName="Supabase"/>
              </div>

            </div>

          </div>

        </div>
  )
}

export default NewProjectCard;