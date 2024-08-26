import GradientText from "./GradientText";
import LinkText from "./LinkText";

const ShortIntro = () => {
  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="sm:text-2xl font-medium sm:font-normal text-xl mt-7">
        <span>Hi, I&apos;m</span>
        <span className="primary-text">&nbsp;Abhijay Rajvansh</span>
      </div>

      <div className="text-3-half-xl py-2 sm:text-5xl xl:text-5xl font-semibold sm:font-semibold">
        I make
        <GradientText color={"sky"}>AI</GradientText>
        <GradientText className={'text-bg-skytogreen-gradient'}>&</GradientText>
        <GradientText color={"green"}>Blockchain</GradientText>
        <GradientText color={"pink"}>full-stack</GradientText>
        products.
      </div>

      <p className="font-light sm:text-lg text-paragraph">
        freelance web & mobile developer, former silicon valley engineer, former ai researcher @nhs, open source contributor, pianist and
        {/* 2x Founding Engineer at YC-backed Startups • Passionate Developer with expertise in Finance, User-Experience Psychology and */}
        <LinkText href={"/about"}>more...</LinkText>
      </p>
    </div>
  );
};

export default ShortIntro;
