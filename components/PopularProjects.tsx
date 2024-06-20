import Link from "next/link";
import { allProjects } from "@/config/project.config";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  return (
    <div>
      <h1 className="subHeading">Popular Projects</h1>

      <div className="flex flex-col sm:flex-row flex-wrap justify-between">
        {allProjects
          .filter((project) => project.category.home)
          .map((project) => (
            <ProjectCard
              key={project.id}
              banner={project.banner}
              logo={project.logo}
              title={project.title}
              description={project.description}
              demo={project.links.demo ?? " "}
              blog={project.links.blog ?? " "}
              sourceCode={project.links.sourceCode ?? " "}
              nextjs={project.skills.nextjs ?? false}
              react={project.skills.react ?? false}
              express={project.skills.express ?? false}
              typescript={project.skills.typescript ?? false}
              graphql={project.skills.graphql ?? false}
              prisma={project.skills.prisma ?? false}
              supabase={project.skills.supabase ?? false}
              postgres={project.skills.postgres ?? false}
              aws={project.skills.aws ?? false}
              docker={project.skills.docker ?? false}
            />
          ))}
      </div>

      <div className="text-md font-light flex gap-1 mt-1 mb-10">
        <p>View all my projects on the</p>
        <Link
          className="primary-text font-medium hover:underline underline-offset-4"
          href={"/projects"}
        >
          projects page.
        </Link>
      </div>
    </div>
  );
};

export default RecentProjects;
