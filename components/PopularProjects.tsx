import Link from "next/link";
import { allProjects } from "@/config/project.config";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  return (
    <div>
      <h1 className="subHeading">Popular Projects</h1>

      <div className="flex flex-col sm:flex-row flex-wrap justify-between">
        {allProjects
          .filter((project) => project.popular)
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
          ))}
      </div>

      <div className="text-md font-light flex gap-1 mb-10">
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
