import Header from "./Header";
import NavigationTab from "./NavigationTab";
import SocialLinks from "./SocialLinks";
import Subscription from "./EngagementSection";

const Contact = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper">

        <main className="contentWrapper">

          <h1 className="text-5xl font-semibold mb-16">Contact Me</h1>

          <SocialLinks />


        </main>


        <Subscription />
      </div>
      
    </section>
  )
}

export default Contact;