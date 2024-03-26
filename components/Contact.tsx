import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";
import SocialLinks from "./SocialLinks";
import Guestbook from "./Guestbook";
import CalltoAction from "./CalltoAction";

const Contact = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">

        <main className="contentWrapper">

          <h1 className="text-5xl font-semibold mb-10">Let&apos;s Connect!</h1>

          <SocialLinks />

          <CalltoAction />

          <Guestbook/>

        </main>
        <Subscription />
      </div>
      
    </section>
  )
}

export default Contact;