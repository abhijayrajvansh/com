import { siteConfig, tweets } from "@/config/site";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

interface twitterProps {
  tilt: string,
}

const Twitter: React.FC<twitterProps> = ({ tilt }) => {
  return (
    <div className={`ml-7 mb-7 shadow-xl rounded-xl mr-5 transition ${tilt === 'left' ? 'hover:-rotate-1' : 'hover:rotate-1'}  relative sm:ml-[116px] lg:ml-7 sm:w-[650px] lg:max-w-[300px] flex items-center justify-center border border-default-200/50 bg-gradient-to-b from-projectCardTop to-projectCardBotttom`}>
    

        <div className="w-full rounded-xl backdrop-blur-2xl flex flex-col items-start space-y-3 p-4 dark:bg-black/30 bg-black/90">

         <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-3">
            <Image className="rounded-full" width={40} height={40} src="/abhijay-rajvansh-software-best-software-engineer.png" alt="/twitterpfp" />

            <div className="flex flex-col">
              <p className="font-semibold text-sm text-white">Abhijay Rajvansh</p>
              <p className="text-color-text text-sm">@rajvanshtwt</p>
            </div>
          </div>
          <Button as={Link} isExternal href={siteConfig.links.twitter} size="sm" className="bg-white text-black font-medium rounded-full px-3">Follow</Button>
         </div>

         <p className="text-white text-base sm:text-sm">{tweets.post.tweet}</p>

         <div className="flex items-center justify-start text-sm text-color-text">
          <p>{tweets.post.time} · {tweets.post.date}</p>
         </div>

      </div>
    </div>
  )
}

export default Twitter;