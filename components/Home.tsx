import Link from "next/link";
import Header from "./Header";
import NavigationTab from "./NavigationTab";
import { title, subtitle } from "@/components/primitives";
import Playground from "./Playground";
import { colorVariants } from "@nextui-org/react";

const Home = () => {
	return (
		<section>
			<Header />
			<NavigationTab />
			<main>
				
				{/* banner */}
				<img className='rounded-xl shadow-xl' src="/homeBanner.webp" alt="childVersionOfMyself" />

				{/* short intro and tagline */}
				<div className="space-y-5 py-5 font-medium">

					<p className="text-[1.3rem] space-x-2 mb-4">
						<span>Hi, I'm</span>
						<span className={`font-semibold text-primary-500 text-[1.5rem]`}>Abhijay Rajvansh.</span>
					</p>
					{/* full-stack: className="bg-success-100 bg-opacity-60 px-2 rounded-xl text-success-700" */}
					<h1 className={`${title()}text-[2rem] leading-tight font-semibold`}>
						<span>I develop </span>
							<span className={title({color:'green'})}>full-stack</span>
							<span> softwares that people <span className={title({color: 'pink'})}>love.</span>
						</span>
					</h1>

					<p className="font-light text-[1.05rem] text-default-500 leading-relaxed">
						<span className="font-medium">Freelance</span> Web & Mobile Developer, <span className="font-medium">Silicon Valley</span> Intern, <span className="font-medium">Apple's</span> iOS Development Trainee, Former <span className="font-medium">AI/ML Researcher</span> @L&D Hospital, UK and <Link className="text-primary-600 font-medium" href={'/about'}>more...</Link>
					</p>

				</div>

				{/* Projects Exhibition */}
				<div>
					<h1 className={`font-medium text-xl ${subtitle()}`}>Recent Projects</h1>
					<Playground />
				</div>

			</main>
		</section>
	)
}

export default Home;