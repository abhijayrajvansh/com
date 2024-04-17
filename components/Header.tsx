import { Button } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import { Link } from "@nextui-org/react";
import { PiHandshakeDuotone } from "react-icons/pi";
import SocialLinks from "./SocialLinks";
import { RiBookMarkLine } from "react-icons/ri";

const Header = () => {
  return (
    <section className="flex items-center justify-between px-5 py-5 sm:pl-0 sm:ml-[110px] lg:ml-[230px]">
      
      <div className="hover:scale-110 transition px-4 rounded-xl">
        <ThemeSwitch />
      </div>

      

      <div className="flex items-center space-x-3 sm:space-x-10">
        <SocialLinks iconSize={21} showOnMobile={false}/>
        <Button 
          href="/guestbook" as={Link} 
          size="sm" 
          variant="solid" 
          color="primary"
          className="font-medium sm:py-3">
          <RiBookMarkLine size={21} />
		  sign my guestbook!
        </Button>
      </div>

    </section>
  )
}

export default Header;
