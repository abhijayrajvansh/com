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
          title="Coding Ninjas, Hackathon"
          position="Winner, Smarthacks"
          thumbnail="bg-[url('/cn.webp')]"
          tilt="left" 
        />

        <AchievementCard
          title="Google Hash Code"
          position="Rank 804th"
          thumbnail="bg-[url('/ghc.webp')]"
          tilt="right" 
        />
        
      </div>


      <div className="flex flex-col sm:flex-row sm:space-x-7">
        
        <AchievementCard
          title="Facebook Hacker Cup"
          position="Rank 1524th"
          thumbnail="bg-[url('/fhc.webp')]"
          tilt="left" 
        />
       
      </div>


      <div className="text-md mb-5 font-light flex gap-1"> 
        <p>funfact: ...</p>
      </div>

    </div>
  )
}

export default Awwwards;