export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Abhijay Rajvansh",
	description: "Are you looking for your website or mobile app? Consider it done with Abhijay Rajvansh's expertise in software development, design prowess, and strategic approach for the best outcome. Your desired needs are the priority here!",

	avatar: {
		src: "/images/abhijayrajvansh-avatar.png",
	},

	links: {
		github: "https://github.com/abhijayrajvansh",
		twitter: "https://x.com/rajvanshtwt",
    linkedin:"https://www.linkedin.com/in/abhijayrajvansh/",
		youtube: "https://youtube.com/@abhijayrajvansh",
		email:"mailto:abhijayrajvansh01@gmail.com",
		instagram: "https://www.instagram.com/abhijayrajvansh",
	},

	projects: {
		twitter: {
			banner: '/projects/fullstack-twitter.webp',
			title: "Twitter 𝕏 Clone",
			logo: '/xLogo.jpeg',
			type: "personal-project",
			description: "Next.js, Supabase, Drizzle ORM, TailwindCSS, Shadcn/ui, RadixUI, Typescript",
			sourceCodeLink: "https://github.com/abhijayrajvansh/twitter-clone-next.js",
			liveProjectLink: "https://github.com/abhijayrajvansh/twitter-clone-next.js",
		},
	},

	blogs: {
		twitter: {
			title: "Twitter 𝕏 Fullstack Clone",
			description: "I build a full stack clone of 𝕏 to practice the backend jargon especially how API calls are done on a platform with large user base",
			thumbnail: "/xLogo.jpeg",
			date: "MAR 18, 2024",
			timeToRead: "2 MIN READ",
			link: "/blog/full-stack-twitter-clone",
		}
	}
};

export const technicalSkills = [
	'Next.js with SSR',
	'React & React Native', 
	'Typescript & Javascript',
	'C/C++ & Java',
	'Node.js, Express.js & Bun', 
	'Backend as a Service',
	'SQL & NoSQL',
	'REST, GraphQL & tRPC', 
	'Python: AI Agents & Automation',
	'iOS Swift & UIkit', 
	'Product Design & UI/UX',
	'Data Structures & Algorithms',
]

export const technicalTools = [
	"Debian Linux",
	"Git & Github",
	"Docker",
	"Kubernetes",
	"Supabase & other BAAS",
	"AWS",
	'Xcode, iOS tools & simulators',
	'Expo',
	"Figma",
]

export const languages = [
	"English",
	"Hindi",
	"French",
]

export const songs = {
	podcast: {
		songThumbnail: "/podcast/tgvae.jpeg",
		songTitle: "The GaryVee Audio Experience",
	},
}

export const tweets = {
	post: {
		tweet: "ai will never replace software engineers.",
		time: '21:53',
		date: "Apr 6, 2024",
	}
}