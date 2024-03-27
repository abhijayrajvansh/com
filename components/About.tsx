'use client'

import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";
import { Tooltip } from "@nextui-org/react";
import CalltoAction from "./CalltoAction";
import SocialLinks from "./SocialLinks";
import { useState, useEffect } from "react";

const About = () => {
  const [isLoaded, setIsLoaded  ] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if(! isLoaded) return null;

  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:my-10">
        <div className="contentWrapper">
          <h1 className="text-5xl font-semibold mb-10">Who, What & Why?</h1>

          <Tooltip showArrow content="one can envision me like this, lol :P" placement="top-end" color="secondary">
            <video src="/abhijayatwork.mp4" autoPlay muted loop className="w-full rounded-xl mb-5 h-[250px] sm:h-[450px] border-2 border-default-200 object-center object-cover "></video>   
          </Tooltip>

          <p className="mb-3 text-md">
            Let&apos;s start with
            <span className="text-xl font-semibold"> &apos;Why?&apos;</span>
          </p>
          <p className="text-color-text mb-3">
            Let me know if you can relate: In today&apos;s rapidly evolving tech
            landscape, staying current is a big challenge. Product Hunt and
            HubSpot introduce new features every day, while AI is being
            incorporated into EVERYTHING. If you&apos;re staying the same,
            you&apos;re falling behind.
            <br />
            <br />
            That&apos;s where I come in. I love helping individuals transform
            their concepts into fully operational digital products. With almost
            <span className="text-pink"> 4+ years of experience </span>in
            software development both as a consultant and as a full-time
            developer. I provide actionable guidance, offer practical solutions,
            or even facilitate connections bridging the gap for those needing
            expertise beyond my own in areas like non-tech support.
            <br />
            <br />
            For me <span className="text-default-900 font-medium">Software Engineering is an ART</span> just like
            painting was for Leonardo Da Vinci. I&apos;m also a big fan of open
            source software - which is why almost everything I build is open
            source! I also love educating others about technology and
            programming, which is why I&apos;m a content creator and write blogs
            in my free time.
          </p>
          <p className="text-default-700 font-medium">
            P.S. I&apos;m an artist who aims for his art to leave behind a
            lasting legacy!
          </p>

          <h1 className="text-3xl font-semibold mt-10 my-2">Let&apos;s Connect!</h1>

          <CalltoAction />

          <p className="my-10 text-2xl font-semibold">Find me on these platforms:
            <div className="my-3"></div>
            <SocialLinks />
          </p>

          

          {/* piyush garg example: My name is Piyush Garg and I am 24 Years old developer. I have developed many websites, Worked on JavaScript frameworks like react and angular, Php login authentication system and session handling worked on Android apps, Basic IOS apps, Database management with MySql and Firebase, Python programing with the automation of software and much more. recently I have completed my journey as a MERN stack developer and undertraining flutter developer. */}
        </div>

        <Subscription />
      </div>
    </section>
  );
};

export default About;
