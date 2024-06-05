"use client";

import Image from "next/image";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProjectCardProps {
  logo: string;
  title: string;
  description: string;
  demo: string;
  sourceCode: string;
  blog: string;
  banner: string;
  nextjs?: boolean;
  react?: boolean;
  supabse?: boolean;
  drizzle?: boolean;
  shadcn?: boolean;
  reacticnons?: boolean;
  typescript?: boolean;
  node?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  banner,
  logo,
  title,
  description,
  demo,
  blog,
  sourceCode,
  nextjs,
  react,
  supabse,
  drizzle,
  shadcn,
  reacticnons,
  typescript,
  node,
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={`my-5 w-full sm:w-[330px] rounded-xl shadow-2xl transition justify-end relative cursor-pointer`}
        >
          <Image
            width={336}
            height={180}
            src={`${banner}`}
            alt="project-banner"
            className="absolute w-full h-full -z-10 rounded-xl"
          />

          <div className="flex flex-col rounded-xl shadow-lg">
            <div className="pt-2 bg-gradient-to-t relative top-1 from-[#000000] to-[#000000]/5 pb-3 px-4 flex flex-col justify-center  rounded-t-xl min-h-[100px]">
              <div className="flex justify-between ">
                <Image
                  className="h-14 w-14 rounded-xl "
                  src={logo}
                  alt="projectLogo"
                  width={56}
                  height={56}
                />
              </div>
            </div>

            <div className="transition flex flex-col text-xl font-medium justify-end bg-[#000000] px-4 rounded-b-sm pb-2 ">
              <h1 className="font-semibold text-start sm:font-medium text-2xl text-white">
                {title}
              </h1>

              <div className="flex gap-2 items-center py-1 pb-2">
                {nextjs && <TbBrandNextjs className="text-white" />}
                {react && <RiReactjsLine className="text-sky-500" />}
                {supabse && <RiSupabaseFill className="text-green-500" />}
                {drizzle && (
                  <Image
                    height={39}
                    width={39}
                    src="/drizzle.png"
                    alt="drizzleLogo"
                  />
                )}
                {shadcn && (
                  <Image
                    height={25}
                    width={25}
                    src="/shadcn.png"
                    alt="shadcnlogo"
                  />
                )}
                {reacticnons && (
                  <Image
                    height={21}
                    width={21}
                    src="/react-icons.svg"
                    alt="reacticonslogo"
                  />
                )}
                {typescript && <SiTypescript className="text-[#3075C1]" />}
                {node && <IoLogoNodejs className="text-green-600" />}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="rounded-xl border-border ">
        <DialogHeader className="space-y-5">
          <DialogTitle className="text-start text-xl">{title}</DialogTitle>
          <DialogDescription className="text-start sm:text-base">
            {description}
          </DialogDescription>
          <DialogDescription className="text-start flex justify-between sm:justify-start">
            <Button
              asChild
              variant={"link"}
              className="sm:text-base font-medium text-pink-600"
              size="sm"
            >
              <Link
                target="_blank"
                rel="noopener noreferer"
                href={demo}
                className="space-x-2"
              >
                <p className="flex items-center gap-2">
                  <FaExternalLinkAlt size={18} />
                  Demo
                </p>
              </Link>
            </Button>

            <Button
              asChild
              variant={"link"}
              className="sm:text-base font-medium primary-text"
              size="sm"
            >
              <Link
                target="_blank"
                rel="noopener noreferer"
                href={blog}
                className="space-x-2"
              >
                <p className="flex items-center gap-2">
                  <RiArticleLine size={21} />
                  Blog
                </p>
              </Link>
            </Button>

            <Button
              asChild
              variant={"link"}
              className="sm:text-base font-medium dark:text-white text-black"
              size="sm"
            >
              <Link
                target="_blank"
                rel="noopener noreferer"
                href={sourceCode}
                className="space-x-2"
              >
                <p className="flex items-center gap-2">
                  <FaGithub size={21} />
                  Source Code
                </p>
              </Link>
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
