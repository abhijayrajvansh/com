import Blog from "@/components/Blog";
import { siteConfig } from "@/config/site.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const page = () => {
  return <Blog />;
};

export default page;
