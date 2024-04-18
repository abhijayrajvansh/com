import Link from 'next/link';
import {siteConfig} from '@/config/site'
import ProjectCard from './ProjectCard';

const RecentProjects = () => {
  return (
    <div>
      <h1 className={`subHeading`}>
        Recent Projects
      </h1>
      
      {/* top 2 projects showcase */}
      <div className="flex flex-col sm:flex-row sm:space-x-7">

        <ProjectCard 
          bgBanner="bg-[url('/fullstack-twitter.webp')] bg-cover bg-contain"
          logo={siteConfig.projects.twitter.logo}
          title={siteConfig.projects.twitter.title}
          nextjs react supabse drizzle shadcn reacticnons typescript node
          visitLink={siteConfig.projects.twitter.liveProjectLink}
          blogLink={siteConfig.projects.twitter.blog}
          githubLink={siteConfig.projects.twitter.sourceCodeLink}
        />

        <ProjectCard 
          bgBanner="bg-[url('/t3.webp')]"
          logo={siteConfig.projects.twitter.logo}
          title={siteConfig.projects.twitter.title}
          nextjs react supabse drizzle shadcn reacticnons typescript node
          visitLink={siteConfig.projects.twitter.liveProjectLink}
          blogLink={siteConfig.projects.twitter.blog}
          githubLink={siteConfig.projects.twitter.sourceCodeLink}
        />

      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-7">
        {/* add project cards here... */}
      </div>


      <div className="text-md font-light flex gap-1 mb-10"> 
        <p>View all my projects on the</p>
        <Link className="text-primary-600 font-medium hover:underline underline-offset-4" href={'/projects'}>projects page.</Link>
      </div>
    </div>
  )
}

export default RecentProjects;