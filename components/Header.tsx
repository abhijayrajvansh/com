'use client';

import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { RiBookmarkLine } from "react-icons/ri";
import QuickLinks from "./QuickLinks";

const Header = () => {

  return (
    <section className="flex items-center justify-between px-5 py-5 sm:pl-0 sm:ml-[110px] lg:ml-[230px]">
      
      <QuickLinks />      
      
        <Button 
          href="/guestbook" as={Link} 
          size="sm" 
          variant="solid" 
          color="primary"
          className="font-medium sm:py-3">
          <RiBookmarkLine size={21} /> sign my guestbook!
        </Button>
      
    </section>
  )
}

export default Header;
