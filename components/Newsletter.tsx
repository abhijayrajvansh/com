"use client";

import { Avatar, AvatarGroup } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Newsletter = () => {
  return (
    <div className="w-full px-5 sm:ml-2">
      <div
        className={`flex flex-col items-center gap-4 rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-default-200/50 sm:mb-5 mb-3 shadow-md bg-gradient-to-b from-projectCardTop to-projectCardBotttom transition py-7`}
      >
        {null && (
          <AvatarGroup
            size="sm"
            isBordered
            total={50}
            renderCount={(count) => (
              <p className="text-xs text-foreground font-medium ms-2">
                +{count} others
              </p>
            )}
          >
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          </AvatarGroup>
        )}

        <h3 className="text-xl sm:text-lg">Newsletter comming soon!</h3>

        <p className="font-normal text-color-text text-sm sm:text-xs text-center">
          Get remote job offers, freelancing advice & top developer tips with
          The Rajvansh Times.
        </p>

        <input
          disabled
          className="rounded-full bg-default/30 border border-default-300/50 px-4 text-sm w-full py-2 sm:py-1 font-light"
          type="email"
          placeholder="enter your email..."
        />

        <Button
          className="w-full text-sm font-medium"
          radius="full"
          size="sm"
          color="primary"
          isDisabled
        >
          {" "}
          YES PLEASE!
        </Button>
        <p className="text-sm sm:text-xs font-normal text-color-text">No spam, ever. Only valueable content!</p>
      </div>
    </div>
  );
};

export default Newsletter;
