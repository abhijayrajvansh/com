'use client';

import SocialLinks from "./SocialLinks";
import { Button, DropdownSection } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { RiBookMarkLine } from "react-icons/ri";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  
  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <section className="flex items-center justify-between px-5 py-5 sm:pl-0 sm:ml-[110px] lg:ml-[230px]">
      
      <div className="transition rounded-xl border border-background hover:border-blue-500 shadow-all shadow-blue-600">
        <Dropdown backdrop="blur" >
          <DropdownTrigger>
            <Button variant="flat" color="primary" isIconOnly className="dark:text-white"> <RxHamburgerMenu size={20}/> </Button>
          </DropdownTrigger>
          
          <DropdownMenu aria-label="Static Actions" >
            <DropdownSection title='Actions' showDivider >
              
              <DropdownItem onClick={ handleTheme }>Go {theme === 'light' ? 'Dark' : 'Light'}</DropdownItem>
            
            </DropdownSection>

            <DropdownSection title='Social Links'  >

              <DropdownItem>X</DropdownItem>
              <DropdownItem>Linkedin</DropdownItem>
              <DropdownItem>Email</DropdownItem>
            </DropdownSection>

          </DropdownMenu>
        
        </Dropdown>

      </div>

      <div className="flex items-center space-x-3 sm:space-x-10">
        <SocialLinks iconSize={21} showOnMobile={false}/>
      
      <Button 
        href="/guestbook" as={Link} 
        size="sm" 
        variant="solid" 
        color="primary"
        className="font-medium sm:py-3">
        <RiBookMarkLine size={21} /> sign my guestbook!
      </Button>

      </div>

    </section>
  )
}

export default Header;
