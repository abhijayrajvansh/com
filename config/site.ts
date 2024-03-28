export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Abhijay Rajvansh",
	description: "Are you looking for your website or mobile app? Consider it done with Abhijay Rajvansh's expertise in software development, design prowess, and strategic approach for the best outcome. Your desired needs are the priority here!",

	avatar: {
		src: "/abhijay-rajvansh-software-best-software-engineer.png",
	},

	links: {
		github: "https://github.com/abhijayrajvansh",
		twitter: "https://x.com/rajvanshtwt",
    linkedin:"https://www.linkedin.com/in/abhijayrajvansh/",
		youtube: "https://youtube.com/@abhijayrajvansh",
		medium:"https://medium.com/@abhijayrajvansh",
		email:"mailto:abhijayrajvansh01@gmail.com",
	},

	projects: {
		twitter: {
			title: "Twitter 𝕏 Clone",
			logo: '/xLogo.jpeg',
			type: "personal-project",
			description: "Next.js, Supabase, Drizzle ORM, TailwindCSS, Shadcn/ui, RadixUI, Typescript",
			sourceCodeLink: "https://github.com/abhijayrajvansh/twitter-clone-next.js",
			liveProjectLink: "https://github.com/abhijayrajvansh/twitter-clone-next.js",
			blog: "/blog/full-stack-twitter-clone"
		},
		
	},

	blogs: {
		twitter: {
			title: "Twitter 𝕏 Fullstack Clone",
			description: "I build a full stack clone of 𝕏 to practice the backend jargon especially how API calls are done on a platform with large user base",
			thumbnail: "/xLogo.jpeg",
			date: "MAR 18, 2024",
			timeToRead: "2 MIN READ",
			link: "twitterclone",
		}
	}
};

export const technicalSkills = [
	'Next.js, React & React Native', 
	'Typescript & Javascript',
	'Node.js, Express.js & Bun', 
	'DB: PostgreSQL & MongoDB',
	'GraphQL, tRPC, gRPC & REST', 
	'TailwindCSS, Shadcn/ui & NextUI',
	'Python: Automation & Analysis',
	'Swift, UIkit & SwiftUI', 
	'C/C++ and Java',
	'Product Design & UI/UX',
]

export const technicalTools = [
	"Linux",
	"Git & Github",
	"VS Code & Vim",
	"Xcode & Android Studio",
	"Postman",
	"iOS & Android Simulators",	
	"Expo", 
	"AWS & Vercel",
	"Figma",
]

export const languages = [
	"🇺🇸 English",
	"🇮🇳 Hindi",
	"🇫🇷 French",
]

export const experiencesData = {
	company : {

		bling : {
			companyLogo: "/bling.jpeg",
			startDate: "Feb 2023",
			endDate: "Nov 2023",
			position: "Software Engineer Intern",
			companyName: "Bling Cloud | Techstars 23 · Internship",
			companyLocation: "San Francisco Bay Area · Remote",
			description : [
				`Developed the initial prototype and the MVP implemented following features :`,
				`User Authentication, User Profile with CRUD Operations, Push Notifications, Integration of Instagram DM, Facebook Messenger, Gmail Inbox, Whatsapp, etc.`,
				"Worked in a team, helped fellow developers and debugged their code, fixed bugs and maintained the production level low latency code serving in US time zone.",
				"Technologies Used: React Native, Typescript, Redux, Expo, React Native CLI, Node (Express.js) and GraphQL.",
			]
		},

		appleDeveloperProgram : {
			companyLogo: "/apple.jpeg",
			startDate: "Oct 2022",
			endDate: "Nov 2022",
			position: "iOS Software Engineer Trainee",
			companyName: "Apple · Apprenticeship",
			companyLocation: "iMac Lab, SRMIST, India · On-site",
			description : [
				"Chosen among the top 50 candidates from a pool of over 1600 students for enrolment in the esteemed Apple iOS App Development Training Program.",
				"Attained proficiency in UI/UX design coupled with foundational logical skills, adeptly diagnosed runtime errors, developed an outstanding prototype and minimum viable product (MVP), and successfully presented the pitch for phase-2, resulting in selection",
				"Technologies Used: Swift, SwiftUI, Xcode, UI/UX."
			]
		},

		nhs : {
			companyLogo: "/nhs.png",
			startDate: "Jul 2022",
			endDate: "Oct 2022",
			position: "Undergraduate AI/ML Research Assistant",
			companyName: "L&D  Hospital · Internship",
			companyLocation: "Luton, England, United Kingdom · Remote",
			description : [
				"Led a 4 month project developing a deep learning algorithm for automated identification of orthopaedic implants, using YOLOv7 and CNN. ",
				"Achieved an impressive 97% accuracy rate in prediction and identification, showcasing advanced technological expertise and impactful problem-solving.",
				"Technologies Used: Object Detection, Python, Research Skills, Yolo Algorithm, Convolutional Neural Networks (CNN), Full-Stack Development, Leadership, Machine Learning."
			]
		},

		unacademy : {
			companyLogo: "/unacademy.jpeg",
			startDate: "Mar 2022",
			endDate: "Oct 2022",
			position: "Educator & Teaching Assistant",
			companyName: "Unacademy · Part-time",
			companyLocation: "Bengaluru, Karnataka, India · Remote",
			description : [
				"Educated and helped students pursuing the course on Data structures, Algorithms and Object Oriented programming in C++ and Java via zoom and discord. Taught students concepts, verified their code, suggested better approaches of solving problems and resolved 500+ doubts.",
				"Skills: C/C++, Java, DSA, Object Oriented Programming, Problem Solving, Debugging, Communication, Leadership."
			]
		},
	}
}
