import Link from "next/link";
import DigitalHandSign from "./DigitalHandSign";
import CalltoAction from "./CalltoAction";
import NextParagraph from "./NextParagraph";

const Introduction = () => {
  return (
    <div>
      <h1 className="heading pink-text-bg-gradient">Who, What & Why?</h1>

      {/* <video
          className="w-full sm:h-[282.326px] rounded-md mb-5"
          src="/videos/abhijayWalkingInCyberworld.mp4"
          autoPlay loop playsInline webkit-playsinline="true" 
        /> */}

      <div>
        <p className="text-color-text font-light">
          In the fast-paced tech world, keeping up is tough. Product Hunt and
          HubSpot launch features daily, and AI is everywhere. Standing still
          means falling behind.
          <NextParagraph />
          That&apos;s where I come in. With over
          <span className="text-highlighted"> 4+ years of experience </span>
          as a freelance software engineer and technical consultant, I help turn
          ideas into fully functional digital products. I offer practical
          solutions and bridge the tech gap for non-tech individuals.
          <NextParagraph />
          For me,
          <span className="text-highlighted ">
            {" "}
            software engineering is an art{" "}
          </span>
          , akin to Da Vinci&apos;s painting. I prioritize researching new
          methodologies to develop{" "}
          <Link
            href={"/projects"}
            className="primary-text font-medium hover:underline underline-offset-4"
          >
            optimized solutions
          </Link>
          , rather than simply replicating code. I&apos;m passionate about
          <span className=" "> algorithms & UI/UX </span>
          design that&apos;s why I love educating fellow developers about my
          unique approaches to solving problems through videos & writing{" "}
          <Link
            href={"/blog"}
            className="primary-text font-medium hover:underline underline-offset-4"
          >
            blogs
          </Link>{" "}
          in my free time.
          <NextParagraph />
          Apart from coding, I enjoy playing my piano, reading about finance and
          psychology, watching arthouse movies, and sometimes playing chess.
          <NextParagraph />
          
          <span className="text-highlighted">
            tl;dr: i&apos;m an artist who aims for his art to leave behind a
            lasting legacy!
          </span>

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
