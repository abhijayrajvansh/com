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

          <h1 className="text-4xl pink-text-bg-gradient font-bold mb-10">Shoot Me Email.</h1>

          <div className="space-y-5">
            <CalltoAction />

            <h3 className="text-xl font-medium">Find me on these platforms:</h3>

            <SocialLinks />
            {/* <Guestbook/> */}
          </div>

        </main>
        <Subscription />
      </div>
      
    </section>
  )
}

export default Contact;