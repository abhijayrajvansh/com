import Header from "./Header";
import NavigationTab from "./NavigationTab";
import RecentProjects from "./RecentProjects";
import Awwwards from "@/components/Awwwards";
import ShortIntro from "@/components/ShortIntro";
import FeaturedArticles from "./FeaturedArticles";
import Banner from "@/components/Banner"
import Newsletter from "./Newsletter";
import ThanksNote from "./ThanksNote";
import Spotify from "./Spotify";
import Twitter from "./Twitter";

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
						<Newsletter tilt="left" />
						<Spotify musicThumbnai="/spotify.jpeg" tilt="right"/>
						<Twitter tilt="left"/>
						<ThanksNote tilt="right" />
					</section>
					
				</div>
			</section>
	)
}

export default Home;