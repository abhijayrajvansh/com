import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";
import CalltoAction from "./CalltoAction";
import SocialLinks from "./SoicalLinks";

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

            <SocialLinks iconSize={30} showOnMobile />

          </div>

        </main>
        <Subscription />
      </div>
      
    </section>
  )
}

export default Contact;