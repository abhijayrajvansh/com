import Link from "next/link";
import Header from "./Header";
import NavigationTab from "./NavigationTab";

const Home = () => {
	return (
		<section>
			<Header />
			<NavigationTab />
			<main>
				
				{/* banner */}
				<img className='rounded-2xl shadow-black shadow-md' src="/homeBanner.webp" alt="childVersionOfMyself" />

				{/* short intro and tagline */}
				<div className="space-y-3 py-10 font-medium">

					<p className="text-[1.3rem] space-x-2">
						<span>Hi, I'm</span>
						<span className="font-semibold text-primary-500">Abhijay Rajvansh.</span>
					</p>
					
					<h1 className="text-[2rem] leading-snug font-semibold">
						<span>I develop </span>
							<span className="bg-success-500 bg-opacity-50 px-2 rounded-lg">full-stack</span>
							<span> softwares that people <span className="bg-danger-500 bg-opacity-50 px-2 rounded-lg">love.</span>
						</span>
					</h1>

					<p className="font-normal text-[1.02rem] text-default-600 leading-relaxed">
						<span className="font-medium">Freelance</span> Web & Mobile Developer, <span className="font-medium">Silicon Valley</span> Intern, <span className="font-medium">Apple's</span> iOS Development Trainee, Former <span className="font-medium">AI/ML Researcher</span> @L&D Hospital, UK and <Link className="text-primary-600" href={'/about'}>more...</Link>
					</p>

				</div>
			
			</main>
		</section>
	)
}

export default Home;