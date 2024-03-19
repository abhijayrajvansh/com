// playground imports
import { Chip } from "@nextui-org/react";
import { title } from "../components/primitives";
import AddGap from "./AddGap";
import ProjectCard from "./ProjectCard";
import { siteConfig } from "@/config/site";


const Playground = () => {
  return (
    <>
      <div className="my-5">
        <h1 className={title({color: 'yellow'})}>Playground Area!</h1>
        <AddGap vertical={'4'} />
      </div>
      {/* ********************************** */}

        {/* start building */}



        <ProjectCard 
          title={siteConfig.projects.twitter.title}
          description={siteConfig.projects.twitter.description}
          type={siteConfig.projects.twitter.type}
          thumbnail="bg-[url('/skillsbg.jpeg')]"
          sourceCodeLink={siteConfig.projects.twitter.sourceCodeLink}
          liveProjectLink={siteConfig.projects.twitter.liveProjectLink}
          tilt="left" 
        />

        






      {/* ********************************** */}
    </>
  )
}

export default Playground;