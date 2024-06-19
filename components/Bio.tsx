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

      <h1 className="text-4xl py-2 sm:text-5xl font-medium sm:font-semibold">
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
          <span className="bg-gradient-to-r from-[#fb75ab] to-[#f82e7f] dark:from-[#f98dd7] dark:to-[#f35c98] bg-cover bg-clip-text text-transparent font-semibold">love.</span>
        </span> 
      </h1>

      <p className="font-light sm:text-lg text-color-text leading-relaxed">
        Freelance Web & Mobile Developer, Former Silicon Valley Intern, Open Source Contributor, Former AI/ML Researcher @NHS, UK and{" "}
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
