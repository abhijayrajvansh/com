import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./Subscription";

const Blog = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper">

        <main className="contentWrapper">

          <h1 className="text-4xl font-semibold">My Blog</h1>

        </main>


        <Subscription />
      </div>
      
    </section>
  )
}

export default Blog;