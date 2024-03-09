import { Button } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import { Link } from "@nextui-org/react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-5 pl-4 pb-10 sm:ml-[110px] lg:ml-[230px]">
      
      <div>
        <ThemeSwitch />
      </div>

      <Button
        href="/contact"
        as={Link}
        color="primary"
        showAnchorIcon
        variant="shadow"
      >
        Contact
    </Button>
    </header>
  )
}

export default Header;