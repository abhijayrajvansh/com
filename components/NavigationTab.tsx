// navigation tab import
import { PiHouse, PiInfo, PiSuitcase } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { TbMailPin } from "react-icons/tb";
import Link from "next/link";

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
    pageTitle: 'Contact',
    pageIcon: TbMailPin
  },
]

const NavigationTab = () => {
  return (
    <section className="w-full flex  sm:items-end sm:top-[90px] fixed bottom-0 left-0 max-w-[435px] sm:flex-col z-10  backdrop-blur-[5px] sm:backdrop-blur-[0px] bg-background bg-opacity-60 sm:bg-opacity-0 sm:max-w-fit sm:pl-[100px]">
      
      <div className="flex items-center justify-between w-full sm:block">
        {
          NAVIGATION_DATA.map(item => (

            <Link key={item.pageTitle} 
            href={`/${item.pageTitle === 'Home' ? '': item.pageTitle.toLowerCase()}`} className="flex items-center cursor-pointer text-3xl sm:text-xl">
              
              <div className="sm:flex sm:items-center sm:space-x-3 px-4 py-4 rounded-xl sm:mt-3 sm:hover:bg-primary-100 transition">
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