import Image from "next/image";
import {Card, CardBody, Button, Slider} from "@nextui-org/react";

interface SpotifyProps {
  tilt: string,
  musicThumbnai: string,
}

const Spotify: React.FC<SpotifyProps> = ({tilt, musicThumbnai}) => {
  return (
    <div className={`ml-7 mb-7 shadow-xl rounded-xl min-h-[300px] mr-5 border border-default-200/50 transition ${tilt === 'left' ? 'hover:-rotate-1' : 'hover:rotate-1'}  relative sm:ml-[116px] lg:ml-7 sm:w-[650px] lg:max-w-[300px] flex items-center justify-center`}>
      
      <div className="w-full">
        <Image src={musicThumbnai} alt="musicThumbnai" width={300} height={300} className="rounded-xl absolute object-cove "/>
    
        <div className="min-h-[300px] rounded-xl backdrop-blur-2xl flex flex-col items-center justify-center p-5">
      
          <Image className="rounded-lg" src={musicThumbnai} alt="musicThumbnai" width={300} height={300} />
        
          <div className="w-full">
            <div className="flex flex-col mt-5 gap-1 w-full ">
              <div className="rounded-xl w-full bg-black/20 p-2">
                <h3 className="text-center">One Of The Girls, (with JENNIE, Lily Rose Depp)</h3>
                <p className="text-center text-color-text">Listening on Abhijay&apos;s Spotify</p>

                <Slider
                  aria-label="Music progress"
                  classNames={{
                    track: "bg-default-500/30",
                    thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                  }}
                  color="foreground"
                  defaultValue={33}
                  size="sm"
                />
                <div className="flex justify-between">
                  <p className="text-small">1:23</p>
                  <p className="text-small text-foreground/50">4:32</p>
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