import Newsletter from "./Newsletter"
import SocialConnections from "./SocialConnections";
import Spotify from "./Spotify";
import TechnicalSkills from "./TechnicalSkills";
import ThanksNote from "./ThanksNote";
import Twitter from "./Twitter";

const EngagementSection = () => {
  return (
    <section>
      <Newsletter tilt="left" />
      {/* <TechnicalSkills /> */}
      <Twitter tilt="left" />
      {/* <Spotify tilt="right" /> */}
      <SocialConnections tilt="left" />
      {/* <ThanksNote tilt="left" /> */}
    </section>
  )
}

export default EngagementSection;