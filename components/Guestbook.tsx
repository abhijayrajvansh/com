import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Newsletter from "./Newsletter";
import SocialConnections from "./SocialConnections";
import Spotify from "./Spotify";
import DummySpace from "./DummySpace";

const Guestbook = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">
        <main className="contentWrapper">
          <h1 className="text-4xl pink-text-bg-gradient font-bold mb-10">
            Sign my guestbook!
          </h1>
          ...comments!
          {/* temporary y-axis space for noraml width for above sm & below xl screens */}
          <p className="text-background hidden sm:block">
            this is sample text paragraph to add minimum width for the feed
            section in the projects page as it will shrink.
          </p>
        </main>

        <section>
          <div className="my-10 lg:hidden"></div>
          <Newsletter />
          <Spotify />
          <SocialConnections />
          <DummySpace />
        </section>
      </div>
    </section>
  );
};

export default Guestbook;
