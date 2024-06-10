import Projects from "@/components/Projects";
import { siteConfig } from "@/config/site.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Projects",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const page = () => {
  return <Projects />;
};

export default page;
