import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { siteConfig } from '@/config/site'
import { IoLogoYoutube } from "react-icons/io";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5">
      <Button href={`${siteConfig.links.github}`} isExternal as={Link} isIconOnly size="lg" className="text-4xl" variant="light"><FaGithub /></Button>

      <Button href={`${siteConfig.links.linkedin}`} isExternal as={Link} isIconOnly size="lg" className="hover:text-primary-500 text-4xl" variant="light"><FaLinkedin /></Button>

      <Button href={`${siteConfig.links.twitter}`} isExternal as={Link} isIconOnly size="lg" className=" text-4xl" variant="light"><FaXTwitter /></Button>

      <Button href={`${siteConfig.links.youtube}`} isExternal as={Link} isIconOnly size="lg" className="hover:text-red-500 text-4xl" variant="light"><IoLogoYoutube /></Button>

      <Button href={`${siteConfig.links.email}`} isExternal as={Link} isIconOnly size="lg" className="hover:text-purple-500 text-4xl" variant="light"><MdOutlineAttachEmail /></Button>
    </div>
  )
}

export default SocialLinks;