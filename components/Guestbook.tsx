import Copyright from "./Copyright";
import Header from "./Header";
import NavigationTab from "./NavigationTab";
import SocialConnections from "./SocialConnections";
import Spotify from "./Spotify";
import ThanksNote from "./ThanksNote";

const Guestbook = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">
        <main className="contentWrapper">
          <h1 className="text-4xl pink-text-bg-gradient font-bold mb-10 min-w-[382px]">
            Sign my guestbook!
          </h1>
          ...comments!
        </main>

        <section className="mb-24">
          <div className="my-10 lg:hidden"></div>
          <SocialConnections />
          <Spotify />
          <ThanksNote />
          <Copyright />
        </section>
      </div>
    </section>
  );
};

export default Guestbook;
