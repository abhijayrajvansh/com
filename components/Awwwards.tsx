import Link from "next/link";
import AchievementCard from "./AchievementCard";

const Awwwards = () => {
  return (
    <div>
      <h1 className={`font-medium text-2xl inline-block mt-5`}>
        Awards and Achievements
      </h1>
      
      {/* top 2 projects showcase */}
      <div className="flex flex-col sm:flex-row sm:space-x-7">

        <AchievementCard
        tilt="right" />

      </div>


      {/* another 2 projects showcase */}

      <div className="flex flex-col sm:flex-row sm:space-x-7">
        {/* add project cards here... */}
      </div>


      <div className="text-md sm:mb-10 font-light flex gap-1"> 
        <p>See a list of all my projects</p>
        <Link className="text-primary-600 font-normal" href={'/projects'}>On my projects page.</Link>
      </div>

    </div>
  )
}

export default Awwwards;