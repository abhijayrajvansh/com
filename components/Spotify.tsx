import { FaSpotify } from "react-icons/fa6";
import { spotifyData } from "@/config/spotify.config";
import Image from "next/image";

const Spotify = () => {
  return (
    <div className="w-full px-5 sm:ml-2 ">
      <div
        className={`relative rounded-xl font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-border mb-5 shadow-md transition bg-black/50`}
      >
        <Image
          height={500}
          width={500}
          className="w-full h-full rounded-xl absolute object-cover object-center -z-10"
          src={spotifyData.bannerImgUri}
          alt="spotify-track-banner.png"
        />

        <div className="z-10 flex flex-col justify-between h-48 p-4">
          <div className="flex items-center justify-between">
            <FaSpotify
              className="text-green-500 border-blur-yellow rounded-full"
              size={30}
            />
            <Image
              height={36}
              width={36}
              src="/images/audio-wave.gif"
              alt="audio-wave-animationa"
            />
          </div>
          <div>
            <p className="font-light text-white mt-1">
              Listening to{" "}
              <span className="font-semibold">{spotifyData.songName}</span> by{" "}
              <span className="text-white font-semibold">
                {spotifyData.artist}.
              </span>
            </p>
          </div>
          <div className="min-h-2 rounded-full mx-1 bg-gradient-to-r from-[#25A7E9] to-pink-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
