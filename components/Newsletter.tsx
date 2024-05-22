"use client";

import { Button } from "./ui/button";


const Newsletter = () => {
  return (
    <div className="w-full px-5 sm:ml-2">
      <div
        className={`flex flex-col items-center gap-4 rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-border sm:mb-5 mb-3 shadow-md cardTop-BottomGradient transition py-7`}
      >
        <h3 className="text-xl sm:text-lg">Newsletter comming soon!</h3>

        <p className="font-normal text-color-text text-sm sm:text-xs text-center">
          Get remote job offers, freelancing advice & top developer tips with
          The Rajvansh Times.
        </p>

        <input
          disabled
          className="rounded-full bg-default/30 border border-border px-4 text-sm w-full py-2 sm:py-1 font-light"
          type="email"
          placeholder="enter your email..."
        />

        <Button disabled
          className="w-full text-sm font-medium text-white"
          size="sm"
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
