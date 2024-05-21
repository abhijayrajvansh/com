import { siteConfig, tweets } from "@/config/site";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import avatar from "@/public/images/abhijayrajvansh-avatar.png";

const Twitter = () => {
  return (
    <div className="w-full px-4 sm:ml-2">
      <div
        className={`flex flex-col gap-4 rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-default-200/50 mb-5 shadow-md bg-gradient-to-b from-projectCardTop to-projectCardBotttom transition py-4`}
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
            as={Link}
            isExternal
            href={siteConfig.links.twitter}
            size="sm"
            className="dark:bg-white dark:text-black text-white bg-sky-500 font-medium rounded-full px-3"
          >
            Follow
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
