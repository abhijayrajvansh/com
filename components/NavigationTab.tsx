// navigation tab import
import Link from "next/link";
import { PiHouse, PiInfo, PiSuitcase } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { TbMailPin } from "react-icons/tb";

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
    <section className="w-full flex items-center justify-between fixed bottom-0 left-0 max-w-[435px] backdrop-blur-[5px] sm:flex-col sm:h-full sm:max-w-fit">
      
      {
        NAVIGATION_DATA.map(item => (
          <Link key={item.pageTitle} href={`/${item.pageTitle === 'Home' ? '': item.pageTitle.toLowerCase()}`} className="p-4 flex items-center gap-2 cursor-pointer text-3xl">
            
            <item.pageIcon />

            <div className="hidden">{item.pageTitle}</div>
          </Link>
        ))
      }

    </section>
  )
}

export default NavigationTab;