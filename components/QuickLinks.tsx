'use client';

import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Link } from "@nextui-org/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";
import { IoMoonOutline } from "react-icons/io5";

const QuickLinks = () => {
  
  const { theme, setTheme } = useTheme();
  
  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="transition rounded-xl border border-background hover:border-blue-600 hover:border-blur">
        <Dropdown backdrop="blur">
          <DropdownTrigger>
            <Button variant="flat" isIconOnly className="dark:text-white dark:bg-primary-100"> <RxHamburgerMenu size={20}/> </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" >
            <DropdownSection title='Actions' showDivider >
              <DropdownItem onClick={ handleTheme }>
                <div className="flex items-center gap-5">
                  { theme === 'dark' ? <PiSunLight size={20}/> : <IoMoonOutline size={20}/> }
                  <p className="text-[16px]">Go {theme === 'light' ? 'Dark' : 'Light'}</p>
                </div>
              </DropdownItem>    
            </DropdownSection>
            <DropdownSection title='Social Links'>
              <DropdownItem className="my-1">
                
                <Link isExternal color="foreground" href={siteConfig.links.twitter} className="flex items-center gap-5">
                  <FaXTwitter size={20}/> 
                  <p className="text-[16px]">Twitter</p>
                </Link>

              </DropdownItem>
              <DropdownItem className="my-1">
                
                <Link isExternal color="foreground" href={siteConfig.links.github} className="flex items-center gap-5">
                  <FaGithub size={20}/> 
                  <p className="text-[16px]">Github</p>
                </Link>
              
              </DropdownItem>
              <DropdownItem className="my-1">
              
                <Link isExternal color="foreground" href={siteConfig.links.linkedin} className="flex items-center gap-5">
                  <FaLinkedin size={20}/> 
                  <p className="text-[16px]">LinkedIn</p>
                </Link>
              
              </DropdownItem> 
              <DropdownItem className="mt-1">
              
                <Link color="foreground" href={siteConfig.links.email} className="flex items-center gap-5">
                  <MdEmail size={20}/> 
                  <p className="text-[16px]">E-mail</p>
                </Link>
              
              </DropdownItem> 
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
  )
}

export default QuickLinks;