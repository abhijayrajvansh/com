'use client';

import Thumbnail from "@/components/Thumbnail";

const Services = () => {
  return (
    <div>
      <h1 className={`subHeading mb-5`}>
        Top Requested Services
      </h1>

      <div className="flex flex-col sm:flex-row sm:space-x-7">

        <Thumbnail 
          videosrc="/videos/web-thumbnail.mp4" 
          imgsrc='/videos/web-thumbnail.png'
        />

        <Thumbnail 
          videosrc="/videos/mobile-thumbnail.mp4" 
          imgsrc='/videos/mobile-thumbnail.png'
        />

      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-7">

        <Thumbnail 
          videosrc="/videos/blockchain-thumbnail.mp4" 
          imgsrc='/videos/blockchain-thumbnail.png'
        />

      </div>

      <div className="text-md my-5 font-light flex gap-1"> 
          <span className="text-danger-500 font-semibold">pitch: <span className="text-default-900 font-light">I&apos;m good at <span className="text-default-900 font-medium">figuring things out</span>, that&apos;s my biggest flex!</span></span>
      </div>

    </div>
  )
}

export default Services;