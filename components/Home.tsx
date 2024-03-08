import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./Subscription";
import RecentProjects from "./RecentProjects";
import DummyTextSpace from "./DummyTextSpace";
import Awwwards from "@/components/Awwwards";
import ShortIntro from "@/components/ShortIntro";
import CuriousChildinMe from "./CuriousChildinMe";

const Home = () => {

	return (
			<section className="wrapper">
				<Header />
				<NavigationTab />

				<div className="pageWrapper">
					
					{/* mid section */}
					<main className="contentWrapper">
						
						<CuriousChildinMe />


						<ShortIntro />


						<Awwwards />
						
										
						<RecentProjects />



						{/* <DummyTextSpace /> */}
						

					</main>
						
					{/* right section */}
					<Subscription />
				
				</div>

			</section>
	)
}

export default Home;