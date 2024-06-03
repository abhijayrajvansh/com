import Link from "next/link";
import DigitalHandSign from "./DigitalHandSign";
import CalltoAction from "./CalltoAction";

const Introduction = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 pink-text-bg-gradient">
        Who, What & Why?
      </h1>

      <div className="mb-5">
        <video
          className="w-full sm:h-[282.326px] rounded"
          src="/videos/abhijayWalkingInCyberworld.mp4"
          autoPlay
          loop
          playsInline
          webkit-playsinline="true"
        ></video>
      </div>

      <div>
        <h2 className="mb-3 text-md">
          Let&apos;s start with
          <span className="text-xl text-highlighted-text font-semibold">
            {" "}
            &apos;Why?&apos;
          </span>
        </h2>

        <p className="text-color-text font-light mb-3">
          In the fast-paced tech world, keeping up is tough. Product Hunt and
          HubSpot launch features daily, and AI is everywhere. Standing still
          means falling behind.
          <br />
          <br />
          That's where I come in. With over
          <span className="text-highlighted-text font-normal">
            {" "}
            4+ years of experience
            {" "}
          </span>
          as a freelance software engineer and technical consultant, I help turn
          ideas into fully functional digital products. I offer practical
          solutions and bridge the tech gap for non-tech individuals.
          <br />
          <br />

          For me, 
          <span className="text-highlighted-text font-normal">
            {" "}
            software engineering is an art
            {" "}
          </span>
          , akin to Da Vinci's painting. I prioritize researching about new methodologies for optimized solutions over just copying code. I'm passionate about 
          
          <span className="text-highlighted-text font-normal">
            {" "}
            algorithms and UI/UX
            {" "}
          </span>
          which you can observe through {" "}
          <Link href={'/projects'} className="primary-text font-medium hover:underline underline-offset-4">
          my projects.
          </Link>
          {" "}I also love educating fellow developers through blogging.
    
          <br />
          <br />
          <span>
            When I&apos;m not coding, I spend my time trading, reading about
            finance & user psychology, watching arthouse movies and I play
            chess.
          </span>
        </p>

        <p className="text-highlighted-text font-light">
          p.s. i&apos;m an artist who aims for his art to leave behind a lasting
          legacy!
        </p>

        <DigitalHandSign />
      </div>

      <div className="my-10">
        <h1 className="text-3xl font-semibold my-2 yellow-text-bg-gradient">
          Let&apos;s Connect!
        </h1>
        <CalltoAction />
      </div>
    </div>
  );
};

export default Introduction;
