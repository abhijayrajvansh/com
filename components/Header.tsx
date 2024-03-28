import { Button } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import { Link } from "@nextui-org/react";
import { PiHandshakeDuotone } from "react-icons/pi";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <section className="flex items-center justify-between px-5 py-5 sm:pl-0 sm:ml-[110px] lg:ml-[230px]">
      
      <div className="hover:scale-125 transition px-4 rounded-xl">
        <ThemeSwitch />
      </div>

      

      <div className="flex items-center space-x-10">
        <HeaderLinks />
        <Button 
          href="/contact" 
          as={Link} size="sm" 
          variant="shadow" 
          color="warning"
          className="text-white font-medium text-sm sm:py-5">
          <PiHandshakeDuotone size={25} />
          Contact me
        </Button>
      </div>

    </section>
  )
}

export default Header;