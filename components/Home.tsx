"use client";

import Header from "./Header";
import NavigationTab from "./NavigationTab";
import PopularProjects from "./PopularProjects";
import Bio from "@/components/Bio";
import FeaturedArticles from "./FeaturedArticles";
import Banner from "@/components/Banner";
import ThanksNote from "./ThanksNote";
import Twitter from "./Twitter";
import TechnicalSkills from "./TechnicalSkills";
import SocialConnections from "./SocialConnections";
import Spotify from "./Spotify";
import DeveloperStats from "./DeveloperStats";

const Home = () => {
  return (
    <>
      <section className="wrapper">
        <NavigationTab />
        <Header />

        <div className="pageWrapper">
          <main className="contentWrapper">
            <Banner />
            <Bio />
            <DeveloperStats />
            <FeaturedArticles />
            <PopularProjects />
          </main>

          <section>
            <div className="my-10 md:hidden"></div>
            <SocialConnections />
            <TechnicalSkills />
            <Twitter />
            <Spotify />
            <ThanksNote />
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
