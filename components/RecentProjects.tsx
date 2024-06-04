import Link from "next/link";
import { projects } from "@/config/project.config";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  return (
    <div>
      <h1 className="subHeading">Recent Projects</h1>

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
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-7">
        {/* add project cards here... */}
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
