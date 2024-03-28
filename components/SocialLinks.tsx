import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { FaXTwitter, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
import { siteConfig } from '@/config/site'

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5 mb-5">
      <Button href={`${siteConfig.links.github}`} isExternal as={Link} isIconOnly size="lg" className="hover:scale-125 text-4xl" variant="light"><FaGithub /></Button>

      <Button href={`${siteConfig.links.linkedin}`} isExternal as={Link} isIconOnly size="lg" className="hover:scale-125 text-4xl" variant="light"><FaLinkedin /></Button>

      <Button href={`${siteConfig.links.twitter}`} isExternal as={Link} isIconOnly size="lg" className="hover:scale-125 text-4xl" variant="light"><FaXTwitter /></Button>

      <Button href={`${siteConfig.links.youtube}`} isExternal as={Link} isIconOnly size="lg" className="hover:scale-125 text-4xl" variant="light"><IoLogoYoutube /></Button>

      <Button href={`${siteConfig.links.medium}`} isExternal as={Link} isIconOnly size="lg" className="hover:scale-125 text-4xl" variant="light"><FaMedium /></Button>

      <Button href={`${siteConfig.links.email}`} isExternal as={Link} isIconOnly size="lg" className="hover:scale-125 text-4xl" variant="light"><MdOutlineAttachEmail /></Button>
    </div>
  )
}

export default SocialLinks;