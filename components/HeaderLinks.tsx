'use client';

import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const HeaderLinks = () => {
  const iconSize = 27;

  return (
    <div className="hidden sm:flex space-x-5">
      <Link isExternal color="foreground" href={siteConfig.links.twitter}><FaXTwitter  size={iconSize}  className="hover:scale-125 transition"/></Link>
      <Link isExternal color="foreground" href={siteConfig.links.github}><FaGithub  size={iconSize}  className="hover:scale-125 transition"/></Link>
      <Link isExternal color="foreground" href={siteConfig.links.linkedin}><FaLinkedin  size={iconSize}  className="hover:scale-125 transition"/></Link>
    </div>
  )
}

export default HeaderLinks;