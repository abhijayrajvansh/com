'use client';

import { PiHouse, PiSuitcase } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { PiHandshakeDuotone } from "react-icons/pi";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { CiUser } from "react-icons/ci";
import { MdOutlineArticle } from "react-icons/md";

// navigation tab routes
const NAVIGATION_DATA = [
  {
    pageTitle: 'Home',
    pageIcon: PiHouse
  },
  {
    pageTitle: 'About',
    pageIcon: CiUser
  },
  {
    pageTitle: 'Blog',
    pageIcon: MdOutlineArticle
  },
  {
    pageTitle: 'Projects',
    pageIcon: FaReact
  },
  {
    pageTitle: 'Resume',
    pageIcon: PiSuitcase
  },
  {
    pageTitle: 'Contact',
    pageIcon: PiHandshakeDuotone
  },
]

const NavigationTab = () => {

  const pathname = usePathname();

  return (
    <section className="z-10 backdrop-blur-[5px] bg-background bg-opacity-60 fixed max-w-screen-xl w-full bottom-0 sm:w-fit sm:pl-2 sm:pr-4 sm:top-0 sm:pt-0 sm:border-r border-default-200 sm:font-light"> 
      
    <div className="flex items-center justify-between w-full sm:block sm:pt-5 sm:mt-2">

      {/* portfolio avatar */}
      <Link href={'/'} className="hidden sm:flex mb-5">
        <div className="flex items-center">
          <img className="h-10 mx-3 rounded-xl border-2 border-default-200" src={siteConfig.avatar.src} alt="abhijay-rajvansh-pfp" />
          <div className="hidden lg:block text-[11px]">
            <p className="text-primary-600 font-medium text-[12px]">Abhijay Rajvansh</p>
            <p>Software Engineer</p>
          </div>
        </div>
      </Link>
        

        {/* navigation options starts here */}
        {
          NAVIGATION_DATA.map(item => {

            let currentPathname = '/' + item.pageTitle.toLowerCase();
            if (currentPathname === '/home') { currentPathname = '/'; }
            const isActive = pathname === currentPathname;

            // on click icon scale up try ?
            // to fix pfp icon, continent change fetch api failed
            
            return (
              <Link 
                key={item.pageTitle}
                href={`/${item.pageTitle === 'Home' ? '': item.pageTitle.toLowerCase()}`} className={`flex items-center cursor-pointer text-3xl sm:text-sm`}>
                  
                <div className={`sm:flex sm:items-center sm:space-x-3 px-4 sm:ml-2 py-4 rounded-xl sm:mt-3 sm:hover:bg-primary/30 transition duration-0 sm:py-2 sm:hover:shadow-xl hover:scale-125 sm:hover:scale-110 ${isActive && 'sm:bg-primary/30 sm:shadow-lg font-medium text-primary-500 sm:text-primary-700'}`}>
                
                  <item.pageIcon className="sm:text-3xl transition" />
                  <div className="hidden lg:block">{item.pageTitle}</div>
                </div>

              </Link>
            )

          })
        }
      </div>

    </section>
  )
}

export default NavigationTab;