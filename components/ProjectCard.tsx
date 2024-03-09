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

// const bgimg = 'background-image: url('/t3.webp')';

const ProjectCard:React.FC<projectCardProps> = ({title, type, description, thumbnail, sourceCodeLink, liveProjectLink, tilt}) => {
  return (
    // bg-[url('/t3.webp')]
    <div className={`mt-5 bg-[url('/t3.webp')] ${tilt === 'left' ? '-rotate-1' : 'rotate-1'} rounded-2xl hover:rotate-0 transition`}>

    {/* bg-gradient-to-b from-projectCardTop to-projectCardBotttom */}
    <div className={`rounded-xl p-4 shadow-xl bg-black bg-opacity-50 hover:bg-opacity-40 transition text-white`}>
        
        <div className="flex justify-between items-center">
          <div className="text-[22px] font-bold ">{title}</div>
          
          <Chip className="backdrop-blur-xl" 
            size="sm" variant="flat" color="success">
            {type}
          </Chip>
        
        </div>

        {/* text-default-500 */}
        <div className="my-5  text-sm">{description}</div>
        
        {/* <img className="mt-5 rounded-2xl shadow-xl border border-default-200 w-[338px] h-[190px] object-cover" src={thumbnail} alt="project-thumbnail" /> */}
        
        <div className="flex justify-between py-2">
        
          <Button size="md" className="backdrop-blur-lg text-white"
            isExternal={true}
            href={sourceCodeLink}
            as={Link}
            variant="bordered">
            <div className="flex items-center gap-3 font-semibold">
              <FaGithub size={'25'} /> 
              GitHub
            </div>
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

    </div>
  )
}

export default ProjectCard;