import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";

const Projects = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper">

        <main className="contentWrapper">

          <h1 className="text-5xl font-semibold mb-10">Projects</h1>
          <p className="">data</p>

        </main>

        <Subscription />
      </div>
      
    </section>
  )
}

export default Projects;