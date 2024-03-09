// navigation tab import
import { PiHouse, PiInfo, PiSuitcase } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { PiHandshakeDuotone } from "react-icons/pi";
import Link from "next/link";
import { siteConfig } from "@/config/site";

// navigation tab routes
const NAVIGATION_DATA = [
  {
    pageTitle: 'Home',
    pageIcon: PiHouse
  },
  {
    pageTitle: 'About',
    pageIcon: PiInfo
  },
  {
    pageTitle: 'Experience',
    pageIcon: PiSuitcase
  },
  {
    pageTitle: 'Projects',
    pageIcon: FaReact
  },
  {
    pageTitle: 'Contacts',
    pageIcon: PiHandshakeDuotone
  },
]

const NavigationTab = () => {
  return (
    <section className="z-10 backdrop-blur-[5px] bg-background bg-opacity-60 fixed max-w-screen-xl w-full bottom-0 sm:w-fit sm:pl-4 sm:pr-3 sm:top-0 sm:pt-0 sm:border-r border-default-200 sm:font-light "> 
      
    <div className="flex items-center justify-between w-full sm:block sm:pt-5">

      {/* portfolio avatar */}
      <Link href={'/'} className="hidden sm:block mb-8">
        <img className="h-10 mx-3 rounded-xl border-2 border-default-200" src={siteConfig.avatar.src} alt="abhijay-rajvansh-pfp" />
      </Link>
        
        
        {/* navigation options starts here */}
        {
          NAVIGATION_DATA.map(item => (

            <Link key={item.pageTitle} 
            href={`/${item.pageTitle === 'Home' ? '': item.pageTitle.toLowerCase()}`} className="flex items-center cursor-pointer text-3xl sm:text-base">
              
              <div className="sm:flex sm:items-center sm:space-x-3 px-4 py-4 rounded-xl sm:mt-3 sm:hover:bg-primary/40 transition sm:py-2 sm:hover:shadow-xl">
                <item.pageIcon className="sm:text-3xl" />
                <div className="hidden lg:block">{item.pageTitle}</div>
              </div>

            </Link>
          ))
        }
      </div>

    </section>
  )
}

export default NavigationTab;