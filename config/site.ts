export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Abhijay Rajvansh | Freelance Web & Mobile Developer",
	
	description: "Are you looking for your website or mobile app? Consider it done with Abhijay Rajvansh's expertise in software development, design prowess, and strategic approach for the best outcome. Your desired needs are the priority here!",

	avatar: {
		src: "https://avatars.githubusercontent.com/u/82618814?v=4",
	},
	
	links: {
		github: "https://github.com/abhijayrajvansh",
		twitter: "https://x.com/rajvanshtwt",
    linkedin:"https://www.linkedin.com/in/abhijayrajvansh/",
		email:"mailto:abhijayrajvansh01@gmail.com",
	},

	projects: {
		twitter: {
			title: "Twitter 𝕏 Clone",
			type: "personal-project",
			description: "Next.js, Supabase, Drizzle ORM, TailwindCSS, Shadcn/ui, RadixUI, Typescript",
			sourceCodeLink: "https://github.com/abhijayrajvansh/twitter-clone-next.js",
			liveProjectLink: "https://github.com/abhijayrajvansh/twitter-clone-next.js"
		},
		
	},

	blogs: {
		twitter: {
			title: "Twitter 𝕏 Fullstack Clone",
			description: "I build a full stack clone of 𝕏 to practice the backend jargon especially how API calls are done on a platform with large user base",
			thumbnail: "xLogo.jpeg",
			date: "MAR 18, 2024",
			timeToRead: "2 MIN READ",
		}
	}
};