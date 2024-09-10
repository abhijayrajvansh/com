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
import Copyright from "./Copyright";

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

          <section className="mb-24">
            <div className="my-10 md:hidden"></div>
            <SocialConnections />
            <TechnicalSkills />
            <Spotify />
            <Twitter />
            <ThanksNote />
            <Copyright />
          </section>

        </div>
      </section>
    </>
  );
};

export default Home;
