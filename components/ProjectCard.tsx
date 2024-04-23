'use client';

import { useState } from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { Link } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";

interface ProjectCardProps {
  logo: string, 
  title: string, 
  description: string,
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
  banner: string,
}

const ProjectCard:React.FC<ProjectCardProps> = ({ banner, logo, title, description, nextjs, react, supabse, drizzle, shadcn, reacticnons, typescript, node, visitLink, githubLink, blogLink}) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div onClick={onOpen} className={`my-5 sm:w-[341px] rounded-xl shadow-2xl transition w-full justify-end relative cursor-pointer`}>
      
      <Image width={340} height={180}
        src={`${banner}`} 
        alt="project-banner" 
        className="absolute w-full -z-10 rounded-xl"
      />
      
      <div className="flex flex-col rounded-xl shadow-lg">



        <div className="pt-2 bg-gradient-to-t from-black to-black/10 pb-3 px-4 flex flex-col justify-center relative rounded-t-xl min-h-[100px]">
          <div className="flex justify-between ">
            <Image
              className="h-14 w-14 rounded-xl border-2 border-default-300 "
              src={logo}
              alt="projectLogo"
              width={56} height={56}
            />
          </div>
        </div>


        <div className="transition flex flex-col text-xl font-medium justify-end bg-black px-4 rounded-b-xl pb-2 ">
          <h1 className="font-semibold sm:font-medium text-2xl text-white">{title}</h1>

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

        </div>

      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" isDismissable={false} classNames={{
        closeButton: "scale-150 sm:scale-125",
        base: "bg-background"
      }}>
        
        <ModalContent>
          
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">{title}</ModalHeader>
              
              <ModalBody>
                
                <p className="text-color-text"> 
                  {description}
                </p>

              </ModalBody>
              
              <ModalFooter>
              

                <div className="flex justify-start gap-5 mb-2 w-full">
                  <Button
                    size="sm"
                    className="text-sm"
                    isExternal={true}
                    href={visitLink}
                    color="danger"
                    as={Link}
                    variant="flat"
                  >
                    <div className="flex items-center gap-2 font-normal">
                      <FaLink />
                      Visit
                    </div>
                  </Button>

                  <Button
                    size="sm"
                    color="primary"
                    className="text-sm "
                    href={blogLink}
                    as={Link}
                    variant="solid"
                  >
                    <div className="flex items-center gap-2 font-normal">
                      <MdOutlineArticle size={21} />
                      Blog
                    </div>
                  </Button>

                  <Button
                    size="sm"
                    className="text-sm py-4 border border-gray-500 bg-[#0f162a] "
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
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProjectCard;



