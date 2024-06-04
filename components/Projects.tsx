import Header from "./Header";
import NavigationTab from "./NavigationTab";
import SocialConnections from "./SocialConnections";
import ThanksNote from "./ThanksNote";
import ProjectCard from "./ProjectCard";
import TechnicalSkills from "./TechnicalSkills";
import DummyCard from "./DummyCard";
import Spotify from "./Spotify";
import { projects } from "@/config/project.config";

const Projects = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">
        <main className="contentWrapper">
          <h1 className="text-4xl font-bold mb-10 green-text-bg-gradient">
            Work & Hobby.
          </h1>

          <div className="flex flex-col sm:flex-row sm:space-x-7">
            <ProjectCard
              banner={projects.twitter.banner}
              logo={projects.twitter.logo}
              title={projects.twitter.title}
              description={projects.twitter.descriptiom}
              visitLink={projects.twitter.liveProjectLink}
              githubLink={projects.twitter.sourceCodeLink}
              blogLink={projects.twitter.blogLink}
              // technologies used
              nextjs
              react
              supabse
              drizzle
              shadcn
              reacticnons
              typescript
              node
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
