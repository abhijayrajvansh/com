import Link from "next/link";

const ShortIntro = () => {
  return (
    <div className="space-y-3 sm:space-y-5 font-medium">
      <h1 className="sm:text-2xl text-xl mt-7">
        <span>Hi, I&apos;m</span>
        <span className="font-medium primary-text">
          &nbsp;Abhijay Rajvansh&nbsp;
        </span>
      </h1>

      <h1 className="text-4xl py-2 sm:text-5xl font-medium sm:font-semibold">
        <span>I make</span>
        <span className="text-bg-green-gradient font-semibold">
          &nbsp;full-stack
        </span>
        <span> softwares that people </span>
        <span className="text-bg-pink-gradient font-semibold">love.</span>
      </h1>

      <p className="font-light sm:text-lg text-color-text leading-relaxed">
        Freelance Web & Mobile Developer, Former Silicon Valley Intern, Open
        Source Contributor, Former AI/ML Researcher @NHS, UK and &nbsp;
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
