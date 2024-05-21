import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Newsletter from "./Newsletter";
import Twitter from "./Twitter";
import SocialConnections from "./SocialConnections";
import ThanksNote from "./ThanksNote";
import TechnicalSkills from "./TechnicalSkills";

const Guestbook = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">

        <main className="contentWrapper">

          <h1 className="text-4xl pink-text-bg-gradient font-bold mb-10">Sign my guestbook!</h1>

          ...comments!

        </main>

        <section>
          {/* <Newsletter /> */}
          <TechnicalSkills />
          <Twitter />
          <SocialConnections  />
          <ThanksNote />
        </section>
      </div>
      
    </section>
  )
}

export default Guestbook;
