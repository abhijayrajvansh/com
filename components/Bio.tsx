import Link from "next/link";

const ShortIntro = () => {
  return (
    <div className="space-y-3 sm:space-y-5 font-medium">
      <p className="text-xl space-x-2 mt-7">
        Hi, I&apos;m
        <span className={`font-medium primary-text`}>
          {" "}
          Abhijay Rajvansh
        </span>
      </p>

      <h1 className="text-4xl py-2 sm:text-5xl font-medium">
        <span>I make </span>
        <span
          className="
            bg-gradient-to-r from-[#1cbc56] to-[#1cbc56] dark:from-[#6dd9c9] dark:to-[#68fd81] bg-cover bg-clip-text text-transparent font-semibold
          "
        >
          full-stack
        </span>
        <span>
          {" "}
          softwares that people{" "}
          <span className="bg-gradient-to-b from-[#FD6BCE] to-[#F85798] bg-cover bg-clip-text text-transparent font-semibold">love.</span>
        </span> 
      </h1>

      <p className="font-light text-color-text leading-relaxed">
        Freelance Web & Mobile Developer, Former Silicon Valley Intern, Apple
        Developer Awardee, Former AI/ML Researcher @L&D, UK and{" "}
        <Link
          className="primary-text font-medium sm:font-normal hover:underline underline-offset-4"
          href={"/about"}
        >
          more...
        </Link>
      </p>
    </div>
  );
};

export default ShortIntro;
