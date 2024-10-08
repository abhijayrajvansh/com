import { BlogInterface } from "@/types/blog.types";

export const allBlogs: BlogInterface[] = [
  {
    id: 1,
    title: "Twitter 𝕏 Fullstack Clone",
    thumbnail: "/logo/xLogo.jpeg",
    description:
      "Built a full-stack clone of 𝕏 (formerly twitter) to practice the updated backend framework especially real time features with scalability.",
    timeToRead: "2 MIN READ",
    link: "/blog/twitter-fullstack-clone",

    category: {
      featured: true,
      tutorial: true,
    },
  },
];
