import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

const About = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">
        <main className="contentWrapper">
          <h1 className="text-5xl font-semibold mb-10">Who, What & Why?</h1>

          <Tooltip showArrow content="one envision me like this ;P" placement="top-end" color="secondary">
            <Image
              unoptimized
              width={700}
              height={200}
              // max-h-[150px] sm:max-h-[200px] for some old banner
              className="mb-5  shadow-lg object-cover object-center rounded-lg border-2 border-default-200"
              src="/abhijayatwork.gif"
              alt="abhijay@work-pixelAnimated"
            />
          </Tooltip>

          <p className="mb-5 text-md">Let&apos;s start with<span className="text-xl font-semibold">{" "}&apos;Why?&apos;</span></p>

          <p className="dark:text-[#94A3B8] text-[#64748B] mb-7">
            Let me know if you can relate: In today&apos;s rapidly evolving tech
            landscape, staying current is a big challenge. Product Hunt and
            HubSpot introduce new features every day, while AI is being
            incorporated into EVERYTHING. If you&apos;re staying the same,
            you&apos;re falling behind.
            <br />
            <br />
            That&apos;s where I come in. I love helping individuals transform
            their concepts into fully operational digital products. With almost
            4 years of experience in software development both as a consultant
            and as a full-time developer. I provide actionable guidance, offer
            practical solutions, or even facilitate connections bridging the
            gap for those needing expertise beyond my own in areas like non-tech
            support.
            <br />
            <br />
            For me software engineering is an ART just like painting was for 
            Leonardo Da Vinci. I&apos;m also a big fan of open
            source software - which is why almost everything I build is open
            source! I also love educating others about technology and
            programming, which is why I&apos;m a content creator and write blogs
            in my free time.
          </p>

          

          {/* piyush garg example: My name is Piyush Garg and I am 24 Years old developer. I have developed many websites, Worked on JavaScript frameworks like react and angular, Php login authentication system and session handling worked on Android apps, Basic IOS apps, Database management with MySql and Firebase, Python programing with the automation of software and much more. recently I have completed my journey as a MERN stack developer and undertraining flutter developer. */}
        </main>

        <Subscription />
      </div>
    </section>
  );
};

export default About;
