import AchievementCard from "./AchievementCard";

const Awwwards = () => {
  return (
    <div>
      <h1 className={`subHeading`}>
        Top Requested Services
      </h1>
      
      {/* top 2 projects showcase */}
      <div className="flex flex-col sm:flex-row sm:space-x-7">

        <AchievementCard
            title="Google Hash Code"
            position="Rank 804th"
            thumbnail="bg-[url('/ghc.webp')]"
            tilt="left" 
          />

        <AchievementCard
          title="Apple iOS Developer Program"
          position="Best Developer Award"
          thumbnail="bg-[url('/appletrainee.webp')]"
          tilt="right" 
        />

      </div>


      <div className="flex flex-col sm:flex-row sm:space-x-7">

        <AchievementCard
          title="Asia Largest Hackathon"
          position="Winner, Smarthacks"
          thumbnail="bg-[url('/cn.webp')]"
          tilt="left" 
        />
       
      </div>

      <div className="text-md mt-3 mb-5 font-light flex gap-1"> 
          <span className="text-danger-500 font-semibold">funfact: <span className="text-default-900 font-light">I&apos;m good at <span className="text-default-900 font-medium">figuring things out</span>, that&apos;s my biggest flex!</span></span>
      </div>

    </div>
  )
}

export default Awwwards;