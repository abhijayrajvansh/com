// navigation tab import
import { PiHouse, PiInfo, PiSuitcase } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { TbMailPin } from "react-icons/tb";
import { Button, Link } from "@nextui-org/react";

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
    <section className="w-full flex items-center justify-between fixed bottom-0 left-0 max-w-[435px] backdrop-blur-[5px] sm:flex-col sm:h-full sm:max-w-fit z-10">
      
      {
        NAVIGATION_DATA.map(item => (
          <Link key={item.pageTitle} href={`/${item.pageTitle === 'Home' ? '': item.pageTitle.toLowerCase()}`} className="px-3 py-4 flex items-center cursor-pointer text-4xl">
            
            <Button isIconOnly size="md" className="text-4xl" variant="light">
              <item.pageIcon />
              <div className="hidden">{item.pageTitle}</div>
            </Button>

          </Link>
        ))
      }

    </section>
  )
}

export default NavigationTab;