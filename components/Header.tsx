import { Button } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <ThemeSwitch />
      </div>
      <Button color="primary">contact</Button>
    </div>
  )
}

export default Header;