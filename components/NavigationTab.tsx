'use client';

import { PiHouse, PiSuitcase } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { CiUser } from "react-icons/ci";
import { MdOutlineArticle } from "react-icons/md";
import { PiHandshakeDuotone } from "react-icons/pi";
import Image from "next/image";

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
    pageTitle: 'Experience',
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
    <header className="z-20 backdrop-blur-[5px] bg-background bg-opacity-60 fixed max-w-screen-xl w-full bottom-0 sm:w-fit sm:px-2 lg:px-6 sm:top-0 sm:pt-0 sm:border-r border-default/50 sm:font-light"> 
      
    <div className="flex items-center justify-evenly w-full sm:block sm:pt-5 sm:mt-2">

      <Link href={'/'} className="hidden sm:flex mb-5 justify-center">
        <div className="flex items-center gap-3">
          <Image height={40} width={40} className="h-[40px] rounded-xl border-2 border-default-200" src={siteConfig.avatar.src} alt="abhijay-rajvansh-pfp" />
          <div className="hidden lg:block text-[11px]">
            <p className="text-primary-600 font-medium text-xs">Abhijay Rajvansh</p>
            <p className="font-normal text-[10px]">Software Engineer</p>
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
                href={`/${item.pageTitle === 'Home' ? '': item.pageTitle.toLowerCase()}`} className={`flex items-center cursor-pointer text-3xl sm:text-sm`}>
                  
                <nav className={`sm:flex sm:items-center sm:space-x-3 px-2 sm:ml-2 py-4 rounded-xl sm:mt-3 sm:hover:bg-primary/30 transition duration-1000 sm:py-2 sm:px-4 sm:hover:shadow-xl hover:scale-125 sm:hover:scale-100 font-medium ${isActive && 'sm:bg-primary/30 sm:shadow-lg text-primary-500 sm:text-primary-700'}`}>
                
                  <item.pageIcon className="sm:text-3xl transition" />
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