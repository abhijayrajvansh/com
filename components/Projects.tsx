import Header from "./Header";
import NavigationTab from "./NavigationTab";
import SocialConnections from "./SocialConnections";
import ThanksNote from "./ThanksNote";
import ProjectCard from "./ProjectCard";
import TechnicalSkills from "./TechnicalSkills";
import Spotify from "./Spotify";
import { allProjects } from "@/config/project.config";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Project } from "@/types/project.types";

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

          <Tabs defaultValue="All" className="w-full">
            <TabsList>
              <TabsTrigger className="text-xs sm:text-sm" value="All">
                Popular
              </TabsTrigger>
              <TabsTrigger className="text-xs sm:text-sm" value="AI">
                AI
              </TabsTrigger>
              <TabsTrigger className="text-xs sm:text-sm" value="Blockchain">
                Blockchain
              </TabsTrigger>
              <TabsTrigger className="text-xs sm:text-sm" value="Web">
                Web
              </TabsTrigger>
              <TabsTrigger className="text-xs sm:text-sm" value="Mobile">
                Mobile
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="All"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects.map((project: Project) => (
                <ProjectCard
                  key={project.id}
                  banner={project.banner}
                  logo={project.logo}
                  title={project.title}
                  description={project.description}
                  demo={project.demo}
                  blog={project.blog}
                  sourceCode={project.sourceCode}
                  nextjs={project.skills.nextjs ?? false}
                  react={project.skills.react ?? false}
                  express={project.skills.express ?? false}
                  typescript={project.skills.typescript ?? false}
                  graphql={project.skills.graphql ?? false}
                  prisma={project.skills.prisma ?? false}
                  supabase={project.skills.supabase ?? false}
                  postgres={project.skills.postgres ?? false}
                  aws={project.skills.aws ?? false}
                />
              ))}
            </TabsContent>

            <TabsContent
              value="AI"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project: Project) => project.category.ai)
                .map((project: Project) => (
                  <ProjectCard
                    key={project.id}
                    banner={project.banner}
                    logo={project.logo}
                    title={project.title}
                    description={project.description}
                    demo={project.demo}
                    blog={project.blog}
                    sourceCode={project.sourceCode}
                    nextjs={project.skills.nextjs ?? false}
                    react={project.skills.react ?? false}
                    express={project.skills.express ?? false}
                    typescript={project.skills.typescript ?? false}
                    graphql={project.skills.graphql ?? false}
                    prisma={project.skills.prisma ?? false}
                    supabase={project.skills.supabase ?? false}
                    postgres={project.skills.postgres ?? false}
                    aws={project.skills.aws ?? false}
                  />
                ))}
            </TabsContent>

            <TabsContent
              value="Blockchain"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project: Project) => project.category.blockchain)
                .map((project: Project) => (
                  <ProjectCard
                    key={project.id}
                    banner={project.banner}
                    logo={project.logo}
                    title={project.title}
                    description={project.description}
                    demo={project.demo}
                    blog={project.blog}
                    sourceCode={project.sourceCode}
                    nextjs={project.skills.nextjs ?? false}
                    react={project.skills.react ?? false}
                    express={project.skills.express ?? false}
                    typescript={project.skills.typescript ?? false}
                    graphql={project.skills.graphql ?? false}
                    prisma={project.skills.prisma ?? false}
                    supabase={project.skills.supabase ?? false}
                    postgres={project.skills.postgres ?? false}
                    aws={project.skills.aws ?? false}
                  />
                ))}
            </TabsContent>

            <TabsContent
              value="Web"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project: Project) => project.category.web)
                .map((project: Project) => (
                  <ProjectCard
                    key={project.id}
                    banner={project.banner}
                    logo={project.logo}
                    title={project.title}
                    description={project.description}
                    demo={project.demo}
                    blog={project.blog}
                    sourceCode={project.sourceCode}
                    // if any skills object not received then throws error
                    nextjs={project.skills.nextjs ?? false}
                    react={project.skills.react ?? false}
                    express={project.skills.express ?? false}
                    typescript={project.skills.typescript ?? false}
                    graphql={project.skills.graphql ?? false}
                    prisma={project.skills.prisma ?? false}
                    supabase={project.skills.supabase ?? false}
                    postgres={project.skills.postgres ?? false}
                    aws={project.skills.aws ?? false}
                  />
                ))}
            </TabsContent>

            <TabsContent
              value="Mobile"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project: Project) => project.category.mobile)
                .map((project: Project) => (
                  <ProjectCard
                    key={project.id}
                    banner={project.banner}
                    logo={project.logo}
                    title={project.title}
                    description={project.description}
                    demo={project.demo}
                    blog={project.blog}
                    sourceCode={project.sourceCode}
                    nextjs={project.skills.nextjs ?? false}
                    react={project.skills.react ?? false}
                    express={project.skills.express ?? false}
                    typescript={project.skills.typescript ?? false}
                    graphql={project.skills.graphql ?? false}
                    prisma={project.skills.prisma ?? false}
                    supabase={project.skills.supabase ?? false}
                    postgres={project.skills.postgres ?? false}
                    aws={project.skills.aws ?? false}
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
