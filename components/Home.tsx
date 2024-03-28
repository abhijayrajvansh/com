import Header from "./Header";
import NavigationTab from "./NavigationTab";
import RecentProjects from "./RecentProjects";
import Awwwards from "@/components/Awwwards";
import ShortIntro from "@/components/ShortIntro";
import FeaturedArticles from "./FeaturedArticles";
import Banner from "@/components/Banner"
import Newsletter from "./Newsletter";
import ThanksNote from "./ThanksNote";

const Home = () => {

	return (
			<section className="wrapper">
				<Header />
				
				<NavigationTab />

				<div className="pageWrapper">
					
					<main className="contentWrapper">

						<Banner />

						<ShortIntro />

						<FeaturedArticles />

						<Awwwards />

						<RecentProjects />
					</main>
						
					<section>
						{/* right section */}
						<Newsletter tilt="left" />
						<ThanksNote tilt="left" />
					</section>
				</div>
			</section>
	)
}

export default Home;