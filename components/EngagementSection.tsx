import Newsletter from "./Newsletter"
import Spotify from "./Spotify";
import TechnicalSkills from "./TechnicalSkills";
import ThanksNote from "./ThanksNote";
import Twitter from "./Twitter";

const EngagementSection = () => {
  return (
    <section>
      <TechnicalSkills />
      <Newsletter />
      <Twitter />
      <Spotify />
      <ThanksNote />
    </section>
  )
}

export default EngagementSection;