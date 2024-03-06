import { Button } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div>
        <ThemeSwitch className=""/>
      </div>
      <Link href={'/contact'} >
        <Button color="primary">contact</Button>
      </Link>
    </header>
  )
}

export default Header;