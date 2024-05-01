'use client';

import Header from "./Header";
import NavigationTab from "./NavigationTab";
import RecentProjects from "./RecentProjects";
import ShortIntro from "@/components/ShortIntro";
import FeaturedArticles from "./FeaturedArticles";
import Banner from "@/components/Banner"
import Newsletter from "./Newsletter";
import ThanksNote from "./ThanksNote";
import Spotify from "./Spotify";
import Twitter from "./Twitter";
import TechnicalSkills from "./TechnicalSkills";
import SocialConnections from "./SocialConnections";
import Services from "./Services";
import { useEffect, useState } from "react";
import PreLoader from "./PreLoader";

const Home = () => {

	const [isLoading, setIsLoading  ] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
			<>
			{
				isLoading && 
				<div className="absolute z-30 w-full">
					<PreLoader />
				</div>
			}
				<section className="wrapper">
					<Header />
					<NavigationTab />

					<div className="pageWrapper">
						<main className="contentWrapper">

							<Banner />

							<ShortIntro />

							<FeaturedArticles />

							<Services />

							<RecentProjects />
						</main>
							
						<section>
							<Newsletter tilt="left" />
							
							<SocialConnections tilt="right" />

							<TechnicalSkills />
							
							<Twitter tilt="right"/>
							
							<Spotify tilt="left"/>
							
							<ThanksNote tilt="right" />
						</section>
						
					</div>
				</section>
			</>
	)
}

export default Home;
