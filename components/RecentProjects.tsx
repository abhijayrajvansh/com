import Link from 'next/link';
import {siteConfig} from '@/config/site'
import ProjectCard from './ProjectCard';

const RecentProjects = () => {
  return (
    <div>
      <h1 className={`font-medium text-2xl inline-block mt-5`}>
        Recent Projects
      </h1>
      
      {/* top 2 projects showcase */}
      <div className="flex flex-col sm:flex-row sm:space-x-7">
        <ProjectCard 
          title={siteConfig.projects.twitter.title}
          description={siteConfig.projects.twitter.description}
          type={siteConfig.projects.twitter.type}
          thumbnail={siteConfig.projects.twitter.thumbnail}
          sourceCodeLink={siteConfig.projects.twitter.sourceCodeLink}
          liveProjectLink={siteConfig.projects.twitter.liveProjectLink}
          tilt="right" 
        />

        <ProjectCard 
          title={siteConfig.projects.twitter.title}
          description={siteConfig.projects.twitter.description}
          type={siteConfig.projects.twitter.type}
          thumbnail={siteConfig.projects.twitter.thumbnail}
          sourceCodeLink={siteConfig.projects.twitter.sourceCodeLink}
          liveProjectLink={siteConfig.projects.twitter.liveProjectLink} 
          tilt="left"
        />
      </div>


      {/* another 2 projects showcase */}

      <div className="flex flex-col sm:flex-row sm:space-x-7">
        {/* add project cards here... */}
      </div>


      <div className="text-md sm:mb-10 font-light flex gap-1 mt-5"> 
        <p>See a list of all my projects on the</p>
        <Link className="text-primary-600 font-normal" href={'/projects'}>projects page.</Link>
      </div>
    </div>

    
  )
}

export default RecentProjects;