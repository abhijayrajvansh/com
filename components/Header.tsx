import { Button } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import { Link } from "@nextui-org/react";

const Header = () => {
  return (
    <section className="flex items-center justify-between px-5 pt-5 sm:pl-0 pb-10 sm:ml-[110px] lg:ml-[230px]">
      
      <div className="hover:scale-125 transition pl-4">
        <ThemeSwitch />
      </div>

      <Button
        href="/contact"
        as={Link}
        color="primary"
        showAnchorIcon
        variant="shadow" >
        
        Contact
      </Button>
    </section>
  )
}

export default Header;