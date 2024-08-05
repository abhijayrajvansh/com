"use client";

import { siteConfig } from "@/config/site.config";

import { FaXTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

interface SocialLinksProps {
  iconSize: number;
  showOnMobile: boolean;
}

const SocialLinks = ({ iconSize, showOnMobile = false }: SocialLinksProps) => {
  return (
    <div className={`${!showOnMobile && "hidden"} flex space-x-5`}>
      <Link
        target="_blank"
        rel="noopener noreferer"
        color="foreground"
        href={siteConfig.links.twitter}
      >
        <FaXTwitter size={iconSize} className="hover:scale-125 transition" />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferer"
        color="foreground"
        href={siteConfig.links.github}
      >
        <FaGithub size={iconSize} className="hover:scale-125 transition" />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferer"
        color="foreground"
        href={siteConfig.links.linkedin}
      >
        <FaLinkedin size={iconSize} className="hover:scale-125 transition" />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferer"
        color="foreground"
        href={siteConfig.links.instagram}
      >
        <FaInstagram size={iconSize} className="hover:scale-125 transition" />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferer"
        color="foreground"
        href={siteConfig.links.youtube}
      >
        <FaYoutube
          size={iconSize}
          className="scale-125 hover:scale-150 transition"
        />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferer"
        color="foreground"
        href={siteConfig.links.email}
      >
        <MdEmail
          size={iconSize}
          className="scale-125 hover:scale-150 transition"
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
