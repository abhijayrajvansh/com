// playground imports
import { Chip } from "@nextui-org/react";
import { title } from "../components/primitives";
import AddGap from "./AddGap";
import ProjectCard from "./ProjectCard";
import { siteConfig } from "@/config/site";
import ExperienceCard from "./ExperienceCard";


const Playground = () => {
  return (
    <>
      <div className="my-5">
        <h1 className={title({color: 'yellow'})}>Playground Area!</h1>
        <AddGap vertical={'4'} />
      </div>
      {/* ********************************** */}




        {/* ${tilt === 'right' ? 'rotate-1' : '-rotate-1'} */}

        <div className={`border bg-[url('/t3.webp')] bg-cover bg-center border-default-200 w-full my-5 sm:w-[341px] rounded-xl transition`}>
          <div className="transition w-full min-h-44 rounded-xl flex flex-col text-2xl font-medium justify-end p-2 px-4 bg-gradient-to-t from-black">
            <div className="font-semibold">Twitter Clone</div>
              <div className="text-lg">
                project
            </div>
        </div>
      </div>



      {/* ********************************** */}
    </>
  )
}

export default Playground;