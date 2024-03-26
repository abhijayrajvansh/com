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

      <Button className="text-xs sm:text-sm bg-primary-400 hover:bg-primary-300 font-medium text-white"
        href="/guestbook"
        as={Link}
        size="sm"
        variant="shadow" >
        <RiBookMarkLine size={21}/>Sign my guestbook!
      </Button>
    </section>
  )
}

export default Header;