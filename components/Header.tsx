import { Button } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import { Link } from "@nextui-org/react";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5 mb-5 pl-4">
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