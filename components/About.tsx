"use client";

import Header from "./Header";
import NavigationTab from "./NavigationTab";
import TechnicalSkills from "./TechnicalSkills";
import ThanksNote from "./ThanksNote";
import Twitter from "./Twitter";
import SocialConnections from "./SocialConnections";
import Introduction from "./Introduction";
import Spotify from "./Spotify";
import CalltoAction from "./CalltoAction";
import Timeline from "./Timeline";

const About = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:my-10">
        <div className="contentWrapper">
          <Introduction />
          <h1 className="text-3xl font-semibold mt-12 mb-7 yellow-text-bg-gradient">
            Professional Experience
          </h1>
          <Timeline />
          <CalltoAction />
        </div>
        <section>
          <div className="my-10 md:hidden"></div>
          <TechnicalSkills />
          <Twitter />
          <Spotify />
          <SocialConnections />
          <ThanksNote />
        </section>
      </div>
    </section>
  );
};

export default About;
