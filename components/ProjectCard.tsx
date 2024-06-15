"use client";

import Image from "next/image";
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

import NextjsIcon from "./icons/NextjsIcon";
import ReactIcon from "./icons/ReactIcon";
import ExpressIcon from "./icons/ExpressIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import PrismaIcon from "./icons/PrismaIcon";
import SupabaseIcon from "./icons/SupabaseIcon";
import GraphqlIcon from "./icons/GraphqlIcon";
import PostgresIcon from "./icons/PostgresIcon";
import AwsIcon from "./icons/AwsIcon";

interface ProjectCardProps {
  logo: string;
  title: string;
  description: string;
  banner: string;
  demo: string;
  blog: string;
  sourceCode: string;
  nextjs?: boolean;
  react?: boolean;
  express?: boolean;
  typescript?: boolean;
  graphql?: boolean;
  prisma?: boolean;
  supabase?: boolean;
  postgres?: boolean;
  aws?: boolean;
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
  express,
  typescript,
  graphql,
  prisma,
  supabase,
  postgres,
  aws,
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={`my-5 w-full sm:w-[320px] xl:w-[336px] rounded-xl shadow-2xl transition justify-end relative cursor-pointer`}
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
              <div className="flex gap-2 items-center py-3">
                {nextjs && <NextjsIcon />}
                {react && <ReactIcon />}
                {express && <ExpressIcon />}
                {typescript && <TypescriptIcon />}
                {graphql && <GraphqlIcon />}
                {prisma && <PrismaIcon />}
                {supabase && <SupabaseIcon />}
                {postgres && <PostgresIcon />}
                {aws && <AwsIcon />}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="rounded-xl border-border">
        <DialogHeader className="space-y-5">
          <DialogTitle className="text-start text-xl">{title}</DialogTitle>
          <DialogDescription className="text-start sm:text-base">
            {description}
          </DialogDescription>
          <DialogDescription className="text-start flex justify-between sm:justify-start sm:space-x-3">
            
          {demo !== ' ' ?  
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
              <p className="flex items-center font-normal text-sm gap-3">
                <FaExternalLinkAlt size={18} />
                Demo
              </p>
            </Link>
          </Button> : <></>}

            {blog !== ' ' ?
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
                <p className="flex items-center font-normal text-sm gap-3">
                  <RiArticleLine size={23} />
                  Blog
                </p>
              </Link>
            </Button> : <></>}

            {sourceCode !== ' ' ?
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
                <p className="flex items-center font-normal text-sm gap-3">
                  <FaGithub size={23} />
                  Source Code
                </p>
              </Link>
            </Button> : <></>}

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
