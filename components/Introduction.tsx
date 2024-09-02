import DigitalHandSign from "./DigitalHandSign";
import LinkText from "./LinkText";
import Image from "next/image";
import avatar from "@/public/images/abhijayrajvansh-avatar.jpeg";

const Introduction = () => {
  return (
    <div>
      <h1 className="heading pink-text-bg-gradient">Who, What & Why?</h1>
      <p className="mb-5 text-paragraph">Updated at — Mar 22nd, 2024</p>
      <Image width={240} height={240}
        src={avatar}
        alt="abhijayrajvansh-avatar.jpeg"
        className="flex-none mr-5 sm:h-[240px] mt-4 sm:float-left sm:p-0 rounded-lg hidden sm:block"
        placeholder="blur"
      />
      <div className="flex items-center justify-center">
        <img
          src={"/images/abhijayrajvansh-avatar.jpeg"}
          alt="abhijayrajvansh-avatar.jpeg"
          className="rounded-lg sm:hidden"
        />
      </div>
      <p className="text-paragraph mt-3">
        <span className="font-medium text-4xl">T</span>he fast-paced nature of
        the tech industry makes it hard to keep up. Product Hunt and HubSpot
        launch new features every day, and AI is everywhere. Not advancing
        equates to being left behind.
      </p>

      <p className="text-paragraph mt-3">
        That&apos;s where I come in. With over
        <LinkText href={"/experience"}>4+ years of experience</LinkText>
        as a software engineer and consultant, I help brands and startup founders
        turn their ideas into digital products. I offer practical
        solutions to reduce costs without compromising security or scalability.
      </p>

      <p className="text-paragraph mt-3">
        For me,{" "}
        <span className="text-highlighted">
          {" "}
          software engineering is an art
        </span>
        , akin to Da Vinci&apos;s painting. I prioritize researching new
        methodologies to develop{" "}
        <LinkText href={"/projects"}>
          optimized solutions,
        </LinkText>
        rather than simply replicating code. I&apos;m passionate about
        end-user experience, finance, business logic and design that&apos;s why I also love educating fellow
        developers about my unique approaches to solving problems through videos
        & writing{" "}
        <LinkText href={"/blog"}>
          blogs.
        </LinkText>{" "}
      </p>
      <p className="text-paragraph mt-3">
        when i&apos;m not coding, I enjoy watching speculative-fiction movies, business podcasts ofc, reading about psychology and sometimes i touch grass 🌱.
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
