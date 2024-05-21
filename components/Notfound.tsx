import Header from "./Header";
import NavigationTab from "./NavigationTab";

const Notfound = () => {
  return (
    <section className="wrapper">
        <Header />
        <NavigationTab />
        <div className="pageWrapper">
          <main className="contentWrapper">
            <div className="flex flex-col items-center justify-center sm:pt-20">
              <p className="text-2xl font-light">404 | not-found.</p>
              <p className="text-sm">there&apos;s nothing here, go back :P</p>
            </div>
            
          </main>
        </div>
      </section>
  );
};

export default Notfound;
