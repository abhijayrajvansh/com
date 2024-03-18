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

        projects page

        </main>

        <Subscription />
      </div>
      
    </section>
  )
}

export default Projects;