import SubscriptionCard from "./Newsletter"
import Spotify from "./Spotify";
import TechnicalSkills from "./TechnicalSkills";
import ThanksNote from "./ThanksNote";
import Twitter from "./Twitter";

const EngagementSection = () => {
  return (
    <section>
      <TechnicalSkills />
      <SubscriptionCard />
      <Twitter />
      <Spotify />
      <ThanksNote />
    </section>
  )
}

export default EngagementSection;