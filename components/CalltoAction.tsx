import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/react";


const CalltoAction = () => {
  return (
    <div className="text-color-text">
      For work enquiries you can{" "}
      <Link href={siteConfig.links.email} className="text-primary-500 font-medium hover:underline underline-offset-4">
        Email
      </Link>{" "}
      me or you can DM on{" "}
      <Link
        isExternal
        href={siteConfig.links.twitter}
        className="text-primary-500 text-xl font-bold hover:underline underline-offset-4"
      >
        𝕏
      </Link>{" "}
      , I&apos;m always interested in exploring potential opportunities and collaborations.
	  <br /> <br />
	  Looking forward to having a discussion with you.
    </div>
  )
}

export default CalltoAction;
