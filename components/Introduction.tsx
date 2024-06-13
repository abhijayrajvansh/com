import Link from "next/link";
import DigitalHandSign from "./DigitalHandSign";
import CalltoAction from "./CalltoAction";

const Introduction = () => {
  return (
    <div>
      <h1 className="heading pink-text-bg-gradient">Who, What & Why?</h1>
      <p className="mb-5 text-paragraph">Updated at — Mar 22nd, 2024</p>
      <img
        src={"/images/abhijayrajvansh-avatar.jpeg"}
        alt="abhijay-rajvansh-avatar.png"
        className="flex-none mr-5 sm:h-[240px] sm:float-left sm:p-0 rounded-lg"
      />
      <p className="text-paragraph mt-3">
        <span className="font-medium text-4xl">T</span>he fast-paced nature of
        the tech industry makes it hard to keep up. Product Hunt and HubSpot
        launch new features every day, and AI is everywhere. Not advancing
        equates to being left behind.
      </p>

      <p className="text-paragraph mt-3">
        That&apos;s where I come in. With over
        <Link href={'/experience'} className="text-link"> 4+ years of experience </Link>
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
      <p className="text-highlighted mt-5">
        tl;dr: i&apos;m an artist who aims for his art to leave behind a lasting
        legacy!
      </p>

      <DigitalHandSign />
    </div>
  );
};

export default Introduction;
