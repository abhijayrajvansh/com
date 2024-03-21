import Header from "./Header";
import NavigationTab from "./NavigationTab";
import RecentProjects from "./RecentProjects";
import Awwwards from "@/components/Awwwards";
import ShortIntro from "@/components/ShortIntro";
import CuriousChildinMe from "./CuriousChildinMe";
import RecentArticles from "./RecentBlogs";
import AddGap from "./AddGap";
import TechnicalSkills from "./TechnicalSkills";
import Newsletter from "./Newsletter";
import Twitter from "./Twitter";

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

						<Awwwards />

						<RecentProjects />
					</main>
						
					{/* right section */}
					<div className="flex flex-col">
						<Newsletter />
						<Twitter />
						<TechnicalSkills />
						{/* newsletter */}
						{/* spotify card */}
						{/* thanks note */}
					</div>
				
				</div>

			</section>
	)
}

export default Home;