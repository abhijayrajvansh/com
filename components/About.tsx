"use client";

import Header from "./Header";
import NavigationTab from "./NavigationTab";
import CalltoAction from "./CalltoAction";
import TechnicalSkills from "./TechnicalSkills";
import ThanksNote from "./ThanksNote";
import Twitter from "./Twitter";
import Spotify from "./Spotify";
import DigitalHandSign from "./DigitalHandSign";
import SocialConnections from "./SocialConnections";
import { Link } from "@nextui-org/react";
import Newsletter from "./Newsletter";

const About = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />
      <div className="pageWrapper sm:my-10">
        <div className="contentWrapper">
          <h1 className="text-4xl font-bold mb-10 pink-text-bg-gradient w-fit ">
            Who, What & Why?
          </h1>

          <div className="mb-5">
            <video
              className="w-full sm:h-[282.326px] rounded"
              src="/videos/abhijayWalkingInCyberworld.mp4"
              autoPlay
              loop
              playsInline
              webkit-playsinline
            ></video>
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
              In today&apos;s rapidly evolving
              tech landscape, staying ahead is a big challenge. Product Hunt and
              HubSpot introduce new features every day, while AI is being
              incorporated into EVERYTHING. If you&apos;re staying the same,
              you&apos;re falling behind.

              <br />
              <br />

              That&apos;s where I come in. I love helping individuals transform
              their ideas into fully operational digital products. With my
              
              <span className="text-default-700 font-medium">
                {" "}
                4+ years of experience{" "}
              </span>
              
              in the industry both as a freelance software developer and as a technical consultant, 
              I provide actionable guidance, offer practical
              solutions and even bridge the gap for those who need non-tech
              support.
              
              <br />
              <br />
             
              For me,{" "}
              <span className="text-default-700 font-medium">
                software engineering is an art
              </span>{", "}

              just like painting was for Leonardo Da Vinci. 
              I focus research & developing{" "}
              <Link className="embeddedLinks text-primary-500" href="/projects">
                optimized solutions
              </Link>{" "}
              rather than just copying-pasting code. I&apos;m always curious
              about the{" "}
              <span className="text-default-700 font-medium">
                algorithms & UI/UX
              </span>{" "}
              and I also love educating fellow developers about technology and
              programming through writing{" "}
              <Link className="embeddedLinks text-primary-500" href="/blog">
                blogs
              </Link>{" "}
              in my free time.
              <br />
              <br />
              <span>
				When I&apos;m not coding, I spend my time trading, reading about
				finance & geopolitics, watching arthouse movies and I play chess.
			  </span>
            </p>

            <p className="text-default-700 font-medium">
              p.s. i&apos;m an artist who aims for his art to leave behind a
              lasting legacy!
            </p>
            <DigitalHandSign />
          </div>

          <div className="my-10">
            <h1 className="text-3xl font-semibold my-2 yellow-text-bg-gradient">
              Let&apos;s Connect!
            </h1>
            <CalltoAction />
            
          </div>
        </div>

        <section>
          {/* <Newsletter tilt="left" /> */}
          <TechnicalSkills />
          <Twitter tilt="left" />
          <Spotify tilt="right" />
          <SocialConnections tilt="left" />
          <ThanksNote tilt="right" />
        </section>
      </div>
    </section>
  );
};

export default About;
