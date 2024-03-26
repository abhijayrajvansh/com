import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

const About = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">
        <main className="contentWrapper">
          <h1 className="text-5xl font-semibold mb-10">Who, What & Why?</h1>

          <Image
            unoptimized
            width={700}
            height={200}
            className="mb-5 max-h-[200px] shadow-lg object-cover object-center rounded-lg border-2 border-default-200"
            src="/abhijayatwork.gif"
            alt="abhijay@work-pixelAnimated"
          />

          <p className="dark:text-[#94A3B8] text-[#64748B]">
            Let me know if you can relate: In today&apos;s rapidly evolving tech
            landscape, staying current is a big challenge. Platforms like
            Product Hunt and HubSpot introduce new features every day, while AI
            is being incorporated into EVERYTHING. If you&apos;re staying the same,
            you&apos;re falling behind. 
            
            <br /><br />
            
            That&apos;s where I come in. I love helping
            individuals transform their concepts into fully operational digital
            products. With almost 4 years of experience in software
            development—both as a freelancer and as a full-time developer—I
            provide actionable guidance, offer practical solutions, and
            facilitate connections or even bridging the gap for those needing
            expertise beyond my own in areas like non-tech support.
            <br /> <br />
            Hi, nice to virtually meet you. I&apos;m Abhijay{" "}

            <Link
              href={siteConfig.links.twitter}
              className="text-primary-500 font-medium underline">@rajvanshtwt
            </Link>

            {" "}Rajvansh, a full-stack software engineer currently based in India 🇮🇳.
            I&apos;m passionate about building products that help people and make a difference 
            in the world. I&apos;m also a big fan of open source software - which is why almost 
            everything I build is open source! I also love educating others about technology 
            and programming, which is why I&apos;m a content creator and write blogs in my free 
            time. I mainly write code in the T3 Stack
          </p>
          {/* <p>
          piyush garg example: My name is Piyush Garg and I am 24 Years old developer. I have developed many websites, Worked on JavaScript frameworks like react and angular, Php login authentication system and session handling worked on Android apps, Basic IOS apps, Database management with MySql and Firebase, Python programing with the automation of software and much more. recently I have completed my journey as a MERN stack developer and undertraining flutter developer.

  
          dhravy shah: I&apos;m a product maker (... and full stack developer) currently based in Arizona, USA. I&apos;m passionate about building products that help people and make a difference in the world. I&apos;m also a big fan of open source software - which is why almost everything I build is open source! I also love educating others about technology and programming, which is why I&apos;m a content creator and write blogs in my free time. I mainly write code in the T3 Stack

          
          summary : Diligent Technical Project Manager with 8 years of experience as a fintech unicorn in Silicon Valley.
          Excelled in scrum methodology, project scheduling, and budgeting. Led a team of 15+ software engineers.
          Looking for a job at Google, DeeMind to reveal my full potential as a technical project manager.
        </p> */}
        </main>

        <Subscription />
      </div>
    </section>
  );
};

export default About;
