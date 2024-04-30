'use client';

import SocialLinks from "./SocialLinks";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { RiBookMarkLine } from "react-icons/ri";
import QuickLinks from "./QuickLinks";

const Header = () => {

  return (
    <section className="flex items-center justify-between px-5 py-5 sm:pl-0 sm:ml-[110px] lg:ml-[230px]">
      
      <QuickLinks />      

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
