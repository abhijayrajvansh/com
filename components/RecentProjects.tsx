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
          title={siteConfig.projects.twitter.title}
          description={siteConfig.projects.twitter.description}
          type={siteConfig.projects.twitter.type}
          thumbnail="bg-[url('/t3.webp')]"
          sourceCodeLink={siteConfig.projects.twitter.sourceCodeLink}
          liveProjectLink={siteConfig.projects.twitter.liveProjectLink}
          tilt="right" 
        />

        <ProjectCard 
          title={siteConfig.projects.twitter.title}
          description={siteConfig.projects.twitter.description}
          type={siteConfig.projects.twitter.type}
          thumbnail="bg-[url('/t3.webp')]"
          sourceCodeLink={siteConfig.projects.twitter.sourceCodeLink}
          liveProjectLink={siteConfig.projects.twitter.liveProjectLink}
          tilt="left" 
        />

      </div>

      {/* another 2 projects showcase */}

      <div className="flex flex-col sm:flex-row sm:space-x-7">
        {/* add project cards here... */}
      </div>


      <div className="text-md font-light flex gap-1 mb-10"> 
        <p>View all my projects on the</p>
        <Link className="text-primary-600 font-medium" href={'/projects'}>projects page.</Link>
      </div>
    </div>
  )
}

export default RecentProjects;