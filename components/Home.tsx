"use client";

import Header from "./Header";
import NavigationTab from "./NavigationTab";
import RecentProjects from "./RecentProjects";
import ShortIntro from "@/components/ShortIntro";
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

            <ShortIntro />

            <FeaturedArticles />

            <Services />

            <RecentProjects />
          </main>

          <section>
            <Newsletter tilt="left" />

            <SocialConnections tilt="right" />

            <TechnicalSkills />

            <Twitter tilt="right" />

            <ThanksNote tilt="left" />
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
