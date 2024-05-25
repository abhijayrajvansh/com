import GuestbookBtn from "./GuestbookBtn";
import { ModeToggle } from "./ModeToggle";

const Header = () => {

  return (
    <section className="flex items-center justify-between py-5 px-4 xl:px-0 sm:pl-0 sm:ml-[110px] xl:ml-[230px] max-w-[1030px]">
      <ModeToggle />
      <GuestbookBtn />
    </section>
  )
}

export default Header;
