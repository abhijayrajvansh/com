import Header from "./Header";
import NavigationTab from "./NavigationTab";
import SocialLinks from "./SocialLinks";
import Subscription from "./EngagementSection";
import Playground from "./Playground";

const Contact = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">

        <main className="contentWrapper">

          <h1 className="text-5xl font-semibold mb-10">Contact Me</h1>

          <SocialLinks />
        

        </main>


        <Subscription />
      </div>
      
    </section>
  )
}

export default Contact;