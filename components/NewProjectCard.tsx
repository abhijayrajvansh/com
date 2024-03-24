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

const NewProjectCard = () => {
  return (
    <div className={`bg-[url('/t3.webp')] my-5 sm:w-[341px] rounded-xl shadow-xl transition w-full flex flex-col justify-end rotate-1 border-2 border-default-100`}>
      <div className="bottomContainer flex flex-col">
        <div className="min-h-[90px] bg-gradient-to-t from-black pb-3 px-4 flex flex-col justify-end">
          <img
            className="h-14 w-14 rounded-xl border-2 border-default-300"
            src="/xLogo.jpeg"
            alt="projectLogo"
          />
        </div>

        <div className="transition flex flex-col text-2xl font-medium justify-end bg-black px-4 rounded-b-xl pb-4">
          <h1 className="font-semibold text-white">Twitter Clone</h1>

          <div className="flex gap-2 items-center pb-2">
            <TbBrandNextjs className="text-white"/>
            <RiReactjsLine className="text-sky-500" />
            <RiSupabaseFill className="text-green-500"/>
            <Image height={39} width={39} src='/drizzle.png' alt='drizzleLogo' />
            <Image height={25} width={25} src='/shadcn.png' alt='shadcnlogo' />
            <Image height={25} width={25} src='/react-icons.svg' alt='reacticonslogo' />
            <SiTypescript className="text-blue-500"/>
            <IoLogoNodejs className="text-green-600"/>
          </div>


          <div className="flex justify-between mb-3">

            <Button size="md"
            isExternal={true}
            href='/'
            color="danger"
            as={Link}
            variant="solid">
            <div className="flex items-center gap-2 font-normal text-white">
              <FaLink />
              Visit
            </div>
          </Button>

          <Button size="md" className="border border-gray-500 bg-black"
              isExternal={true}
              color="default"
              href='/'
              as={Link}
              variant="solid">
              <div className="flex items-center gap-2 font-normal text-white">
                <FaGithub size={18} /> 
                GitHub
              </div>
            </Button>

            <Button size="md" 
              isExternal={true}
              color="success"
              href='/'
              as={Link}
              variant="solid">
              <div className="flex items-center gap-2 font-semibold text-black">
                <MdOutlineArticle size={21}/>
                Blog
              </div>
            </Button>

            
          </div>

          
          

        </div>
      </div>
    </div>
  );
};

export default NewProjectCard;
