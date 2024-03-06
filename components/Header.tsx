import { Button } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <ThemeSwitch className=""/>
      </div>
      <Button color="primary">contact</Button>
    </div>
  )
}

export default Header;