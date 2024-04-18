'use client';

import { PiHouse, PiSuitcase } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { FiUser } from "react-icons/fi";
import { MdOutlineArticle } from "react-icons/md";
import { RiBookMarkLine } from "react-icons/ri";
import Image from "next/image";

// navigation tab routes
const NAVIGATION_DATA = [
  {
    pageTitle: 'Home',
    pageIcon: PiHouse
  },
  {
    pageTitle: 'About',
    pageIcon: FiUser
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
    pageTitle: 'Guestbook',
    pageIcon: RiBookMarkLine
  },
]

const NavigationTab = () => {

  const pathname = usePathname();

  return (
    <header className="z-20 backdrop-blur-[5px] bg-background bg-opacity-60 fixed max-w-screen-xl w-full bottom-0 sm:w-fit sm:px-2 lg:pr-4 sm:top-0 sm:pt-0 sm:border-r border-default/50 sm:font-light"> 
      
    <div className="flex items-center justify-evenly w-full sm:block sm:pt-5 sm:mt-2">

      <Link href={'/'} className="hidden sm:flex mb-5 justify-center">
        <div className="flex items-center gap-3">
          
          <Image width={40} height={40}
            className="h-10 w-10 rounded-xl border-2 border-default-200" 
            src={siteConfig.avatar.src} 
            alt="abhijay-rajvansh-pfp" 
          />
          
          <div className="hidden lg:block text-[11px]">
            <p className="text-primary-600 font-medium text-sm">Abhijay Rajvansh</p>
            <p className="font-normal text-xs">Software Engineer</p>
          </div>
        </div>
      </Link>
        

        {
          NAVIGATION_DATA.map(item => {

            let currentPathname = '/' + item.pageTitle.toLowerCase();
            if (currentPathname === '/home') { currentPathname = '/'; }
            const isActive = pathname === currentPathname;
            
            
            return (
              <Link 
                key={item.pageTitle}
                href={`/${item.pageTitle === 'Home' ? '': item.pageTitle.toLowerCase()}`} 
				className={`flex items-center text-color-text font-medium cursor-pointer sm:text-sm hover:text-primary-700`}>
                  
                <nav className={`sm:flex sm:items-center sm:space-x-3 px-2 sm:ml-2 py-4 rounded-xl sm:mt-3 transition sm:hover:bg-primary-300/50 sm:py-2 sm:px-4 sm:hover:shadow-sm hover:scale-125 sm:hover:scale-105 ${isActive && 'text-primary-500 sm:text-primary-700 scale-125 sm:scale-100 sm:shadow-sm sm:bg-primary-300/50'}`}>
                
                  <item.pageIcon className="text-[28px] sm:text-2xl transition" />
                  <div className="hidden lg:block">{item.pageTitle}</div>
                </nav>

              </Link>
            )

          })
        }
      </div>

    </header>
  )
}

export default NavigationTab;
