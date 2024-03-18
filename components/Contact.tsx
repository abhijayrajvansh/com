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


        <SocialLinks />

          contact page
        </main>


        <Subscription />
      </div>
      
    </section>
  )
}

export default Contact;