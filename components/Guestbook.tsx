import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";
import CalltoAction from "./CalltoAction";

const Guestbook = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">

        <main className="contentWrapper">

          <h1 className="text-4xl pink-text-bg-gradient font-bold mb-10">Sign my Guestbook</h1>

          ...comments!

        </main>
        <Subscription />
      </div>
      
    </section>
  )
}

export default Guestbook;