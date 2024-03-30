"use client";

import Header from "./Header";
import NavigationTab from "./NavigationTab";
import CalltoAction from "./CalltoAction";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import Newsletter from "./Newsletter";
import TechnicalSkills from "./TechnicalSkills";
import ThanksNote from "./ThanksNote";
import Twitter from "./Twitter";
import Spotify from "./Spotify";

const About = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />
      <div className="pageWrapper sm:my-10">
        <div className="contentWrapper">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-10">
            Who, What & Why?
          </h1>

          <div className="mb-5">
            <Image
              width={0}
              height={0}
              className="w-full rounded-sm sm:rounded"
              src="/meWalkingInCyberworld.gif"
              alt="aboutSectionBanner"
            />
          </div>

          <div>
            <h2 className="mb-3 text-md">
              Let&apos;s start with
              <span className="text-xl text-default-700 font-semibold">
                {" "}
                &apos;Why?&apos;
              </span>
            </h2>

            <p className="text-color-text mb-3">
              Let me know if you can relate: In today&apos;s rapidly evolving
              tech landscape, staying current is a big challenge. Product Hunt
              and HubSpot introduce new features every day, while AI is being
              incorporated into EVERYTHING. If you&apos;re staying the same,
              you&apos;re falling behind.
              <br />
              <br />
              That&apos;s where I come in. I love helping individuals transform
              their concepts into fully operational digital products. With
              almost
              <span className="text-default-700 font-medium">
                {" "}
                4+ years of experience{" "}
              </span>
              in software development both as a consultant and as a full-time
              developer. I provide actionable guidance, offer practical
              solutions, or even facilitate connections bridging the gap for
              those needing expertise beyond my own in areas like non-tech
              support.
              <br />
              <br />
              For me{" "}
              <span className="text-default-700 font-medium">
                Software Engineering is an ART
              </span>{" "}
              just like painting was for Leonardo Da Vinci. I&apos;m also a big
              fan of open source software - which is why almost everything I
              build is open source! I also love educating others about
              technology and programming, which is why I&apos;m a content
              creator and write blogs in my free time.
              <br />
              <br />
              But wait, there's more to me than just lines of code. Here's a
              glimpse into my off-duty persona: I proudly embrace the title of a{" "}
              <span className="text-default-700 font-medium">
                perpetual learner.
              </span>{" "}
              Admittedly, I know nothing - but I'm an exceptional student,
              eagerly absorbing every lesson that comes my way. Because in this
              ever-evolving landscape, the true art lies in the journey of
              discovery.
            </p>

            <p className="text-default-700 font-medium">
              P.S. I&apos;m an artist who aims for his art to leave behind a
              lasting legacy!
            </p>
          </div>

          <div className="my-10">
            <h1 className="text-3xl font-semibold my-2">Let&apos;s Connect!</h1>
            <CalltoAction />
          </div>

          <div className="my-10">
            <h1 className="text-2xl font-semibold my-2">
              Find me on these platforms:
            </h1>
            <SocialLinks />
          </div>
        </div>

        <section>
          {/* <Newsletter tilt="left" /> */}
          <TechnicalSkills />
          <Twitter tilt="left" />
          <Spotify tilt="right" />
          <ThanksNote tilt="left" />
      </section>
      </div>
    </section>
  );
};

export default About;
