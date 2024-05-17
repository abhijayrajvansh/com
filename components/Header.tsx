import GuestbookBtn from "./GuestbookBtn";
import QuickLinks from "./QuickLinks";

const Header = () => {

  return (
    <section className="flex items-center justify-between px-5 py-5 sm:pl-0 sm:ml-[110px] lg:ml-[230px]">
      
      <QuickLinks />
      <GuestbookBtn />
    
    </section>
  )
}

export default Header;
