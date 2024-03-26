import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/react";


const CalltoAction = () => {
  return (
    <p className="text-color-text">
      Shoot me an{" "}
      <Link href={siteConfig.links.email} className="text-primary-500">
        email
      </Link>{" "}
      or you can DM me on{" "}
      <Link
        isExternal
        href={siteConfig.links.twitter}
        className="text-primary-500 text-2xl font-bold"
      >
        𝕏
      </Link>{" "}
      , I&apos;m always motivated & interested in
      exploring potential opportunities, having discussions with you, and
      potentially collaborating if it aligns well.
    </p>
  )
}

export default CalltoAction;