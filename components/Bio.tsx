import GradientText from "./GradientText";
import LinkText from "./LinkText";

const ShortIntro = () => {
  return (
    <div className="space-y-3 sm:space-y-5">
      <div className="sm:text-2xl text-xl mt-7">
        <span>Hi, I&apos;m</span>
        <span className="primary-text">&nbsp;Abhijay Rajvansh</span>
      </div>

      <div className="text-4xl py-2 sm:text-5xl font-medium sm:font-semibold">
        <span>I make</span>
        <GradientText color={"green"}>full-stack</GradientText>
        <span>softwares that people</span>
        <GradientText color={"pink"}>love.</GradientText>
        <GradientText color={"yellow"}>blockchain</GradientText>

      </div>

      <p className="font-light sm:text-lg text-paragraph">
        Freelance Web & Mobile Developer, Former Silicon Valley Intern, OSS Contributor, Former AI/ML Researcher @NHS, UK and
        <LinkText href={'/about'}>more...</LinkText>
      </p>
    </div>
  );
};

export default ShortIntro;
