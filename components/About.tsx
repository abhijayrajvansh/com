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
import Copyright from "./Copyright";

const About = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:my-10">
        <div className="contentWrapper">
          <Introduction />   
          <CalltoAction />
        </div>
        <section className="mb-24">
          <div className="my-10 md:hidden"></div>
          <TechnicalSkills />
          <Twitter />
          <Spotify />
          <SocialConnections />
          <ThanksNote />
          <Copyright />
        </section>
      </div>
    </section>
  );
};

export default About;
