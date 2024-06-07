import Link from "next/link";
import DigitalHandSign from "./DigitalHandSign";
import CalltoAction from "./CalltoAction";

const Introduction = () => {
  return (
    <div>
      <h1 className="heading pink-text-bg-gradient mb-5">Who, What & Why?</h1>

      <img
        src={"/images/abhijayrajvansh-avatar.jpeg"}
        alt="abhijay-rajvansh-avatar.png"
        className="flex-none mr-5 sm:h-[240px] sm:float-left sm:p-0 rounded-lg"
      />
      <p className="text-paragraph mt-3">
        <span className="font-medium text-4xl">T</span>he rapidly evolving tech
        industry makes staying updated challenging. Product Hunt and HubSpot
        release new features daily, and AI is everywhere. Standing still means
        falling behind.
      </p>

      <p className="text-paragraph mt-3">
        That&apos;s where I come in. With over
        <span className="text-highlighted"> 4+ years of experience </span>
        as a freelance software engineer and technical consultant, I help turn
        ideas into fully functional digital products. I offer practical
        solutions and bridge the tech gap for non-tech individuals.
      </p>

      <p className="text-paragraph mt-3">
        For me,{" "}
        <span className="text-highlighted">
          {" "}
          software engineering is an art
        </span>
        , akin to Da Vinci&apos;s painting. I prioritize researching new
        methodologies to develop{" "}
        <Link href={"/projects"} className="text-link">
          optimized solutions
        </Link>
        , rather than simply replicating code. I&apos;m passionate about
        algorithms & UI/UX design that&apos;s why I love educating fellow
        developers about my unique approaches to solving problems through videos
        & writing{" "}
        <Link href={"/blog"} className="text-link">
          blogs
        </Link>{" "}
        in my free time.
      </p>
      <p className="text-paragraph mt-3">
        Apart from coding, I enjoy playing my piano, reading about finance and
        psychology, watching arthouse movies, and sometimes playing chess.
      </p>
      <p className="text-highlighted mt-3">
        tl;dr: i&apos;m an artist who aims for his art to leave behind a lasting
        legacy!
      </p>

      <DigitalHandSign />

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
