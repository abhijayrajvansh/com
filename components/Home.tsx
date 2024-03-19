import Header from "./Header";
import NavigationTab from "./NavigationTab";
import Subscription from "./EngagementSection";
import RecentProjects from "./RecentProjects";
import Awwwards from "@/components/Awwwards";
import ShortIntro from "@/components/ShortIntro";
import CuriousChildinMe from "./CuriousChildinMe";
import RecentArticles from "./RecentArticles";
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

						<RecentArticles />

						<AddGap vertical="3" />

						<RecentProjects />

						<AddGap vertical="3" />
						
						<Awwwards />
						
					</main>
						
					{/* right section */}
					<Subscription />
				
				</div>

			</section>
	)
}

export default Home;