'use client';

import AchievementCard from "./AchievementCard";
import Thumbnail from "@/components/Thumbnail";

const Services = () => {
  return (
    <div>
      <h1 className={`subHeading`}>
        Top Requested Services
      </h1>
      
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

        {/* insert thumbnail component here */}
        <Thumbnail 
          videosrc="/videos/wd-thumbnail.mov" 
          imgsrc='/videos/wd-thumbnail.png'
        />

      </div>

      <div className="text-md mt-3 mb-5 font-light flex gap-1"> 
          <span className="text-danger-500 font-semibold">pitch: <span className="text-default-900 font-light">I&apos;m good at <span className="text-default-900 font-medium">figuring things out</span>, that&apos;s my biggest flex!</span></span>
      </div>

    </div>
  )
}

export default Services;