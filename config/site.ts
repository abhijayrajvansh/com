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

export const experiencesData = {
	company : {
		upwork : {
			companyLogo: "/logo/upwork.jpeg",
			startDate: "Mar 2024",
			endDate: "Present",
			position: "Sr. Software Engineer",
			companyName: "Upwork · Freelance",
			companyLocation: "Worldwide · Remote",
			description : [
				`Successfully served over 20+ clients worldwide.`,
				`Developed saas with dynamic frontends and scalable backends, worked on authentication and authorization services, AI Integration, e-commerce & landing pages.`,
				"Expertise: AI Saas, Web3, Frontend, Backend, iOS, DBMS, DevOps, Cloud & UI/UX.",
			]
		},
		bling : {
			companyLogo: "/logo/bling.jpeg",
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
			companyLogo: "/logo/apple.jpeg",
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
			companyLogo: "/logo/nhs.png",
			startDate: "Jul 2022",
			endDate: "Oct 2022",
			position: "Undergraduate AI/ML Researcher",
			companyName: "L&D  Hospital · Internship",
			companyLocation: "Luton, England, United Kingdom · Remote",
			description : [
				"Led a 4 month project developing a deep learning algorithm for automated identification of orthopaedic implants, using YOLOv7 and CNN. ",
				"Achieved an impressive 97% accuracy rate in prediction and identification, showcasing advanced technological expertise and impactful problem-solving.",
				"Technologies Used: Object Detection, Python, Research Skills, Yolo Algorithm, Convolutional Neural Networks (CNN), Full-Stack Development, Leadership, Machine Learning."
			]
		},

		unacademy : {
			companyLogo: "/logo/unacademy.jpeg",
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

		// coursework & certifications

		metaCourse : {
			InstituteLogo: "/logo/meta.jpeg",
			course: "Llama Prompt Engineering",
			companyName: "Meta | Meta AI & Deep learning",
			description : ['Skills: Generative AI,Llama 3, Llama 2-b, Code Llama, Prompt Engineering, LLMs Training']
		},
		
		CS50Course : {
			InstituteLogo: "/logo/cs50.jpeg",
			course: "Harvard's CS50: Introduction to Computer Science",
			companyName: "Harvard University | CS50",
			description : ['Skills: c/c++, Software Development, Computer Science, Python (Programming Language), Algorithms, Data Structures']
		},

		redhatCourse : {
			InstituteLogo: "/logo/redhat.jpeg",
			course: "Fundamentals of Red Hat Enterprise Linux",
			companyName: "RedHat",
			description : ['Skills: Linux and different distros, Shell Scripting, Computer Science, Bash, Zsh, Red Hat Enterprise Linux & Linux Tools.']
		},
	},
}
