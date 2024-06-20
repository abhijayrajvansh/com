"use client";

import { PiHouse } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FiUser } from "react-icons/fi";
import { RiArticleLine } from "react-icons/ri";
import { BiBookHeart } from "react-icons/bi";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import AvatarAndLocation from "./AvatarAndLocation";

const NAVIGATION_DATA = [
  {
    pageTitle: "Home",
    pageIcon: PiHouse,
  },
  {
    pageTitle: "About",
    pageIcon: FiUser,
  },
  {
    pageTitle: "Blog",
    pageIcon: RiArticleLine,
  },
  {
    pageTitle: "Projects",
    pageIcon: FaReact,
  },
  {
    pageTitle: "Experience",
    pageIcon: PiSuitcaseSimpleDuotone,
  },
  {
    pageTitle: "Guestbook",
    pageIcon: BiBookHeart,
  },
];

const NavigationTab = () => {
  const pathname = usePathname();

  return (
    <header className="dark:bg-background/50 bg-white/50 z-20 backdrop-blur-[5px] fixed max-w-screen-xl w-full bottom-0 sm:w-fit sm:px-2 lg:pr-4 sm:top-0 sm:pt-0 sm:border-r border-border sm:font-light">
      <div className="flex items-center justify-evenly w-full sm:block sm:pt-5 sm:mt-2">
        
        <AvatarAndLocation />

        {NAVIGATION_DATA.map((item) => {
          let currentPathname = "/" + item.pageTitle.toLowerCase();
          if (currentPathname === "/home") {
            currentPathname = "/";
          }
          const isActive = pathname === currentPathname;

          return (
            <Link
              key={item.pageTitle}
              href={`/${
                item.pageTitle === "Home" ? "" : item.pageTitle.toLowerCase()
              }`}
              className={`flex items-center text-color-text font-medium cursor-pointer sm:text-sm hover:text-primary-700`}
            >
              <nav
                className={`sm:flex sm:items-center sm:space-x-3 px-2 sm:ml-2 py-4 rounded-xl sm:mt-3 sm:hover:dark:bg-[#1238769d] hover:sm:bg-[#B1D4FC] hover:sm:dark:text-blue-300 hover:sm:text-blue-700 sm:py-2 sm:px-4 sm:hover:shadow-sm hover:scale-125 sm:hover:scale-100 transition md:transition-none ${
                  isActive &&
                  "text-blue-400 sm:dark:text-blue-300 sm:text-blue-700 scale-125 sm:scale-100 sm:shadow-sm sm:dark:bg-[#123976] sm:bg-[#B1D4FC]"
                }`}
              >
                <item.pageIcon className="text-[28px] sm:text-2xl" />
                <div className="hidden xl:block">{item.pageTitle}</div>
              </nav>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default NavigationTab;
