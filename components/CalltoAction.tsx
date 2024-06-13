import { siteConfig } from "@/config/site.config";
import Link from "next/link";

const CalltoAction = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold my-2 blue-text-bg-gradient">
        Let&apos;s Connect!
      </h1>
      <div className="text-color-text font-light">
        For work enquiries you can contact me via{" "}
        <Link
          href={siteConfig.links.email}
          className="primary-text font-medium hover:underline underline-offset-4"
        >
          e-mail
        </Link>{" "}
        or DM on{" "}
        <Link
          href={siteConfig.links.twitter}
          className="primary-text font-medium hover:underline underline-offset-4"
        >
          𝕏 (twitter)
        </Link>{" "}
        , I&apos;m always interested in exploring potential opportunities and
        collaborations.
        <br /> <br /> Looking forward to having a discussion with you.
      </div>
    </div>
  );
};

export default CalltoAction;
