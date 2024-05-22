import GuestbookBtn from "./GuestbookBtn";
import { ModeToggle } from "./ModeToggle";

const Header = () => {

  return (
    <section className="flex items-center justify-between px-5 py-5 sm:pl-0 sm:ml-[110px] lg:ml-[230px]">
      <ModeToggle />
      <GuestbookBtn />
    </section>
  )
}

export default Header;
