import { Button } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import { Link } from "@nextui-org/react";
import { RiBookMarkLine } from "react-icons/ri";

const Header = () => {
  return (
    <section className="flex items-center justify-between px-5 pt-5 sm:pl-0 pb-10 sm:ml-[110px] lg:ml-[230px]">
      
      <div className="hover:scale-125 transition px-4 rounded-xl">
        <ThemeSwitch />
      </div>

      <div className="flex items-center space-x-2">
        <Button className="text-xs bg-primary-400 hover:bg-primary-300 font-medium text-white"
          href="/contact"
          as={Link}
          size="sm"
          variant="solid" >
          <RiBookMarkLine size={21}/>Sign my guestbook!
        </Button>

        <Button href="/contact" as={Link} size="sm" variant="shadow" color="warning"
          className="text-xs font-medium text-white">Contact</Button>
      </div>

    </section>
  )
}

export default Header;