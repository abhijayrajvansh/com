import Header from "./Header";
import NavigationTab from "./NavigationTab";
import RecentProjects from "./RecentProjects";
import Awwwards from "@/components/Awwwards";
import ShortIntro from "@/components/ShortIntro";
import FeaturedArticles from "./FeaturedArticles";
import EngagementSection from "./EngagementSection";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

const Home = () => {

	return (
			<section className="wrapper">
				<Header />
				
				<NavigationTab />

				<div className="pageWrapper">
					
					<main className="contentWrapper">

					<Tooltip showArrow={true} content="that's me in the cyberworld!" placement={'bottom'} color="foreground">
						<Image width={700} height={250} className='rounded-lg shadow-lg' src="/abhijayrajvansh-in-the-cyberworld.webp" alt="abhijay_as_curioustoddler_in_the_cyberworld" />
					</Tooltip>

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