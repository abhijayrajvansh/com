import Link from "next/link";
import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Spotify from "./Spotify";
import SocialConnections from "./SocialConnections";
import ThanksNote from "./ThanksNote";
import { siteConfig } from "@/config/site.config";

const Notfound = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />
      <div className="pageWrapper">
        <main className="contentWrapper">
          <div className="flex flex-col text-base font-light items-start justify-center sm:pt-20">
            <p className="text-5xl font-bold">404 error</p>
            <p className="mt-5">
              hey, looks like this page doesn&apos;t exist...
            </p>
            <p className="mt-2">
              believe it&apos;s a mistake or a bug? you can cantact me via{" "}
              <Link
                className="primary-text hover:underline underline-offset-4"
                href={siteConfig.links.email}
              >
                email
              </Link>{" "}
              or dm on{" "}
              <Link
                target="_blank"
                rel="noopener noreferer"
                className="primary-text hover:underline underline-offset-4"
                href={siteConfig.links.twitter}
              >
                𝕏 (twitter).
              </Link>
            </p>
            <p className="mt-3">regards</p>
            <p>abhijay ;)</p>
          </div>
        </main>
        <section>
          <div className="my-10 md:hidden"></div>
          <SocialConnections />
          <Spotify />
          <ThanksNote />
        </section>
      </div>
    </section>
  );
};

export default Notfound;
