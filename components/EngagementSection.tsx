import Newsletter from "./Newsletter"
import Spotify from "./Spotify";
import TechnicalSkills from "./TechnicalSkills";
import ThanksNote from "./ThanksNote";
import Twitter from "./Twitter";

const EngagementSection = () => {
  return (
    <section>
      <Newsletter tilt="left" />
      <TechnicalSkills />
      {/* <Twitter tilt="left" /> */}
      {/* <Spotify tilt="right" /> */}
      <ThanksNote tilt="left" />
    </section>
  )
}

export default EngagementSection;