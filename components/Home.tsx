import Header from "./Header";
import NavigationTab from "./NavigationTab";
import RecentProjects from "./RecentProjects";
import Awwwards from "@/components/Awwwards";
import ShortIntro from "@/components/ShortIntro";
import CuriousChildinMe from "./CuriousChildinMe";
import RecentBlogs from "./RecentBlogs";
import TechnicalSkills from "./TechnicalSkills";
import Newsletter from "./Newsletter";
import Twitter from "./Twitter";
import EngagementSection from "./EngagementSection";
import SocialLinks from "./SocialLinks";
import AddGap from "./AddGap";

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

						<RecentBlogs />

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