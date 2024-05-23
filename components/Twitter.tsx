import { siteConfig, tweets } from "@/config/site.config";
import Image from "next/image";
import avatar from "@/public/images/abhijayrajvansh-avatar.png";
import { Button } from "./ui/button";
import Link from "next/link";

const Twitter = () => {
  return (
    <div className="w-full px-4 sm:ml-2">
      <div
        className={`flex flex-col gap-4 rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-border mb-5 shadow-md cardTop-BottomGradient transition py-4`}
      >
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-3">
            <Image
              className="rounded-full"
              width={40}
              height={40}
              src={avatar}
              alt="ar-avatar"
              placeholder="blur"
            />

            <div className="flex flex-col">
              <p className="font-semibold text-sm ">Abhijay Rajvansh</p>
              <p className="text-color-text text-sm">@rajvanshtwt</p>
            </div>
          </div>
          <Button
            asChild
            size="sm"
            className="dark:bg-white text-xs dark:text-black text-white bg-blue-500 font-medium rounded-full px-3"
          >
            <Link
              target="_black"
              rel="noopener noreferer"
              href={siteConfig.links.twitter}
            >
              Follow
            </Link>
          </Button>
        </div>

        <div className="text-base flex justify-start font-normal sm:text-sm">
          <p>{tweets.post.tweet}</p>
        </div>

        <div className="flex items-center justify-start text-sm text-color-text">
          <p>
            {tweets.post.time} · {tweets.post.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
