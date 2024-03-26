import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";

interface ProjectCardProps {
  bgBanner: string, 
  logo: string, 
  title: string, 
  nextjs?: boolean, 
  react?: boolean, 
  supabse?: boolean, 
  drizzle?: boolean, 
  shadcn?: boolean, 
  reacticnons?: boolean, 
  typescript?: boolean, 
  node?: boolean, 
  visitLink: string, 
  githubLink: string, 
  blogLink: string, 
  tilt: string,
}

const ProjectCard:React.FC<ProjectCardProps> = ({bgBanner, logo, title, nextjs, react, supabse, drizzle, shadcn, reacticnons, typescript, node, visitLink, githubLink, blogLink, tilt}) => {
  return (
<>
    <div
      className={` ${bgBanner} my-5 sm:w-[341px] rounded-xl shadow-2xl transition w-full justify-end ${ tilt === 'right' ? 'hover:rotate-1' : 'hover:-rotate-1'}`}
    >
    <div className="bottomContainer flex flex-col rounded-xl shadow-lg">

        <div className="pt-2 bg-gradient-to-t from-black pb-3 px-4 flex flex-col justify-end relative -bottom-1 rounded-t-xl ">
          <div className="flex justify-between items-start">
            <Image
              className="h-14 w-14 rounded-xl border-2 border-default-200"
              src={logo}
              alt="projectLogo"
              width={56} height={56}
            />
          </div>
        </div>

        <div className="transition flex flex-col text-xl font-medium justify-end  bg-black px-4 rounded-b-xl  pb-2">
          <h1 className="font-semibold text-white">{title}</h1>

          <div className="flex gap-2 items-center py-1 pb-2">
            { nextjs && <TbBrandNextjs className="text-white" /> }
            { react && <RiReactjsLine className="text-sky-500" /> }
            { supabse && <RiSupabaseFill className="text-green-500" /> }
            { drizzle && <Image height={39} width={39} src="/drizzle.png" alt="drizzleLogo"/>}
            { shadcn && <Image height={25} width={25} src="/shadcn.png" alt="shadcnlogo" />}
            { reacticnons && <Image height={25} width={25} src="/react-icons.svg" alt="reacticonslogo" />}
            { typescript && <SiTypescript className="text-[#3075C1]" />}
            { node && <IoLogoNodejs className="text-green-600" />}
          </div>

          <div className="flex justify-between mb-2">
            <Button
              size="sm"
              className="text-sm"
              isExternal={true}
              href={visitLink}
              color="danger"
              as={Link}
              variant="solid"
            >
              <div className="flex items-center gap-2 font-normal text-white">
                <FaLink />
                Visit
              </div>
            </Button>

            <Button
              size="sm"
              isExternal={true}
              color="success"
              className="text-sm "
              href={blogLink}
              as={Link}
              variant="solid"
            >
              <div className="flex items-center gap-2 font-normal text-black">
                <MdOutlineArticle size={21} />
                Blog
              </div>
            </Button>

            <Button
              size="sm"
              className="text-sm py-4 border border-gray-500 bg-black"
              isExternal={true}
              color="default"
              href={githubLink}
              as={Link}
              variant="solid"
            >
              <div className="flex items-center gap-2 font-normal text-white">
                <FaGithub size={18} />
                GitHub
              </div>
            </Button>

            
          </div>

        </div>

      </div>
    </div>
    </>
  );
};

export default ProjectCard;
