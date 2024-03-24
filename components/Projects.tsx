import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";
import Playground from "./Playground";
import NewProjectCard from "./NewProjectCard";

const Projects = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper sm:mt-10">

        <main className="contentWrapper">

          <h1 className="text-5xl font-semibold mb-10">Projects</h1>
          



            <NewProjectCard />




        </main>
        <Subscription />
      </div>
      
    </section>
  )
}

export default Projects;