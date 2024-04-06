import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";

const Projects = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">

        <main className="contentWrapper">

          <h1 className="text-4xl font-bold w-fit mb-10 green-text-bg-gradient">Work & Hobby.</h1>


        </main>
        <Subscription />
      </div>
      
    </section>
  )
}

export default Projects;