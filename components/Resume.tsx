import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";

const Resume = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper">

        <main className="contentWrapper">


        
          <h1 className="text-5xl font-semibold mb-10">Resume</h1>
          <p>data</p>



        </main>


        <Subscription />
      </div>
      
    </section>
  )
}

export default Resume;