import Header from "./Header";
import NavigationTab from "./NavigationTab";
import SocialConnections from "./SocialConnections";
import ThanksNote from "./ThanksNote";
import ProjectCard from "./ProjectCard";
import TechnicalSkills from "./TechnicalSkills";
import Spotify from "./Spotify";
import { allProjects } from "@/config/project.config";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

          <Tabs defaultValue="AI" className="w-full">
            <TabsList>
              <TabsTrigger className="text-xs sm:text-sm" value="AI">
                AI
              </TabsTrigger>
              <TabsTrigger className="text-xs sm:text-sm" value="Blockchain">
                Blockchain
              </TabsTrigger>
              <TabsTrigger className="text-xs sm:text-sm" value="Mobile">
                Mobile
              </TabsTrigger>
              <TabsTrigger className="text-xs sm:text-sm" value="Back-end">
                Back-end
              </TabsTrigger>
              <TabsTrigger className="text-xs sm:text-sm" value="Front-end">
                Front-end
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="AI"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project) => project.ai)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    banner={project.banner}
                    logo={project.logo}
                    title={project.title}
                    description={project.descriptiom}
                    demo={project.demo}
                    blog={project.blog}
                    sourceCode={project.sourceCode}
                  />
                ))}
            </TabsContent>

            <TabsContent
              value="Blockchain"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project) => project.blockchain)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    banner={project.banner}
                    logo={project.logo}
                    title={project.title}
                    description={project.descriptiom}
                    demo={project.demo}
                    blog={project.blog}
                    sourceCode={project.sourceCode}
                  />
                ))}
            </TabsContent>

            <TabsContent
              value="Mobile"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project) => project.mobile)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    banner={project.banner}
                    logo={project.logo}
                    title={project.title}
                    description={project.descriptiom}
                    demo={project.demo}
                    blog={project.blog}
                    sourceCode={project.sourceCode}
                  />
                ))}
            </TabsContent>

            <TabsContent
              value="Back-end"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project) => project.backend)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    banner={project.banner}
                    logo={project.logo}
                    title={project.title}
                    description={project.descriptiom}
                    demo={project.demo}
                    blog={project.blog}
                    sourceCode={project.sourceCode}
                  />
                ))}
            </TabsContent>

            <TabsContent
              value="Front-end"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project) => project.frontend)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    banner={project.banner}
                    logo={project.logo}
                    title={project.title}
                    description={project.descriptiom}
                    demo={project.demo}
                    blog={project.blog}
                    sourceCode={project.sourceCode}
                  />
                ))}
            </TabsContent>
          </Tabs>
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
