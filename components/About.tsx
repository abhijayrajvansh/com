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

          <h1 className="text-4xl font-semibold mb-10">Short Bio</h1>
          
          <Image unoptimized width={700} height={200} className="mb-5 max-h-[200px] shadow-lg object-cover object-center rounded-lg border-2 border-default-200" src="/abhijayatwork.gif" alt="abhijay@work-pixelAnimated" />

          <p><span className="text-2xl font-semibold">H</span>i, nice to virtually meet you. I&apos;m Abhijay <Link href={siteConfig.links.twitter} className="text-primary-500 font-medium underline">@rajvanshtwt</Link> Rajvansh, a full-stack software engineer currently based in India 🇮🇳</p>
        {/* <p>
          piyush garg example: My name is Piyush Garg and I am 24 Years old developer. I have developed many websites, Worked on JavaScript frameworks like react and angular, Php login authentication system and session handling worked on Android apps, Basic IOS apps, Database management with MySql and Firebase, Python programing with the automation of software and much more. recently I have completed my journey as a MERN stack developer and undertraining flutter developer.

          <br /> <br />

          dhravy shah: I'm a product maker (... and full stack developer) currently based in Arizona, USA. I'm passionate about building products that help people and make a difference in the world. I'm also a big fan of open source software - which is why almost everything I build is open source! I also love educating others about technology and programming, which is why I'm a content creator and write blogs in my free time. I mainly write code in the T3 Stack

          <br /> <br />
          
          summary : Diligent Technical Project Manager with 8 years of experience as a fintech unicorn in Silicon Valley.
          Excelled in scrum methodology, project scheduling, and budgeting. Led a team of 15+ software engineers.
          Looking for a job at Google, DeeMind to reveal my full potential as a technical project manager.
        </p> */}

        </main>

        <Subscription />
      </div>
      
    </section>
  )
}

export default About;