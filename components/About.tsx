import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./Subscription";
import Link from "next/link";
import { title } from "./primitives";

const About = () => {
  return (
    <section className="wrapper">
      <Header />
      <NavigationTab />

      <div className="pageWrapper">

        <main className="contentWrapper">


        about page



        </main>


        <Subscription />
      </div>
      
    </section>
  )
}

export default About;