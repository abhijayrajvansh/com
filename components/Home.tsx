import Header from "./Header";
import NavigationTab from "./NavigationTab";
import { title, subtitle } from "@/components/primitives";
import ProjectCard from "./ProjectCard";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Home = () => {
	return (
		<section>
			<Header />
			<NavigationTab />
			<main>
				
				{/* banner */}
				<img className='rounded-xl shadow-xl' src="/childVersionofMyself.webp" alt="childVersionOfMyself" />

				{/* short intro and tagline */}
				<div className="space-y-5 my-5 font-medium">

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
					<h1 className={`font-medium text-2xl inline-block mt-5`}>
						Recent Projects
					</h1>
					
					<div className="flex flex-col sm:flex-row sm:space-x-7">
						<ProjectCard 
							title={siteConfig.projects.twitter.title}
							description={siteConfig.projects.twitter.description}
							type={siteConfig.projects.twitter.type}
							thumbnail={siteConfig.projects.twitter.thumbnail}
							sourceCodeLink={siteConfig.projects.twitter.sourceCodeLink}
							liveProjectLink={siteConfig.projects.twitter.liveProjectLink}
							tilt="-rotate-1" 
						/>

						<ProjectCard 
							title={siteConfig.projects.twitter.title}
							description={siteConfig.projects.twitter.description}
							type={siteConfig.projects.twitter.type}
							thumbnail={siteConfig.projects.twitter.thumbnail}
							sourceCodeLink={siteConfig.projects.twitter.sourceCodeLink}
							liveProjectLink={siteConfig.projects.twitter.liveProjectLink} 
							tilt="rotate-1"
						/>

					</div>

					<div className="text-md flex gap-2"> 
						<p>See a list of all my projects</p>
						<Link className="text-primary-600 font-medium" href={'/projects'}>On my projects page.</Link>
					</div>

				</div>

				{/* to work on fixed navbar, seperates away on zoom out .. not correct */}
				{/* also i havent erapper nav into main of home, which is correct but it is NOT flex and then i have used fixed left... that's bad ig */}

				<p className="mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sint qui architecto cumque excepturi est neque dolores asperiores fuga libero illum commodi, quia ab, nobis iste. Nam officiis illum quae est fuga, delectus aliquid facilis. Est iure adipisci inventore expedita. Magnam ex velit libero cum quaerat ducimus ut sint mollitia quod ullam eveniet nisi fugit delectus recusandae ea, est repellat vel natus, aperiam accusantium nesciunt itaque in? Officiis cupiditate, omnis vero repellat pariatur eos fugit optio vitae placeat exercitationem temporibus vel quaerat recusandae itaque eveniet ratione reiciendis rem quibusdam aut in aperiam. Fuga alias cum officia maiores, quis eos dolorum quod sed rerum eum deleniti commodi nemo facilis asperiores qui! Aut.</p>

			</main>
		</section>
	)
}

export default Home;