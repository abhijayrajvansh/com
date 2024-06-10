import Experience from "@/components/Experience";
import { siteConfig } from "@/config/site.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Experience",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const page = () => {
  return <Experience />;
};

export default page;
