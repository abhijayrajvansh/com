import Header from "./Header";
import NavigationTab from "./NavigationTab";
import RecentProjects from "./RecentProjects";
import Awwwards from "@/components/Awwwards";
import ShortIntro from "@/components/ShortIntro";
import CuriousChildinMe from "./CuriousChildinMe";
import FeaturedArticles from "./FeaturedArticles";
import EngagementSection from "./EngagementSection";
import SocialLinks from "./SocialLinks";

const Home = () => {

	return (
			<section className="wrapper">
				{/* top header */}
				<Header />
				
				{/* left section */}
				<NavigationTab />

				<div className="pageWrapper">
					
					{/* mid section */}
					<main className="contentWrapper">
						<CuriousChildinMe />

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