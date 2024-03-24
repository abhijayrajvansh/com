import Header from "./Header";
import NavigationTab from "./NavigationTab";
import SocialLinks from "./SocialLinks";
import Subscription from "./EngagementSection";

const Guestbook = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">

        <main className="contentWrapper">

          <h1 className="text-5xl font-semibold mb-10">Guestbook</h1>
        

        </main>


        <Subscription />
      </div>
      
    </section>
  )
}

export default Guestbook;