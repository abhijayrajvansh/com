import { Button, Link, Chip} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";

interface projectCardProps {
  title: string,
  type: string,
  description: string, 
  thumbnail: string,
  sourceCodeLink: string,
  liveProjectLink: string,
  tilt: string,
}

const ProjectCard:React.FC<projectCardProps> = ({title, type, description, thumbnail, sourceCodeLink, liveProjectLink, tilt, }) => {
  return (  
    <div className={`border ${thumbnail} border-default-200 w-full my-5 sm:w-[341px] rounded-xl ${tilt === 'right' ? 'rotate-1' : '-rotate-1'} transition hover:rotate-0 shadow-lg `}>


      <div className="bg-hoverdarkbg bg-opacity-50 hover:bg-opacity-30 transition w-full min-h-44 rounded-xl flex flex-col justify-between text-2xl font-medium p-4 text-white backdrop-blur-[5px] ">


      <div className="flex justify-between items-center">
        <div className="text-xl font-bold ">{title}</div>
        <Chip className="backdrop-blur-xl"
          size="sm" variant="flat" color="success">
          {type}
        </Chip>
      </div>

      <div className="my-5  text-sm">{description}</div>

      <div className="flex justify-between">
        <Button size="md" className="bg-black/60 text-white border border-default-500/50"
          isExternal={true}
          href={sourceCodeLink}
          as={Link}
          variant="solid">
          <div className="flex items-center gap-2 font-semibold">
            <FaGithub size={'20'} /> 
            GitHub
          </div>
        </Button>

        <Button size="md"
          color="danger"
          isExternal={true}
          href={liveProjectLink}
          as={Link}
          variant="solid"
          className="bg-red-600/85 border border-default-400/50 font-semibold"
          showAnchorIcon>
          Visit
        </Button>
      </div>
      
      
      
      </div>

    </div>
  )
}

export default ProjectCard;







