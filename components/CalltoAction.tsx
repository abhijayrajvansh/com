import { siteConfig } from "@/config/site";
import Link from "next/link";



const CalltoAction = () => {
  return (
    <div className="text-color-text">
      For work enquiries you can{" "}
      <Link href={siteConfig.links.email} className="text-primary-500 font-medium hover:underline underline-offset-4">
        e-mail
      </Link>{" "}
      me or you can DM on{" "}
      <Link
        href={siteConfig.links.twitter}
        className="text-primary-500 text-xl font-bold hover:underline underline-offset-4"
      >
        𝕏
      </Link>{" "}
      , I&apos;m always interested in exploring potential opportunities and collaborations. 
      <br /> <br /> Looking forward to having a discussion with you.
    </div>
  )
}

export default CalltoAction;
