import SocialLinks from "./SocialLinks";

const SocialConnections = () => {
  return (
    <div className="w-full px-5 sm:ml-2">
      <div
        className={`flex flex-col items-center gap-2 rounded-xl font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-border mb-5 shadow-md cardTop-BottomGradient transition py-7`}
      >
        <p className="font-light text-sm">Find me on these platofrms</p>
        <h3 className="font-semibold text-2xl pink-text-bg-gradient">
          Connect with me via
        </h3>
        <SocialLinks showOnMobile iconSize={27} />
      </div>
    </div>
  );
};

export default SocialConnections;
