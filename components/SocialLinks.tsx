import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { siteConfig } from '@/config/site'

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <Link href={`${siteConfig.links.github}`}><Button isIconOnly size="lg" className="text-4xl" variant="light"><FaGithub /></Button></Link>

      <Link href={`${siteConfig.links.linkedin}`}><Button isIconOnly size="lg" className="text-4xl" variant="light"><FaLinkedin /></Button></Link>

      <Link href={`${siteConfig.links.twitter}`}><Button isIconOnly size="lg" className="text-4xl" variant="light"><FaXTwitter /></Button></Link>

      <Link href={`${siteConfig.links.email}`}><Button isIconOnly size="lg" className="text-4xl" variant="light"><MdOutlineAttachEmail /></Button></Link>
    </div>
  )
}

export default SocialLinks;