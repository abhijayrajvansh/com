import AchievementCard from "./AchievementCard";

const Awwwards = () => {
  return (
    <div>
      <h1 className={`font-medium text-xl inline-block mt-5`}>
        Awards and Achievements
      </h1>
      
      {/* top 2 projects showcase */}
      <div className="flex flex-col sm:flex-row sm:space-x-7">


        <AchievementCard
          title="Coding Ninja's Hackathon"
          position="Winner, Smarthacks"
          thumbnail="bg-[url('/cn.webp')]"
          tilt="right" 
        />

        <AchievementCard
          title="Google Hash Code"
          position="Rank 804th"
          thumbnail="bg-[url('/ghc.webp')]"
          tilt="left" 
        />
        
      </div>


      <div className="flex flex-col sm:flex-row sm:space-x-7">
        
        <AchievementCard
          title="Facebook Hacker Cup"
          position="Rank 1524th"
          thumbnail="bg-[url('/fhc.webp')]"
          tilt="right" 
        />
       
      </div>


      <div className="text-md mb-5 font-light flex gap-1"> 
          <span className="text-danger-500 font-semibold">funfact: <span className="text-default-900 font-light">I'm good at <span className="underline underline-offset-4 font-medium">figuring things out</span>, that's my biggest flex!</span></span>
      </div>

    </div>
  )
}

export default Awwwards;