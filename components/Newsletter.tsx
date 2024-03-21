'use client';

import { Avatar, AvatarGroup } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

interface NewsletterProps {
  tilt: string,
}

const Newsletter: React.FC<NewsletterProps> = ({tilt}) => {
  return (
    <div className="w-full px-5 sm:ml-2">
      <div className={`flex flex-col items-center gap-4 rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[700px] lg:max-w-[300px] border border-default-200/50 mb-5 shadow-xl bg-gradient-to-b from-projectCardTop to-projectCardBotttom ${tilt === 'left' ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition py-7`}>
    
        {false && 
        <AvatarGroup size="sm"
        isBordered 
        total={50}
        renderCount={(count) => (
          <p className="text-xs text-foreground font-medium ms-2">+{count} others</p>
        )}>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      </AvatarGroup>}

        <h3 className="text-xl sm:text-lg">Newsletter comming soon!</h3>

        <p className="font-normal text-[#94A3B8] text-sm sm:text-xs text-center">Follow my journey, I write about tech, my experiences and more.</p>
        
        <input disabled className="rounded-full bg-default/30 border border-default-300/50 px-4 text-sm w-full py-2 sm:py-1 font-light" 
          type="email" placeholder="enter your email..." />

        <Button className="w-full text-sm font-medium"
         radius="full"
         size="sm"
         color="primary"
         isDisabled
         > Subscribe!</Button>

      </div>
    </div>
  )
}

export default Newsletter;