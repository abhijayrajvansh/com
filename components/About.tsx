"use client";

import Header from "./Header";
import NavigationTab from "./NavigationTab";
import TechnicalSkills from "./TechnicalSkills";
import ThanksNote from "./ThanksNote";
import Twitter from "./Twitter";
import SocialConnections from "./SocialConnections";
import Introduction from "./Introduction";
import Awwwards from "./Awwwards";

const About = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:my-10">
        <div className="contentWrapper">

          <Introduction />

          {/* <Awwwards /> */}

        </div>
        <section>
          <div className="my-10 md:hidden"></div>
          {/* <Newsletter /> */}
          <TechnicalSkills />
          <Twitter />
          <SocialConnections />
          <ThanksNote />
        </section>
      </div>
    </section>
  );
};

export default About;
