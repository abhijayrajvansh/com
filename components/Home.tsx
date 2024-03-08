import Header from "./Header";
import NavigationTab from "./NavigationTab";
import { title } from "@/components/primitives";
import ProjectCard from "./ProjectCard";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import Subscription from "./Subscription";

const Home = () => {

	const addDummyTextinHome = false;	
	const showProjectsExhibition = true;

	return (
			<section className="wrapper">
				<Header />
				<NavigationTab />

				<div className="lg:flex">

					<main className="px-4 sm:ml-[100px] lg:ml-[230px] sm:min-w-[750px] sm:max-w-[750px]">
						{/* home page (middle column starts here...) */}

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
						{showProjectsExhibition &&
						<div>

							<h1 className={`font-medium text-2xl inline-block mt-5`}>
								Recent Projects
							</h1>
							
							{/* top 2 projects showcase */}
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


							{/* another 2 projects showcase */}

							<div className="flex flex-col sm:flex-row sm:space-x-7">
								{/* add project cards here... */}
							</div>


							<div className="text-md sm:mb-10 font-light flex gap-1"> 
								<p>See a list of all my projects</p>
								<Link className="text-primary-600 font-normal" href={'/projects'}>On my projects page.</Link>
							</div>
						</div>}

						{addDummyTextinHome && <div>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident soluta cupiditate cum accusamus ex rem deleniti, optio consectetur quam voluptates deserunt eveniet praesentium inventore reprehenderit veniam earum unde quasi architecto. Dignissimos assumenda, officia temporibus praesentium dicta maiores magnam animi harum voluptatum deserunt nemo, ad iste distinctio, quidem nesciunt libero perferendis autem molestias nostrum. Ut nostrum expedita magnam consequatur perspiciatis voluptatum totam veritatis saepe, sunt at minima quas atque quis quaerat nulla reiciendis maiores dicta nam deserunt culpa fuga! Deserunt libero placeat dicta, reiciendis, rerum, saepe enim provident quis corporis nemo excepturi illo molestiae consequuntur? Voluptates dolore voluptatum, ratione, culpa quod cum animi molestiae adipisci suscipit in eaque consectetur consequatur quisquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium explicabo, sed labore cumque fugit nostrum similique aut ipsam quisquam nihil repudiandae qui illo velit laboriosam numquam itaque commodi id iusto accusamus repellendus? Unde, veniam ea? Ratione blanditiis praesentium dolores odit laborum nam, assumenda id, aliquid quibusdam impedit adipisci porro eaque, laboriosam voluptatum labore. Facilis beatae omnis minus. Quo quis esse, ratione sed eius maiores assumenda doloremque cupiditate velit asperiores nihil explicabo libero reiciendis quia iste molestias ipsum autem dolorem non hic aspernatur aliquam pariatur et. Quas praesentium quasi commodi, accusamus assumenda facilis magni earum consequuntur maiores placeat et, ad consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem nam minima minus blanditiis necessitatibus eveniet doloremque enim id. Recusandae hic architecto labore aperiam, laborum quae nesciunt culpa itaque? Doloremque sunt illum, id iste quasi dolor illo nihil minima laboriosam mollitia maxime sit voluptatibus dolorem veritatis enim sapiente non libero doloribus laborum vero maiores accusamus, iusto voluptas. Illo possimus distinctio voluptas quae quia ut laboriosam non deleniti commodi placeat reiciendis reprehenderit cumque ratione culpa, nihil ad perspiciatis laborum inventore quasi unde voluptatibus cum nulla. Nisi, nemo sint! Sapiente provident voluptates reprehenderit nisi praesentium inventore, sed, laudantium esse culpa, ullam ad. A aliquid praesentium ipsum exercitationem. Voluptatem a laborum dolorum saepe cupiditate reprehenderit ab odit provident, voluptates iusto laboriosam unde voluptas! Harum illum ad veniam nisi officiis at mollitia perferendis quas molestiae natus voluptates deserunt, earum suscipit placeat beatae enim eveniet dicta est quidem, et ut quasi! Quam aliquid accusamus delectus, veniam omnis aspernatur voluptates cum, atque porro, aliquam necessitatibus. Id ratione aut possimus, non natus quia pariatur est, molestias quo aliquam eaque at illum dicta asperiores ipsa velit ipsam sint! Vero, alias est laudantium veritatis pariatur laborum molestiae vitae, distinctio doloribus, fuga ea in fugiat iste culpa porro! Deleniti, molestiae! Aliquam cupiditate aspernatur mollitia nihil dolore facilis in quisquam illum consectetur error delectus non eos nobis ab quidem, aliquid nulla voluptate minima, placeat repudiandae. Inventore commodi, officia dignissimos et similique iure a incidunt numquam illo quidem laboriosam velit facilis excepturi soluta consectetur recusandae distinctio. Tempora voluptates, ipsa consequatur aspernatur saepe architecto nam obcaecati officia quidem excepturi ipsam, ex laudantium repellendus quae. Repudiandae cupiditate blanditiis distinctio, impedit in amet! Quam soluta exercitationem, veniam vel praesentium corrupti ipsa laboriosam, officia iure natus, eius quae? Vel nam sequi consectetur libero ea labore quae! Delectus exercitationem libero animi, error nesciunt provident quis voluptatum iusto?
						</div>}
					</main>

					<Subscription />
				
				</div>

			</section>
	)
}

export default Home;