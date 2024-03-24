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
    <div
      className={`${bgBanner} my-5 sm:w-[341px] rounded-2xl shadow-xl transition w-full flex flex-col justify-end border-2 border-default-100 ${tilt === 'left' ? '-rotate-1' : 'rotate-1'} hover:rotate-0`}
    >
      <div className="bottomContainer flex flex-col">
        <div className="min-h-[90px] bg-gradient-to-t from-black pb-3 px-4 flex flex-col justify-end">
          <img
            className="h-14 w-14 rounded-xl border-2 border-default-300"
            src={logo}
            alt="projectLogo"
          />
        </div>

        <div className="transition flex flex-col text-2xl font-medium justify-end bg-black px-4 rounded-b-xl pb-2">
          <h1 className="font-semibold text-white">{title}</h1>

          <div className="flex gap-2 items-center pb-2">
            
            { nextjs && <TbBrandNextjs className="text-white" /> }
            { react && <RiReactjsLine className="text-sky-500" /> }
            { supabse && <RiSupabaseFill className="text-green-500" /> }
            { drizzle && <Image height={39} width={39} src="/drizzle.png" alt="drizzleLogo"/>}
            { shadcn && <Image height={25} width={25} src="/shadcn.png" alt="shadcnlogo" />}
            { reacticnons && <Image height={25} width={25} src="/react-icons.svg" alt="reacticonslogo" />}
            { typescript && <SiTypescript className="text-blue-500" />}
            { node && <IoLogoNodejs className="text-green-600" />}

          </div>

          <div className="flex justify-between mb-2">
            <Button
              size="md"
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
              size="md"
              className="border border-gray-500 bg-black"
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

            <Button
              size="md"
              isExternal={true}
              color="success"
              href={blogLink}
              as={Link}
              variant="solid"
            >
              <div className="flex items-center gap-2 font-semibold text-black">
                <MdOutlineArticle size={21} />
                Blog
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
