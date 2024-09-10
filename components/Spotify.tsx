"use client";

import { FaSpotify } from "react-icons/fa";
import Image from "next/image";

const Spotify = () => {

  const spotifyId = '4WG3mAQIGHQJalK922wAiG'

  return (
    <div className="w-full px-5 sm:ml-2 mb-5">
      <div
        className={`relative rounded-t-xl font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-border shadow-md transition dark:bg-black/40 bg-black/30 `}
      >
        <video
          className="w-full h-full rounded-t-xl absolute object-cover object-center -z-10"
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          src="/videos/videoplayback.mp4"
        ></video>

        <div className="z-10 flex flex-col justify-between p-4 rounded-xl space-y-5 min-h-52">
          <div className="flex items-center justify-between">
            <FaSpotify
              className="text-green-500 bg-black rounded-full"
              size={37}
            />
            <Image
              unoptimized
              height={36}
              width={36}
              src="/images/audio-wave.gif"
              alt="audio-wave-animationa"
            />
          </div>
          <div className="space-y-5">
          </div>
        </div>
      </div>
      <iframe
        className="rounded-xl sm:ml-[90px] sm:w-[648px] lg:w-[300px] lg:ml-0 relative -top-3"
        src={`https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator`}
        height="80"
        width="100%"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
