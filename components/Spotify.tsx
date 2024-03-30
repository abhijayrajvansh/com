'use client';

import Image from "next/image";
import { Slider } from "@nextui-org/react";
import { songs } from "@/config/site";

interface SpotifyProps {
  tilt: string,
}

const Spotify: React.FC<SpotifyProps> = ({tilt}) => {


  return (
    <div className={`ml-7 mb-7 shadow-xl rounded-xl min-h-[300px] mr-5 transition ${tilt === 'left' ? 'hover:-rotate-1' : 'hover:rotate-1'}  relative sm:ml-[116px] lg:ml-7 sm:w-[650px] lg:max-w-[300px] flex items-center justify-center bg-[url('/podcast/tgvae.jpeg')] bg-no-repeat bg-center`}>
      
      <div className="w-full">
        {/* <Image src={songs.podcast.songThumbnail} alt="musicThumbnai" width={300} height={300} className="rounded-xl absolute object-cove "/> */}
    
        <div className="min-h-[300px] rounded-xl backdrop-blur-2xl bg-black/10 flex flex-col items-center justify-center p-3">
      
          <Image className="rounded-lg border border-default-200/10" src={songs.podcast.songThumbnail} alt="musicThumbnai" width={500} height={500} />
        
          <div className="w-full">
            <div className="flex flex-col mt-5 gap-1 w-full ">
              <div className="rounded-xl w-full bg-black/20 p-2">
                <h3 className="text-center text-lg sm:text-base text-white">{songs.podcast.songTitle}</h3>
                <p className="text-center text-color-text sm:text-sm">Listening on Abhijay&apos;s Spotify</p>

                <Slider
                  aria-label="Music progress"
                  classNames={{
                    track: "bg-default-500/30",
                    thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                  }}
                  color="success"
                  defaultValue={75}
                  size="sm"
                />
                <div className="flex justify-between">
                  <p className="text-small text-white">15:23</p>
                  <p className="text-small text-foreground/50 text-white">19:56</p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Spotify;