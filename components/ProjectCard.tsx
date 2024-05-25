"use client";

import { useState } from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import Image from "next/image";

interface ProjectCardProps {
  logo: string;
  title: string;
  description: string;
  nextjs?: boolean;
  react?: boolean;
  supabse?: boolean;
  drizzle?: boolean;
  shadcn?: boolean;
  reacticnons?: boolean;
  typescript?: boolean;
  node?: boolean;
  visitLink: string;
  githubLink: string;
  blogLink: string;
  banner: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  banner,
  logo,
  title,
  description,
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
    <div
      className={`my-5 sm:w-[336px] rounded-xl shadow-2xl transition w-full justify-end relative cursor-pointer`}
    >
      <Image
        width={336}
        height={180}
        src={`${banner}`}
        alt="project-banner"
        className="absolute w-full h-full -z-10 rounded-xl"
      />

      <div className="flex flex-col rounded-xl shadow-lg">
        <div className="pt-2 bg-gradient-to-t from-black to-black/5 pb-3 px-4 flex flex-col justify-center relative rounded-t-xl min-h-[100px]">
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

        <div className="transition flex flex-col text-xl font-medium justify-end bg-black px-4 rounded-b-lg pb-2 ">
          <h1 className="font-semibold sm:font-medium text-2xl text-white">
            {title}
          </h1>

          <div className="flex gap-2 items-center py-1 pb-2">
            {nextjs && <TbBrandNextjs className="text-white" />}
            {react && <RiReactjsLine className="text-sky-500" />}
            {supabse && <RiSupabaseFill className="text-green-500" />}
            {drizzle && ( <Image height={39} width={39} src="/drizzle.png" alt="drizzleLogo" /> )}
            {shadcn && ( <Image height={25} width={25} src="/shadcn.png" alt="shadcnlogo" /> )}
            {reacticnons && ( <Image height={21} width={21} src="/react-icons.svg" alt="reacticonslogo" />)}
            {typescript && <SiTypescript className="text-[#3075C1]" />}
            {node && <IoLogoNodejs className="text-green-600" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
