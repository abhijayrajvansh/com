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

          <h1 className="text-4xl sm:text-5xl font-semibold mb-10">Projects</h1>




        </main>
        <Subscription />
      </div>
      
    </section>
  )
}

export default Projects;