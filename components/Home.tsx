"use client";

import Header from "./Header";
import NavigationTab from "./NavigationTab";
import RecentProjects from "./RecentProjects";
import Bio from "@/components/Bio";
import FeaturedArticles from "./FeaturedArticles";
import Banner from "@/components/Banner";
import Newsletter from "./Newsletter";
import ThanksNote from "./ThanksNote";
import Twitter from "./Twitter";
import TechnicalSkills from "./TechnicalSkills";
import SocialConnections from "./SocialConnections";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <section className="wrapper">
        <Header />
        <NavigationTab />

        <div className="pageWrapper">
          <main className="contentWrapper">
            <Banner />

            <Bio />

            <FeaturedArticles />

            <Services />

            <RecentProjects />
          </main>

          <section>
            <div className="my-10 md:hidden"></div>
            <Newsletter />
            <SocialConnections />
            <TechnicalSkills />
            <Twitter />
            <ThanksNote />
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
