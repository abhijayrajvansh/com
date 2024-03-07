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

const ProjectCard:React.FC<projectCardProps> = ({title, type, description, thumbnail, sourceCodeLink, liveProjectLink, tilt}) => {
  return (
    <div className={`my-5 rounded-xl p-4 shadow-xl bg-gradient-to-b from-projectCardTop to-projectCardBotttom border border-default-200 ${tilt} hover:rotate-0 transition`}>
    
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold">{title}</div>
      
      <Chip size="sm" variant="flat" color="success">
      {type}
      </Chip>
    
    </div>
    
    <div className="mt-3 text-default-500 text-sm">{description}</div>
    
    <img className="mt-5 rounded-2xl shadow-xl border border-default-200 w-[338px] h-[190px] object-cover" src={thumbnail} alt="project-thumbnail" />
    
    <div className="flex justify-between mt-5">
    
      <Button size="md"
        isExternal={true}
        href={sourceCodeLink}
        as={Link}
        variant="bordered">
        <FaGithub size={'21'} /> 
        GitHub
      </Button>

      <Button size="md"
        color="danger"
        isExternal={true}
        href={liveProjectLink}
        as={Link}
        variant="solid"
        showAnchorIcon>
        Visit
      </Button>

    </div>
  </div>
  )
}

export default ProjectCard;