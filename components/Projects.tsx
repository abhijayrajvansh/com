import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Newsletter from "./Newsletter";
import Twitter from "./Twitter";
import SocialConnections from "./SocialConnections";
import ThanksNote from "./ThanksNote";
import ProjectCard from "./ProjectCard";
import { siteConfig } from "@/config/site.config";
import TechnicalSkills from "./TechnicalSkills";
import DummyCard from "./DummyCard";
import Spotify from "./Spotify";

const Projects = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">
        <main className="contentWrapper">
          <h1 className="text-4xl font-bold w-fit mb-10 green-text-bg-gradient">
            Work & Hobby.
          </h1>

          <div className="flex flex-col sm:flex-row sm:space-x-7">
            <ProjectCard
              banner={siteConfig.projects.twitter.banner}
              logo={siteConfig.projects.twitter.logo}
              title={siteConfig.projects.twitter.title}
              description="this is a sample description for thr project card from recent project page, good going!!"
              nextjs react supabse drizzle shadcn reacticnons typescript node
              visitLink={siteConfig.projects.twitter.liveProjectLink}
              blogLink={siteConfig.blogs.twitter.link}
              githubLink={siteConfig.projects.twitter.sourceCodeLink}
            />

            <DummyCard />

          </div>

        </main>

        <section>
          <div className="my-10 md:hidden"></div>
          <TechnicalSkills />
          <Spotify />
          <SocialConnections />
          <ThanksNote />
        </section>
      </div>
    </section>
  );
};

export default Projects;
