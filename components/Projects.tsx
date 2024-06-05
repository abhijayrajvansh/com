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
              {allProjects
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
                    nextjs={project.skills.nextjs}
                    react={project.skills.react}
                    express={project.skills.express}
                    typescript={project.skills.typescript}
                    graphql={project.skills.graphql}
                    prisma={project.skills.prisma}
                    supabase={project.skills.supabase}
                    postgres={project.skills.postgres}
                    aws={project.skills.aws}


                  />
                ))}
            </TabsContent>

            <TabsContent
              value="AI"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project) => project.category.ai)
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
                    nextjs={project.skills.nextjs}
                    react={project.skills.react}
                    express={project.skills.express}
                    typescript={project.skills.typescript}
                    graphql={project.skills.graphql}
                    prisma={project.skills.prisma}
                    supabase={project.skills.supabase}
                    postgres={project.skills.postgres}
                    aws={project.skills.aws}


                  />
                ))}
            </TabsContent>

            <TabsContent
              value="Blockchain"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project) => project.category.blockchain)
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
                    nextjs={project.skills.nextjs}
                    react={project.skills.react}
                    express={project.skills.express}
                    typescript={project.skills.typescript}
                    graphql={project.skills.graphql}
                    prisma={project.skills.prisma}
                    supabase={project.skills.supabase}
                    postgres={project.skills.postgres}
                    aws={project.skills.aws}


                  />
                ))}
            </TabsContent>

            <TabsContent
              value="Web"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project) => project.category.web)
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
                    // if any skills object not received then throws error
                    nextjs={project.skills.nextjs}
                    react={project.skills.react}
                    express={project.skills.express}
                    typescript={project.skills.typescript}
                    graphql={project.skills.graphql}
                    prisma={project.skills.prisma}
                    supabase={project.skills.supabase}
                    postgres={project.skills.postgres}
                    aws={project.skills.aws}


                  />
                ))}
            </TabsContent>

            <TabsContent
              value="Mobile"
              className="flex flex-col sm:flex-row flex-wrap justify-between"
            >
              {allProjects
                .filter((project) => project.category.mobile)
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
                    nextjs={project.skills.nextjs}
                    react={project.skills.react}
                    express={project.skills.express}
                    typescript={project.skills.typescript}
                    graphql={project.skills.graphql}
                    prisma={project.skills.prisma}
                    supabase={project.skills.supabase}
                    postgres={project.skills.postgres}
                    aws={project.skills.aws}


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
