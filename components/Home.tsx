import Header from "./Header";
import NavigationTab from "./NavigationTab";
import RecentProjects from "./RecentProjects";
import Awwwards from "@/components/Awwwards";
import ShortIntro from "@/components/ShortIntro";
import FeaturedArticles from "./FeaturedArticles";
import EngagementSection from "./EngagementSection";
import SocialLinks from "./SocialLinks";
import Banner from "@/components/Banner"

const Home = () => {

	return (
			<section className="wrapper">
				<Header />
				
				<NavigationTab />

				<div className="pageWrapper">
					
					<main className="contentWrapper">

						<Banner />

						<ShortIntro />

						<SocialLinks />

						<FeaturedArticles />

						<Awwwards />

						<RecentProjects />
					</main>
						
					{/* right section */}
					<EngagementSection />
				</div>
			</section>
	)
}

export default Home;