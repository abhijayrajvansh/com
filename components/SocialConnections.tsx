import SocialLinks from "./SocialLinks";

interface SocialConnectionsProps {
  tilt: string,
}

const SocialConnections: React.FC<SocialConnectionsProps> = ({tilt}) => {
  return (
    <div className="w-full px-5 sm:ml-2">
      <div className={`flex flex-col items-center gap-4 rounded-xl p-4 font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-default-200/50 mb-5 shadow-xl bg-gradient-to-b from-projectCardTop to-projectCardBotttom ${tilt === 'left' ? 'hover:-rotate-1' : 'hover:rotate-1'} transition py-7`}>
        <p className="font-light text-sm">Find me on these platforms</p>
        <h3 className="font-semibold text-2xl pink-text-bg-gradient">Reach out to me!</h3>
        <SocialLinks showOnMobile iconSize={27}/>
      </div>

    </div>
  )
}

export default SocialConnections;