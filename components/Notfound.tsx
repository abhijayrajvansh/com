import Link from "next/link";
import Header from "./Header";
import NavigationTab from "./NavigationTab";
import { siteConfig } from "@/config/site";

const Notfound = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />
      <div className="pageWrapper">
        <main className="contentWrapper">
          <div className="flex flex-col items-start justify-center sm:pt-20">
            <p className="py-1 sm:text-xl font-light">
              hey, looks like this page doesn&apos;t exist...
            </p>
            <p className="py-1 sm:text-xl font-light">
              think it&apos;s a mistake? tell me via{" "}
              <Link
                className="primary-text hover:underline underline-offset-4"
                href={siteConfig.links.email}
              >
                email
              </Link>{" "}
              or DM on{" "}
              <Link
                target="_blank"
                rel="noopener noreferer"
                className="primary-text hover:underline underline-offset-4"
                href={siteConfig.links.twitter}
              >
                𝕏.
              </Link>
            </p>
            <br />
            <div className="font-light">
              <p className="sm:text-lg">regards</p>
              <p className="sm:text-lg">abhijay</p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Notfound;
